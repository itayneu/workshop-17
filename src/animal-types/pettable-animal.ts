import { Animal } from "./animal";
export abstract class PettableAnimal implements Animal {
  private readonly _name: string;

  protected constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  isPettable(): boolean {
    return true;
  }
}
