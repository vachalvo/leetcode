var flat = function (arr, depth, res = []) {
    arr.forEach((element) => {
        if (Array.isArray(element) && depth > 0) {
            flat(element, depth - 1, res);
        } else {
            res.push(element);
        }
    })

    return res;
};
