import type { Choice, ParsedQuestion } from './types';
import { CHOICES } from './types';

export type ParseResult = {
  parsed: ParsedQuestion[];
  errors: string[];
};

export function parseQuestions(input: string): ParseResult {
  const trimmed = input.trim();
  if (!trimmed) return { parsed: [], errors: ['Nothing to parse.'] };
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    return parseJson(trimmed);
  }
  return parseText(trimmed);
}

function parseJson(input: string): ParseResult {
  let data: unknown;
  try {
    data = JSON.parse(input);
  } catch (e) {
    return { parsed: [], errors: [`Invalid JSON: ${(e as Error).message}`] };
  }
  const list = Array.isArray(data) ? data : [data];
  const parsed: ParsedQuestion[] = [];
  const errors: string[] = [];

  list.forEach((raw, i) => {
    const label = `Item ${i + 1}`;
    if (!raw || typeof raw !== 'object') {
      errors.push(`${label}: not an object`);
      return;
    }
    const q = raw as Record<string, unknown>;
    if (typeof q.text !== 'string' || !q.text.trim()) {
      errors.push(`${label}: missing "text"`);
      return;
    }
    if (!q.choices || typeof q.choices !== 'object') {
      errors.push(`${label}: missing "choices"`);
      return;
    }
    const cs = q.choices as Record<string, unknown>;
    const choices: Record<Choice, string> = { A: '', B: '', C: '', D: '' };
    let missing: Choice | null = null;
    for (const c of CHOICES) {
      const v = cs[c];
      if (typeof v !== 'string' || !v.trim()) {
        missing = c;
        break;
      }
      choices[c] = v.trim();
    }
    if (missing) {
      errors.push(`${label}: missing choice ${missing}`);
      return;
    }
    if (typeof q.correct !== 'string' || !CHOICES.includes(q.correct.toUpperCase() as Choice)) {
      errors.push(`${label}: "correct" must be A, B, C, or D`);
      return;
    }
    const explanation =
      typeof q.explanation === 'string' ? q.explanation.trim() : '';
    parsed.push({
      text: q.text.trim(),
      choices,
      correct: q.correct.toUpperCase() as Choice,
      explanation,
    });
  });

  return { parsed, errors };
}

function parseText(input: string): ParseResult {
  const blocks = splitBlocks(input);
  const parsed: ParsedQuestion[] = [];
  const errors: string[] = [];

  blocks.forEach((lines, i) => {
    const result = parseBlock(lines);
    if ('error' in result) {
      errors.push(`Question ${i + 1}: ${result.error}`);
    } else {
      parsed.push(result.q);
    }
  });

  return { parsed, errors };
}

function splitBlocks(input: string): string[][] {
  const lines = input.split('\n');
  const blocks: string[][] = [];
  let current: string[] = [];
  for (const raw of lines) {
    if (raw.trim() === '') {
      if (current.length > 0) {
        blocks.push(current);
        current = [];
      }
    } else {
      current.push(raw);
    }
  }
  if (current.length > 0) blocks.push(current);
  return blocks;
}

type BlockResult = { q: ParsedQuestion } | { error: string };

function parseBlock(lines: string[]): BlockResult {
  let text = '';
  const choices: Record<Choice, string> = { A: '', B: '', C: '', D: '' };
  let correct: Choice | null = null;
  let explanation = '';
  let mode: 'q' | Choice | 'exp' = 'q';
  let sawQ = false;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    let m: RegExpExecArray | null;

    if ((m = /^([A-Da-d])[.)\]:]\s+(.*)$/.exec(line))) {
      const letter = m[1].toUpperCase() as Choice;
      choices[letter] = m[2];
      mode = letter;
      continue;
    }

    if ((m = /^(?:Answer|Ans|Correct)\s*[:\-]?\s*([A-Da-d])\b.*$/i.exec(line))) {
      correct = m[1].toUpperCase() as Choice;
      mode = 'q';
      continue;
    }

    if ((m = /^(?:Explanation|Reason|Why)\s*[:\-]?\s*(.*)$/i.exec(line))) {
      explanation = m[1];
      mode = 'exp';
      continue;
    }

    if (!sawQ) {
      const qm = /^(?:Q[.)\]:]\s*|\d+[.)\]:]\s+)(.*)$/i.exec(line);
      text = qm ? qm[1] : line;
      sawQ = true;
      mode = 'q';
      continue;
    }

    if (mode === 'q') text = `${text} ${line}`;
    else if (mode === 'exp') explanation = explanation ? `${explanation} ${line}` : line;
    else choices[mode] = choices[mode] ? `${choices[mode]} ${line}` : line;
  }

  if (!text.trim()) return { error: 'missing question text' };
  for (const c of CHOICES) {
    if (!choices[c].trim()) return { error: `missing choice ${c}` };
  }
  if (!correct) return { error: 'missing answer line (e.g. "Answer: B")' };

  return {
    q: {
      text: text.trim(),
      choices: {
        A: choices.A.trim(),
        B: choices.B.trim(),
        C: choices.C.trim(),
        D: choices.D.trim(),
      },
      correct,
      explanation: explanation.trim(),
    },
  };
}
