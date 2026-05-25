import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import type { Attempt, Chapter, Choice, ParsedQuestion, Question } from './types';
import { CHOICES } from './types';
import { loadState, newId, saveState } from './storage';
import { parseQuestions, type ParseResult } from './parse';

const EXAM_DURATION_SEC = 60 * 60;

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestion(q: Question): Question {
  const entries = CHOICES.map((c) => ({ original: c, text: q.choices[c] }));
  const shuffled = shuffleArray(entries);
  const newChoices: Record<Choice, string> = { A: '', B: '', C: '', D: '' };
  let newCorrect: Choice = q.correct;
  shuffled.forEach((entry, idx) => {
    const letter = CHOICES[idx];
    newChoices[letter] = entry.text;
    if (entry.original === q.correct) newCorrect = letter;
  });
  return { ...q, choices: newChoices, correct: newCorrect };
}

function formatTime(sec: number): string {
  const safe = Math.max(0, sec);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

type View =
  | { kind: 'home' }
  | { kind: 'chapter'; chapterId: string }
  | { kind: 'add'; chapterId: string }
  | { kind: 'upload'; chapterId: string }
  | { kind: 'manage'; chapterId: string }
  | { kind: 'quiz' }
  | { kind: 'results' };

export default function App() {
  const initial = useMemo(loadState, []);
  const [chapters, setChapters] = useState<Chapter[]>(initial.chapters);
  const [questions, setQuestions] = useState<Question[]>(initial.questions);
  const [view, setView] = useState<View>({ kind: 'home' });
  const [activeSet, setActiveSet] = useState<Question[]>([]);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [examDurationSec, setExamDurationSec] = useState<number | null>(null);
  const [examLabel, setExamLabel] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    saveState({ chapters, questions });
  }, [chapters, questions]);

  function questionsForChapter(chapterId: string): Question[] {
    return questions.filter((q) => q.chapterId === chapterId);
  }

  function chapterById(id: string | null): Chapter | undefined {
    if (!id) return undefined;
    return chapters.find((c) => c.id === id);
  }

  function startQuiz(subset: Question[], chapterId: string | null) {
    if (subset.length === 0) return;
    const shuffled = shuffleArray(subset).map(shuffleQuestion);
    setActiveSet(shuffled);
    setActiveChapterId(chapterId);
    setExamDurationSec(null);
    setExamLabel(null);
    setAttempts([]);
    setView({ kind: 'quiz' });
  }

  function startFinalExam() {
    const exam1ChapterIds = new Set(
      chapters.filter((c) => c.source !== 'exam2').map((c) => c.id)
    );
    const exam1Questions = questions.filter((q) =>
      exam1ChapterIds.has(q.chapterId)
    );
    if (exam1Questions.length === 0) return;
    const shuffled = shuffleArray(exam1Questions).map(shuffleQuestion);
    setActiveSet(shuffled);
    setActiveChapterId(null);
    setExamDurationSec(EXAM_DURATION_SEC);
    setExamLabel('Final Exam');
    setAttempts([]);
    setView({ kind: 'quiz' });
  }

  function startFinalExam2() {
    const exam2ChapterIds = new Set(
      chapters.filter((c) => c.source === 'exam2').map((c) => c.id)
    );
    const exam2Questions = questions.filter((q) =>
      exam2ChapterIds.has(q.chapterId)
    );
    if (exam2Questions.length === 0) return;
    const shuffled = shuffleArray(exam2Questions).map(shuffleQuestion);
    setActiveSet(shuffled);
    setActiveChapterId(null);
    setExamDurationSec(EXAM_DURATION_SEC);
    setExamLabel('Final Exam 2');
    setAttempts([]);
    setView({ kind: 'quiz' });
  }

  function finishQuiz(finalAttempts: Attempt[]) {
    setAttempts(finalAttempts);
    setView({ kind: 'results' });
  }

  function addChapter() {
    const name = prompt('Chapter name (e.g. "Chapter 1 — Basics")');
    if (!name || !name.trim()) return;
    const ch: Chapter = { id: newId('ch'), name: name.trim() };
    setChapters((prev) => [...prev, ch]);
    setView({ kind: 'chapter', chapterId: ch.id });
  }

  function renameChapter(id: string) {
    const ch = chapterById(id);
    if (!ch) return;
    const name = prompt('Rename chapter', ch.name);
    if (!name || !name.trim()) return;
    setChapters((prev) => prev.map((c) => (c.id === id ? { ...c, name: name.trim() } : c)));
  }

  function deleteChapter(id: string) {
    const ch = chapterById(id);
    if (!ch) return;
    const count = questionsForChapter(id).length;
    const msg =
      count > 0
        ? `Delete "${ch.name}" and its ${count} question${count === 1 ? '' : 's'}?`
        : `Delete "${ch.name}"?`;
    if (!confirm(msg)) return;
    setChapters((prev) => prev.filter((c) => c.id !== id));
    setQuestions((prev) => prev.filter((q) => q.chapterId !== id));
    setView({ kind: 'home' });
  }

  function addQuestion(chapterId: string, q: ParsedQuestion) {
    setQuestions((prev) => [...prev, { ...q, id: newId('q'), chapterId }]);
    setView({ kind: 'chapter', chapterId });
  }

  function addManyQuestions(chapterId: string, qs: ParsedQuestion[]) {
    const stamped: Question[] = qs.map((q) => ({ ...q, id: newId('q'), chapterId }));
    setQuestions((prev) => [...prev, ...stamped]);
    setView({ kind: 'chapter', chapterId });
  }

  function deleteQuestion(id: string) {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  }

  return (
    <div className="app">
      <header className="header">
        {view.kind !== 'home' && (
          <button
            className="btn ghost"
            onClick={() => setView({ kind: 'home' })}
            type="button"
          >
            ← Home
          </button>
        )}
      </header>
      <main className="main">

      {view.kind === 'home' && (
        <Home
          chapters={chapters}
          questions={questions}
          onOpen={(id) => setView({ kind: 'chapter', chapterId: id })}
          onAddChapter={addChapter}
          onFinalExam={startFinalExam}
          onFinalExam2={startFinalExam2}
        />
      )}

      {view.kind === 'chapter' && (
        <ChapterView
          chapter={chapterById(view.chapterId)!}
          questions={questionsForChapter(view.chapterId)}
          onStart={(qs) => startQuiz(qs, view.chapterId)}
          onAdd={() => setView({ kind: 'add', chapterId: view.chapterId })}
          onUpload={() => setView({ kind: 'upload', chapterId: view.chapterId })}
          onManage={() => setView({ kind: 'manage', chapterId: view.chapterId })}
          onRename={() => renameChapter(view.chapterId)}
          onDelete={() => deleteChapter(view.chapterId)}
        />
      )}

      {view.kind === 'add' && (
        <AddQuestion
          chapter={chapterById(view.chapterId)!}
          onSave={(q) => addQuestion(view.chapterId, q)}
          onCancel={() => setView({ kind: 'chapter', chapterId: view.chapterId })}
        />
      )}

      {view.kind === 'upload' && (
        <BulkUpload
          chapter={chapterById(view.chapterId)!}
          existingCount={questionsForChapter(view.chapterId).length}
          onSave={(qs) => addManyQuestions(view.chapterId, qs)}
          onCancel={() => setView({ kind: 'chapter', chapterId: view.chapterId })}
        />
      )}

      {view.kind === 'manage' && (
        <Manage
          chapter={chapterById(view.chapterId)!}
          questions={questionsForChapter(view.chapterId)}
          onStart={(qs) => startQuiz(qs, view.chapterId)}
          onDelete={deleteQuestion}
          onBack={() => setView({ kind: 'chapter', chapterId: view.chapterId })}
        />
      )}

      {view.kind === 'quiz' && (
        <Quiz
          questions={activeSet}
          chapterName={
            examLabel ??
            (examDurationSec !== null
              ? 'Final Exam'
              : chapterById(activeChapterId)?.name ?? 'Quiz')
          }
          examDurationSec={examDurationSec ?? undefined}
          onFinish={finishQuiz}
          onExit={() =>
            activeChapterId
              ? setView({ kind: 'chapter', chapterId: activeChapterId })
              : setView({ kind: 'home' })
          }
        />
      )}

      {view.kind === 'results' && (
        <Results
          attempts={attempts}
          questions={activeSet}
          chapter={chapterById(activeChapterId)}
          onRetryMissed={() => {
            const correctIds = new Set(
              attempts.filter((a) => a.correct).map((a) => a.questionId)
            );
            const subset = activeSet.filter((q) => !correctIds.has(q.id));
            startQuiz(subset, activeChapterId);
          }}
          onRetryAll={() => startQuiz(activeSet, activeChapterId)}
          onBackToChapter={() =>
            activeChapterId
              ? setView({ kind: 'chapter', chapterId: activeChapterId })
              : setView({ kind: 'home' })
          }
        />
      )}
      </main>
      {view.kind !== 'quiz' && (
        <footer className="app-footer">
          <div className="app-footer-title">Insurance Quiz</div>
          <div className="app-footer-sub">
            {chapters.length} chapter{chapters.length === 1 ? '' : 's'} ·{' '}
            {questions.length} question{questions.length === 1 ? '' : 's'}
          </div>
        </footer>
      )}
    </div>
  );
}

function Home(props: {
  chapters: Chapter[];
  questions: Question[];
  onOpen: (id: string) => void;
  onAddChapter: () => void;
  onFinalExam: () => void;
  onFinalExam2: () => void;
}) {
  const { chapters, questions, onOpen, onAddChapter, onFinalExam, onFinalExam2 } = props;
  const countByChapter = useMemo(() => {
    const map: Record<string, number> = {};
    for (const q of questions) map[q.chapterId] = (map[q.chapterId] ?? 0) + 1;
    return map;
  }, [questions]);
  const exam2Count = useMemo(() => {
    const exam2Ids = new Set(
      chapters.filter((c) => c.source === 'exam2').map((c) => c.id)
    );
    return questions.filter((q) => exam2Ids.has(q.chapterId)).length;
  }, [chapters, questions]);
  const exam1Count = useMemo(() => {
    const exam1Ids = new Set(
      chapters.filter((c) => c.source !== 'exam2').map((c) => c.id)
    );
    return questions.filter((q) => exam1Ids.has(q.chapterId)).length;
  }, [chapters, questions]);

  return (
    <div className="card">
      <h2>Chapters</h2>
      <p className="muted">
        Organize questions by chapter. Add questions by hand or paste/upload in bulk.
      </p>

      <div className="row" style={{ marginTop: 16 }}>
        <button
          className="btn primary btn-block"
          onClick={onFinalExam}
          disabled={exam1Count === 0}
        >
          Final Exam · {exam1Count} question{exam1Count === 1 ? '' : 's'} · 60 min
        </button>
      </div>

      <div className="row" style={{ marginTop: 8 }}>
        <button
          className="btn primary btn-block"
          onClick={onFinalExam2}
          disabled={exam2Count === 0}
        >
          Final Exam 2 · {exam2Count} question{exam2Count === 1 ? '' : 's'} · 60 min
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        {chapters.length === 0 && (
          <div className="empty">No chapters yet. Add your first one to get started.</div>
        )}
        {chapters.map((c) => {
          const count = countByChapter[c.id] ?? 0;
          return (
            <button
              key={c.id}
              className="chapter-row"
              onClick={() => onOpen(c.id)}
              aria-label={`Open chapter ${c.name}`}
            >
              <div className="chapter-row-main">
                <div className="chapter-row-name">{c.name}</div>
                <div className="chapter-row-meta">
                  {count} question{count === 1 ? '' : 's'}
                </div>
              </div>
              <div className="chapter-row-arrow" aria-hidden>
                →
              </div>
            </button>
          );
        })}
      </div>

      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn btn-block" onClick={onAddChapter}>
          Add chapter
        </button>
      </div>
    </div>
  );
}

function ChapterView(props: {
  chapter: Chapter;
  questions: Question[];
  onStart: (qs: Question[]) => void;
  onAdd: () => void;
  onUpload: () => void;
  onManage: () => void;
  onRename: () => void;
  onDelete: () => void;
}) {
  const { chapter, questions, onStart, onAdd, onUpload, onManage, onRename, onDelete } = props;
  const count = questions.length;

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>{chapter.name}</h2>
        <button className="btn ghost" onClick={onRename} aria-label="Rename chapter">
          Rename
        </button>
      </div>

      <div className="muted" style={{ marginTop: 8 }}>
        {count} / {count} question{count === 1 ? '' : 's'}
      </div>

      <div className="row" style={{ marginTop: 16 }}>
        <button
          className="btn primary btn-block"
          onClick={() => onStart(questions)}
          disabled={count === 0}
        >
          Start chapter test ({count})
        </button>
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <button className="btn" style={{ flex: 1 }} onClick={onUpload}>
          Bulk upload
        </button>
        <button className="btn" style={{ flex: 1 }} onClick={onAdd}>
          Add question
        </button>
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <button className="btn" style={{ flex: 1 }} onClick={onManage} disabled={count === 0}>
          Pick subset / edit
        </button>
        <button className="btn danger" style={{ flex: 1 }} onClick={onDelete}>
          Delete chapter
        </button>
      </div>
    </div>
  );
}

function Quiz(props: {
  questions: Question[];
  chapterName: string;
  examDurationSec?: number;
  onFinish: (attempts: Attempt[]) => void;
  onExit: () => void;
}) {
  const { questions, chapterName, examDurationSec, onFinish, onExit } = props;
  const [idx, setIdx] = useState(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [pendingSelection, setPendingSelection] = useState<Choice | null>(null);
  const [remainingSec, setRemainingSec] = useState<number | null>(
    examDurationSec ?? null
  );
  const attemptsRef = useRef(attempts);
  useEffect(() => {
    attemptsRef.current = attempts;
  }, [attempts]);
  const finishRef = useRef(onFinish);
  useEffect(() => {
    finishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    if (remainingSec === null) return;
    if (remainingSec <= 0) {
      finishRef.current(attemptsRef.current);
      return;
    }
    const id = setTimeout(
      () => setRemainingSec((s) => (s === null ? null : s - 1)),
      1000
    );
    return () => clearTimeout(id);
  }, [remainingSec]);

  const q = questions[idx];
  const total = questions.length;
  const isLast = idx === total - 1;

  if (!q) {
    return (
      <div className="card">
        <div className="empty">No questions in this set.</div>
        <button className="btn btn-block" onClick={onExit}>
          Back
        </button>
      </div>
    );
  }

  const submittedAttempt = attempts.find((a) => a.questionId === q.id);
  const isSubmitted = !!submittedAttempt;
  const userPick: Choice | null = submittedAttempt
    ? submittedAttempt.selected
    : pendingSelection;
  const isCorrect = !!submittedAttempt?.correct;

  function submit() {
    if (!pendingSelection || isSubmitted) return;
    setAttempts((prev) => [
      ...prev,
      {
        questionId: q.id,
        selected: pendingSelection,
        correct: pendingSelection === q.correct,
      },
    ]);
    setPendingSelection(null);
  }

  function goNext() {
    if (!isSubmitted) return;
    if (isLast) {
      onFinish(attempts);
      return;
    }
    setIdx((i) => i + 1);
    setPendingSelection(null);
  }

  function goPrev() {
    if (idx === 0) return;
    setIdx((i) => i - 1);
    setPendingSelection(null);
  }

  const primaryAction = () => {
    if (!isSubmitted) {
      submit();
    } else {
      goNext();
    }
  };
  const primaryLabel = !isSubmitted ? 'Submit' : isLast ? 'Finish' : 'Continue';
  const primaryDisabled = !isSubmitted && !pendingSelection;

  return (
    <div className="quiz-page">
      <div className="quiz-content">
        <h2 className="quiz-question">{q.text}</h2>

        <div className="quiz-choices">
          {CHOICES.map((c) => {
            const isUserPick = userPick === c;
            const showCorrect = isSubmitted && c === q.correct;
            const showWrong = isSubmitted && isUserPick && c !== q.correct;
            const cls = [
              'choice-row',
              isUserPick ? 'selected' : '',
              showCorrect ? 'is-correct' : '',
              showWrong ? 'is-wrong' : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <button
                key={c}
                type="button"
                className={cls}
                disabled={isSubmitted}
                onClick={() => setPendingSelection(c)}
              >
                <span className="choice-letter">{c}.</span>
                <span className="choice-radio" aria-hidden="true" />
                <span className="choice-text">{q.choices[c]}</span>
                {showCorrect && (
                  <span className="choice-check" aria-label="correct">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}>
            <div className="verdict">
              {isCorrect ? 'Correct' : `Incorrect — correct answer is ${q.correct}`}
            </div>
            <div>{q.explanation || 'No explanation provided.'}</div>
          </div>
        )}

        <button
          type="button"
          className="submit-btn"
          onClick={primaryAction}
          disabled={primaryDisabled}
          style={{ marginTop: 18 }}
        >
          {primaryLabel}
        </button>
      </div>

      <div className="quiz-footer">
        <div className="quiz-footer-right">
          <div className="quiz-chapter">{chapterName}</div>
          {remainingSec !== null && (
            <div className={`quiz-timer ${remainingSec <= 60 ? 'low' : ''}`}>
              {formatTime(remainingSec)}
            </div>
          )}
          <span className="quiz-counter">
            {idx + 1} of {total}
          </span>
          <button
            type="button"
            className="btn outline"
            onClick={goPrev}
            disabled={idx === 0}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn primary"
            onClick={goNext}
            disabled={!isSubmitted}
          >
            {isLast ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Results(props: {
  attempts: Attempt[];
  questions: Question[];
  chapter?: Chapter;
  onRetryMissed: () => void;
  onRetryAll: () => void;
  onBackToChapter: () => void;
}) {
  const { attempts, questions, chapter, onRetryMissed, onRetryAll, onBackToChapter } = props;
  const total = questions.length;
  const correct = attempts.filter((a) => a.correct).length;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const correctIds = new Set(
    attempts.filter((a) => a.correct).map((a) => a.questionId)
  );
  const attemptById = useMemo(
    () => Object.fromEntries(attempts.map((a) => [a.questionId, a])),
    [attempts]
  );
  const missedQuestions = questions.filter((q) => !correctIds.has(q.id));

  return (
    <div className="card">
      {chapter && <div className="muted" style={{ marginBottom: 6 }}>{chapter.name}</div>}
      <h2>Results</h2>
      <div className="score-big">
        {correct}/{total}
      </div>
      <div className="score-sub">
        {pct}% correct
        {attempts.length < total
          ? ` · ${total - attempts.length} unanswered`
          : ''}
      </div>

      <div className="row">
        <button
          className="btn primary btn-block"
          onClick={onRetryMissed}
          disabled={missedQuestions.length === 0}
        >
          Retry missed ({missedQuestions.length})
        </button>
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <button className="btn" style={{ flex: 1 }} onClick={onRetryAll}>
          Retry all
        </button>
        <button className="btn" style={{ flex: 1 }} onClick={onBackToChapter}>
          {chapter ? 'Back to chapter' : 'Home'}
        </button>
      </div>

      {missedQuestions.length > 0 && (
        <>
          <h2 style={{ marginTop: 24, fontSize: 16 }}>Missed questions</h2>
          {missedQuestions.map((q) => {
            const a = attemptById[q.id];
            return (
              <div key={q.id} className="missed-q">
                <div className="q">{q.text}</div>
                {a ? (
                  <div className="a wrong">
                    Your answer: {a.selected}. {q.choices[a.selected]}
                  </div>
                ) : (
                  <div className="a wrong">Unanswered</div>
                )}
                <div className="a correct">
                  Correct: {q.correct}. {q.choices[q.correct]}
                </div>
                {q.explanation && (
                  <div className="muted" style={{ marginTop: 6 }}>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

function AddQuestion(props: {
  chapter: Chapter;
  onSave: (q: ParsedQuestion) => void;
  onCancel: () => void;
}) {
  const { chapter, onSave, onCancel } = props;
  const [text, setText] = useState('');
  const [choices, setChoices] = useState<Record<Choice, string>>({
    A: '',
    B: '',
    C: '',
    D: '',
  });
  const [correct, setCorrect] = useState<Choice>('A');
  const [explanation, setExplanation] = useState('');

  const valid =
    text.trim().length > 0 && CHOICES.every((c) => choices[c].trim().length > 0);

  function save() {
    if (!valid) return;
    onSave({
      text: text.trim(),
      choices: {
        A: choices.A.trim(),
        B: choices.B.trim(),
        C: choices.C.trim(),
        D: choices.D.trim(),
      },
      correct,
      explanation: explanation.trim(),
    });
  }

  return (
    <div className="card">
      <div className="muted" style={{ marginBottom: 6 }}>{chapter.name}</div>
      <h2>Add question</h2>

      <label className="label" htmlFor="q-text">Question</label>
      <textarea
        id="q-text"
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What does ACV stand for in property insurance?"
      />

      {CHOICES.map((c) => (
        <div key={c}>
          <label className="label" htmlFor={`choice-${c}`}>Choice {c}</label>
          <input
            id={`choice-${c}`}
            className="input"
            value={choices[c]}
            onChange={(e) => setChoices((prev) => ({ ...prev, [c]: e.target.value }))}
            placeholder={`Answer ${c}`}
          />
        </div>
      ))}

      <label className="label">Correct answer</label>
      <div className="radio-row">
        {CHOICES.map((c) => (
          <label key={c}>
            <input
              type="radio"
              name="correct"
              checked={correct === c}
              onChange={() => setCorrect(c)}
            />
            <span>{c}</span>
          </label>
        ))}
      </div>

      <label className="label" htmlFor="q-explanation">Explanation (shown after answering)</label>
      <textarea
        id="q-explanation"
        className="textarea"
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        placeholder="Why this answer is correct..."
      />

      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn" style={{ flex: 1 }} onClick={onCancel}>Cancel</button>
        <button
          className="btn primary"
          style={{ flex: 1 }}
          onClick={save}
          disabled={!valid}
        >
          Save question
        </button>
      </div>
    </div>
  );
}

const FORMAT_HELP = `Plain-text format (separate questions with a blank line):

Q: Question text here
A) First choice
B) Second choice
C) Third choice
D) Fourth choice
Answer: B
Explanation: Optional explanation

Numbered questions also work ("1." or "1)" instead of "Q:").

JSON format (paste an array):

[
  {
    "text": "Question text",
    "choices": {"A": "...", "B": "...", "C": "...", "D": "..."},
    "correct": "B",
    "explanation": "Optional"
  }
]`;

function BulkUpload(props: {
  chapter: Chapter;
  existingCount: number;
  onSave: (qs: ParsedQuestion[]) => void;
  onCancel: () => void;
}) {
  const { chapter, existingCount, onSave, onCancel } = props;
  const [text, setText] = useState('');
  const [result, setResult] = useState<ParseResult | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const content = typeof reader.result === 'string' ? reader.result : '';
      setText(content);
      setResult(parseQuestions(content));
    };
    reader.readAsText(file);
  }

  function onParse() {
    setResult(parseQuestions(text));
  }

  function onCommit() {
    if (!result || result.parsed.length === 0) return;
    onSave(result.parsed);
  }

  return (
    <div className="card">
      <div className="muted" style={{ marginBottom: 6 }}>{chapter.name}</div>
      <h2>Bulk upload</h2>
      <p className="muted">
        Paste questions or upload a .txt / .json file. New questions will be added to this chapter
        ({existingCount} already saved).
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <label className="btn" style={{ flex: 1, textAlign: 'center' }}>
          Choose file
          <input
            type="file"
            accept=".txt,.json,text/plain,application/json"
            onChange={onFile}
            style={{ display: 'none' }}
          />
        </label>
        <button
          className="btn"
          style={{ flex: 1 }}
          onClick={() => setShowHelp((v) => !v)}
        >
          {showHelp ? 'Hide format' : 'Show format'}
        </button>
      </div>

      {showHelp && (
        <pre className="format-help">{FORMAT_HELP}</pre>
      )}

      <label className="label" htmlFor="bulk-text">Paste questions</label>
      <textarea
        id="bulk-text"
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your questions here..."
        style={{ minHeight: 200 }}
      />

      <div className="row" style={{ marginTop: 12 }}>
        <button className="btn" style={{ flex: 1 }} onClick={() => setText('')}>
          Clear
        </button>
        <button className="btn primary" style={{ flex: 1 }} onClick={onParse} disabled={!text.trim()}>
          Parse
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 16 }}>
          <div className="muted">
            Parsed {result.parsed.length} question{result.parsed.length === 1 ? '' : 's'}
            {result.errors.length > 0 ? `, ${result.errors.length} skipped` : ''}.
          </div>

          {result.errors.length > 0 && (
            <ul className="errors">
              {result.errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          )}

          {result.parsed.length > 0 && (
            <div className="preview">
              {result.parsed.slice(0, 5).map((q, i) => (
                <div key={i} className="preview-item">
                  <div className="preview-q">
                    {i + 1}. {q.text}
                  </div>
                  <div className="preview-a">
                    Answer: {q.correct}. {q.choices[q.correct]}
                  </div>
                </div>
              ))}
              {result.parsed.length > 5 && (
                <div className="muted">…and {result.parsed.length - 5} more</div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn" style={{ flex: 1 }} onClick={onCancel}>Cancel</button>
        <button
          className="btn primary"
          style={{ flex: 1 }}
          onClick={onCommit}
          disabled={!result || result.parsed.length === 0}
        >
          Add {result?.parsed.length ?? 0} to chapter
        </button>
      </div>
    </div>
  );
}

function Manage(props: {
  chapter: Chapter;
  questions: Question[];
  onStart: (subset: Question[]) => void;
  onDelete: (id: string) => void;
  onBack: () => void;
}) {
  const { chapter, questions, onStart, onDelete, onBack } = props;
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(questions.map((q) => q.id))
  );

  useEffect(() => {
    setSelectedIds((prev) => {
      const next = new Set<string>();
      for (const q of questions) if (prev.has(q.id)) next.add(q.id);
      return next.size === 0 ? new Set(questions.map((q) => q.id)) : next;
    });
  }, [questions]);

  function toggle(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    setSelectedIds(new Set(questions.map((q) => q.id)));
  }
  function selectNone() {
    setSelectedIds(new Set());
  }

  function start() {
    const subset = questions.filter((q) => selectedIds.has(q.id));
    onStart(subset);
  }

  return (
    <div className="card">
      <div className="muted" style={{ marginBottom: 6 }}>{chapter.name}</div>
      <h2>Pick questions</h2>
      <p className="muted">
        Choose any subset to drill, or delete questions you no longer want.
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <button className="btn" style={{ flex: 1 }} onClick={selectAll}>Select all</button>
        <button className="btn" style={{ flex: 1 }} onClick={selectNone}>Select none</button>
      </div>

      <div style={{ marginTop: 16 }}>
        {questions.length === 0 && <div className="empty">No questions yet.</div>}
        {questions.map((q) => (
          <div key={q.id} className="list-row">
            <input
              type="checkbox"
              checked={selectedIds.has(q.id)}
              onChange={() => toggle(q.id)}
              aria-label={`Select question: ${q.text}`}
            />
            <div className="text">
              {q.text}
              <div className="meta">
                Correct: {q.correct}. {q.choices[q.correct]}
              </div>
            </div>
            <button
              className="btn danger"
              onClick={() => {
                if (confirm('Delete this question?')) onDelete(q.id);
              }}
              aria-label="Delete question"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn" style={{ flex: 1 }} onClick={onBack}>Back</button>
        <button
          className="btn primary"
          style={{ flex: 1 }}
          onClick={start}
          disabled={selectedIds.size === 0}
        >
          Start ({selectedIds.size})
        </button>
      </div>
    </div>
  );
}
