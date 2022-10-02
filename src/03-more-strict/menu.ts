import { ExtraIngredient, ExtraIngredients, Pizza } from './types';

export const pizzas: Pizza[] = [
  {
    name: 'Pizza Margherita',
    ingredients: ['tomato sauce', 'mozzarella', 'basil'],
    image: '/img/margherita.png',
    price: 7.95,
    extras: ['olives'],
  },
  {
    name: 'Pizza Quattro formaggi',
    ingredients: ['mozzarella', 'gorgonzola', 'provolone', 'parmesan cheese'],
    image: '/img/quattro-formaggi.png',
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
    image: '/img/rustica.png',
    price: 9.95,
    extras: ['cheese', 'pepperoni', 'peppers'],
  },
  {
    name: 'Pizza Ai funghi',
    ingredients: ['tomato sauce', 'mozzarella', 'mushrooms', 'garlic'],
    image: '/img/funghi.png',
    price: 10.95,
    extras: ['cheese', 'mushrooms'],
  },
  {
    name: 'Pizza Hawaii',
    ingredients: ['tomato sauce', 'mozzarella', 'prosciutto', 'pineapple'],
    image: '/img/hawaii.png',
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
  mushroms: { name: 'Mushrooms', price: 0.6 },
};

export const getExtraIngredient = (name: string): ExtraIngredient => {
  const extraIngredient = extraIngredients[name] ?? { name, price: 0 };

  return extraIngredient;
};
