/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n === 0) return;
    if(m === 0) {
        nums2.forEach((num, i) => {
            nums1[i] = num
        })
        return;
    }

    let last1 = m - 1;
    let last2 = n - 1;

    for(let i = nums1.length - 1; i >= 0; i--) {
        if(last1 < 0) {
            nums1[i] = nums2[last2--];
            continue;
        }
        if(last2 < 0) {
            nums1[i] = nums1[last1--];
            continue;
        }

        if(nums1[last1] > nums2[last2]) {
            nums1[i] = nums1[last1--];
        }
        else {
            nums1[i] = nums2[last2--];
        }
    }
};
