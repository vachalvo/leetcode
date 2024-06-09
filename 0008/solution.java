class Solution {
    public int myAtoi(String s) {
        if(s.length() == 0)
            return 0;

        int position = 0;
        while(position < s.length()) {
            if(s.charAt(position) != ' ') {
                break;
            }
            position++;
        }

        if(position == s.length()) {
            return 0;
        }

        int operator = 1;
        long result = 0;

        if(s.charAt(position) == '-') {
            operator = -1;
            position++;
        }
        else if(s.charAt(position) == '+') {
            position++;
        }

        while(position < s.length()) {
            int num = s.charAt(position) - '0';
            if(num < 0 || num > 9) {
                break;
            }

            if (result > Integer.MAX_VALUE / 10 || (result == Integer.MAX_VALUE / 10 && num > Integer.MAX_VALUE % 10)) {
                return operator == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            result = (result * 10) + num;
            position++;
        }

        result *= operator;

        return (int) result;
    }
}
