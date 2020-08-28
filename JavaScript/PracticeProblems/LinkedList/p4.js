import { Node, LinkedList } from '../../Data Structures/LinkedList.js';

function partition(l, v) {
    let n1;
    let n2;
    let curNode = l.head;

    while (curNode.next) {
        n1 = curNode;
        n2 = curNode.next;
        while (n1.value < v && n1.next) {
            n1 = n1.next;
        }
        while (n2.value >= v && n2.next) {
            n2 = n2.next;
        }
        if (n1 && n2 && n1.value >= v && n2.value < v) {
            let temp = n1.value;
            n1.value = n2.value;
            n2.value = temp;
            if (n1.next)
                n1 = n1.next;
            if (n2.next)
                n2 = n2.next;
        }
        curNode = curNode.next;
    }

    let n = new Node(v);
    n2.next = n;
}

function partition2(node, v) {
    let head = node;
    let tail = node;

    while (node) {
        let next = node.next;
        if (node.value < v) {
            node.next = head;
            head = node;
        } else {
            tail.next = node;
            tail = node;
        }
        node = next;
    }
    tail.next = null;
    return head;
}

let l = new LinkedList();
l.insert(1);
l.insert(7);

l.insert(6);
l.insert(4);
l.insert(8);
l.insert(2);
l.insert(3);
l.insert(5);

l.insert(9);
l.print();
console.log('-----')
let n = partition(l, 6);
l.print();