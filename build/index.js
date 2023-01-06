"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
// import { Sorter } from "./Sorter";
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    1, 5, -2, 3, 100, 8, 6, 12, 9, 13, -3, 0,
]);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(3);
linkedList.add(1);
linkedList.add(9);
linkedList.add(5);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
// const sotrer = new Sorter(numbersCollection);
// const sotrer_2 = new Sorter(charactersCollection);
// const sotrer_3 = new Sorter(linkedList);
// sotrer.sort();
// sotrer_2.sort();
// sotrer_3.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
