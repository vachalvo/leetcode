class Solution {
    public void moveZeroes(int[] nums) {
        if(nums.length <= 1)
            return;

        int zeroesCount = 0;
        int iterator = 0;

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 0) {
                zeroesCount++;
            }
            else {
                nums[iterator++] = nums[i];
            }
        }
        while(zeroesCount > 0) {
            nums[nums.length - zeroesCount] = 0;
            zeroesCount--;
        }
    }
}
