function compressString(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        let c_c = 1;
        while (str[i] === str[i + 1]) {
            c_c += 1;
            i += 1;
        }
        newStr += (str[i] + c_c);
    }

    return (newStr.length < str.length) ? newStr : str;
}

// let a = 'aaabbbbbcccc';
// let b = 'abcdefghijkl'
// console.log(compressString(a));
// console.log(compressString(b));

function compressString2(str) {
    let newStr = '';
    let c = {};

    for (let i = 0; i < str.length; i++) {
        if (!c[str[i]]) {
            c[str[i]] = 1;
        } else {
            c[str[i]] += 1;
        }
        if (i > 0 && str[i] !== str[i-1]) {
            newStr += (str[i-1] + c[str[i-1]]);
            delete c[str[i-1]];
        }
        if (i === str.length - 1) {
            newStr += (str[i] + c[str[i]]);
        }
    }
    return (newStr.length < str.length) ? newStr : str;
}

let a = 'aaabbbbbccccbbc';
let b = 'abcdefghijkl'
console.log(compressString2(a));
//console.log(compressString2(b));