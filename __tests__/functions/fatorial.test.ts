import { fatorial } from "../../src/functions/fatorial";

describe("Fatorial", () => {
  it("should return 1 when n = 0", () => {
    expect(fatorial(0)).toBe(1);
  });

  it("should return 1 when n = 1", () => {
    expect(fatorial(1)).toBe(1);
  });

  it("should return 2 when n = 2", () => {
    expect(fatorial(2)).toBe(2);
  });

  it("should return 6 when n = 3", () => {
    expect(fatorial(3)).toBe(6);
  });

  it("should return 24 when n = 4", () => {
    expect(fatorial(4)).toBe(24);
  });

  it("should return 120 when n = 5", () => {
    expect(fatorial(5)).toBe(120);
  });
});
