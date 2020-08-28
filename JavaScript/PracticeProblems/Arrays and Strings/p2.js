// Problem: given two strings, determine if one is a permutation of the other

function permutation(s1, s2) {
    if (s1.length !== s2.length) return false;

    for (let i = 0; i < s1.length; i++) {
        let s_i = s2.indexOf(s1[i])
        if (s_i === - 1) return false
        s2 = s2.slice(0, s_i) + s2.slice(s_i + 1);
    }
    return (s2.length === 0);
}

// O(n) solution, iterate strings, add charCodes, check if totals equal each other
function permutationBV(s1, s2) {
    if (s1.length !== s2.length) return false;

    let v1 = 0;
    let v2 = 0;

    for (let i = 0; i < s1.length; i++) {
        v1 += s1.charCodeAt(i) - 'a'.charCodeAt(0);
        v2 += s2.charCodeAt(i) - 'a'.charCodeAt(0);
        console.log(`v1: ${v1}\tv2: ${v2}`)
    }

    return (v1 === v2);
}

let s1 = 'aBcc '
let s2 = 'c Bac'
console.log(permutationBV(s1, s2))