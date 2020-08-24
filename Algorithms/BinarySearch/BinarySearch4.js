function binarySearch(arr, key) {
    let mid = Math.floor(arr.length / 2);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (key === arr[mid]) {
            return "found";
        } else if (key < arr[mid]) {
            right = mid - 1;
            mid = Math.floor((left+right)/2);
        } else {
            left = mid + 1;
            mid = Math.floor((left+right)/2);
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6,7,8]
console.log(binarySearch(arr, 7));