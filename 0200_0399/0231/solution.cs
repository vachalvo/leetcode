public class Solution {
    public bool IsPowerOfTwo(int n) {
        if(n != 1 && n % 2  == 1)
            return false;

        double power = 0;
        int i = 0;
        while(power < n) {
            power = Math.Pow(2, i++);
            if(power == n)
                return true;
        }
        return false;
    }
}
