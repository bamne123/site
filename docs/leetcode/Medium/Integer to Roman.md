**Integer to Roman**
================

### **Problem Statement**

Convert an integer to its corresponding Roman numeral representation.

**Example 1:** `int-to-roman(1)`

**Example 2:** `int-to-roman(4)`

**Example 3:** `int-to-roman(5)`

**Problem Statement (Full)**

The `integer-to-roman` problem is to convert an integer to its corresponding Roman numeral representation.

**Explanation**

The Roman numeral system uses a base-100 system, where each digit represents a value from 1 to 100. The value of each digit is as follows:

*   I = 1
*   V = 5
*   X = 10
*   L = 50
*   C = 100
*   D = 500
*   M = 1000

To convert an integer to a Roman numeral representation, you can use the following steps:

1.  Divide the integer by 1000 (the base of the Roman numeral system).
2.  For each quotient, multiply it by 1000 and subtract the product from the original number.
3.  Repeat the process with the quotient until the quotient becomes 0.
4.  At each step, add the corresponding Roman numeral digit to the result.

**Time Complexity**

The time complexity of the solution is O(n), where n is the number of digits in the integer.

**Space Complexity**

The space complexity of the solution is O(1), as it only uses a constant amount of space to store the variables.

**User Solution (if provided)**

If the user provides their solution code, it should be formatted in Markdown as follows:
```markdown
# User's Solution
## Solution Explanation
[Explain the solution with an example]
## Time & Space Complexity
- **Time Complexity:** O(n), where n is the number of digits in the integer.
- **Space Complexity:** O(1)
```
**LeetCode Official Solution**

If the official LeetCode solution is provided, it will be displayed as follows:
```python
# LeetCode Official Solution
def int_to_roman(num: int) -> str:
    """
    Converts an integer to its corresponding Roman numeral representation.
    
    Args:
        num (int): The integer to convert.
    
    Returns:
        str: The Roman numeral representation of the integer.
    """
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]
    
    roman_num = ""
    i = 0
    while num > 0:
        for _ in range(num // val[i]):
            roman_num += syb[i]
            num -= val[i]
        i += 1
    
    return roman_num
```
**Generated Markdown Data**

```markdown
# Integer to Roman

## Problem Statement
The integer to roman problem is to convert an integer to its corresponding roman numeral representation.

## Explanation
The roman numeral system uses a base-100 system, where each digit represents a value from 1 to 100. The value of each digit is as follows:

*   I = 1
*   V = 5
*   X = 10
*   L = 50
*   C = 100
*   D = 500
*   M = 1000

To convert an integer to a roman numeral representation, you can use the following steps:

1.  Divide the integer by 1000 (the base of the roman numeral system).
2.  For each quotient, multiply it by 1000 and subtract the product from the original number.
3.  Repeat the process with the quotient until the quotient becomes 0.
4.  At each step, add the corresponding roman numeral digit to the result.

## Time Complexity
The time complexity of the solution is O(n), where n is the number of digits in the integer.

## Space Complexity
The space complexity of the solution is O(1), as it only uses a constant amount of space to store the variables.

## User's Solution
### Solution Explanation
### Time & Space Complexity
- **Time Complexity:** O(n), where n is the number of digits in the integer.
- **Space Complexity:** O(1)

### Code
```python
# LeetCode Official Solution
def int_to_roman(num: int) -> str:
    """
    Converts an integer to its corresponding Roman numeral representation.
    
    Args:
        num (int): The integer to convert.
    
    Returns:
        str: The Roman numeral representation of the integer.
    """
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]
    
    roman_num = ""
    i = 0
    while num > 0:
        for _ in range(num // val[i]):
            roman_num += syb[i]
            num -= val[i]
        i += 1
    
    return roman_num
```