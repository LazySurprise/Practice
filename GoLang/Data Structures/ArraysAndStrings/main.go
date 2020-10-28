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

func main() {
	uniqueString := "abcdef"
	nonUniqueString := "abcdaef"

	fmt.Printf("%v is a unique string (%v)\n", uniqueString, isUnique(uniqueString))
	fmt.Printf("%v is a unique string (%v)\n", nonUniqueString, isUnique(nonUniqueString))
}