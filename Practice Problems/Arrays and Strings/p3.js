function convertStringToUrl(str) {
    return str.replace(/ /g, "%20");
}

function convertStringToUrlU(str) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            c += 1;
        }
    }
    let index = str.length + c * 2;
    for (let i = str.length - 1; i >= 0; i--) {
        console.log('x')
        if (str[i] === ' ') {
            str[index-1] = '0';
            str[index-2] = '2';
            str[index-3] = '%';
            index -= 3;
        } else {
            str[index-1] = str[i];
            index -= 1;
        }
    }
    return str;
}

console.log(convertStringToUrlU("Hi there, how are you"))