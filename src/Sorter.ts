import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  constructor(private collection: NumbersCollection) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++)
        if (this.collection.compare(j, j + 1)) this.collection.swap(j, j + 1);
    }
  }
}
