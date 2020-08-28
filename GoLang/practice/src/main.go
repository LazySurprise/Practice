package main

import (
	"fmt"

    "practice/src/linkedlist"
)

func main() {
	l := LinkedList.New()
	l.Insert(1)
	l.Insert(2)
	l.Insert(3)
	l.Insert(4)
	l.Insert(5)
	l.Insert(6)
	l.Insert(7)
	l.Insert(8)
	l.Print()
	l.RemoveNthToLastElement2(1)
	fmt.Println("--")
	l.Print()

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