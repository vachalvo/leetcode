/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        if(n < 1)
            return 1;

        int l = 1;
        int r = n;
        int center;
        int answer = 1;

        while(l <= r) {
            center = l + (r - l) / 2;

            if(isBadVersion(center)) {
                answer = center;
                r = center - 1;
            }
            else {
                l = center + 1;
            }
        }

        return answer;
    }
}
