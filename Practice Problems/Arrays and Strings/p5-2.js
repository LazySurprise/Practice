// is one string one char away from another
// 1: remove/insert char
//      abc
//      aabc remove
//      abc
// 2: replace char

function oneAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) return false;
    const maxLength = Math.max(s1.length, s2.length)

    let i = 0;
    let j = 0;
    let k = 0;

    let replaced = false;
    let r = true;
    let r_i = false;
    let r_i_p = true;

    while (i < maxLength || j < maxLength || k < maxLength) {
        if (s1[i] !== s2[i]) {
            if (replaced) {
                r = false;
            }
            replaced = true
        }
        if (s1[j] !== s2[k]) {
            if (r_i) {
                r_i_p = false;
            } else if (s1[j+1] === s2[k]) {
                j += 1;
                if (j === s1.length) r_i_p = false;
            } else if (s1[j] === s2[k+1]) {
                k += 1;
                if (k === s1.length) r_i_p = false;
            }
            r_i = true;
        }
        i += 1;
        j += 1;
        k += 1;
    }

    return r || (r_i_p)// && (s1.length !== s2.length))
}

let a = 'abc';
let b = 'abcd';
console.log(oneAway(a, b))