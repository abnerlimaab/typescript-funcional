import { Arvore, somarArvore, upperCaseArvore } from "../../functions/arvore";

describe("Arvore", () => {
  it("somarArvore", () => {
    const arvore: Arvore<number> = {
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

  it("upperCaseArvore", () => {
    const arvore: Arvore<string> = {
      type: "no",
      left: {
        type: "folha",
        value: "a",
      },
      right: {
        type: "no",
        left: {
          type: "folha",
          value: "b",
        },
        right: {
          type: "folha",
          value: "c",
        },
      },
    };

    expect(upperCaseArvore(arvore)).toEqual({
      type: "no",
      left: {
        type: "folha",
        value: "A",
      },
      right: {
        type: "no",
        left: {
          type: "folha",
          value: "B",
        },
        right: {
          type: "folha",
          value: "C",
        },
      },
    });
  });
});
