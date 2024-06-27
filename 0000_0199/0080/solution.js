/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length

    let uniqueNumberCount = 1
    let freeSpot = 1

    for(var i = 1; i < nums.length; i++) {
        // 1. Same as before number before
        if(nums[i - 1] === nums[i]) {
            // Check if only 1 k-th element is before.
            if(uniqueNumberCount < 2) {
                nums[freeSpot++] = nums[i]
            }

            // Increase k-th element count.
            uniqueNumberCount++;
            continue
        }

        // 2. If i-th and (i - 1)-th are different
        // Reset counter
        uniqueNumberCount = 1
        // Save number to correct spot
        nums[freeSpot++] = nums[i]
    }

    return freeSpot;
};
