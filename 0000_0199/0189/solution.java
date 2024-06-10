class Solution {
    public void rotate(int[] nums, int k) {
        if(nums.length <= 1)
            return;

        k = k % nums.length;

        int[] box = new int[k];

        for(int i = 0; i < k; i++) {
            box[i] = nums[nums.length - i - 1];
        }

        int end = nums.length - 1;
        for(int i = nums.length - 1 - k; i >= 0; i--) {
            nums[end--] = nums[i];
        }

        for(int i = 0; i < box.length; i++) {
            nums[i] = box[box.length - 1 - i];
        }
    }
}
