/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = 0
    let count = 0

    nums.forEach((num) => {
        if(count === 0)  major = num

        count += major === num ? 1 : -1
    })

    return major
};
