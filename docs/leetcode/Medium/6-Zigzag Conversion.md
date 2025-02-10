**Zigzag Conversion**
======================

**Problem Information**
------------------------

*   **Difficulty:** Medium
*   **Category:** Array, String, Two Pointers
*   **Companies:** None
*   **Link:** [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/)

### Problem Statement

Given a linked list of `n` elements, find the conversion of the linked list to a string representation, with alternating digits from left to right and right to left. If the input linked list is empty, return an empty string.

### Examples

*   ```markdown
Input: [1, 2, 3, 4, 5]
Output: "1234"
Explanation:
   Alternate digits from left to right and right to left.

Input: [0]
Output: "0"
Explanation:
   No conversion required.
```

### Constraints

*   The linked list can have any number of nodes.
*   The input linked list is guaranteed to be valid.

### Solution Approach

*   We will use two pointers, one at the beginning and one at the end of the linked list. We will alternate between these two pointers at the end of each iteration of the while loop. This will ensure that the digits from the left end are alternately seen and from the right end are alternately seen.

### Solution Code

```markdown
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def zigzagConversion(self, head: ListNode) -> str:
        """
        Convert the given linked list to a string representation,
        with alternating digits from left to right and right to left.
        
        Args:
        head (ListNode): The head of the linked list.
        
        Returns:
        str: The conversion of the linked list to a string representation.
        """
        res = ""
        prev, curr = None, head
        while curr:
            # Store the value of the current node
            val = curr.val
            # Append the value to the result string
            res += str(val)
            # Alternate the direction of the pointer
            if prev:
                prev.next = curr.next
            else:
                prev = curr
            # Move to the next node
            curr = curr.next
        return res
```

### Step-by-Step Explanation

1.  Initialize two pointers, `prev` and `curr`, to the head of the linked list.
2.  Initialize an empty result string `res`.
3.  While the current node is not `None`:
    *   Append the value of the current node to `res`.
    *   Alternate the direction of the pointer by storing the next node in `prev` and setting `prev` to the current node.
    *   Move to the next node by setting `curr` to the next node.
4.  Return the result string `res`.

### Complexity Analysis

*   Time complexity: O(n), where n is the number of nodes in the linked list.
*   Space complexity: O(n), where n is the number of nodes in the linked list.

### Code Implementation

```python
class Solution:
    def zigzagConversion(self, head: ListNode) -> str:
        """
        Convert the given linked list to a string representation,
        with alternating digits from left to right and right to left.
        
        Args:
        head (ListNode): The head of the linked list.
        
        Returns:
        str: The conversion of the linked list to a string representation.
        """
        res = ""
        prev, curr = None, head
        while curr:
            # Store the value of the current node
            val = curr.val
            # Append the value to the result string
            res += str(val)
            # Alternate the direction of the pointer
            if prev:
                prev.next = curr.next
            else:
                prev = curr
            # Move to the next node
            curr = curr.next
        return res
```