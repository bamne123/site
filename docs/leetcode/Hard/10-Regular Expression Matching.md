## Regular Expression Matching

**Problem Statement**
Given a text string and a pattern string, determine if the text matches the pattern.

**Example**
```
Input: s = "ababa", p = "ababa"
Output: true
Explanation: The string "ababa" matches the pattern "ababa".
```

### Problem Information

- **Difficulty:** Hard
- **Category:** String Matching, Regular Expressions
- **Companies:** Known companies that frequently ask this
- **Link:** https://leetcode.com/problems/regular-expression-matching

## Solution Approach

1.  **Overview**
    *   This solution uses a backtracking approach to match the pattern with the text string.
    *   It iterates over the text string and checks if the current character matches the first character of the pattern.
    *   If it does, it recursively calls the solution for the remaining characters in the pattern and the text string.
    *   If it doesn't, it backtracks and tries the next character in the pattern.
2.  **Implementation**

    ```python
def isMatch(s: str, p: str) -> bool:
    if not p:  # If pattern is empty, it matches the text if the text is not empty
        return len(s) > 0

    if len(s) == 0:  # If text is empty, it matches if the pattern is not empty
        return False

    last_match = p[0] == s[0]  # Last matching character of pattern and text
    punct = p[1] == '.'  # Punctuation mark

    return isMatch(s[1:], p[1:]) or (last_match and punct and isMatch(s[1:], p[2:]))
```

### Complexity Analysis

-   Time Complexity: O(2^n), where n is the length of the pattern.
-   Space Complexity: O(n), for the maximum recursion depth and the stack.

### Explanation

1.  **Base Case**
    *   If the pattern or the text is empty, it matches if the text is not empty, and vice versa.
2.  **Recursive Case**
    *   If the current character in the text matches the first character of the pattern, it recursively calls the function for the remaining characters in the pattern and the text.
    *   If it doesn't, it backtracks and tries the next character in the pattern.
3.  **Backtracking**
    *   It uses backtracking to try different characters in the pattern and see if they match the text.

### Step-by-Step Explanation

1.  **Initialization**
    *   Initialize the last matching character of the pattern and text, and the punctuation mark.
2.  **Base Case**
    *   If the pattern or the text is empty, it matches if the text is not empty, and vice versa.
3.  **Recursive Case**
    *   If the current character in the text matches the first character of the pattern, it recursively calls the function for the remaining characters in the pattern and the text.
    *   If it doesn't, it backtracks and tries the next character in the pattern.
4.  **Backtracking**
    *   It uses backtracking to try different characters in the pattern and see if they match the text.