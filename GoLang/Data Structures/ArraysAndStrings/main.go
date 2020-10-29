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

func convertStringToURL(s string) string {
	url := []byte{}

	for _, char := range(s) {
		if char == ' ' {
			url = append(url, '%', '2', '0')
		} else {
			url = append(url, byte(char))
		}
	}

	return string(url)
}

func convertStringToURLInPlace(s []byte, length int) string {
	numSpaces := 0
	for i := 0; i < length; i++ {
		if s[i] == ' ' {
			numSpaces++
		}
	}
	index := length + (numSpaces * 2)
	for i := length - 1; i >= 0; i-- {
		if s[i] == ' ' {
			s[index - 1] = '0'
			s[index - 2] = '2'
			s[index - 3] = '%'
			index = index - 3
		} else {
			s[index - 1] = s[i]
			index--
		}
	}
	return string(s)
}

func main() {

	fmt.Println("\n----------------\nP1 - Unique Strings")

	uniqueString := "abcdef"
	nonUniqueString := "abcdaef"

	fmt.Printf("%v is a unique string (%v)\n", uniqueString, isUniqueV2(uniqueString))
	fmt.Printf("%v is a unique string (%v)\n", nonUniqueString, isUniqueV2(nonUniqueString))

	fmt.Println("\n----------------\nP2 - Palindromes")

	s1 := "abcd"
	s2 := "abdc"
	s3 := "abcc"

	fmt.Printf("%v is a palindrome of %v (%v)\n", s1, s2, isPalindrome(s1, s2))
	fmt.Printf("%v is a palindrome of %v (%v)\n", s2, s3, isPalindrome(s2, s3))

	fmt.Println("\n----------------\nP3 - URLify")

	s := []byte("country roads, take me home        ")
	
	fmt.Printf("OG String:\t%v\n", string(s))
	fmt.Printf("URL String:\t%v\n", convertStringToURLInPlace(s, len(s) - 8))
}