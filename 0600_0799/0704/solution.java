
class Solution {
    public int search(int[] nums, int target) {
        if(nums.length == 0)
            return -1;

        int left = 0;
        int right = nums.length - 1;
        int center = left + (right - left) / 2;

        while(left <= right) {
            if(nums[center] == target)
                return center;

            if(nums[center] > target) {
                right = center - 1;
            }
            else {
                left = center + 1;
            }

            center = left + (right - left) / 2;

            if(center >= nums.length || center < 0)
                return -1;
        }


        return -1;
    }
}
