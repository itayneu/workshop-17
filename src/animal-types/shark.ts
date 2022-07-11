import { DangerousAnimal } from "./dangerous-animal";
import { FoodTypes } from "food-types";

export class Shark extends DangerousAnimal {
  constructor(name: string) {
    super(name);
  }

  favoriteFood(): string {
    return FoodTypes.FISH;
  }
}
