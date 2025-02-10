**Reverse Integer**

### Problem Statement

Reverse an integer.

#### Examples

*   `reverseInteger(123)` returns `321`
*   `reverseInteger(-456)` returns `-654`

#### Constraints

*   The input integer is non-negative.
*   The output integer is also non-negative.

### Solution Approach

We can solve this problem by using the following approach:

1.  Convert the integer to a string.
2.  Reverse the string using slicing with a step of -1.
3.  Convert the reversed string back to an integer.

### Code Implementation

```python
def reverseInteger(x: int) -> int:
    # Convert the integer to a string
    str_x = str(x)
    
    # Reverse the string
    reversed_str_x = str_x[::-1]
    
    # Convert the reversed string back to an integer
    reversed_int_x = int(reversed_str_x)
    
    # If the reversed integer is negative, return - reversed_int_x
    if reversed_int_x < 0:
        return -reversed_int_x
    
    # Return the reversed integer
    return reversed_int_x
```

### Step-by-Step Explanation

1.  Convert the integer `x` to a string using `str(x)`.
2.  Reverse the string using slicing with a step of -1 using `str_x[::-1]`.
3.  Convert the reversed string back to an integer using `int(reversed_str_x)`.
4.  If the reversed integer is negative, return - reversed_int_x.
5.  Return the reversed integer.

### Example Use Cases

```python
# Test the function with a positive integer
print(reverseInteger(123))  # Output: 321

# Test the function with a negative integer
print(reverseInteger(-456))  # Output: -654
```

### Time and Space Complexity

*   Time complexity: O(log n), where n is the absolute value of the input integer.
*   Space complexity: O(n), where n is the absolute value of the input integer.