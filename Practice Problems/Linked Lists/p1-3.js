import { LinkedList } from '../../Data Structures/LinkedList.js';

function removeDuplicates(head) {
    let seen = {};
    seen[head.value] = true;

    while (head.next) {
        if (seen[head.next.value]) {
            head.next = head.next.next;
        } else {
            seen[head.next.value] = true;
            head = head.next;
        }
    }
}

function removeDuplicates2(head) {
    let curNode = head;
    let runner = head;

    while (curNode) {
        while (runner.next) {
            if (curNode.value === runner.next.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        curNode = curNode.next;
        if (curNode === null) break;
        runner = curNode;
    }
    return head;
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
removeDuplicates(l.head);
console.log('-----')
l.print();