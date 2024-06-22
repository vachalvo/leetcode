/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(value) {
    // If value is falsy return null
    if(!value) return null

    // If value is NOT an object -> return value
    if(typeof value !== 'object') return value

    // Check if value is array
    // If value is array -> filter falsy values and process remaining values from array (possible objects, arrays)
    if(Array.isArray(value)) return value.filter(Boolean).map(compactObject)

    // Remaining is only for objects
    const compact = {};
    let objValue

    for (const key in value) {
        objValue = compactObject(value[key]);
        if (Boolean(objValue)) compact[key] = objValue;
    }

    return compact;
};
