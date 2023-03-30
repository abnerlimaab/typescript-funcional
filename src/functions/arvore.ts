export type Arvore<T> =
  | { type: "folha"; value: T }
  | { type: "no"; left: Arvore<T>; right: Arvore<T> };

export const somarArvore = (arvore: Arvore<number>): number => {
  switch (arvore.type) {
    case "folha":
      return arvore.value;
    case "no":
      return somarArvore(arvore.left) + somarArvore(arvore.right);
  }
};

export const upperCaseArvore = (arvore: Arvore<string>): Arvore<string> => {
  switch (arvore.type) {
    case "folha":
      return { type: "folha", value: arvore.value.toUpperCase() };
    case "no":
      return {
        type: "no",
        left: upperCaseArvore(arvore.left),
        right: upperCaseArvore(arvore.right),
      };
  }
};
