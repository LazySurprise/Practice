function isUnique(s) {
    let checker = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (checker[char]) {
            return false
        }
        checker[char] = true
    }
    return true
}


let s = 'abcdef'; // unique
let s2 = 'abcdea'; // not unique

console.log(isUnique(s))
console.log(isUnique(s2))