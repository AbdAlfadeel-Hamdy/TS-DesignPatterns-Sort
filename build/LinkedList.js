"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next)
            tail = tail.next;
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let counter = 1;
        let node = this.head;
        while (node.next) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    at(index) {
        if (!this.head)
            throw new Error(`Index out of bounds`);
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index)
                return node;
            node = node.next;
            counter++;
        }
        throw new Error(`Index out of bounds`);
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftHand;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
