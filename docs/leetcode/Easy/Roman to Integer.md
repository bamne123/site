**Roman to Integer**

### Problem Details

**Title:** Roman to Integer
**Difficulty:** Easy
**Tags:** Hash Table, Math, String
**Problem Statement:** Convert a Roman numeral to an integer.

### Explanation

Roman numerals are a number system that originated in ancient Rome. Each letter or symbol in the Roman numeral represents a value, which are combined to form numbers. The values are as follows:

* I = 1
* V = 5
* X = 10
* L = 50
* C = 100
* D = 500
* M = 1000

For example, the Roman numeral "IV" represents the number 4, "IX" represents the number 9, and "MCML" represents the number 1900.

### Example

Given the Roman numeral "MCMXCIV", convert it to an integer.

### Solution

```python
def roman_to_int(s):
    roman_to_int_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    result = 0
    for i in range(len(s)):
        if i > 0 and roman_to_int_dict[s[i]] > roman_to_int_dict[s[i - 1]]:
            result += roman_to_int_dict[s[i]] - 2 * roman_to_int_dict[s[i - 1]]
        else:
            result += roman_to_int_dict[s[i]]
    return result
```

### Time & Space Complexity

* Time Complexity: O(n), where n is the length of the input string.
* Space Complexity: O(1), since we are only using a constant amount of space to store the dictionary and the result.

### LeetCode Official Solutions

* [Official LeetCode Solution](https://leetcode.com/problems/roman-to-integer/)

### Additional Features

* If no solution is provided by the user, leave the "Solution" section empty.
* If the problem is not found, respond with a polite message.
* Ensure that the JSON structure is valid and all fields are properly filled.