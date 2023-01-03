import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
const numbersCollection = new NumbersCollection([
  1, 5, -2, 3, 100, 8, 6, 12, 9, 13, -3, 0,
]);
const charactersCollection = new CharactersCollection("Xaayb");
const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(1);
linkedList.add(9);
linkedList.add(5);
const sotrer = new Sorter(numbersCollection);
const sotrer_2 = new Sorter(charactersCollection);
const sotrer_3 = new Sorter(linkedList);
sotrer.sort();
sotrer_2.sort();
sotrer_3.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
