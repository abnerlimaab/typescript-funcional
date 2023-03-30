export type Shape =
  | { kind: "Circle"; radius: number }
  | { kind: "Rectangle"; width: number; height: number }
  | { kind: "Square"; side: number };

export const perimetro = (shape: Shape): number => {
  switch (shape.kind) {
    case "Circle":
      return 2 * Math.PI * shape.radius;
    case "Rectangle":
      return 2 * shape.width + 2 * shape.height;
    case "Square":
      return 4 * shape.side;
  }
};
