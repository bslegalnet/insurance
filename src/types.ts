export type Choice = 'A' | 'B' | 'C' | 'D';

export const CHOICES: Choice[] = ['A', 'B', 'C', 'D'];

export type Chapter = {
  id: string;
  name: string;
  source?: string;
};

export type Question = {
  id: string;
  chapterId: string;
  text: string;
  choices: Record<Choice, string>;
  correct: Choice;
  explanation: string;
};

export type ParsedQuestion = Omit<Question, 'id' | 'chapterId'>;

export type Attempt = {
  questionId: string;
  selected: Choice;
  correct: boolean;
};
