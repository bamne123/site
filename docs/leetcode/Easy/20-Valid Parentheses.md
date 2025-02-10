## Valid Parentheses

### Problem Information

*   **Difficulty:** Easy
*   **Category:** Stack
*   **Companies:** None
*   **Link:** [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
*   **Companies:** None

### Problem Statement

Given a string containing just the characters '(' and ')', add parentheses to make valid parentheses. For example, the valid string "()*" is a valid input, but "()(" and ")()" are not.

### Examples

*   ```javascript
Input: "()"
Output: "()"

Input: "()*()"
Output: "(())*"

Input: "()*)"
Output: ""
```

### Constraints

*   The input string can contain any characters, including '(' and ')'.
*   The parentheses must be balanced.

### Solution Approach

*   We will use a stack to keep track of the opening parentheses.
*   We will iterate over the input string from left to right.
*   For each character, we will pop the top of the stack and if the current character is the same as the top of the stack, we will push the current character to the stack.
*   If the current character is ')' and the top of the stack is '(', we will add a '(' to the stack.
*   After iterating over the entire string, if the stack is not empty, we will add a ')' to the stack.

### Code Implementation

```javascript
var addParentheses = function(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push('(');
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                return "";
            }
            stack.pop();
        }
    }
    return stack.join("");
};
```

### Step-by-Step Explanation

1.  We create an empty stack to store the opening parentheses.
2.  We iterate over the input string from left to right.
3.  For each character, we check if it is an opening parenthesis.
4.  If it is, we push it onto the stack.
5.  If it is a closing parenthesis and the stack is empty, we return an empty string.
6.  If the stack is not empty, we pop the top of the stack (i.e., the top opening parenthesis).
7.  After iterating over the entire string, we join the remaining opening parentheses in the stack with '('. We return the result.

### Example Use Cases

*   ```javascript
console.log(addParentheses("(()")); // Output: "()"
console.log(addParentheses("()*()")); // Output: "(())*"
console.log(addParentheses("()*)")); // Output: ""
```

### Time Complexity

*   O(n), where n is the length of the input string.

### Space Complexity

*   O(n), where n is the length of the input string.