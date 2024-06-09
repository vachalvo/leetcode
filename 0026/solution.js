/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var free = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i-1] !== nums[i]) {
            nums[free] = nums[i];
            free++;
        }
    }
    return free;
};
