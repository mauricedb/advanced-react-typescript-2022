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

// Taken from https://effectivetypescript.com/2022/02/25/gentips-4-display/
type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };

export type PizzaOnOrder = Resolve<
  Pick<Pizza, 'name' | 'price'> & {
    extraIngredients: ExtraIngredient[];
  }
>;
