class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    removeFromFront() {
        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return removedNode;
    }

    empty() {
        return !this.head
    }

    print() {
        let curNode = this.head;
        while (curNode) {
            console.log(curNode.value);
            curNode = curNode.next;
        }
    }

    getNode(n) {
        let i = 0;
        let curNode = this.head;
        while(curNode && i < n) {
            i += 1;
            curNode = curNode.next;
        }

        return curNode
    }
}

export { Node, LinkedList };