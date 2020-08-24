// check if one string is a permutation of the other

// easy solution
// iterate both strings
//  add first string to hash table
//  remove second string from hash table
//  return false if you try to remove non-e val
function isPerm(s1, s2) {
    if (s1.length !== s2.length) return false
    let a = {}
    for (let i = 0; i < s1.length; i++) {
        if (!a[s1[i]]) {
            a[s1[i]] = 1
        } else {
            a[s1[i]] += 1
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (!a[s2[i]]) {
            return false;
        } else {
            a[s2[i]] -= 1
            if (a[s2[i]] === 0) {
                delete a[s2[i]];
            }
        }
    }
    return true
}

// better solution
// iterate both strings at same time
// add char code values to respective var
// compare vars
function isPerm2(s1, s2) {
    if (s1.length !== s2.length) return false;
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < s1.length; i++) {
        c1 += s1.charCodeAt(i)
        c2 += s2.charCodeAt(i)
    }
    return c1 === c2
}

let a1 = 'abbb'
let a2 = 'aabb'
console.log(isPerm2(a1,a2))