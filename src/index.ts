import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
const numbersCollection = new NumbersCollection([
  1, 5, -2, 3, 100, 8, 6, 12, 9, 13, -3, 0,
]);
const charactersCollection = new CharactersCollection("Xaayb");
const sotrer = new Sorter(numbersCollection);
const sotrer_2 = new Sorter(charactersCollection);
sotrer.sort();
sotrer_2.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
