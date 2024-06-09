class Solution {
    public boolean isPalindrome(int x) {
        char[] chars = Integer.toString(x).toCharArray();
        int i = 0;
        int j = chars.length - 1;

        while(i < j){
            if(chars[i] != chars[j]) return false;
            i++;
            j--;
        }

        return true;
    }
}
