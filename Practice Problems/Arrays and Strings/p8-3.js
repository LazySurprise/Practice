function zeroMatrix(matrix) {
    let rowHasZeros = false;
    let colHasZeros = false;

    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            rowHasZeros = true;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            colHasZeros = true;
            break;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let row = 1; row < matrix[0].length; row++) {
        if (matrix[row][0] === 0) setRowToZero(matrix, row);
    }
    for (let col = 1; col < matrix[0].length; col++) {
        if (matrix[0][col] === 0) setColToZero(matrix, col);
    }

    if (rowHasZeros) setRowToZero(matrix, 0);
    if (colHasZeros) setColToZero(matrix, 0);
}

function setColToZero(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}
function setRowToZero(matrix, row) {
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[row][i] = 0;
    }
}

let c = [[0,1,1,2], [1, 2, 9, 3], [8, 8, 0, 9], [1, 2, 2, 0]];
//console.log(c);
let n = zeroMatrix(c)
console.log(c);