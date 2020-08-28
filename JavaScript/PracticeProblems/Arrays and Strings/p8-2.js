function zeroMatrixFirstTry(matrix) {
    let newMatrix = JSON.parse(JSON.stringify(matrix));
    let len = matrix.length;
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            if (matrix[row][col] === 0) {
                setRowToZero(newMatrix, row, len);
                setColToZero(newMatrix, col, len);
            }
        }
    }
    return newMatrix;
}

function setRowToZero(matrix, row) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[row][i] = 0;
    }
}

function setColToZero(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}

// 1) create empty matrix
// 2) iterate over given matrix
// 3) if 0
//      3.1) enter row into empty matrix
//      3.2) enter column into empty matrix

// above is not solution. we cannot make new matrix

function zeroMatrix(matrix) {
    let rowHasZero = false;
    let colHasZero = false;

    // check if first row should be zerod
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[0][i] === 0) {
            rowHasZero = true;
            break;
        }
    }

    // check if first col should be zerod
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            colHasZero = true;
            break;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) setRowToZero(matrix, i)
    }
    
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[0][i] === 0) setColToZero(matrix, i)
    }

    if (rowHasZero) {
        setRowToZero(matrix, 0);
    }
    
    if (colHasZero) {
        setColToZero(matrix, 0);
    }


}

/**
 * 0 x x x
 * x x x x
 * x x x x
 * x x x x
 */

let c = [[0,1,1,2], [1, 2, 9, 3], [8, 8, 3, 9], [1, 2, 2, 3]];
//console.log(c);
let n = zeroMatrix(c)
console.log(c);