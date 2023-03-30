export enum Ancora {
  Centro,
  SupEsq,
  SupDir,
  InfEsq,
  InfDir,
}

type Coord = [number, number];

export type Referencia = Ancora | Coord;

export const distance = (p: Coord) => {
  const [x, y] = p;
  return Math.sqrt(x * 2 + y * 2);
};

export const distanceToReference = (p: Coord) => (r: Referencia) => {
  const [width, height] = p;

  switch (r) {
    case Ancora.InfEsq:
      return 0;
    case Ancora.InfDir:
      return distance([width, 0]);
    case Ancora.SupEsq:
      return distance([0, height]);
    case Ancora.SupDir:
      return distance([width, height]);
    case Ancora.Centro:
      return distance([width / 2, height / 2]);
    default:
      return distance(r);
  }
};
