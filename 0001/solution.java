class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
            int requiredNum = target - nums[i];
            if(map.containsKey(requiredNum)) {
                return new int[] {map.get(requiredNum), i};
            }
            map.put(nums[i], i);
        }
        return new int[] {0, 0};
    }
}
