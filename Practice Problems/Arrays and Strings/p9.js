function isRotation(s1, s2) {
    if (s1.length === s2.length && s1.length > 0) {
        const s1s1 = s1 + s1;
        return s1s1.includes(s2);
    }
    return false;
}

const s1 = 'ookb';
const s2 = 'book';
console.log(isRotation(s1, s2));