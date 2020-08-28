// Implement an algorithm that determines 
// if a string has all unique data structures
//  > what if you cannot use additional data structures
//      - this makes me think the first iteration should use a hash table
//      - second iteration should use a bit vector

function isUnique(str) {
    let checker = {}

    for (let i = 0; i < str.length; i++) {
        if (!checker[str[i]]) {
            checker[str[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
}

function isUniqueBV(str) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let cur = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if ((checker & (1 << cur)) > 0) {
            return false;
        }
        checker |= (1 << cur);
    }
    return true;
}

let s = 'abcdef'; // unique
let s2 = 'abcdea'; // not unique

console.log(isUniqueBV(s))
console.log(isUniqueBV(s2))