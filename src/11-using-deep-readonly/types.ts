export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type Pizza = {
  name: string;
  ingredients: string[];
  price: number;
  extras: string[];
};

export type ExtraIngredients = Record<string, ExtraIngredient>;

export type ExtraIngredient = {
  name: string;
  price: number;
};

export type PizzaOnOrder = {
  name: string;
  price: number;
  extraIngredients: ExtraIngredient[];
};
