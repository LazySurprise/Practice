import { LinkedList } from '../../Data Structures/LinkedList.js';


function kthToLast(head, k) {
    let length = 0;
    let cur = head;
    while (cur) {
        length += 1;
        cur = cur.next;
    }
    let stop = length - k - 1;
    let i = 0;
    while (i < stop) {
        i += 1;
        head = head.next;
    }
    return head;
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
console.log(kthToLast(l.head, 1))
//l.print();
