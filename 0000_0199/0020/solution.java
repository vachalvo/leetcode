class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(char c : s.toCharArray()) {
            if(c == '(' || c == '[' || c == '{') {
                stack.push(c);
                continue;
            }

            if(stack.empty()) return false;

            switch (stack.pop()) {
                case '(':
                    if(c != ')') return false;
                    break;
                case '[':
                    if(c != ']') return false;
                    break;
                case '{':
                    if(c != '}') return false;
                    break;
            }
        }

        return stack.empty();
    }
}
