function rotate(matrix) {
    let n = matrix.length;
    for (let layer = 0; layer < Math.floor(n/2); layer++) {
        let first = layer;
        let last = n - layer - 1;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
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
    [1, 1, 2, 2],
    [8, 1, 2, 3],
    [7, 4, 3, 4],
    [4, 6, 5, 3]
]

printMatrix(m);
rotate(m);
console.log('----------')
printMatrix(m);

/**
 * 1 X X 4
 * X X X X
 * X X X X
 * 2 X X 3
 */