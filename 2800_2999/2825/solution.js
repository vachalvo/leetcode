const rotateChar = (c) => c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);

var canMakeSubsequence = function(str1, str2) {
    let p1 = 0
    let p2 = 0

    while(p1 < str1.length && p2 < str2.length) {
        if(str1[p1] === str2[p2]) {
            p1++
            p2++
            continue
        }

        const movedChar = rotateChar(str1[p1])
        if(movedChar === str2[p2]) {
            p1++
            p2++
            continue
        }

        p1++
    }

    return p2 >= str2.length
};
