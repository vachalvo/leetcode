
var canTransform = function(start, result) {
    let s = 0, t = 0, n = start.length

    while(s < n || t <  n) {
        if(start[s] === "X") {
            s++
            continuewe
        }

        if(result[t] === "X") {
            t++
            continue
        }

        if(result[t] !== start[s]) return false
        if(start[s] === "L" && s < t)  return false
        if(start[s] === "R" && t < s) return false

        t++
        s++
    }

    return t === n && s === n
};
