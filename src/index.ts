import { Caretaker } from "./caretaker";
import { Animal } from "./animal-types/animal";
import { foodStorage } from "./food-storage";
import { Zoo } from "./zoo";
import { Tiger } from "animal-types/tiger";
import { Shark } from "animal-types/shark";
import { Dog } from "animal-types/dog";
import { Cat } from "animal-types/cat";
import { Rabbit } from "animal-types/rabbit";

let zoo: Zoo;

function init() {
  const caretakers: Caretaker[] = [
    new Caretaker("John"),
    new Caretaker("Tarzan"),
    new Caretaker("Ezekiel"),
  ];

  const animals: Animal[] = [
    new Tiger("Tigger"),
    new Shark("Jaws"),
    new Dog("Snoopy"),
    new Cat("Garfield"),
    new Dog("Toto"),
    new Rabbit("Felix"),
  ];

  foodStorage.addPortions("milk", 2);
  foodStorage.addPortions("fish", 3);
  foodStorage.addPortions("bonzo", 1);
  foodStorage.addPortions("meat", 5);
  foodStorage.addPortions("carrot", 4);

  zoo = new Zoo(animals, caretakers);
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function main() {
  while (!foodStorage.isEmpty()) {
    zoo.caretakers[getRandomInt(zoo.caretakers.length)].feed(
      zoo.animals[getRandomInt(zoo.animals.length)]
    );
    await delay(100);
    zoo.caretakers[getRandomInt(zoo.caretakers.length)].pet(
      zoo.animals[getRandomInt(zoo.animals.length)]
    );
    await delay(100);
  }
  console.log(
    "-----------------------------------------------------------------"
  );
  console.log(
    "-----------------------Summary-----------------------------------"
  );
  console.log(
    "-----------------------------------------------------------------"
  );
  zoo.caretakers.forEach((c) => {
    console.log(`${c.name} was paid a total of ${c.salary}`);
  });
}

init();
main();
