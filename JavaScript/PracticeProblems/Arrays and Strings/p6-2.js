function compressString(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        if (i === str.length - 1) {
            newStr += (str[i] + count);
            break;
        }
        
        while (str[i] === str[i+1]) {
            count += 1;
            i += 1;
        }
        newStr += (str[i] + count);
    }
    return newStr.length < str.length ? newStr : str;
}

let s = 'aabbbcccc';
console.log(compressString(s));

let s2 = 'abc';
console.log(compressString(s2));