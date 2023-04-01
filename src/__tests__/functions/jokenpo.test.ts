import {
  Hand,
  winAgainst,
  lostTo,
  Winner,
  result,
} from "../../functions/jokenpo";

describe("Jokenpo", () => {
  describe("winAgainst", () => {
    it("should win against Stone", () => {
      expect(winAgainst(Hand.Stone)).toBe("Paper");
    });

    it("should win against Paper", () => {
      expect(winAgainst(Hand.Paper)).toBe("Scissors");
    });

    it("should win against Scissors", () => {
      expect(winAgainst(Hand.Scissors)).toBe("Stone");
    });
  });

  describe("lostTo", () => {
    it("should lost to Stone", () => {
      expect(lostTo(Hand.Stone)).toBe(Hand.Scissors);
    });

    it("should lost to Paper", () => {
      expect(lostTo(Hand.Paper)).toBe(Hand.Stone);
    });

    it("should lost to Scissors", () => {
      expect(lostTo(Hand.Scissors)).toBe(Hand.Paper);
    });
  });

  describe("result", () => {
    it("should return Empate", () => {
      expect(result(Hand.Stone, Hand.Stone)).toBe(Winner.Empate);
    });

    it("should return Jogador1", () => {
      expect(result(Hand.Stone, Hand.Scissors)).toBe(Winner.Jogador1);
    });

    it("should return Jogador2", () => {
      expect(result(Hand.Stone, Hand.Paper)).toBe(Winner.Jogador2);
    });
  });
});
