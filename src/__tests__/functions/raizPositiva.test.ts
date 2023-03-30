import { raizPositiva } from "../../functions/raizPositiva";

describe("raizPositiva", () => {
  it("should return the positive root of a quadratic equation", () => {
    expect(raizPositiva(2, -1, -1)).toBe(1);
  });

  it("should return Infinity if the equation has no positive root", () => {
    expect(raizPositiva(1, 1, 1)).toBe(Infinity);
  });
});
