/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const res = {}
    arr1.forEach((element) => {
        res[element.id] = element
    })

    arr2.forEach((item) => {
        if(res[item.id]) {
            res[item.id] = {
                ...res[item.id],
                ...item
            }
        } else{
            res[item.id] = item
        }
    })

    return Object.values(res)
};
