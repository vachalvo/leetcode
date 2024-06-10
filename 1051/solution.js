/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const expected = [...heights]
    expected.sort((a, b) => a - b)

    let misorderCount = 0
    heights.forEach((height, i) => {
        if(height !== expected[i])
            misorderCount++
    })

    return misorderCount
};
