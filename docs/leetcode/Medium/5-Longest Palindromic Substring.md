import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 5 - Longest Palindromic Substring

## Problem Information
- **Difficulty:** Medium
- **Category:** Two Pointers, String, Dynamic Programming
- **Link:** [LeetCode](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem Statement
Given a string `s`, find the longest palindromic substring in `s`.

### Examples
Input: `s = "babad"`
Output: `"bab"`
Explanation: `"aba"` is also a valid answer.

Input: `s = "cbbd"`
Output: `"bb"`
Explanation: `"bb"` is a palindrome.

### Constraints
- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

### Hints
- How can we reuse a previously computed palindrome to compute a larger palindrome?
- Consider expanding the palindrome from the middle.

## Solution Approach
The problem can be solved using dynamic programming or by expanding around the center. Here, we will use the expand around center approach. Iterate through each character in the string and consider it as a center for a potential palindrome. Expand around the center, checking for palindromes of odd and even lengths. Keep track of the longest palindrome found so far.

### Complexity Analysis
- **Time Complexity:** O(n^2)
  - For each character in the string, we potentially expand to the entire string length in the worst case.
- **Space Complexity:** O(1)
  - We use constant extra space.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python'},
    {label: 'javascript', value: 'javascript'},
    {label: 'java', value: 'java'},
    {label: 'csharp', value: 'csharp'},
    {label: 'go', value: 'go'},
  ]}
>
<TabItem value="python">
```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expand_around_center(s, left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]

        longest = ""
        for i in range(len(s)):
            # Odd length palindromes
            palindrome1 = expand_around_center(s, i, i)
            if len(palindrome1) > len(longest):
                longest = palindrome1

            # Even length palindromes
            palindrome2 = expand_around_center(s, i, i + 1)
            if len(palindrome2) > len(longest):
                longest = palindrome2

        return longest
```
</TabItem>
<TabItem value="javascript">
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let palindrome1 = expandAroundCenter(s, i, i);
        if (palindrome1.length > longest.length) {
            longest = palindrome1;
        }

        // Even length palindromes
        let palindrome2 = expandAroundCenter(s, i, i + 1);
        if (palindrome2.length > longest.length) {
            longest = palindrome2;
        }
    }

    return longest;
};
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        int L = left, R = right;
        while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public string LongestPalindrome(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.Length; i++) {
            int len1 = ExpandAroundCenter(s, i, i);
            int len2 = ExpandAroundCenter(s, i, i + 1);
            int len = Math.Max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.Substring(start, end + 1);
    }

    private int ExpandAroundCenter(string s, int left, int right) {
        int L = left, R = right;
        while (L >= 0 && R < s.Length && s[L] == s[R]) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}
```
</TabItem>
<TabItem value="go">
```go
func longestPalindrome(s string) string {
    if len(s) < 2 {
        return s
    }

    start, maxLen := 0, 1

    for i := 0; i < len(s); i++ {
        // Check for odd length palindromes
        l, r := i, i
        for l >= 0 && r < len(s) && s[l] == s[r] {
            if r-l+1 > maxLen {
                maxLen = r - l + 1
                start = l
            }
            l--
            r++
        }

        // Check for even length palindromes
        l, r = i, i+1
        for l >= 0 && r < len(s) && s[l] == s[r] {
            if r-l+1 > maxLen {
                maxLen = r - l + 1
                start = l
            }
            l--
            r++
        }
    }

    return s[start : start+maxLen]
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize `longest` to an empty string.
2. Iterate through each character `i` of the input string `s`.
3. For each `i`, consider it as the center of a potential palindrome and expand around it to check for odd-length palindromes.
4. Call `expand_around_center` with `left = i` and `right = i`. This function expands outwards as long as the characters at `left` and `right` are equal and within the string boundaries.
5. If the palindrome found in step 4 is longer than the current `longest`, update `longest`.
6. For each `i`, consider it as the left center of a potential palindrome and expand around it to check for even-length palindromes.
7. Call `expand_around_center` with `left = i` and `right = i + 1`.
8. If the palindrome found in step 7 is longer than the current `longest`, update `longest`.
9. After iterating through all characters, return the `longest` palindrome found.

## Alternative Approaches
1. **Dynamic Programming**
   - Time Complexity: O(n^2)
   - Space Complexity: O(n^2)
   - Trade-offs: Requires extra space for the DP table, but can be more efficient in certain cases.

2. **Manacher's Algorithm**
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: More complex to implement but provides a linear time solution.

## Common Mistakes and Pitfalls
1. Off-by-one errors when expanding around the center.
2. Failing to consider both odd and even length palindromes.
3. Incorrectly updating the longest palindrome found.

## Related Problems
- [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
