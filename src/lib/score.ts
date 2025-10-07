import type { DomainTag } from "../generated/prisma";

export type Answer = unknown;

export interface QuestionLike {
  id: string;
  domain: DomainTag;
  weight: number;
  type: "multiple_choice" | "multi_select" | "scenario" | "short_text";
  content: any; // choices and correct fields for MCQ/MSQ
}

export interface ScoreResult {
  rawScore: number;
  weightedScore: number; // percentage 0..100
  domainScores: Record<string, number>; // percentage per domain
  passed: boolean;
}

export function scoreAttempt(
  questions: QuestionLike[],
  answersByQuestionId: Record<string, Answer>,
  passThreshold = 80
): ScoreResult {
  let sumWeights = 0;
  let sumCorrectWeights = 0;
  const domainTotals: Record<string, number> = {};
  const domainCorrect: Record<string, number> = {};

  for (const q of questions) {
    const w = q.weight ?? 1;
    sumWeights += w;
    domainTotals[q.domain] = (domainTotals[q.domain] ?? 0) + w;

    const userAnswer = answersByQuestionId[q.id];
    const isCorrect = evaluateCorrectness(q, userAnswer);
    if (isCorrect) {
      sumCorrectWeights += w;
      domainCorrect[q.domain] = (domainCorrect[q.domain] ?? 0) + w;
    }
  }

  const weightedScore = sumWeights > 0 ? (sumCorrectWeights / sumWeights) * 100 : 0;
  const domainScores: Record<string, number> = {};
  for (const d of Object.keys(domainTotals)) {
    const total = domainTotals[d] ?? 0;
    const correct = domainCorrect[d] ?? 0;
    domainScores[d] = total > 0 ? (correct / total) * 100 : 0;
  }

  return {
    rawScore: sumCorrectWeights,
    weightedScore,
    domainScores,
    passed: weightedScore >= passThreshold,
  };
}

function evaluateCorrectness(q: QuestionLike, answer: Answer): boolean {
  const correct = q.content?.correct;
  if (q.type === "multiple_choice") {
    return answer === correct;
  }
  if (q.type === "multi_select") {
    if (!Array.isArray(answer) || !Array.isArray(correct)) return false;
    if (answer.length !== correct.length) return false;
    const a = [...answer].sort();
    const b = [...correct].sort();
    return a.every((v, i) => v === b[i]);
  }
  // For scenario/short_text: placeholder returns false; future rubric or AI-assisted scoring
  return false;
}


