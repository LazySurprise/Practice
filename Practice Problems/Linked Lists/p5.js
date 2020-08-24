import { Node, LinkedList } from '../../Data Structures/LinkedList.js';

function sumLists(h1, h2) {
    let n1 = 0;
    let c1 = 0;
    let n2 = 0;
    let c2 = 0;
    
    while (h1) {
        let t = 
        console.log(((c1 * 10) || 1) * h1)
        n1 += ((c1 * 10) || 1) * h1;
        h1 = h1.next;
        c1 += 1;
    }

    while (h2) {
        n2 += ((c2 * 10) || 1) * h2;
        h2 = h2.next;
        c2 += 1;
    }

    //console.log(`n1: ${n1}\tn2: ${n2}`)
    let newNum = n1 + n2;

    //console.log(newNum)
    let n_a = [...`${newNum}`].map(i => parseInt(i));
    //let n_a = newNum.toString(10).replace(/\D/g, '0').split('').map(Number);
    //let n_a = Array.from(String(newNum), Number);
    //console.log(n_a)
    let l = new LinkedList();
    l.insert(n_a[n_a.length - 1]);
    let head = l.head;
    let cur;
    for (let i = n_a.length - 2; i >= 0; i--) {
        cur = new Node(n_a[i]);
        cur.next = head.next;
        head.next = cur
    }
    return l;
}

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.insert(1);
l1.insert(2);
l1.insert(3);

l2.insert(3);
l2.insert(2);
l2.insert(1);

//l1.print();
console.log('-----')
//l2.print();
console.log('-----')

let l3 = sumLists(l1.head, l2.head);
//l3.print()