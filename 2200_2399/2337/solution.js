var canChange = function(start, target) {
    let s = 0, t = 0, n = start.length

    while(s < n || t <  n) {
        if(start[s] === "_") {
            s++
            continue
        }

        if(target[t] === "_") {
            t++
            continue
        }

        if(target[t] !== start[s]) return false
        if(start[s] === "L" && s < t)  return false
        if(start[s] === "R" && t < s) return false

        t++
        s++
    }

    return t === n && s === n
};
