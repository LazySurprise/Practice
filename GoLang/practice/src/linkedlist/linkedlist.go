package LinkedList

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

func (l *LinkedList) Insert(v int) *Node {
	var n *Node
	if l.head == nil {
		n = &Node{value: v, next: nil}
	} else {
		n = &Node{value: v, next: l.head}
	}
	l.head = n
	return n
}

// remove
func (l *LinkedList) Remove(v int) *Node {
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
func (l *LinkedList) Print() {
	var c = l.head

	for c != nil {
		fmt.Println(c.value)
		c = c.next
	}
}

// find
func (l *LinkedList) Find(v int) *Node {
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
func (l *LinkedList) RemoveFront() *Node {
	f := l.head
	l.head = l.head.next
	return f
}

// New yeet.
func New() LinkedList {
	l := LinkedList{head: nil}
	return l
}

// RemoveDuplicates .
func (l *LinkedList) RemoveDuplicates() {
	b := map[int]int{}
	
	c := l.head
	b[c.value] = 1
	for c.next != nil {
		if b[c.next.value] == 1 {
			c.next = c.next.next
		} else {
			b[c.next.value] = 1
			c = c.next
		}
	}
}

// RemoveDuplicatesWithoutBuffer .
func (l *LinkedList) RemoveDuplicatesWithoutBuffer() {
	c := l.head
	r := l.head

	for c != nil {
		for r.next != nil {
			if c.value == r.next.value {
				if r.next.next == nil {
					break
				}
				r.next = r.next.next
			} else {
				r = r.next
			}
		}
		if c.next == nil {
			break
		}
		c = c.next
		r = c
	}
}

// RemoveNthToLastElement .
func (l *LinkedList) RemoveNthToLastElement(n int) {
	length := 0
	c := l.head
	
	for c != nil {
		length++
		c = c.next
	}

	if n > length {
		fmt.Println("error: index out of range")
		return
	} else if n == length {
		l.head = l.head.next
		return
	}

	stop := length - n - 2
	c = l.head
	for i := 0; i < stop; i++ {
		c = c.next
	}
	c.next = c.next.next
}

// RemoveNthToLastElement2 .
func (l *LinkedList) RemoveNthToLastElement2(n int) {
	r1 := l.head
	r2 := l.head

	for i := 0; i < n + 1; i++ {
		r1 = r1.next
		if r1 == nil && i < n {
			fmt.Println("error: out of range")
			return
		}
	}

	if r1 == nil {
		l.head = l.head.next
		return
	}
	
	for r1.next != nil {
		r1 = r1.next
		r2 = r2.next
	}

	if r2.next != nil {
		r2.next = r2.next.next
	}
}

// RemoveMiddleNode .
func (l *LinkedList) RemoveMiddleNode(n *Node) {
	for n.next.next != nil {
		n.value = n.next.value
		n = n.next
	}
	n.value = n.next.value
	n.next = nil
}