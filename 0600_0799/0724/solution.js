
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((partialSum, a) => partialSum + a, 0);
    let leftSum = 0, rightSum;

    for(let i = 0; i < nums.length; i++) {
        rightSum = total - leftSum - nums[i];

        if(leftSum === rightSum)
            return i;

        leftSum += nums[i];
    }

    return -1;
};
