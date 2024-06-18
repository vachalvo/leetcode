/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let res = 0

    for(let i = 1; i < s.length; i += 2) {
        res += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i))

        if(i + 1 < s.length) {
            res += Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i))
        }
    }

    return res

};
