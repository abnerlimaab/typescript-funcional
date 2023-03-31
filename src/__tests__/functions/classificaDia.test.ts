import { Dia, classificaDia } from "../../functions/classificaDia";

describe("classificaDia", () => {
  it("should return Quente when max is greater than 30", () => {
    expect(classificaDia([25, 31])).toBe(Dia.Quente);
  });

  it("should return Frio when min is less than 15", () => {
    expect(classificaDia([14, 25])).toBe(Dia.Frio);
  });

  it("should return Agradável when min is greater than or equal to 15 and max is less than or equal to 30", () => {
    expect(classificaDia([15, 30])).toBe(Dia.Agradável);
  });
});
