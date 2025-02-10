**Palindrome Number**
=====================

**Problem Statement**
--------------------

Given a non-negative integer `n`, determine if it is a palindrome number.

**Example**
-----------

*   Input: 12321
*   Output: `true`
*   Explanation: `12321` is a palindrome number.

**Time & Space Complexity**
---------------------------

*   Time Complexity: O(log n)
*   Space Complexity: O(1)

**Solution**
------------

```markdown
# Solution

## Explanation
### Explanation of the solution

The key insight to solving this problem is to realize that a palindrome number is a number that reads the same forward and backward.

### Algorithm

1.  Convert the number to a string.
2.  Compare the string with its reverse.
3.  If they are the same, the number is a palindrome.

### Code

```python
def is_palindrome_number(n: int) -> bool:
    """
    Returns true if the number is a palindrome, false otherwise.

    Args:
    n (int): The number to check.

    Returns:
    bool: True if the number is a palindrome, false otherwise.
    """
    # Convert the number to a string
    num_str = str(n)
    
    # Compare the string with its reverse
    return num_str == num_str[::-1]
```

**Example Use Cases**
----------------------

```markdown
# Test cases

# Test case 1: Palindrome number
print(is_palindrome_number(12321))  # Output: `true`

# Test case 2: Non-palindrome number
print(is_palindrome_number(12345))  # Output: `false`

# Test case 3: Edge case (single digit number)
print(is_palindrome_number(1))  # Output: `true`
```

### LeetCode Official Solution
---------------------------

```markdown
# LeetCode Official Solution

## Explanation
### Explanation of the solution

The problem is solved using a two-pointer technique. We initialize two pointers, one at the start and one at the end of the string representation of the number.

1.  We compare the characters at the start and end pointers. If they are the same, we move both pointers forward.
2.  If we reach the end of the string without finding a match, we return false.
3.  If we successfully compare all pairs of characters without finding a mismatch, we return true.

### Code

```python
def is_palindrome_number(n):
    """
    Returns true if the number is a palindrome, false otherwise.

    Args:
    n (int): The number to check.

    Returns:
    bool: True if the number is a palindrome, false otherwise.
    """
    # Convert the number to a string
    num_str = str(n)
    
    # Initialize two pointers
    left = 0
    right = len(num_str) - 1
    
    # Compare characters at the start and end pointers
    while left < right:
        if num_str[left] != num_str[right]:
            return False
        left += 1
        right -= 1
    
    return True
```

### LeetCode Solution URL

[Official LeetCode Solution](https://leetcode.com/problems/palindrome-number/)