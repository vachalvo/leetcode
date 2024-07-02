/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let counter = 0
    let hasThreeConsecutiveOdds = false

    arr.forEach((num) => {
        if(num % 2 === 0) {
            counter = 0;
            return;
        }
        counter++

        if(counter === 3) hasThreeConsecutiveOdds = true
    })

    return hasThreeConsecutiveOdds
};
