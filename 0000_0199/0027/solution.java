class Solution {
    public int removeElement(int[] nums, int val) {
        int last = nums.length - 1;
        int res = 0;

        for(int i = 0; i < nums.length; i++) {
            if(i > last)
                return res;

            if(nums[i] == val) {
                nums[i] = nums[last];
                nums[last] = val;
                last--;
                i--;
                continue;
            }
            res++;
        }

        return res;
    }
}
