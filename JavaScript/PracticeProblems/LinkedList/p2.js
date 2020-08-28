/**
 * delete nth to last element of singly linked list
 * 
 * Edge cases:
 *  - deleting first element
 *  - deleting second element
 *  - deleting last element
 *  - deleting second to last element
 */
import { LinkedList } from '../../Data Structures/LinkedList.js';


function removeNthToLastElement(l, n) {
    if (n < 0) return
    let curNode = l.head;
    let count = 0;

    while (curNode) {
        count += 1;
        curNode = curNode.next;
    }
    if (n > count) return

    
    let i = 1;
    let stop = count - n; // distance from end
    if (stop > 0) {
        curNode = l.head;
        while (i < stop - 1) {
            curNode = curNode.next;
            i += 1;
        }
        curNode.next = curNode.next.next || null;
    } else {
        l.head = l.head.next;
    }
}

function returnElement(head, k) {
    let p1 = head;
    let p2 = head;

    for (let i = 0; i < k; i++) {
        if (p2 === null) return null;
        p2 = p2.next;
    }

    while (p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

let l = new LinkedList();
l.insert(1);
l.insert(2);
l.insert(3);
l.insert(4);
l.insert(5);
l.insert(6);
l.insert(7);
l.insert(8);
l.insert(9);

l.print();
//removeNthToLastElement(l, 0);
console.log('-------')
console.log(returnElement(l.head, 2))
//l.print();
