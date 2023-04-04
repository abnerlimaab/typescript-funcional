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

export const map = <T, U>(arvore: Arvore<T>, f: (x: T) => U): Arvore<U> => {
  const _map = (arvore: Arvore<T>, acc: Arvore<T>): Arvore<U> => {
    switch (arvore.type) {
      case "folha":
        return { type: "folha", value: f(arvore.value) };
      case "no":
        return {
          type: "no",
          left: _map(arvore.left, acc),
          right: _map(arvore.right, acc),
        };
    }
  };

  return _map(arvore, { type: "folha", value: null } as Arvore<T>);
};
