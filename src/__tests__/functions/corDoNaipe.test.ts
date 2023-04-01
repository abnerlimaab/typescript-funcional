import { Color, Naipe, corDoNaipe } from "../../functions/corDoNaipe";

describe("corDoNaipe", () => {
  it("should return the correct color", () => {
    expect(corDoNaipe(Naipe.Copas)).toBe(Color.Vermelho);
    expect(corDoNaipe(Naipe.Espadas)).toBe(Color.Preto);
    expect(corDoNaipe(Naipe.Ouros)).toBe(Color.Vermelho);
    expect(corDoNaipe(Naipe.Paus)).toBe(Color.Preto);
  });
});
