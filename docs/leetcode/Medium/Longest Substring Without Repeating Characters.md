### **Problem Title:** Longest Substring Without Repeating Characters

[https://leetcode.com/problems/longest-substring-without-repeating-characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

### **Difficulty:** Medium

### **Tags:** String, Hash Table, Sliding Window

### **Problem Statement:** 

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

Input: `s = "abcabcbb"`
Output: `3`
Explanation: The answer is "abc", with the length of 3.

**Example 2:**

Input: `s = "bbbbb"`
Output: `1`
Explanation: The answer is "b", with the length of 1.

**Example 3:**

Input: `s = "pwwkew"`
Output: `3`
Explanation: The answer is "wke", with the length of 3.

### **Explanation**

The problem asks for the length of the longest substring without repeating characters. We can solve this by using a sliding window approach and a hash table to keep track of the characters we have seen so far.

### **Time & Space Complexity**

- **Time Complexity:** O(n), where n is the length of the string. This is because we are scanning the string once.
- **Space Complexity:** O(min(n, m)), where m is the size of the character set. This is because in the worst case, we might have to store all characters in the hash table.

### **Solution**

```markdown
## Solution
```python
def lengthOfLongestSubstring(s: str) -> int:
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
        
    return max_length
```
### **Solution Explanation**

The solution uses a sliding window approach with two pointers `left` and `right`. The `right` pointer is used to expand the window, and the `left` pointer is used to shrink the window when we encounter a repeating character.

We use a hash table `char_set` to keep track of the characters we have seen so far. When we encounter a repeating character, we remove the leftmost character from the hash table and move the `left` pointer to the right.

The maximum length of the substring without repeating characters is updated whenever we find a longer substring.

### **LeetCode Official Solutions**

- [Official LeetCode Solution](https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/)