// Given a string, check if it is a permutation of a palindrome

/* how do we know if palindrome?
    > only one char can have an odd number of appearances
        > abcba
        > abba
*/  

function permIsPal(str) {
    let a = {}
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (!a[str[i]]) {
            a[str[i]] = 1;
            c += 1;
        } else {
            a[str[i]] += 1;
            if (a[str[i]] % 2 === 0) {
                c -= 1;
            } else {
                c += 1;
            }
        }
    }

    return (c <= 1)

    // TODO: filter dict for values where % 2 !== 0, count total, if <= 1, return true

}

//console.log(permIsPal('aabbba'))

/* clever solution: we don't need to count each char, we just need to know if it occurs an odd or even number of times
    > iterate over each char, flip bit at char, (1 & var) at end, check if 1 more than one bit is turned on
*/
function isPermOfPal(str) {
    let bitVector = createBitVector(str);
    return bitVector === 0 || checkExactlyOneBitSet(bitVector);
}

function createBitVector(str) {
    let bitVector = 0;
    for (let i = 0; i < str.length; i++) { // iterate over each character
        let bit = str.charCodeAt(i); // get bit (bit index in bitVector)
        bitVector = toggle(bitVector, bit); // set bit or flip bit
    }
    return bitVector;
}

function toggle(bitVector, bit) {
    if (bit < 0) return bitVector;

    let mask = 1 << bit; // grab value in bitVector at given bit index
    if ((bitVector & mask) == 0) { // if value does not exist
        bitVector |= mask; // set bit
    } else {
        bitVector &= ~mask; // flip bit
    }

    return bitVector;
}

function checkExactlyOneBitSet(bitVector) {
    return (bitVector & (bitVector - 1)) == 0;
}

// function isPermOfPal(str) {
//     let bitVector = createBitVector(str);
//     return bitVector === 0 || checkExactlyOneBit(bitVector);
// }

// function createBitVector(str) {
//     let bitVector = 0;
//     for (let i = 0; i < str.length; i++) {
//         let mask = str.charCodeAt(i) 
//     }
// }

console.log(isPermOfPal('aabbaabaaa'))

