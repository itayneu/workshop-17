import { PettableAnimal } from "./pettable-animal";
import { FoodTypes } from "food-types";

export class Cat extends PettableAnimal {
  constructor(name: string) {
    super(name);
  }

  favoriteFood(): string {
    return FoodTypes.MILK;
  }
}
