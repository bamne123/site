**Longest Palindromic Substring**
==========================

**Problem Statement**
-------------------

Given a string `s`, find the length of the longest palindromic substring.

**Examples**
-----------

* Input: `s = "babad"`
Output: `2` (because `"bab"` is the longest palindromic substring)
* Input: `s = "cbbd"`
Output: `1` (because `"c"` is the longest palindromic substring)

**Constraints**
----------------

* Input string `s` is a non-empty string
* `s` contains only lowercase English letters

**Complexity Analysis**
----------------------

* Time complexity: O(n^2)
	+ We have two nested loops to check all possible substrings
	+ The outer loop has a maximum of n iterations, and the inner loop has a maximum of n/2 iterations (dividing by 2 to avoid counting the same substring twice)
* Space complexity: O(1)
	+ We only use a constant amount of space to store variables

**Code Implementation**
------------------------

```python
def longest_palindromic_substring(s: str) -> int:
    """
    Returns the length of the longest palindromic substring in the input string.

    :param s: The input string
    :return: The length of the longest palindromic substring
    """
    n = len(s)
    longest_length = 0

    # Iterate over all possible substrings
    for i in range(n):
        for j in range(i + 1, n + 1):
            substring = s[i:j]

            # Check if the substring is a palindrome
            if substring == substring[::-1]:
                # Update the longest length if necessary
                longest_length = max(longest_length, len(substring))

    return longest_length
```

**Step-by-Step Explanation**
---------------------------

1. Initialize the `longest_length` variable to 0. This variable will store the length of the longest palindromic substring.
2. Iterate over all possible substrings using the outer loop.
3. For each substring, iterate over all possible substrings starting from the current index using the inner loop.
4. Check if the current substring is a palindrome by comparing it to its reverse (`substring[::-1]`).
5. If the substring is a palindrome, update the `longest_length` variable if necessary.
6. Return the `longest_length` variable at the end of the function.

**Example Use Cases**
---------------------

```python
print(longest_palindromic_substring("babad"))  # Output: 2
print(longest_palindromic_substring("cbbd"))   # Output: 1
print(longest_palindromic_substring("abc"))   # Output: 1
```

**Alternative Solution**
-------------------------

We can solve this problem using dynamic programming. The idea is to build a 2D table `dp` where `dp[i][j]` is the length of the longest palindromic substring ending at index `i` and the character at index `j`.

```python
def longest_palindromic_substring(s: str) -> int:
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    for i in range(n):
        dp[i][i] = 1

    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = 2
        else:
            dp[i][i + 1] = 1

    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1

            if s[i] == s[j] and dp[i + 1][j - 1] == length - 1:
                dp[i][j] = length

    return dp[0][n - 1]
```

This solution has the same time and space complexity as the previous one, but it uses dynamic programming to build the 2D table.