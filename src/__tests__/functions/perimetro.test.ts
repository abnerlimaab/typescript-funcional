import { Shape, perimetro } from "../../functions/perimetro";

describe("perimetro", () => {
  it("should calculate the perimeter of a circle", () => {
    const circle: Shape = { kind: "Circle", radius: 2 };
    expect(perimetro(circle)).toBeCloseTo(12.566);
  });

  it("should calculate the perimeter of a rectangle", () => {
    const rectangle: Shape = { kind: "Rectangle", width: 2, height: 3 };
    expect(perimetro(rectangle)).toBe(10);
  });

  it("should calculate the perimeter of a square", () => {
    const square: Shape = { kind: "Square", side: 2 };
    expect(perimetro(square)).toBe(8);
  });
});
