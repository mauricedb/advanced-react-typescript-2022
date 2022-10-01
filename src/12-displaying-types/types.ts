export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type Pizza = Readonly<{
  name: string;
  ingredients: string[];
  price: number;
  extras: string[];
}>;

export type ExtraIngredients = Record<string, ExtraIngredient>;

export type ExtraIngredient = Readonly<{
  name: string;
  price: number;
}>;

export type PizzaOnOrder = Pick<Pizza, 'name' | 'price'> & {
  extraIngredients: ExtraIngredient[];
};
