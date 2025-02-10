**Problem Title:** [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

**Difficulty:** Medium

**Tags:** Hash Table, String, Sliding Window

**Problem Statement:**
Given a string `s`, return the length of the **longest substring without repeating characters**. The input string is already in the format with all characters as unique.

## Example:

Input: `s = "abcba"`

Output: `2`

Explanation: The longest substring without repeating characters is `"abcba"`, which has a length of 2.

## Time & Space Complexity:
- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)  

## Solution:

```python
def lengthOfLongestSubstring(s: str) -> int:
    """
    Returns the length of the longest substring without repeating characters.

    :param s: The input string.
    :return: The length of the longest substring without repeating characters.
    """
    if not s:  
        return 0
    
    start = 0  # Index of the start of the current substring
    max_len = 0  # Maximum length of the substring without repeating characters
    char_set = set()  # Set to store the characters in the current substring

    for end in range(len(s)):
        while s[end] in char_set:  
            # If the current character is in the set, remove the character at the start of the substring
            char_set.remove(s[start])
            start += 1
        
        char_set.add(s[end])  
        # Add the current character to the set
        max_len = max(max_len, end - start + 1)

    return max_len
```

## Explanation:

This solution uses a sliding window approach with a set to keep track of the characters in the current substring. It iterates over the string using `end` as the index of the current character, and `start` as the index of the start of the current substring. If the current character is already in the set, it removes the character at the start of the substring and moves the start to the right. If the current character is not in the set, it adds the character to the set and updates the maximum length.