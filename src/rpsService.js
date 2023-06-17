export const rps = (left, right) => {
  const outcomes = {
    rock: { beats: ["scissors", "lizard"] },
    paper: { beats: ["rock", "spock"] },
    scissors: { beats: ["paper", "lizard"] },
    lizard: { beats: ["paper", "spock"] },
    spock: { beats: ["rock", "scissors"] },
  };

  if (left === right) {
    return "draw";
  }
  // Check if the outcome represented by "left" can beat the outcome represented by "right".
  // If it can, return "left"; otherwise, return "right".
  if (outcomes[left].beats.includes(right)) {
    // If the outcome represented by "left" has a list that includes the outcome represented by "right",
    // then the outcome represented by "left" wins
    return "left";
  } else {
    // If the outcome represented by "left" does not have "right" in its list of outcomes it can beat,
    // then the outcome represented by "left" cannot beat the outcome represented by "right"
    return "right";
  }
};
