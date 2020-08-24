function merge(left, right) {
    let i = 0;
    let j = 0;
    let n = [];

    while (i < left.length || j < right.length) {
        if (i >= left.length) {
            n.push(right[j++]);
        } else if (j >= right.length) {
            n.push(left[i++]);
        } else if (left[i] < right[j]) {
            n.push(left[i++]);
        } else if (right[j] < left[i]) {
            n.push(right[j++]);
        }
    }

    return n;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

let arr = [10, 3, 11, 4, 2, 6, 8];
console.log(mergeSort(arr));