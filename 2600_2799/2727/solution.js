/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    var tmp = obj;
    if(obj instanceof Object) tmp = Object.keys(obj);
    return tmp.length === 0;
};
