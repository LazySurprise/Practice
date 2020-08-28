import { LinkedList } from '../../Data Structures/LinkedList.js';


function removeMiddle(mid) {
    if (mid === null || mid.next === null) return false;
    mid.value = mid.next.value;
    mid.next = mid.next.next;
    return true;
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
console.log('-----')
let n = l.getNode(3);
removeMiddle(n);
l.print();