/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {}
    const result = []

    nums1.forEach((num) => {
        if(!map[num]) {
            map[num] = 0
        }

        map[num]++
    })

    nums2.forEach((num) => {
        if(!map[num])
            return

        result.push(num)
        map[num]--
    })

    return result
};
