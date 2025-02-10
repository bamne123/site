**String to Integer (atoi)**
=========================

### Problem Statement

Given a string containing a single integer, convert it to an integer.

### Example

Input: "123"
Output: 123

Input: "123abc"
Output: 123

Input: "abc123"
Output: 123

### Full Problem Statement

https://leetcode.com/problems/string-to-integer-atoi/

### Solution Explanation

The problem can be solved using a simple and efficient algorithm that iterates over the string, finding the first non-digit character and storing its value in a variable.

```markdown
# Solution

## Time Complexity
O(n), where n is the length of the input string.

## Space Complexity
O(1), as we only use a constant amount of space to store the current digit value.

## Explanation

```python
def lengthOfLongestSubstring(s):
    """
    Returns the length of the longest substring without repeating digits.
    """
    n = len(s)
    max_len = 0
    last = -1
    for i in range(n):
        # If the current character is not in the set, add it to the set and update the max_len
        if s[i] not in s:
            if i - last > max_len:
                max_len = i - last
            s[last] = s[i]
            last = i
    return max_len
```

### LeetCode Official Solution

https://leetcode.com/problems/string-to-integer-atoi/

### Code

```python
def lengthOfLongestSubstring(s):
    """
    Returns the length of the longest substring without repeating digits.
    """
    n = len(s)
    max_len = 0
    last = -1
    for i in range(n):
        # If the current character is not in the set, add it to the set and update the max_len
        if s[i] not in s:
            if i - last > max_len:
                max_len = i - last
            s[last] = s[i]
            last = i
    return max_len
```

### Example Use Cases

* Convert a string to an integer without repeating digits: `s = "123abc123"` -> `max_len = 3`
* Convert a string to an integer with repeating digits: `s = "abc123"` -> `max_len = 0`

### Time and Space Complexity

* Time Complexity: O(n), where n is the length of the input string.
* Space Complexity: O(1), as we only use a constant amount of space to store the current digit value.