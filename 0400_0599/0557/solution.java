class Solution {
    public String reverseString(String strin) {
        char[] s = strin.toCharArray();
        int l = 0;
        int r = s.length - 1;
        char tmp;

        while(l < r) {
            tmp = s[l];
            s[l++] = s[r];
            s[r--] = tmp;
        }

        return new String(s);
    }

    public String reverseWords(String s) {
        String[] words = s.split(" ");

        for(int i = 0; i < words.length; i++) {
            words[i] = reverseString(words[i]);
        }

        return String.join(" ", words);
    }
}
