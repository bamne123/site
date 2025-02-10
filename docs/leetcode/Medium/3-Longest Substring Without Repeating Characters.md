**Longest Substring Without Repeating Characters**

**Problem Information:**

- **Difficulty:** Medium
- **Category:** Hash Table, String, Sliding Window
- **Companies:** Known companies that frequently ask this
- **Link:** https://leetcode.com/problems/longest-substring-without-repeating-characters
- **Companies:** [insert companies that frequently ask this problem]

**Problem Statement:**

Given a string `s`, find the length of the longest substring without repeating characters.

**Examples:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The longest substring without repeating characters is "abc".

Input: s = "bbbbb"
Output: 1
Explanation: The longest substring without repeating characters is "b".

Input: s = "pwwkew"
Output: 3
Explanation: The longest substring without repeating characters is "wke".

Input: s = "leeeaaa"
Output: 5
Explanation: The longest substring without repeating characters is "e".
```

**Constraints:**

- Time Complexity: O(s.length)
- Space Complexity: O(s.length)

**Solution Approach:**

- Initialize two pointers, `start` and `end`, to the beginning of the string.
- Initialize a sliding window with two characters, `left` and `right`, to the first two characters of the window.
- While the current character is not in the window:
  - Move the `right` pointer to the next character.
  - If the next character is already in the window, move the `left` pointer to the previous character.
- Return the length of the longest substring without repeating characters.

**Code Implementation:**
```python
def lengthOfLongestSubstring(s):
    if not s:
        return 0
    
    n = len(s)
    max_length = 0
    left = 0
    char_set = set()
    
    for right in range(n):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

**Step-by-Step Explanation:**

1. Initialize two pointers, `start` and `end`, to the beginning of the string.
2. Initialize a sliding window with two characters, `left` and `right`, to the first two characters of the window.
3. While the current character is not in the window:
  - Move the `right` pointer to the next character.
  - If the next character is already in the window, move the `left` pointer to the previous character.
4. Return the length of the longest substring without repeating characters.

**Time Complexity:**

- The time complexity is O(n), where n is the length of the string.

**Space Complexity:**

- The space complexity is O(s.length), where s is the input string.

**Alternate Solution:**

- Use a dictionary to store the characters and their indices.
- Initialize two pointers, `start` and `end`, to the beginning of the string.
- Initialize a variable `max_length` to 0.
- Iterate through the string:
  - While the current character is not in the dictionary:
    - Move the `end` pointer to the next character.
    - If the next character is already in the dictionary, move the `start` pointer to the previous character.
  - Update `max_length` with the maximum length of the substring.
- Return `max_length`.

**Code Implementation:**
```python
def lengthOfLongestSubstring(s):
    char_dict = {}
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        if s[right] in char_dict:
            left = max(left, char_dict[s[right]] + 1)
        char_dict[s[right]] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

**Step-by-Step Explanation:**

1. Initialize a dictionary to store the characters and their indices.
2. Initialize two pointers, `left` and `right`, to the beginning of the string.
3. Initialize a variable `max_length` to 0.
4. Iterate through the string:
  - While the current character is not in the dictionary:
    - Move the `right` pointer to the next character.
    - If the next character is already in the dictionary, move the `left` pointer to the previous character.
  - Update `max_length` with the maximum length of the substring.
- Return `max_length`.