/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let answer = Number.NEGATIVE_INFINITY;
    let tmp = 0;

    for(let i = 0; i < nums.length; i++) {
        tmp += nums[i];

        if(tmp > answer) answer = tmp;
        if(tmp < 0) tmp = 0;
    }

    return answer;
};
