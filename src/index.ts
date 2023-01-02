class Sorter {
  // private collection: number[];
  constructor(private collection: number[]) {
    // this.collection = collection;
  }
  sort(): number[] {
    const { length } = this.collection;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.collection[j] > this.collection[j + 1])
          [this.collection[j], this.collection[j + 1]] = [
            this.collection[j + 1],
            this.collection[j],
          ];
      }
    }
    return this.collection;
  }
}

const sotrer = new Sorter([1, 5, -2, 3, 8, 6, 12, 9, 13, -3, 0]);
console.log(sotrer.sort());
