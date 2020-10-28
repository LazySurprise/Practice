package main

import (
	"fmt"
)

func isUnique(str string) bool {
	store := make(map[rune]bool)

	for _, char := range(str) {
		if store[char] {
			return false
		} else {
			store[char] = true
		}
	}
	return true
}

func isUniqueV2(str string) bool {
	store := 0

	for _, char := range(str) {
		value := char - 'a'
		if ((store & (1 << value)) > 0) {
			return false
		}
		store |= (1 << value)
	}
	return true
}

func main() {
	uniqueString := "abcdef"
	nonUniqueString := "abcdaef"

	fmt.Printf("%v is a unique string (%v)\n", uniqueString, isUniqueV2(uniqueString))
	fmt.Printf("%v is a unique string (%v)\n", nonUniqueString, isUniqueV2(nonUniqueString))
}