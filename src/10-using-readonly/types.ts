export type Pizza = {
  name: string;
  ingredients: string[];
  price: number;
  extras: string[];
};

export type ExtraIngredients = Record<string, ExtraIngredient>;

export type ExtraIngredient = Readonly<{
  name: string;
  price: number;
}>;

export type PizzaOnOrder = {
  name: string;
  price: number;
  extraIngredients: ExtraIngredient[];
};
