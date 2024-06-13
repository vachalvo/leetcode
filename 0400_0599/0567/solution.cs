public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if (s1.Length > s2.Length)
            return false;

        int[] s1Frequency = new int[26];
        int[] s2Frequency = new int[26];

        for (int i = 0; i < s1.Length; i++)
        {
            s1Frequency[s1[i] - 'a']++;
        }

        for (int i = 0; i < s2.Length; i++)
        {
            s2Frequency[s2[i] - 'a']++;

            if (s1Frequency.SequenceEqual(s2Frequency))
                return true;

            if (i >= s1.Length - 1)
                s2Frequency[s2[i - s1.Length + 1] - 'a']--;
        }

        return false;
    }
}
