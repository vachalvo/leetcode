class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        StringBuilder stringBuilder = new StringBuilder();
        char c;

        for(int i = 0; i < strs[0].length(); i++) {
            c = strs[0].charAt(i);

            for(int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() || c != strs[j].charAt(i)) {
                    return stringBuilder.toString();
                }
            }

            stringBuilder.append(c);
        }

        return stringBuilder.toString();
    }
}
