package main

import (
	"fmt"

	"Algorithms/src/Algorithms"
	
)

func main() {
	arr := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

	// binary search
	// for i := 0; i < len(arr); i++ {
	// }
	fmt.Println(Algorithms.BinarySearch(arr, 7))
}