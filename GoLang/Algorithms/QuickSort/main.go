package main

import (
	"fmt"
)

func swap(arr []int, left int, right int) {
	tmp := arr[left]
	arr[left] = arr[right]
	arr[right] = tmp
}

func partition(arr []int, left int, right int) int {
	pivot := arr[((left + right) / 2)]

	for left < right {
		for left < len(arr) && arr[left] < pivot {
			left++
		}
		for right >= 0 && arr[right] > pivot {
			right--
		}
		if left <= right {
			swap(arr, left, right)
			left++
			right--
		}
	}

	return left
}

func QuickSort(arr []int, left int, right int) []int {
	if len(arr) > 1 {
		pivotIndex := partition(arr, left, right)

		if left < pivotIndex {
			QuickSort(arr, left, pivotIndex - 1)
		}

		if right > pivotIndex {
			QuickSort(arr, pivotIndex, right)
		}
	}

	return arr
}
 
func main() {
	arr := []int{54, 24, 23, 32, 1, 36, 3, 17, 52}

	fmt.Println(QuickSort(arr, 0, len(arr) - 1))
}