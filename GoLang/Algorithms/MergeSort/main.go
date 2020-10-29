package main

import (
	"fmt"
)

func merge(left []int, right []int) []int {
	l := 0
	r := 0
	sorted := make([]int, 0)

	for l < len(left) && r < len(right) {
		if left[l] <= right[r] {
			sorted = append(sorted, left[l])
			l++
		} else {
			sorted = append(sorted, right[r])
			r++
		}
	}
	for l < len(left) && r >= len(right) {
		sorted = append(sorted, left[l])
		l++
	}
	for r < len(right) && l >= len(left) {
		sorted = append(sorted, right[r])
		r++
	}
	return sorted
}
 
func MergeSort(arr []int) []int {
	if len(arr) == 1 {
		return arr;
	}

	mid := len(arr) / 2

	return merge(MergeSort(arr[0:mid]), MergeSort(arr[mid:]))
}

func merge2(left []int, right []int) []int {
	l := 0
	r := 0
	sorted := []int{}

	for l < len(left) && r < len(right) {
		if left[l] < right[r] {
			sorted = append(sorted, left[l])
			l++
		} else {
			sorted = append(sorted, right[r])
			r++
		}
	}
	for l < len(left) {
		sorted = append(sorted, left[l])
		l++
	}
	for r < len(right) {
		sorted = append(sorted, right[r])
		r++
	}
	return sorted
}

func MergeSort2(arr []int) []int {
	if len(arr) == 1 {
		return arr
	}

	mid := len(arr) / 2

	return merge2(MergeSort2(arr[0:mid]), MergeSort2(arr[mid:]))
}

func main() {
	arr := []int{54, 24, 23, 32, 1, 36, 3, 17, 52}

	fmt.Println(MergeSort2(arr))
}