var addSpaces = function(s, spaces) {
    let res = ""
    let spacesIndex = 0;

    for(let i = 0; i < s.length; i++) {
        if(i === spaces[spacesIndex]) {
            res += " "
            spacesIndex++
        }

        res += s.charAt(i)
    }

    return res
};
