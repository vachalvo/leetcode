class Solution {
    public int searchInsert(int[] nums, int target) {
        int r = nums.length - 1;
        int l = 0;
        int center = -1;

        while(l <= r) {
            center = l + (r - l) / 2;

            if(nums[center] == target)
                return center;

            if(nums[center] > target) {
                r = center - 1;
            }
            else{
                l = center + 1;
            }
        }


        return nums[center] < target ? center + 1 : center;
    }
}
