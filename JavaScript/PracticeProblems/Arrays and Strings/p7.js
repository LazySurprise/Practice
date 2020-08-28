function rotate(matrix) {
    /**
     * [
        * [1, 1, 1, 1],
        * [1, 1, 1, 1],
        * [1, 1, 1, 1],
        * [1, 1, 1, 1]
     * ]
     */

     // rotate left to top
     // left: 0th element in each arr
     // top: 0th arr
     // process:
     //     > save top
     //     > insert left into top

    const n = matrix.length;
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        let first = layer;
        let last = n - layer - 1;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            top = matrix[first][i];
            matrix[first][i] = matrix[last-offset][first];
            matrix[last-offset][first] = matrix[last][last-offset];
            matrix[last][last-offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
}



function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}

let m = [
    [1, 2, 2, 2],
    [1, 1, 2, 3],
    [1, 4, 3, 3],
    [4, 4, 4, 3]
]

printMatrix(m);
rotate(m);
console.log('----------')
printMatrix(m);
