function binarySearch(arr, key) {
    let low = 0;
    let mid = Math.floor(arr.length / 2);
    let high = arr.length - 1;

    while (low < high) {
        console.log(`mid: ${mid}`)
        if (key === arr[mid]) {
            return "found"
        } else if (key < arr[mid]) {
            high = mid - 1;
            mid = Math.floor((low + high) / 2);
        } else if (key > arr[mid]) {
            low = mid + 1;
            mid = Math.floor((low + high) / 2);
        }
    }
    return -1
}

const a = [1,2,3,4,5,6,7,8]
console.log(binarySearch(a, 3));