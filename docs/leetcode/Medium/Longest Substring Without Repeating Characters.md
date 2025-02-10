# Problem Title: Longest Substring Without Repeating Characters

## Difficulty: Medium 

## Tags: Hash Table, String, Sliding Window

### Full Problem Statement:

Given a string `s`, return the length of the longest substring without repeating characters.

### Example 1:
```
Input: s = "abcab"
Output: 4
Explanation: The answer is 4 because the longest substring without repeating characters is "abcab".
```

### Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is 1 because the longest substring without repeating characters is "b".
```

### Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is 3 because the longest substring without repeating characters is "wke".
```

## Explanation

To solve this problem, we can use a sliding window approach combined with a hash table. We iterate over the string and add each character to the hash table if it's not already present. If the character is already present in the hash table, we slide the window by one position from the beginning until the repeating character is no longer in the hash table.

## Time & Space Complexity

- **Time Complexity:** O(n) where n is the length of the string
  - We make one pass through the string.
- **Space Complexity:** O(min(n, m)) where n is the length of the string and m is the size of the character set
  - In the worst case, we might store all unique characters in the hash table.

## Solution

```python
def lengthOfLongestSubstring(s: str) -> int:
    """
    Returns the length of the longest substring without repeating characters.
    
    Args:
        s (str): The input string.
    
    Returns:
        int: The length of the longest substring without repeating characters.
    """
    # Initialize a set to store unique characters
    char_set = set()
    
    # Initialize variables for the sliding window
    left = 0
    
    # Initialize variable for the maximum length
    max_length = 0
    
    # Iterate over the string
    for right, char in enumerate(s):
        # While the character is in the hash table, slide the window from the beginning
        while char in char_set:
            char_set.remove(s[left])
            left += 1
        
        # Add the current character to the hash table
        char_set.add(char)
        
        # Update the maximum length
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

## Solution Explanation

We use a set `char_set` to store unique characters in the current substring. We also maintain two pointers, `left` and `right`, which represent the start and end of the sliding window.

For each character in the string, we slide the window from the beginning until the repeating character is no longer in the hash table. This ensures that the substring without repeating characters is always to the right of the repeating character.

Finally, we update the maximum length by taking the maximum value between the current maximum length and the length of the current substring.

## LeetCode Official Solutions

Please find the official LeetCode solution [here](https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/).

Note: If you want to provide your own solution, feel free to do so! I'll be happy to help you format it in Markdown.