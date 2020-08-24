function binarySearch(arr, key) {
    let mid = Math.floor(arr.length / 2);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[mid] === key) return "found";
        if (arr[mid] < key) {
            left = mid + 1;
            mid = Math.floor((left+right)/2)
        } else {
            right = mid - 1;
            mid = Math.floor((left+right)/2)
        }
    }
    return -1;
}

let a = [1,2,3,4,5,6,7,8]
console.log(binarySearch(a, 7))