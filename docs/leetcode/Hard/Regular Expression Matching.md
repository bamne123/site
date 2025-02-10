**Regular Expression Matching**

**Problem Statement:**
Given a string `s` and a pattern `p`, return `true` if `s` matches `p`, `false` otherwise.

**Example 1:**
Input: `s = "ab", p = "ab"` Output: `true`
Explanation: Both strings are equal, so they match.

**Example 2:**
Input: `s = "ab", p = "a"` Output: `false`
Explanation: String `s` does not contain substring `p`.

**Example 3:**
Input: `s = "ab", p = "b"` Output: `false`
Explanation: String `s` does not contain substring `p`.

**Example 4:**
Input: `s = "", p = "ab"` Output: `true`
Explanation: An empty string matches any string.

**Time Complexity:**
The time complexity of this solution is O(n*m), where n is the length of the string `s` and m is the length of the pattern `p`. This is because we need to iterate over both the string and the pattern to determine if they match.

**Space Complexity:**
The space complexity of this solution is O(1), as we only need a constant amount of space to store the input string and pattern.

**Solution:**
```python
def isSubsequence(s: str, p: str) -> bool:
    """
    Returns true if s matches p, false otherwise.
    
    :param s: Input string
    :param p: Pattern string
    :return: bool
    """
    # Initialize two pointers to keep track of the current position in s and p
    s_pointer = 0
    p_pointer = 0
    
    # Iterate over the string p
    while p_pointer < len(p):
        # If the current character in p matches the current character in s
        if p_pointer < len(p) and p[p_pointer] == s[s_pointer]:
            # Move the pointer in s forward
            s_pointer += 1
        # Move the pointer in p forward
        p_pointer += 1
    
    # If we have iterated over the entire string, they match
    return s_pointer == len(s)
```
**Explanation:**
We use two pointers, `s_pointer` and `p_pointer`, to keep track of the current position in the string `s` and pattern `p`, respectively. We iterate over the string `p` and move the `s_pointer` forward whenever we find a match between the current character in `p` and the current character in `s`. If we reach the end of the string `s`, it means they match, and we return `True`. If we don't reach the end of the string `s` after iterating over the entire string, it means they don't match, and we return `False`.

### **Solution in Markdown:**
```md
# Regular Expression Matching Problem

**Problem Description:**
Given a string `s` and a pattern `p`, return `true` if `s` matches `p`, `false` otherwise.

## Example Use Cases

* `s = "ab", p = "ab"` Output: `true`
* `s = "ab", p = "a"` Output: `false`
* `s = "ab", p = "b"` Output: `false`
* `s = "", p = "ab"` Output: `true`

## Time Complexity

* O(n*m)

## Space Complexity

* O(1)

## Solution
```python
def isSubsequence(s: str, p: str) -> bool:
    """
    Returns true if s matches p, false otherwise.
    
    :param s: Input string
    :param p: Pattern string
    :return: bool
    """
    # Initialize two pointers to keep track of the current position in s and p
    s_pointer = 0
    p_pointer = 0
    
    # Iterate over the string p
    while p_pointer < len(p):
        # If the current character in p matches the current character in s
        if p_pointer < len(p) and p[p_pointer] == s[s_pointer]:
            # Move the pointer in s forward
            s_pointer += 1
        # Move the pointer in p forward
        p_pointer += 1
    
    # If we have iterated over the entire string, they match
    return s_pointer == len(s)
```