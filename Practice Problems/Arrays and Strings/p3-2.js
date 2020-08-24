function url(str) {
    let n_s = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            n_s.push('%')
            n_s.push('2')
            n_s.push('0')
        } else {
            n_s.push(str[i])
        }
    }
    return n_s.toString().split(',').join('');
}

let s = 'hi, this is c burk'
console.log(url(s));