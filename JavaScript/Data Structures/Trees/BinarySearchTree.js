class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    print(node) {
        if (node === null) return;
        let left = node.left ? node.left.value : null;
        let right = node.right ? node.right.value : null;
        console.log(`parent: ${node.value}\tleft child: ${left}\tright child: ${right}`);
        this.print(node.left);
        this.print(node.right);
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let curNode = this.root;

        while (curNode !== null) {
            if (value < curNode.value) {
                if (curNode.left === null) {
                    curNode.left = newNode;
                    return;
                } else {
                    curNode = curNode.left;
                }
            } else {
                if (curNode.right === null) {
                    curNode.right = newNode;
                    return;
                } else {
                    curNode = curNode.right;
                }
            }
        }


    }

    search(value) {
        let curNode = this.root;

        while (curNode !== null) {
            if (curNode.value === value) {
                return "found";
            } else if (value < curNode.value) {
                if (curNode.left === null) {
                    return "-1";
                } else {
                    curNode = curNode.left;
                }
            } else {
                if (curNode.right === null) {
                    return -1;
                } else {
                    curNode = curNode.right;
                }
            }
        }
    }

    inOrderTraversal(node) {
        if (node === null) return;
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    preOrderTraversal(node) {
        if (node === null) return;
        console.log(node.value)
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    postOrderTraversal(node) {
        if (node === null) return;
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }
}

const b = new BinarySearchTree();
b.insert(7);
b.insert(5);
b.insert(4);
b.insert(6);
b.insert(8);
b.insert(7);
b.insert(9);
// b.inOrderTraversal(b.root);
// console.log("---------------------")
// b.preOrderTraversal(b.root);
// console.log("---------------------")
// b.postOrderTraversal(b.root);
//b.print(b.root);
console.log(b.search(20));
console.log(b.search(8));
