import {
  Ancora,
  distance,
  distanceToReference,
} from "../../functions/distanceToReference";

describe("distanceToReference", () => {
  it("should return the distance to the reference", () => {
    const distanceToRef = distanceToReference([100, 100]);

    expect(distanceToRef(Ancora.InfEsq)).toBe(0);
    expect(distanceToRef(Ancora.InfDir)).toBe(distance([100, 0]));
    expect(distanceToRef(Ancora.SupEsq)).toBe(distance([0, 100]));
    expect(distanceToRef(Ancora.SupDir)).toBe(distance([100, 100]));
    expect(distanceToRef(Ancora.Centro)).toBe(distance([50, 50]));
    expect(distanceToRef([50, 50])).toBe(distance([50, 50]));
  });
});
