/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var res = [];
    arr.forEach((val, i) => res.push(fn(val, i)));
    return res;
};
