
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        if (s.Length == 1)
            return 1;

        int lengthOfLongestSubstring = 0;
        int frontPointer = 0;
        int backPointer = 0;

        HashSet<Char> charSet = new HashSet<Char>();

        while(frontPointer < s.Length)
        {
            if(charSet.Contains(s[frontPointer]))
                charSet.Remove(s[backPointer++]);
            else
                charSet.Add(s[frontPointer++]);

            lengthOfLongestSubstring = Math.Max(charSet.Count, lengthOfLongestSubstring);
        }


        return lengthOfLongestSubstring;
    }
}
