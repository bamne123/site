### Add Two Numbers

#### Problem Information

- **Difficulty:** Medium
- **Category:** Linked List, Math, Recursion
- **Companies:** Known companies that frequently ask this
- **Link:** [LeetCode](https://leetcode.com/problems/add-two-numbers)
- **Companies:** LeetCode
- **Level:** Beginner

#### Problem Statement

Given two non-negative integers `num1` and `num2` representing non-negative integers, compute their sum without using the + operator.

#### Examples

```
Input: num1 = 2, num2 = 3
Output: 5
Explanation: 2 + 3 = 5
```

```
Input: num1 = 4, num2 = 6
Output: 10
Explanation: 4 + 6 = 10
```

#### Constraints

- **Input Types:** Both `num1` and `num2` are non-negative integers
- **Output Type:** The sum of `num1` and `num2` without using the + operator

#### Solution Approach

1.  Create a new linked list with two nodes `head` and a dummy node `dummy`.
2.  Initialize `head` as `dummy`.
3.  Iterate through `num1` and `num2` from the start, and update the values of `head` and `dummy` as needed.
4.  When the end of `num1` is reached, append `dummy` to `head` and update `head` as the new `head`.
5.  When the end of `num2` is reached, append `dummy` to `head` and update `head` as the new `head`.
6.  After the loop, if `num1` is not empty, append `dummy` to `head` and update `head` as the new `head`.
7.  When the end of `num2` is reached, append `dummy` to `head` and update `head` as the new `head`.

#### Complexity Analysis

- **Time Complexity:** O(max(m, n))
  - Time complexity of the entire solution is O(max(m, n)), where m and n are the lengths of `num1` and `num2`, respectively.
- **Space Complexity:** O(max(m, n))
  - Space complexity of the solution is O(max(m, n)).

#### Code Implementation

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, num1, num2):
        dummy = ListNode()
        current = dummy
        carry = 0
        while num1 or num2 or carry:
            x = num1.val if num1 else 0
            y = num2.val if num2 else 0
            sum = carry + x + y
            carry = sum // 10
            current.next = ListNode(sum % 10)
            current = current.next
            if num1:
                num1 = num1.next
            if num2:
                num2 = num2.next
        return dummy.next
```

#### Step-by-Step Explanation

1.  Create a new linked list with a dummy node.
2.  Initialize `dummy` as the dummy node and `carry` as 0.
3.  While `num1` is not empty, `num2` is not empty, or there is a carry, start the iteration:
    *   Get the values of `num1` and `num2` using their current values (if any).
    *   Calculate the sum of `num1` and `num2` using the carry value.
    *   Set the carry value to the sum divided by 10.
    *   Create a new node with the sum modulo 10 using `carry`.
    *   Update the next pointer of the dummy node to the new node.
    *   Move to the next node by updating `current` to the next node.
4.  Return the next node of the dummy node, which is the head of the linked list.

#### Alternative Approaches

1.  **Recursive Approach:**
   - Use a recursive function to solve the problem.
   - In each recursive call, calculate the sum of `num1` and `num2`, update the carry value, and recursively call the function until `num1` is empty, `num2` is empty, or there is no carry.
   - Combine the code using a stack data structure to avoid repeated computations.

2.  **Iterative Approach:**
   - Use an iterative approach to solve the problem.
  - Initialize a carry value to 0.
  - Iterate through `num1` and `num2` using two pointers, one for `num1` and one for `num2`.
  - In each iteration, calculate the sum of `num1` and `num2`, update the carry value, and move both pointers.
  - After the iteration, return the head of the linked list.

#### Common Mistakes and Pitfalls

1.  **Memory Allocation:**
   - Make sure to allocate memory for the linked list and the dummy node.
   - Use a stack data structure to avoid repeated computations.

2.  **Error Handling:**
   - Handle edge cases such as an empty input or an invalid input.
   - Return a default value or a specific error message for invalid inputs.

#### Related Problems

- [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii)
- [Add Three Numbers](https://leetcode.com/problems/add-three-numbers)
```

#### Response Guidelines

1.  **Validation Rules:**
   - All sections must be properly formatted
   - Code blocks must specify the language
   - Links must be properly formatted and valid
   - Examples must include input, output, and explanation
   - Constraints must be clearly listed

2.  **Error Handling:**
   - If problem not found: "Unable to find LeetCode problem ${reference}. Please verify the problem number or title."
   - If invalid input: "Please provide a valid LeetCode problem reference."
   - If missing solution: Include placeholder text "Solution not provided"

3.  **Quality Checks:**
   - Ensure all code examples are properly indented
   - Verify all mathematical notations are correct
   - Confirm complexity analysis is accurate and explained
   - Validate all markdown formatting

4.  **Special Cases:**
   - For premium problems: Note that detailed solution cannot be provided
   - For contest problems: Include contest number and date
   - For new problems: Note if it's from an ongoing contest

#### Style Guidelines

1.  **Code Formatting:**
   - Use consistent indentation (2 spaces)
   - Include meaningful variable names
   - Add inline comments for complex logic
   - Follow language-specific best practices

2.  **Explanation Style:**
   - Use clear, concise language
   - Include relevant diagrams when helpful
   - Break down complex concepts into steps
   - Provide intuition behind the solution

3.  **Complexity Analysis:**
   - Explain both best and worst cases
   - Include space complexity for all variables
   - Explain any amortized complexity
   - Note any specific input dependencies

#### End Response

Always include a footer with:
```
---
Generated by LeetCode Documentation Assistant
Last Updated: 2023-12-15
```
This will provide the current date and help users track changes to the documentation.