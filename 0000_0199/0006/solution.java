class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) return s;

        List<StringBuilder> rows = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            rows.add(new StringBuilder());
        }

        int currentRow = 0;
        boolean isZig = true;

        for (char c : s.toCharArray()) {
            if(currentRow == 0 || currentRow == numRows - 1) {
                isZig = !isZig;
            }
            rows.get(currentRow).append(c);

            currentRow += isZig ? -1 : 1;
        }

        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) {
            result.append(row);
        }
        return result.toString();
    }
}
