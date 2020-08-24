import { LinkedList, Node } from '../../Data Structures/LinkedList.js';

function sumLists(h1, h2) {
    let n1 = 0;
    let n2 = 0;
    let d1 = 0;
    let d2 = 0;
    while (h1) {
        n1 += (Math.pow(10, d1))*h1.value
        h1 = h1.next;
        d1 += 1
    }
    while (h2) {
        n2 += (Math.pow(10, d2))*h2.value
        h2 = h2.next
        d2 += 1
    }
    let newNum = n1 + n2;
    const newList = new LinkedList();
    let t;
    let d = Math.pow(10, newNum.toString().length-1)
    while (newNum > 0) {
        t = (newNum - (newNum % d)) / d;
        newList.insert(t)
        newNum = (newNum % d) * 10;
    }
    return newList
}

function sumListsR1(h1, h2, carry) {
    if (h1 === null && h2 === null && carry === 0) return null
    const node = new Node(0);
    let value = carry;
    if (h1) value += h1.value
    if (h2) value += h2.value
    node.value = value % 10;
    if (l1 || l2) {
        let newNode = sumListsR1(h1 === null ? null : h1.next,
                                    h2 === null ? null : h2.next,
                                    value >= 10 ? 1 : 0);
        node.next = newNode;
    }
    return node;
}

function sumListsR2(h1, h2, carry) {
    if (h1 === null && h2 === null && carry === 0) return null
    const node = new Node(0);
    let value = carry;
    if (h1) value += h1.value
    if (h2) value += h2.value
    node.value = value % 10
    if (h1 !== null || h2 !== null) {
        let newNode = sumListsR2(h1 === null ? null : h1.next,
                                    h2 === null ? null : h2.next,
                                    value >= 10 ? 1 : 0)
        node.next = newNode
    }
    return node
}

function sumListsR3(h1, h2, carry) {
    if (h1 === null && h2 === null && carry === 0) return null
    const node = new Node(0);
    let value = carry;
    if (h1) value += h1.value
    if (h2) value += h2.value
    node.value = value % 10;
    if (h1 !== null || h2 !== null) {
        const newNode = sumListsR3(h1 === null ? null : h1.next,
                                    h2 === null ? null : h2.next,
                                    value >= 10 ? 1 : 0)
        node.next = newNode;
    }
    return node;
}


const l1 = new LinkedList();
l1.insert(1)
l1.insert(2)
l1.insert(3)
const l2 = new LinkedList();
l2.insert(1)
l2.insert(2)
l2.insert(3)
let l3 = sumListsR3(l1.head, l2.head, 0)
while(l3) {
    console.log(l3.value)
    l3 = l3.next
}
//l3.print()