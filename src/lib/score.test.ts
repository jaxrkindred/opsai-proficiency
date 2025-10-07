import { describe, it, expect } from "vitest";
import { scoreAttempt } from "./score";

describe("scoreAttempt", () => {
  const questions = [
    {
      id: "q1",
      domain: "ai_fundamentals",
      weight: 1,
      type: "multiple_choice" as const,
      content: { correct: 2 },
    },
    {
      id: "q2",
      domain: "automation",
      weight: 2,
      type: "multi_select" as const,
      content: { correct: [0, 3] },
    },
  ];

  it("computes scores and pass flag", () => {
    const answers = { q1: 2, q2: [0, 3] };
    const result = scoreAttempt(questions as any, answers, 80);
    expect(result.rawScore).toBe(3);
    expect(Math.round(result.weightedScore)).toBe(100);
    expect(result.passed).toBe(true);
    expect(Math.round(result.domainScores.ai_fundamentals)).toBe(100);
    expect(Math.round(result.domainScores.automation)).toBe(100);
  });

  it("handles incorrect answers", () => {
    const answers = { q1: 1, q2: [0] };
    const result = scoreAttempt(questions as any, answers, 80);
    expect(result.rawScore).toBe(0);
    expect(Math.round(result.weightedScore)).toBe(0);
    expect(result.passed).toBe(false);
  });
});


