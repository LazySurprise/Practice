package main

import "fmt"

func parseSingleLineAddress(s string) []string {
	parsedSingleLineAddress := []string{"", "", "", "", ""}
	c := 0
	
	for i := 0; i < len(s); i++ {
		if s[i] == ',' {
			i++
			c++
		}
		parsedSingleLineAddress[c] += string(byte(s[i]))
	}

	return parsedSingleLineAddress
}

func main() {
	s := "800 Lindbergh Blvd.,St. Louis,Mo,12345,US"
	p := parseSingleLineAddress(s)
	fmt.Println(p)
	for i := 0; i < len(p); i++ {

		fmt.Println(p[i])
	}
}
