/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = [];
    arr.forEach((val, index) => {
        if(fn(val, index)) res.push(val);
    })
    return res;
};
