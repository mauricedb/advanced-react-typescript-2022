export type Pizza = {
  name: string;
  ingredients: string[];
  image: string;
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
