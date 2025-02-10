**Roman to Integer**

### Problem Information

- **Difficulty:** Easy
- **Category:** Hash Table, Math, String
- **Companies:** Amazon, Microsoft, Google
- **Link:** https://leetcode.com/problems/roman-to-integer/
- **Companies:** Known companies that frequently ask this

### Problem Statement

Given a Roman numeral, convert it to an integer.

### Examples

```markdown
Input: romanToInt("III")
Output: 3
Explanation: III = 3

Input: romanToInt("IV")
Output: 4
Explanation: IV = 4

Input: romanToInt("IX")
Output: 9
Explanation: IX = 9

Input: romanToInt("LVIII")
Output: 58
Explanation: LVIII = 58

Input: romanToInt("MCMXCIV")
Output: 1994
Explanation: MCMXCIV = 1994
```

### Constraints

- The input string should only contain valid Roman numerals.
- The input string should not have any leading zeros.
- The input string should not be empty.

### Solution Approach

We will solve this problem by iterating over the input string and pushing each character onto a stack. We will then iterate over the stack and add each value to an integer variable, based on its position in the stack.

```markdown
# RomanToInt
# Time Complexity: O(n)
# Space Complexity: O(n)
# Code Implementation:
class Solution {
    int romanToInt(String s) {
        int total = 0;
        int[] values = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        int[] placeValue = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};

        for (int i = 0; i < s.length(); i++) {
            if (i + 1 < s.length() && values[i] > values[i + 1]) {
                total += placeValue[i + 1] - placeValue[i];
            } else {
                total += placeValue[i];
            }
        }

        return total;
    }
}
```

### Step-by-Step Explanation

1.  Create an array of values for each Roman numeral.
2.  Create an array of place values for each Roman numeral.
3.  Iterate over the input string and initialize a total variable.
4.  Initialize an array to store the place values.
5.  Iterate over the stack and add each value to the total, based on its position in the stack.
6.  Use if-else statements to check if the current Roman numeral is greater than the next one. If it is, then subtract the place value of the next Roman numeral from the total. Otherwise, add the place value of the current Roman numeral to the total.
7.  Return the total.

### Alternative Approaches

1.  **Brute Force Approach**
   *   Time Complexity: O(n^2)
   *   Space Complexity: O(n)
   *   Use a loop to iterate over the input string and calculate the total.
   *   Use a dictionary to map Roman numerals to their corresponding integer values.
   *   Use the built-in `int` function to convert the dictionary keys to their corresponding integer values.
   *   Return the total.

2.  **Dynamic Programming Approach**
   *   Time Complexity: O(n)
   *   Space Complexity: O(n)
   *   Use a table to store the results of subproblems.
   *   Initialize the table with zeros.
   *   Iterate over the input string and fill the table based on the previous row.
   *   Return the final result from the table.

### Related Problems

1.  [II. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
2.  [I. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
3.  [II. Add Parentheses](https://leetcode.com/problems/add-parentheses/)