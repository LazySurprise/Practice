import { LinkedList } from './LinkedList.js';

class Stack {
    constructor() {
        this.stackPointer = new LinkedList();
    }

    push(value) {
        this.stackPointer.insert(value);
    }

    pop() {
        this.stackPointer.removeFromFront();
    }

    empty() {
        return this.stackPointer.empty();
    }
}

export { Stack };