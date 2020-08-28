import { LinkedList } from '../../Algorithms/Data Structures/LinkedList.js.js';

// a -> b -> a
// solution 1: iterate over linked list, insert nodes into new list
//              iterate over both linked lists, comparing values
//      - do I need a removeFront helper function

function isPalindrome(h) {
    let c = h;
    const l2 = new LinkedList();
    while (c) {
        l2.insert(c.value);
        c = c.next;
    }
    c = h;
    let h2 = l2.head;
    while (c && h2) {
        if (c.value !== h2.value) return false;
        c = c.next;
        h2 = h2.next;
    }
    return true
}

const l1 = new LinkedList();
l1.insert("a");
l1.insert("b");
l1.insert("c");
l1.insert("d");
l1.insert("a");
console.log(isPalindrome(l1.head))