import { DangerousAnimal } from "./dangerous-animal";
import { FoodTypes } from "food-types";

export class Tiger extends DangerousAnimal {
  constructor(name: string) {
    super(name);
  }

  favoriteFood(): string {
    return FoodTypes.MEAT;
  }
}
