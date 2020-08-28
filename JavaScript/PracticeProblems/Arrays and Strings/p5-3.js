function oneAway(s1, s2) {
    const dif = Math.abs(s1.length - s2.length);
    if (dif === 0) {
        return oneReplaceAway(s1, s2);
    } else if (dif === 1) {
        let largerString = (s1.length > s2.length) ? s1 : s2;
        let smallerString = (s1.length < s2.length) ? s1 : s2;
        return oneInsertAway(largerString, smallerString);
    }
    return false;
}

function oneEditAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) return false;
    let index1 = 0;
    let index2 = 0;

    let foundDifference = false;
    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (foundDifference) return false;
            foundDifference = true;
            if (s1.length === s2.length) index1++;
        } else {
            index1++;
        }
        index2++
    }
    return true;
}

function oneReplaceAway(s1, s2) {
    let index1 = 0;
    let index2 = 0;
    let replaced = false;
    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (replaced) return false;
            replaced = true;
        }
        index1 += 1;
        index2 += 1;
    }
}

function oneInsertAway(s1, s2) {
    let index1 = 0;
    let index2 = 0;
    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (index1 !== index2) return false;
            if (s1[index1+1] !== s2[index2]) {
                return false;
            }
            index1 += 1;
        }
        index1 += 1;
        index2 += 1;
    }
    return true;
}

let a1 = 'abc';
let a2 = 'abcde';
let a3 = 'acb';
console.log(oneEditAway(a1, a3))