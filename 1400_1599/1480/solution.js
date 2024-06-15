
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length === 1) return nums;

    var final = new Array(nums.length);

    nums.forEach((val, i) => {
        final[i] = i !== 0 ? val + final[i - 1] : val;
    });

    return final;
};
