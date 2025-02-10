**Problem Statement**

**Title:** String to Integer (atoi)

**Difficulty:** Medium

**Category:** String

**Companies:** Known companies that frequently ask this

**Link:** https://leetcode.com/problems/string-to-integer-atoi/

**Input:** A string containing a valid integer.

**Output:** The integer converted from the input string.

**Explanation:**

Given a string containing a valid integer, convert it into an integer. The input string may contain any valid integer, including negative numbers, positive numbers, and zero.

**Constraints:**

* The input string is not empty.
* The input string contains only valid digits, possibly including negative signs and decimal points.

**Constraints:**

* The input string is not empty.
* The input string contains only valid digits, possibly including negative signs and decimal points.

**Constraints:**

* The input string is not empty.
* The input string contains only valid digits, possibly including negative signs and decimal points.

**Constraints:**

* The input string is not empty.
* The input string contains only valid digits, possibly including negative signs and decimal points.

**Constraints:**

* The input string is not empty.
* The input string contains only valid digits, possibly including negative signs and decimal points.

**Constraints:**

* The input string is not empty.
* The input string contains only valid digits, possibly including negative signs and decimal points.

## Step-by-Step Solution

1.  Check if the input string is empty.
2.  If it is, return 0 or any other default value.
3.  Initialize a variable to store the sign of the input string.
4.  Iterate through each character in the input string.
5.  If the character is a '-', set the sign to -1.
6.  If the character is a '+', set the sign to 1.
7.  Initialize a variable to store the result.
8.  Iterate through each character in the input string starting from the second character (index 1).
9.  If the character is a digit, convert it to an integer and add it to the result.
10. If the character is a '-', subtract the integer from the result.
11. If the character is a '+', add the integer to the result.
12. If the input string contains a decimal point, divide the result by 10.
13. If the input string contains a negative sign, multiply the result by -1.
14. Return the final result.

### Example

Input: "123"
Output: 123

Input: "-456"
Output: -456

Input: "  -456  "
Output: -456

Input: "123abc"
Output: 123

### Step-by-Step Explanation

1.  Check if the input string is empty. If it is, return 0 or any other default value.
2.  Initialize a variable to store the sign of the input string. In this case, it's set to -1 because the input string is negative.
3.  Iterate through each character in the input string. For each character:
    *   If the character is a '-', set the sign to -1.
    *   If the character is a '+', set the sign to 1.
4.  Initialize a variable to store the result. This variable will be used to store the final integer.
5.  Iterate through each character in the input string starting from the second character (index 1). For each character:
    *   If the character is a digit, convert it to an integer and add it to the result.
    *   If the character is a '-', subtract the integer from the result.
    *   If the character is a '+', add the integer to the result.
6.  If the input string contains a decimal point, divide the result by 10.
7.  If the input string contains a negative sign, multiply the result by -1.
8.  Return the final result.

### Code Implementation

```python
def stringToInt(s: str) -> int:
    if not s:
        return 0
    sign = 1
    if s[0] == '-':
        sign = -1
        s = s[1:]
    result = 0
    for char in s:
        if char.isdigit():
            result = result * 10 + int(char)
        else:
            break
    return result * sign
```

### Step-by-Step Explanation of Code Implementation

1.  Check if the input string is empty. If it is, return 0 or any other default value.
2.  Initialize a variable to store the sign of the input string. In this case, it's set to 1 because the input string is positive.
3.  Initialize a variable to store the result. This variable will be used to store the final integer.
4.  Iterate through each character in the input string starting from the second character (index 1). For each character:
    *   If the character is a digit, convert it to an integer and add it to the result.
    *   If the character is a '-', subtract the integer from the result.
    *   If the character is a '+', add the integer to the result.
5.  If the input string contains a decimal point, divide the result by 10.
6.  If the input string contains a negative sign, multiply the result by -1.
7.  Return the final result.

### Example

Input: "123"
Output: 123

Input: "-456"
Output: -456

Input: "  -456  "
Output: -456

Input: "123abc"
Output: 123

### Step-by-Step Explanation of Example

1.  Check if the input string is empty. If it is, return 0 or any other default value.
2.  Initialize a variable to store the sign of the input string. In this case, it's set to 1 because the input string is positive.
3.  Initialize a variable to store the result. This variable will be used to store the final integer.
4.  Iterate through each character in the input string. For each character:
    *   If the character is a digit, convert it to an integer and add it to the result.
    *   If the character is a '-', subtract the integer from the result.
    *   If the character is a '+', add the integer to the result.
5.  If the input string contains a decimal point, divide the result by 10.
6.  If the input string contains a negative sign, multiply the result by -1.
7.  Return the final result.

### Code Implementation of Example

```python
def stringToInt(s: str) -> int:
    if not s:
        return 0
    sign = 1
    if s[0] == '-':
        sign = -1
        s = s[1:]
    result = 0
    for char in s:
        if char.isdigit():
            result = result * 10 + int(char)
        else:
            break
    return result * sign
```