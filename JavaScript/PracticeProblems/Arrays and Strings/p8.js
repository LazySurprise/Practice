// function setZeros(img) {
//     let row = Array(img.length).fill(false);
//     let column = Array(img[0].length).fill(false);

//     for (let i = 0; i < row.length; i++) {
//         for (let j = 0; j < column.length; j++) {
//             if (img[i][j] === 0) {
//                 row[i] = true;
//                 column[j] = true; 
//             }
//         }
//     }

//     for (let i = 0; i < row.length; i++) {
//         if (row[i]) nullifyRow(img, i);
//     }
//     for (let i = 0; i < column.length; i++) {
//         if (column[i]) nullifyColumn(img, i);
//     }

//     return img
// }

function setZeros(img) {
    let rowHasZero = false;
    let colHasZero = false;

    for (let i = 0; i < img[0].length; i++) {
        if (img[0][i] === 0) {
            rowHasZero = true;
            break;
        }
    }

    for (let j = 0; j < img.length; j++) {
        if (img[j][0] === 0) {
            colHasZero = true;
            break;
        }
    }

    for (let i = 1; i < img.length; i++) {
        for (let j = 1; j < img[0].length; j++) {
            if (img[i][j] === 0) {
                img[i][0] = 0;
                img[0][j] = 0;
            }
        }
    }

    for (let i = 0; i < img.length; i++) {
        if (img[i][0] === 0) {
            nullifyRow(img, i);
        }
    }

    for (let i = 0; i < img[0].length; i++) {
        if (img[0][i] === 0) {
            nullifyColumn(img, i);
        }
    }

    if (rowHasZero) {
        nullifyRow(img, 0);
    }

    if (colHasZero) {
        nullifyColumn(img, 0);
    }
    return img
}

function nullifyRow(img, row) {
    for (let i = 0; i < img[0].length; i++) {
        img[row][i] = 0;
    }
}

function nullifyColumn(img, column) {
    for (let i = 0; i < img.length; i++) {
        img[i][column] = 0;
    }
}

 let c = [[1,2,1,2], [1, 2, 2, 3], [8, 8, 3, 0]];
 console.log(c);
 console.log(setZeros(c));