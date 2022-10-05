import { z } from 'zod';
import {
  extraIngredientSchema,
  extraIngredientsSchema,
  pizzaSchema,
} from './schemas';

export type Pizza = z.infer<typeof pizzaSchema>;
export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>;
export type ExtraIngredient = z.infer<typeof extraIngredientSchema>;

export type PizzaOnOrder = Pick<Pizza, 'name' | 'price'> & {
  extraIngredients: ExtraIngredient[];
};
