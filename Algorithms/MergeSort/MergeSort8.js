function merge(left, right) {
    let l = 0;
    let r = 0;
    let n = [];

    while (l < left.length || r < right.length) {
        if (l >= left.length) {
            n.push(right[r++]);
        } else if (r >= right.length) {
            n.push(left[l++]);
        } else if (left[l] < right[r]) {
            n.push(left[l++]);
        } else {
            n.push(right[r++]);
        }
    }

    return n;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

let arr = [10, 3, 11, 4, 2, 6, 8];
console.log(mergeSort(arr));