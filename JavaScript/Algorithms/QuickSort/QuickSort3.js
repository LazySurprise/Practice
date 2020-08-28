function swap(arr, s1, s2) {
    let temp = arr[s1];
    arr[s1] = arr[s2];
    arr[s2] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];

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
        let pivot = partition(arr, left, right);

        if (left < pivot - 1) {
            quickSort(arr, left, pivot - 1);
        }
        
        if (right > pivot) {
            quickSort(arr, pivot, right);
        }
    }

    return arr;
}

//var items = [5,3,7,6,2,9];
/*
    5, 3, 7, 6, 2, 9; p = 6
          l     r
    5, 3, 2, 6, 7, 9; return i = 3

    5, 3, 2; p = 3
    l     r
    2, 3, 5; return i = 1
    
    (left < i - 1) evaluates to false, no more elements on left side of og pivot

    6, 7, 9; p = 7
      lr; return i = 4

    (right > i) evaluates to false, no more elements on right side of og pivot
*/
let items = [1, 3, 2]
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);