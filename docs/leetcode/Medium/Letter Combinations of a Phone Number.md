**Letter Combinations of a Phone Number**

### Problem Statement

Given a string `number` of length `n`, return the sequence of letters that would be dialed in order to represent the given number.

### Example

* `number = "23"`, return `"h-x-e"` (because `23` is interpreted as `2 -> 3`, `3 -> x`, and `x -> e`)
* `number = "222"`, return `"v-v-v"` (because `222` is interpreted as `2 -> 2 -> 2`, `2 -> v`, and `v -> v`)
* `number = "23"`, return `"h-x-e"` (as above)

### Solution

**Function:** `letterCombinations`

**Code:**
```python
def letterCombinations(number):
    if not number:
        return []

    phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    def backtrack(path, num left):
        if left == 0:
            result.append(path)
            return
        for letter in phone[num[-1]]:
            backtrack(path + letter, left - 1)

    result = []
    backtrack("", number)
    return result
```

### Explanation

This function uses a recursive approach to build the solution. It defines a dictionary `phone` that maps each digit to its corresponding letters. The `backtrack` function takes two arguments: `path`, which is the current combination of letters, and `num`, which is the remaining number to be dialed.

*   If the remaining number is zero, it means we have completed building the solution, so we append it to the result list.
*   Otherwise, we iterate over each letter in the `phone` dictionary and append it to the current combination `path`. We then recursively call `backtrack` with the updated combination and the decremented remaining number.

Finally, the `letterCombinations` function initializes an empty result list and calls the `backtrack` function with an empty path and the input number.

### Time Complexity

The time complexity of this solution is O(4^n), where n is the length of the input number. This is because for each digit in the input number, we have four possible options (0-3) to choose from.

### Space Complexity

The space complexity of this solution is O(4^n) as well, due to the recursive call stack. However, in the worst case scenario, the call stack can grow up to 4^n.

### Example Use Cases

*   `letterCombinations("23")` returns `"h-x-e"`
*   `letterCombinations("222")` returns `"v-v-v"`
*   `letterCombinations("")` returns `[]`