export enum Hand {
  Stone = "Stone",
  Paper = "Paper",
  Scissors = "Scissors",
}

export const winAgainst = (hand: Hand) => {
  switch (hand) {
    case Hand.Stone:
      return Hand.Paper;
    case Hand.Paper:
      return Hand.Scissors;
    case Hand.Scissors:
      return Hand.Stone;
  }
};

export const lostTo = (hand: Hand) => {
  switch (hand) {
    case Hand.Stone:
      return Hand.Scissors;
    case Hand.Paper:
      return Hand.Stone;
    case Hand.Scissors:
      return Hand.Paper;
  }
};
