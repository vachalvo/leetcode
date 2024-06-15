
import java.util.regex.Pattern;


class Solution {
    public boolean areNumbersAscending(String s) {
        Pattern pattern = Pattern.compile("-?\\d+(\\.\\d+)?");
        String[] words = s.split(" ");
        int currentHighest = Integer.MIN_VALUE;

        for(String word : words) {
            if(!pattern.matcher(word).matches()) {
                continue;
            }
            int num = Integer.parseInt(word);
            if(num <= currentHighest)
                return false;

            currentHighest = num;
        }

        return true;
    }
}
