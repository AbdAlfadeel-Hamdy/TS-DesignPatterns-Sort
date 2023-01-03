import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
const numbersCollection = new NumbersCollection([
  1, 5, -2, 3, 100, 8, 6, 12, 9, 13, -3, 0,
]);
const sotrer = new Sorter(numbersCollection);
sotrer.sort();
console.log(numbersCollection.data);
