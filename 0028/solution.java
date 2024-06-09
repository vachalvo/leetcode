class Solution {
    public int strStr(String haystack, String needle) {
        if(haystack.equals(needle)) return 0;
        if(needle.length() == 0) return 0;
        if(needle.length() > haystack.length()) return -1;

        return haystack.indexOf(needle);
    }
}
