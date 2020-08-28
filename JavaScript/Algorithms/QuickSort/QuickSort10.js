function swap(arr, s1, s2) {
    const temp = arr[s1];
    arr[s1] = arr[s2];
    arr[s2] = temp;
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    while (left < right) {
        while (arr[left] < pivot) {
            left += 1;
        }
        while (arr[right] > pivot) {
            right -= 1;
        }
        if (left <= right) {
            swap(arr, left, right);
            left += 1;
            right -= 1;
        }
    }
    return left;
}

function quickSort(arr, left, right) {
    if (arr.length > 1) {
        const pivotIndex = partition(arr, left, right);

        if (left < pivotIndex - 1) {
            quickSort(arr, left, pivotIndex - 1);
        }

        if (right > pivotIndex) {
            quickSort(arr, pivotIndex, right);
        }
    }
    return arr;
}

let arr1 = [6, 3, 5, 2, 3, 5, 6, 3, 4];
console.log(arr1);
let arr2 = quickSort(arr1, 0, arr1.length - 1);
console.log(arr2);