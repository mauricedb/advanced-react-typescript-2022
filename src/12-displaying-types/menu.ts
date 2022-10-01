import {
  DeepReadonly,
  ExtraIngredient,
  ExtraIngredients,
  Pizza,
} from './types';

export const pizzas: DeepReadonly<Pizza[]> = [
  {
    name: 'Pizza Margherita',
    ingredients: ['tomato sauce', 'mozzarella', 'basil'],
    price: 7.95,
    extras: ['olives'],
  },
  {
    name: 'Pizza Quattro formaggi',
    ingredients: ['mozzarella', 'gorgonzola', 'provolone', 'parmesan cheese'],
    price: 9.45,
    extras: ['cheese'],
  },
  {
    name: 'Pizza Rustica',
    ingredients: [
      'tomato sauce',
      'mozzarella',
      'seasoned minced beef',
      'red peppers',
    ],
    price: 9.95,
    extras: ['cheese', 'pepperoni', 'peppers'],
  },
  {
    name: 'Pizza Ai funghi',
    ingredients: ['tomato sauce', 'mozzarella', 'mushrooms', 'garlic'],
    price: 10.95,
    extras: ['cheese', 'mushrooms'],
  },
  {
    name: 'Pizza Hawaii',
    ingredients: ['tomato sauce', 'mozzarella', 'prosciutto', 'pineapple'],
    price: 11.75,
    extras: ['cheese', 'pepperoni', 'tomatoes'],
  },
];

export const extraIngredients: ExtraIngredients = {
  cheese: { name: 'Cheese', price: 0.5 },
  peppers: { name: 'Green and red bell pepper', price: 0.5 },
  pepperoni: { name: 'Pepperoni', price: 0.75 },
  tomatoes: { name: 'Tomatoes', price: 0.5 },
  olives: { name: 'Olives', price: 0.6 },
  mushrooms: { name: 'Mushrooms', price: 0.6 },
};

export const getExtraIngredient = (name: string): ExtraIngredient => {
  const extraIngredient = extraIngredients[name];

  if (!extraIngredient) {
    throw new Error(`Extra ingredient ${name} does not exist`);
  }

  return extraIngredient;
};
