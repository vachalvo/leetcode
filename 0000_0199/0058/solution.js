/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            if(length === 0)
                continue;
            return length;
        }

        length++;
    }
    return length;
};
