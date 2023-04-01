export enum Hand {
  Stone = "Stone",
  Paper = "Paper",
  Scissors = "Scissors",
}

export enum Winner {
  Jogador1,
  Jogador2,
  Empate,
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

export const curryResult =
  (jogador1: Hand) =>
  (jogador2: Hand): Winner => {
    if (jogador1 === jogador2) return Winner.Empate;
    if (winAgainst(jogador1) === jogador2) return Winner.Jogador2;
    return Winner.Jogador1;
  };

export const result = (jogador1: Hand, jogador2: Hand): Winner =>
  curryResult(jogador1)(jogador2);
