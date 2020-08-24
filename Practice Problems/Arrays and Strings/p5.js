function oneAway(str1, str2) {
    let l_dif = Math.abs(str1.length-str2.length);
    if (l_dif > 1) return false;

    let smallerStr = str1.length <= str2.length ? str1 : str2;
    let largerStr = str1.length > str2.length ? str1 : str2;
    let i = 0;
    let j = 0;
    let numErrors = 0;

    while (i < smallerStr.length) {
        if (smallerStr[i] !== largerStr[j]) {
            if (smallerStr[i] === largerStr[j+1]) {
                numErrors += 1;
                j += 1;
            } else if (smallerStr[i+1] === largerStr[j+1]) {
                numErrors += 1;
                i += 1;
                j += 1;
            } else {
                return false;
            }
        } else {
            i += 1;
            j += 1;
        }
    }

    return (l_dif === 0 && numErrors === 1) || numErrors === 0;
}

let s1 = 'abcdee';
let s2 = 'abcd';
console.log(oneAway(s1, s2));