import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Longest Substring Without Repeating Characters

## Problem Information
- **Difficulty:** Medium
- **Category:** Hash Table, String, Sliding Window
- **Link:** [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters)

## Problem Statement
Given a string `s`, find the length of the **longest substring** without repeating characters.

### Examples
Input: `s = "abcabcbb"`
Output: `3`
Explanation: The answer is "abc", with the length of 3.

Input: `s = "bbbbb"`
Output: `1`
Explanation: The answer is "b", with the length of 1.

Input: `s = "pwwkew"`
Output: `3`
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

### Constraints
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

### Hints
- Use a sliding window approach.
- Use a hash table to store the characters in the current window.

## Solution Approach
The problem can be solved using the sliding window technique. We maintain a window of characters and a hash table to keep track of the characters in the current window. We expand the window by one character at a time. If the character is already in the hash table, we shrink the window from the left until the character is no longer in the hash table. We update the maximum length of the substring without repeating characters as we go.

### Complexity Analysis
- **Time Complexity:** O(n)
  - We iterate through the string once, where n is the length of the string.
- **Space Complexity:** O(m)
  - We use a hash table to store the characters in the current window, where m is the size of the character set. In the worst case, all characters in the string are unique, so the space complexity is O(n).

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
def lengthOfLongestSubstring(s: str) -> int:
    char_index_map = {}
    start = 0
    max_length = 0

    for end, char in enumerate(s):
        if char in char_index_map and char_index_map[char] >= start:
            start = char_index_map[char] + 1
        char_index_map[char] = end
        max_length = max(max_length, end - start + 1)

    return max_length
```
</TabItem>
<TabItem value="javascript">
```javascript
function lengthOfLongestSubstring(s) {
  let charIndexMap = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }
    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```
</TabItem>
<TabItem value="java">
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charIndexMap = new HashMap<>();
        int start = 0;
        int maxLength = 0;

        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            if (charIndexMap.containsKey(c) && charIndexMap.get(c) >= start) {
                start = charIndexMap.get(c) + 1;
            }
            charIndexMap.put(c, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        Dictionary<char, int> charIndexMap = new Dictionary<char, int>();
        int start = 0;
        int maxLength = 0;

        for (int end = 0; end < s.Length; end++) {
            char c = s[end];
            if (charIndexMap.ContainsKey(c) && charIndexMap[c] >= start) {
                start = charIndexMap[c] + 1;
            }
            charIndexMap[c] = end;
            maxLength = Math.Max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}
```
</TabItem>
<TabItem value="go">
```go
func lengthOfLongestSubstring(s string) int {
    charIndexMap := make(map[rune]int)
    start := 0
    maxLength := 0

    for end, char := range s {
        if index, ok := charIndexMap[char]; ok && index >= start {
            start = index + 1
        }
        charIndexMap[char] = end
        maxLength = max(maxLength, end - start + 1)
    }

    return maxLength
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize a hash map `char_index_map` to store the index of each character in the string.
2. Initialize `start` to 0, which represents the starting index of the current window.
3. Initialize `max_length` to 0, which represents the maximum length of the substring without repeating characters.
4. Iterate through the string `s` using a for loop with index `end` and character `char`.
5. Check if the character `char` is in the hash map `char_index_map` and if its index is greater than or equal to `start`.
   - If it is, update `start` to `char_index_map[char] + 1`.
6. Update the index of the character `char` in the hash map `char_index_map` to `end`.
7. Update `max_length` to the maximum of `max_length` and `end - start + 1`.
8. Return `max_length`.

## Alternative Approaches
1. **Brute Force**
   - Time Complexity: O(n^3)
   - Space Complexity: O(m)
   - Trade-offs: Simple to understand but inefficient.

2. **Using a Set**
   - Time Complexity: O(n)
   - Space Complexity: O(m)
   - Trade-offs: Similar to the hash table approach, but uses a set instead.

## Common Mistakes and Pitfalls
1. Forgetting to update the `start` index when a repeating character is found.
2. Not considering the case when the input string is empty.
3. Using incorrect data structures for storing the characters in the current window.

## Related Problems
- [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
