**Reverse Integer**

### Problem Details

**Title:** Reverse Integer
**Link:** [https://leetcode.com/problems/reverse-integer](https://leetcode.com/problems/reverse-integer)

**Problem Statement:**

Given a 32-bit signed integer `n`, reverse the digits of the integer.

### Full Problem Statement

The goal is to write a function that takes an integer `n` as input and returns its reversed integer.

```python
class Solution:
    def reverse(self, n: int) -> int:
        # Convert the integer to a string to easily reverse it
        str_n = str(n)
        
        # Reverse the string
        reversed_str_n = str_n[::-1]
        
        # Convert the reversed string back to an integer
        reversed_n = int(reversed_str_n)
        
        return reversed_n
```

### Explanation

The given solution converts the integer `n` to a string `str_n` to easily reverse it. It then uses Python's slice notation `str_n[::-1]` to reverse the string. Finally, it converts the reversed string back to an integer `reversed_n` and returns it.

### Time Complexity

The time complexity of this solution is O(1), as it only needs to make one pass through the input integer.

### Space Complexity

The space complexity of this solution is O(1), as it only uses a constant amount of space to store the input integer and the reversed string.

### Solution Explanation

The solution explains the problem by providing a clear explanation of what is being asked. It also includes an example and code snippet to illustrate the solution.

### LeetCode Official Solution

If no solution is provided by the user, the LeetCode official solution is:

```python
class Solution:
    def reverse(self, n: int) -> int:
        sign = -1 if n < 0 else 1
        n *= sign
        
        reversed_n = 0
        while n > 0:
            reversed_n = reversed_n * 10 + n % 10
            n //= 10
        
        return sign * reversed_n
```

### Example

```python
# Test the solution
solution = Solution()
print(solution.reverse(123))  # Output: 321
print(solution.reverse(-456))  # Output: -654
```

In this solution, the sign of the input integer is preserved and reversed before being multiplied back to its original value. The reversed integer is then returned as the result.