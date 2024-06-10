class Solution {
    public int[] twoSum(int[] numbers, int target) {
         HashMap<Integer, Integer> values = new HashMap<>();
        for(int i = 0; i < numbers.length; i++) {
            values.put(numbers[i], i);
        }

        for(int i = 0; i < numbers.length; i++) {
            int remainder = target - numbers[i];
            if(values.containsKey(remainder) && values.get(remainder) != i) {
                return new int[] {i + 1, values.get(remainder) + 1};
            }
        }

        return new int[2];
    }
}
