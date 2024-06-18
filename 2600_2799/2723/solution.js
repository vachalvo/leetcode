/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    var res = 0;
    await Promise.all([promise1, promise2]).then(function(valArray) {
        res = valArray.reduce((partialSum, a) => partialSum + a, 0);
    });
    return res;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
