import type { Chapter, Question } from './types';
import { SAMPLE_CHAPTERS } from './sampleQuestions';

const CHAPTERS_KEY = 'insurance-quiz:chapters:v3';
const QUESTIONS_KEY = 'insurance-quiz:questions:v3';
const SEEDED_KEY = 'insurance-quiz:seeded:v18';

const STALE_KEYS = [
  'insurance-quiz:chapters:v2',
  'insurance-quiz:questions:v2',
  'insurance-quiz:seeded:v2',
  'insurance-quiz:questions:v1',
  'insurance-quiz:seeded:v1',
  'insurance-quiz:seeded:v16',
  'insurance-quiz:seeded:v17',
];

export type AppState = { chapters: Chapter[]; questions: Question[] };

export function newId(prefix = 'id'): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function seedState(): AppState {
  const chapters: Chapter[] = [];
  const questions: Question[] = [];
  for (const sc of SAMPLE_CHAPTERS) {
    const ch: Chapter = { id: newId('ch'), name: sc.name };
    if (sc.source) ch.source = sc.source;
    chapters.push(ch);
    for (const q of sc.questions) {
      questions.push({ ...q, chapterId: ch.id });
    }
  }
  return { chapters, questions };
}

export function loadState(): AppState {
  try {
    const seeded = localStorage.getItem(SEEDED_KEY);
    if (seeded) {
      const chapters = JSON.parse(localStorage.getItem(CHAPTERS_KEY) || '[]') as Chapter[];
      const questions = JSON.parse(localStorage.getItem(QUESTIONS_KEY) || '[]') as Question[];
      return { chapters, questions };
    }
    for (const k of STALE_KEYS) localStorage.removeItem(k);
    const state = seedState();
    saveState(state);
    return state;
  } catch {
    return seedState();
  }
}

export function saveState(state: AppState): void {
  localStorage.setItem(CHAPTERS_KEY, JSON.stringify(state.chapters));
  localStorage.setItem(QUESTIONS_KEY, JSON.stringify(state.questions));
  localStorage.setItem(SEEDED_KEY, '1');
}
