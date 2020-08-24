function isPermPal(str) {
    let bitStore = createBitStore(str);
    return onlyOneOdd(bitStore);
}

function createBitStore(str) {
    let bitStore = 0;
    for (let i = 0; i < str.length; i++) {
        let bitIndex = str.charCodeAt(i);
        bitStore = toggle(bitStore, bitIndex);
    }
    return bitStore
}

function toggle(bitStore, bitIndex) {
    let bitMask = 1 << bitIndex;
    if ((bitStore & bitMask) > 0) {
        bitStore &= ~bitMask;
    } else {
        bitStore |= bitMask;
    }
    return bitStore
}

function onlyOneOdd(bitStore) {
    return bitStore === 0 || (bitStore & (bitStore - 1)) === 0
}

console.log(isPermPal('aabbaabaaa'))