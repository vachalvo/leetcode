
class Solution {
    public String mergeAlternately(String word1, String word2) {
        var builder = new StringBuilder();
        var n = Math.max(word1.length(), word2.length());

        for(var i = 0; i < n; i++) {
            if(i < word1.length())
                builder.append(word1.charAt(i));
            if(i < word2.length())
                builder.append(word2.charAt(i));
        }

        return builder.toString();
    }
}
