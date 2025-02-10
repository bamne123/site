**Integer to Roman**

**Problem Information**

* **Difficulty:** Medium
* **Category:** Math, String
* **Companies:** [Known companies that frequently ask this]
* **Link:** https://leetcode.com/problems/integer-to-roman/

**Problem Statement**

Given an integer, convert it to a roman numeral.

**Examples**

* Input: 4
Output: IV
Explanation: 4 as roman numeral (4)
* Input: 9
Output: IX
Explanation: 9 as roman numeral (IX)
* Input: 13
Output: XIII
Explanation: 13 as roman numeral (XIII)
* Input: 44
Output: XLIV
Explanation: 44 as roman numeral (XLIV)
* Input: 100
Output: C
Explanation: 100 as roman numeral (C)

**Constraints**

* Time Complexity: O(n)
* Space Complexity: O(1)

**Solution Approach**

This problem can be solved by iterating over the input integer from largest to smallest, and for each iteration, subtracting the integer's value from the current number of ones and subtracting the integer's value from the current number of tens.

Here is the solution:

```python
def intToRoman(num):
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
    roman_num = ''
    i = 0
    while num > 0:
        while num >= val[i]:
            roman_num += syb[i]
            num -= val[i]
        i += 1
    return roman_num
```

**Explanation**

* The `val` array stores the integer value of the roman numeral for each place value (hundreds, tens, ones).
* The `syb` array stores the corresponding roman numeral for each place value.
* The `roman_num` string stores the roman numeral representation of the input integer.
* The while loop iterates over the `val` and `syb` arrays, subtracting the current integer value from the input integer as long as it is greater than or equal to the current integer value.
* The `i` variable keeps track of the current place value.
* The while loop appends the corresponding roman numeral to the `roman_num` string and subtracts the current integer value from the input integer.
* The loop repeats until the input integer becomes 0.
* Finally, the `roman_num` string is returned as the result.

**Step-by-Step Explanation**

1. Initialize the `val` and `syb` arrays.
2. Initialize the `roman_num` string.
3. Initialize the `i` variable to 0.
4. While the input integer is greater than 0:
    * While the input integer is greater than or equal to the current integer value in the `val` array:
        * Append the corresponding roman numeral to the `roman_num` string.
        * Subtract the current integer value from the input integer.
    * Increment the `i` variable.
5. Return the `roman_num` string as the result.

**Time Complexity**

The time complexity of this solution is O(n) because it iterates over the `val` and `syb` arrays once.

**Space Complexity**

The space complexity of this solution is O(1) because it uses a constant amount of space to store the `val`, `syb`, and `roman_num` arrays.