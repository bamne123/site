**Valid Parentheses**
=====================

**Problem Statement**
--------------------

Given a string containing just the characters `(` and `)`, determine if the input string is valid.

**Example 1:**
```
Input: "()"
Output: true

Input: "()"
Output: true

Input: "(())"
Output: false
```
**Explanation**
---------------

This problem is a classic example of a "valid parentheses" problem. The idea is to use a stack to keep track of the opening parentheses. When a closing parenthesis is encountered, we check if the top of the stack has the corresponding opening parenthesis. If it does, we pop the opening parenthesis from the stack. If it doesn't, we return `false`. If we finish checking all the parentheses without returning `false`, we return `true`.

**Solution**
------------

```python
def validParentheses(s: str) -> bool:
    """
    Returns true if the input string contains only valid parentheses, false otherwise.
    """
    stack = []
    for char in s:
        # If the character is an opening parenthesis, push it to the stack
        if char == "(":
            stack.append(char)
        # If the character is a closing parenthesis, check if the stack is empty
        elif char == ")":
            # If the stack is empty, return false because there's no matching opening parenthesis
            if not stack:
                return False
            # If the stack is not empty, pop the opening parenthesis from the stack
            else:
                stack.pop()
    # After checking all characters, return true if the stack is empty
    return not stack
```

**Time Complexity**: O(n), where n is the length of the input string. We iterate through the string once to check each character.

**Space Complexity**: O(n), where n is the length of the input string. We use a stack to store the opening parentheses, so the maximum size of the stack is equal to the length of the input string.

**Example Use Cases**
---------------------

*   Valid Parentheses: "()"
*   Invalid Parentheses: "(())", "()()()"
*   No Parentheses: "abab"