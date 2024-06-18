var cancellable = function(fn, args, t) {
    var timeout = setTimeout(() =>
            fn(...args)
        , t)

    return () => clearTimeout(timeout);
};
