import { Hand, winAgainst, lostTo } from "../../functions/jokenpo";

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
});
