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

func (l *LinkedList) Insert(v int) {
	if l.head == nil {
		l.head = &Node{value: v, next: nil}
	} else {
		n := Node{value: v, next: l.head}
		l.head = &n
	}
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