// 2 potential solutions
//  > iterative
//  > recursive

function binarySearch(arr, key) {
    let mid = Math.floor(arr.length / 2);
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) { // using < instead of <= would leave out edges
        if (arr[mid] === key) return "found";
        if (key < arr[mid]) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
    }

    return -1;
}

function binarySearchR(arr, key) {
    if (arr.length < 1) return -1;
    const mid = Math.floor(arr.length / 2);

    if (key === arr[mid]) {
        return 'found';
    } else if (key < arr[mid]) {
        return binarySearchR(arr.slice(0, mid), key);
    } else {
        return binarySearchR(arr.slice(mid+1), key);
    }
}

const a = [1,2,3,4,5,6,7,8]
console.log(binarySearchR(a, 33));