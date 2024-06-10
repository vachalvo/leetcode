/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};

    nums.forEach(num => {
        if(map[num]) {
            map[num] = 2;
            return;
        }
        map[num] = 1;
    });

    for (const [key, value] of Object.entries(map)) {
        if(value === 1) return key;
    }

    return 0;
};
