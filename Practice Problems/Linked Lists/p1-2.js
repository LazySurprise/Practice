import { LinkedList } from '../../Data Structures/LinkedList.js';

function removeDuplicates(head) {
    let tracker = {};
    tracker[head.value] = 1;

    while (head.next) {
        if (tracker[head.next.value]) {
            head.next = head.next.next; // skip over dupe
        } else {
            tracker[head.next.value] = 1;
            head = head.next;
        }
    }
    return head;
}

function removeDuplicates2(head) {
    let saved = head;
    let runner = head;
    while (head.next) {
        while (runner.next) {
            if (head.value === runner.next.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        head = head.next;
        if (head === null) break;
        runner = head;
    }
    return saved;
}
let l = new LinkedList();
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
removeDuplicates2(l.head);
console.log('-----')
l.print();