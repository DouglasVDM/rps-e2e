import { rps } from "./rpsService";

describe("Rock, Paper, Scissors, Lizard, Spock", () => {
  const testCases = [
    { left: "rock", right: "scissors", winner: "left" },
    { left: "scissors", right: "rock", winner: "right" },
    { left: "scissors", right: "paper", winner: "left" },
    { left: "paper", right: "scissors", winner: "right" },
    { left: "paper", right: "rock", winner: "left" },
    { left: "rock", right: "paper", winner: "right" },
    { left: "rock", right: "lizard", winner: "left" },
    { left: "lizard", right: "rock", winner: "right" },
    { left: "spock", right: "rock", winner: "left" },
    { left: "rock", right: "spock", winner: "right" },
    { left: "spock", right: "scissors", winner: "left" },
    { left: "scissors", right: "spock", winner: "right" },
    { left: "spock", right: "paper", winner: "right" },
    { left: "paper", right: "spock", winner: "left" },
    { left: "spock", right: "lizard", winner: "right" },
    { left: "lizard", right: "spock", winner: "left" },
    { left: "rock", right: "rock", winner: "draw" },
    { left: "paper", right: "paper", winner: "draw" },
    { left: "scissors", right: "scissors", winner: "draw" },
    { left: "lizard", right: "lizard", winner: "draw" },
    { left: "spock", right: "spock", winner: "draw" },
  ];

  // Parameterized test for "left" wins
  describe("left wins", () => {
    testCases
      .filter((testCase) => testCase.winner === "left")
      .forEach((testCase) => {
        it(`should say left wins for ${testCase.left} vs. ${testCase.right}`, () => {
          const { left, right } = testCase;
          const outcome = rps(left, right);
          expect(outcome).toBe("left");
        });
      });
  });

  // Parameterized test for "right" wins
  describe("right wins", () => {
    testCases
      .filter((testCase) => testCase.winner === "right")
      .forEach((testCase) => {
        it(`should say right wins for ${testCase.left} vs. ${testCase.right}`, () => {
          const { left, right } = testCase;
          const outcome = rps(left, right);
          expect(outcome).toBe("right");
        });
      });
  });

  // Parameterized test for "draw" outcome
  describe("draw", () => {
    testCases
      .filter((testCase) => testCase.winner === "draw")
      .forEach((testCase) => {
        it(`should say draw for ${testCase.left} vs. ${testCase.right}`, () => {
          const { left, right } = testCase;
          const outcome = rps(left, right);
          expect(outcome).toBe("draw");
        });
      });
  });
});
