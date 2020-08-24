// Problem: check if string has all unique characters

// Solution: no extra data structures restraint O(n^2)
function isUnique(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// Solution: dynamic programming solution, iterate array, store values, check if values are in hash table
function isUniqueH(str) {
    let a = {}

    for (let i = 0; i < str.length; i++) {
        if (a[str[i]]) {
            return false
        } 
        a[str[i]] = true;
    }
    return true
}

// Solution: dynamic programming w bit array instead of hash table
function isUniqueBV(str) {
    let checker = 0;

    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if ((checker & (1 << val)) > 0) {
            return false;
        }
        checker |= (1 << val);
    }
    return true;

}

console.log(isUniqueBV('abcdefa'));
console.log(isUniqueBV('abcdef'));