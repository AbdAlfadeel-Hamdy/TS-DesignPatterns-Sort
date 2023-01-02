"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    1, 5, -2, 3, 8, 6, 12, 9, 13, -3, 0,
]);
const sotrer = new Sorter_1.Sorter(numbersCollection);
sotrer.sort();
console.log(numbersCollection.data);
