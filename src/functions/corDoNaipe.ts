export enum Color {
  Vermelho = "Vermelho",
  Preto = "Preto",
}

export enum Naipe {
  Copas,
  Espadas,
  Ouros,
  Paus,
}

export const corDoNaipe = (n: Naipe): Color => {
  if (n === Naipe.Copas || n === Naipe.Ouros) return Color.Vermelho;
  return Color.Preto;
};
