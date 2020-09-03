package main

import (
	"fmt"

    "practice/src/linkedlist"
)

func main() {

	// *** SumLists

	l1 := LinkedList.New()
	l2 := LinkedList.New()
	l1.Insert(6)
	l1.Insert(1)
	l1.Insert(7)
	l2.Insert(2)
	l2.Insert(9)
	l2.Insert(5)

	l3 := l1.SumLists(l1, l2)
	fmt.Println()
	l3.Print()


	// *** Partition

	// l := LinkedList.New()
	// l.Insert(7)
	// l.Insert(2)
	// l.Insert(104)
	// l.Insert(108)
	// l.Insert(1)
	// l.Insert(106)
	// l.Insert(3)
	// l.Insert(105)
	// l.Print()
	// l.Partition(105)
	// fmt.Println("--")
	// l.Print()

	// *** RemoveNthToLastElement & RemoveMiddleNode

	// l := LinkedList.New()
	// l.Insert(1)
	// l.Insert(2)
	// l.Insert(3)
	// l.Insert(4)
	// r := l.Insert(5)
	// l.Insert(6)
	// l.Insert(7)
	// l.Insert(8)
	// l.Print()
	// l.RemoveNthToLastElement2(1)
	// l.RemoveMiddleNode(r)
	// fmt.Println("--")
	// l.Print()

	// *** RemoveDuplicates

	// l := LinkedList.New()
	// l.Insert(1)
	// l.Insert(2)
	// l.Insert(2)
	// l.Insert(3)
	// l.Insert(2)
	// l.Print()
	// l.RemoveDuplicatesWithoutBuffer()
	// fmt.Println("--")
	// l.Print()

	// *** Basic linked list functionality

	// f := l.find(2)
	// fmt.Println(*f)
	// fmt.Println("--")
	// n := l.remove(2)
	// fmt.Println(*n)
	// fmt.Println("--")
	// l.print()
	// fmt.Println("--")
	// f2 := l.removeFront()
	// fmt.Println(*f2)
	//fmt.Println("hello world")
}