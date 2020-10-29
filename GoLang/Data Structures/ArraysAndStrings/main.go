package main

import (
	"fmt"
)

func isUnique(str string) bool {
	store := make(map[rune]bool)

	for _, char := range(str) {
		if store[char] {
			return false
		}
		store[char] = true
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

func isPalindrome(s1 string, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}
	chars := make(map[rune]int)
	for _, char := range(s1) {
		chars[char]++
	}
	for _, char := range(s2) {
		chars[char]--
		if chars[char] < 0 {
			return false
		}
	}
	return true
}

func main() {
	uniqueString := "abcdef"
	nonUniqueString := "abcdaef"

	fmt.Printf("%v is a unique string (%v)\n", uniqueString, isUniqueV2(uniqueString))
	fmt.Printf("%v is a unique string (%v)\n", nonUniqueString, isUniqueV2(nonUniqueString))

	s1 := "abcd"
	s2 := "abdc"
	s3 := "abcc"

	fmt.Printf("%v is a palindrome of %v (%v)\n", s1, s2, isPalindrome(s1, s2))
	fmt.Printf("%v is a palindrome of %v (%v)\n", s2, s3, isPalindrome(s2, s3))
}