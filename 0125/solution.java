class Solution {
    public boolean isPalindrome(String s) {
        if(s == null) return false;

        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        int b = s.length() - 1;
        int a = 0;
        while(a < b) {
            if(s.charAt(a) != s.charAt(b))
                return false;

            a++;
            b--;
        }

        return true;
    }
}
