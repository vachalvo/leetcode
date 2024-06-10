public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        var singletons = new HashSet<int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if(singletons.Contains(nums[i]))
                return true;

            singletons.Add(nums[i]);
        }

        return false;
    }
}
