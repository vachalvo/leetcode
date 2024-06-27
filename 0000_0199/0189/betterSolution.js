var reverseArray = (nums, start, end) => {
    let tmp, first = start, last = end

    for(let i = 0; i < (end - start) / 2; i++){
        tmp = nums[first]
        nums[first++] = nums[last]
        nums[last--] = tmp
    }
}

var rotate = function(nums, k) {
    if(nums.length < 2) return

    const modK = k % nums.length

    reverseArray(nums, 0, nums.length - 1)
    reverseArray(nums, modK, nums.length - 1)
    reverseArray(nums, 0, modK - 1)
};
