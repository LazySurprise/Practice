class Node {
    constructor(value) {
        this.value = value;
        this.references = Array(26);
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
        this.alphabet = this.hashAlphabet();
    }

    hashAlphabet() {
        const a = 'abcdefghijklmnopqrstuvwxyz'.split("");
        let alphabet = {};
        for (let i = 0; i < a.length; i++) {
            alphabet[a[i]] = i;
        }
        return alphabet;
    }

    insert(key, value) {
        // grab root
        let curNode = this.root;

        // get first char from key
        let curCharIndex = 0;
        let curChar = key[curCharIndex];
        let a_i;

        while (curCharIndex < key.length) {
            a_i = this.alphabet[curChar];
            if (!curNode.references[a_i]) {
                curNode.references[a_i] = new Node(null);
            }
            curNode = curNode.references[a_i];
            curCharIndex += 1;
            curChar = key[curCharIndex];
        }
        curNode.value = value;
        // if root has char
        //      get second char, repeat
        // else
        //      enter first char into root
        //      get second char, repeat
    }

    search(key) {
        let curNode = this.find(key);
        if (curNode.value) {
            return curNode.value
        } else {
            return -1
        }

    }

    remove(key) {
        let curNode = this.find(key);
        if (curNode.value) {
            curNode.value = null;
            const keepNode = curNode.references.some(letter => letter !== null);
            if (!keepNode) {
                let c = key[key.length-1];
                let a_i = this.alphabet[curChar];
                prevNode.references[a_i] = null;
            }
        } else {
            return -1
        }
    }

    find(key) {
        let curNode = this.root;

        let curCharIndex = 0;
        let curChar = key[curCharIndex];
        let a_i;

        while (curCharIndex < key.length) {
            a_i = this.alphabet[curChar];
            if (!curNode.references[a_i]) return -1
            curNode = curNode.references[a_i];
            curCharIndex += 1;
            curChar = key[curCharIndex];
        }
        return curNode;
    }

    print() {
        console.log(this.root);
    }
}

const T = new Trie();
T.insert("pie", 1);
T.insert("pies", 1);
console.log(T.search("pie"))
T.remove("pie");
console.log(T.search("pie"))
console.log(T.search("pies"))

//T.insert("pies", 3);

//console.log(T.search("pi"))
//console.log(T.search("pies"))