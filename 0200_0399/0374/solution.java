/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        if(n == 1) {
            return 1;
        }

        int l = 0;
        int r = n;
        int center = 1, quessResult;

        while(l <= r) {
            center = l + (r - l) / 2;
            quessResult = guess(center);
            switch(quessResult) {
                case 0:
                    return center;
                case -1:
                    r = center - 1;
                    break;
                case 1:
                    l = center + 1;
                    break;
            }
        }

        return center;
    }
}
