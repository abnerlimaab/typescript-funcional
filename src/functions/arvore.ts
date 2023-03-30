export type Arvore =
  | { type: "folha"; value: number }
  | { type: "no"; left: Arvore; right: Arvore };

export const somarArvore = (arvore: Arvore): number => {
  switch (arvore.type) {
    case "folha":
      return arvore.value;
    case "no":
      return somarArvore(arvore.left) + somarArvore(arvore.right);
  }
};
