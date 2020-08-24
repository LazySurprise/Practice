/**
 * remove duplicates from linked list
 * 
 */

import { LinkedList } from '../../Data Structures/LinkedList.js';

const l = new LinkedList();

function removeDuplicates(l) {
    let curNode = l.head;
    let a = {};
    a[curNode.value] = 1;

    while (curNode.next !== null) {
        if (a[curNode.next.value]) {
            curNode.next = curNode.next.next;
        } else {
            a[curNode.next.value] = 1;
            curNode = curNode.next;
        }
    }

    return l;
}

function removeDuplicates2(l) {
    let curNode = l.head;
    let prev;

    while (curNode) {
        prev = curNode;
        while (prev.next) {
            if (prev.next.value === curNode.value) {
                prev.next = prev.next.next;
            } else {
                prev = prev.next;
            }
        }
        curNode = curNode.next;
    }

    return l;
}

l.insert(1);
l.insert(1);
l.insert(2);
l.insert(2);
l.insert(3);
l.insert(3);
l.insert(2);
l.insert(3);
l.insert(4);
l.insert(4);
l.insert(5);
l.print();
let l2 = removeDuplicates2(l);
console.log('-----')
l2.print();

// solution 1: store values in hash table, if value exists update pointers