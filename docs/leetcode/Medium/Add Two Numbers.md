**Problem Title:** [Add Two Numbers](https://leetcode.com/problems/add-two-numbers)

**Difficulty:** Medium

**Tags:** Linked List, Math, Recursion

**Problem Statement:**
You are given two non-empty linked lists representing two non-negative integers. The digits in each linked list are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Example 1:
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342+265=607
```

**Explanation:**
To solve this problem, we can use a dummy node to simplify the code. We iterate through both linked lists simultaneously, adding the corresponding nodes' values and keeping track of any carry-over value. If there is no next node in one of the lists, we add the carry value to the current node's value and return it as the result.

## Solution
```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Create a dummy node to simplify the code
        dummyHead = ListNode(0)
        p = l1
        q = l2
        current = dummyHead
        carry = 0
        
        while (p != None) or (q != None):
            x = p.val if p != None else 0
            y = q.val if q != None else 0
            
            sum = carry + x + y
            carry = sum // 10
            
            current.next = ListNode(sum % 10)
            current = current.next
            
            if p != None: p = p.next
            if q != None: q = q.next
        
        # If there is still a carry value after iterating through both linked lists, add it to the result
        if carry > 0:
            current.next = ListNode(carry)
        
        return dummyHead.next
```

## Time & Space Complexity
- **Time Complexity:** O(m + n), where m and n are the lengths of the input linked lists.
- **Space Complexity:** O(1), excluding the space required for the output linked list.