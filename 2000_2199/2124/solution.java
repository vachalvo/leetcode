import java.util.regex.Pattern;

class Solution {
    public boolean checkString(String s) {
        if(s.length() == 1)
            return true;

        Pattern pattern = Pattern.compile("[a]*[b]*");
        return pattern.matcher(s).matches();
    }
}
