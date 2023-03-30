import { Arvore, somarArvore } from "../../functions/arvore";

describe("somarArvore", () => {
  it("deve somar os valores de uma árvore", () => {
    const arvore: Arvore = {
      type: "no",
      left: {
        type: "folha",
        value: 1,
      },
      right: {
        type: "no",
        left: {
          type: "folha",
          value: 2,
        },
        right: {
          type: "folha",
          value: 3,
        },
      },
    };

    expect(somarArvore(arvore)).toBe(6);
  });
});
