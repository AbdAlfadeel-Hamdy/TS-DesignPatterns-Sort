import { Sortable } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList implements Sortable {
  head: Node | null = null;
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) tail = tail.next;
    tail.next = node;
  }
  get length(): number {
    if (!this.head) return 0;
    let counter = 1;
    let node = this.head;
    while (node.next) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  at(index: number): Node {
    if (!this.head) throw new Error(`Index out of bounds`);
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;
      node = node.next;
      counter++;
    }
    throw new Error(`Index out of bounds`);
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }
  print(): void {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
