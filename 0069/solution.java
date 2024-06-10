class Solution {
    public int mySqrt(int x) {
        int sqrt = 0;
        int odd = 1;

        while(x > 0) {
            x -= odd;
            odd += 2;
            sqrt++;
        }

        if(x != 0) sqrt--;

        return sqrt;
    }
}
