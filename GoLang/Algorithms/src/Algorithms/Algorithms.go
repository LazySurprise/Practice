package Algorithms

func BinarySearch(arr []int, key int) bool {
	l := 0
	r := len(arr)
	m := (l + r) / 2

	for l <= m {
		if key == arr[m] {
			return true
		} else if key < arr[m] {
			r = m - 1
			m = (l + r) / 2
		} else {
			l = m + 1
			m = (l + r) / 2
		}
	}
	return false
}