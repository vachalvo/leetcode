/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const results = []
    let finishedFnCount = functions.length

    return new Promise((resolve,reject)=>{
        functions.forEach((fn, i)=>{
            fn().then((res) => {
                results[i] = res
                finishedFnCount--
                if(finishedFnCount === 0)
                    resolve(results)
            })
                .catch(reject)
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
