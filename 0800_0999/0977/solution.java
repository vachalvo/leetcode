class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] res = new int[nums.length];
        PriorityQueue<Integer> queue = new PriorityQueue<>();

        for(int num : nums) {
            queue.add(num * num);
        }
        int i = 0;

        while(!queue.isEmpty()) {
            res[i] = queue.poll();
            i++;
        }

        return res;
    }
}
