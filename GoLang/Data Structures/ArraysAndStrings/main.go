package main

import (
	"fmt"
	"math"
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

func isUnique3(str string) bool {
	deduper := make(map[rune]bool)

	for _, c := range str {
		if !deduper[c] {
			deduper[c] = true
		} else {
			return false
		}
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

func isPermutationOfPalindrome(s string) bool {
	oddTracker := make(map[rune]int)
	numOdds := 0

	for _, char := range(s) {
		if _, ok := oddTracker[char]; ok {
			oddTracker[char]++
			if oddTracker[char] % 2 == 0 {
				numOdds--
			} else {
				numOdds++
			}
		} else {
			oddTracker[char] = 1
			numOdds++
		}
	}

	return numOdds <= 1
}

func isOneEditAway(s1 string, s2 string) bool {
	// check that strings are at most one different in length
	if int64(math.Abs(float64(len(s1) - len(s2)))) > 1 {
		return false
	} else if len(s1) == len(s2) {
		return isOneReplaceAway(s1, s2)
	} else if len(s1) < len(s2) {
		return isOneInsertAway(s1, s2)
	}
	return isOneInsertAway(s2, s1)
}

func isOneInsertAway(shrt string, lng string) bool {
	inserted := false
	for i, j := 0, 0; i < len(shrt); i, j = i+1, j+1 {
		if shrt[i] != lng[j] {
			if shrt[i] == lng[j+1] {
				if inserted {
					return false
				}
				j = j + 1
				inserted = true
			}
		}
	}
	return true
}

func isOneReplaceAway(shrt string, lng string) bool {
	edited := false
	for i := 0; i < len(shrt); i++ {
		if shrt[i] != lng[i] {
			if edited {
				return false
			}
			edited = true
		}
	}
	return true
}

func main() {

	fmt.Println("\n----------------\nP1 - Unique Strings")

	uniqueString := "abcdef"
	nonUniqueString := "abcdaef"

	fmt.Printf("%v is a unique string (%v)\n", uniqueString, isUnique3(uniqueString))
	fmt.Printf("%v is a unique string (%v)\n", nonUniqueString, isUnique3(nonUniqueString))

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

	fmt.Println("\n----------------\nP4 - Permutation of Palindrome")

	s1 = "aaaabbbbc"
	s2 = "aaaabbbbcc"
	s3 = "aaabbbc"
	fmt.Printf("s1 is a permutation of a palindrome (%v)\n", isPermutationOfPalindrome(s1))
	fmt.Printf("s2 is a permutation of a palindrome (%v)\n", isPermutationOfPalindrome(s2))
	fmt.Printf("s3 is a permutation of a palindrome (%v)\n", isPermutationOfPalindrome(s3))
	
	fmt.Println("\n----------------\nP5 - One away")

	s1 = "abcd"
	s2 = "abc"
	s3 = "abdc"
	fmt.Printf("%v is one edit away from %v (%v)\n", s1, s2, isOneEditAway(s1, s2))
	fmt.Printf("%v is one edit away from %v (%v)\n", s1, s3, isOneEditAway(s1, s3))
}