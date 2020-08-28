package linkedlist

import "fmt"

// Node in LinkedList.
type Node struct {
	value	int
	next	*Node
}

// LinkedList struct that we will use to create methods.
type LinkedList struct {
	head	*Node
}

func (l *LinkedList) insert(v int) {
	if l.head == nil {
		l.head = &Node{value: v, next: nil}
	} else {
		n := Node{value: v, next: l.head}
		l.head = &n
	}
}

// remove
func (l *LinkedList) remove(v int) *Node {
	var c = l.head
	var r *Node

	if c.value == v {
		r = l.head
		l.head = l.head.next
		return r
	}
	
	for c != nil {
		if c.next.value == v {
			r = c.next
			c.next = c.next.next
			return r
		}
		c = c.next
	}

	return nil
}

// print
func (l *LinkedList) print() {
	var c = l.head

	for c != nil {
		fmt.Println(c.value)
		c = c.next
	}
}

// find
func (l *LinkedList) find(v int) *Node {
	var c = l.head

	for c != nil {
		if c.value == v {
			return c
		}
		c = c.next
	}

	return nil
}

// removeFront
func (l *LinkedList) removeFront() *Node {
	f := l.head
	l.head = l.head.next
	return f
}

// func main() {
// 	linkedList := LinkedList{head: nil}
// 	linkedList.insert(1)
// 	linkedList.insert(2)
// 	linkedList.insert(3)
// 	f := linkedList.find(2)
// 	fmt.Println(*f)
// 	fmt.Println("--")
// 	n := linkedList.remove(2)
// 	fmt.Println(*n)
// 	fmt.Println("--")
// 	linkedList.print()
// 	fmt.Println("--")
// 	f2 := linkedList.removeFront()
// 	fmt.Println(*f2)
// 	//fmt.Println("hello world")
// }