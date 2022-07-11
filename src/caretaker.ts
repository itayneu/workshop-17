import { PettableAnimal } from "animal-types/pettable-animal";
import { Animal } from "./animal-types/animal";
import { foodStorage } from "./food-storage";

export class Caretaker {
  private readonly _name: string;
  private _salary: number;

  get salary(): number {
    return this._salary;
  }

  constructor(name: string) {
    this._name = name;
    this._salary = 0;
  }

  public feed(animal: Animal): void {
    let hasFood = foodStorage.getPortion(this.getFavoriteFood(animal));
    if (hasFood) {
      console.log(`${animal.name} was given food`);
      this._salary += 500;
      console.log(`${this._name} was paid $500`);
    } else {
      console.log(`${this._name} couldn't feed ${animal.name}`);
    }
  }

  public pet(animal: PettableAnimal): void {
    console.log(`${this._name} pet ${animal.name}`);
  }

  get name(): string {
    return this._name;
  }
}
