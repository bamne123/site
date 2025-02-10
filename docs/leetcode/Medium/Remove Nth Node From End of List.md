**Problem Title:** Remove Nth Node From End of List

**Difficulty:** Medium

**Tags:** Linked List, Two Pointers

**Problem Statement:**

Given the head of a linked list, remove the nth node from the end of the list.

For example:

* Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2
* Output: 1 -> 2 -> 3 -> 5

**Explanation:**

You can solve this problem by using two pointers, one at the head of the linked list and one at the end. The pointer at the end will move one step at a time until it reaches the nth node from the end. Then, you can remove the node at the end by changing the pointer at the head to point to the node right after the removed node.

**Example:**

Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2

  1
 / \
2   3
\   /
4   5

Initially, the pointers are at the beginning and the end of the linked list.

1. Move the end pointer one step at a time:
  1
 / \
2   3
\   /
4   5

2. Move the end pointer until it reaches the nth node from the end:
  1
 / \
2   3
\/
4   5

3. At this point, the end pointer is at the 2nd node from the end. Remove the node at the 2nd position.

  1
 / \
2   3
\/
4   5

**Time Complexity:** O(n)

**Space Complexity:** O(1)

**Solution:**
```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        # Initialize two pointers
        a = head
        b = head

        # Move the end pointer n steps ahead
        for _ in range(n):
            a = a.next

        # If the end pointer is not at the head, remove the node at the end
        if a is not None and a.next is not None:
            a.next = a.next.next
        else:
            # If the end pointer is at the head, remove the head
            a = None

        return head
```
**Explanation:**

This solution uses two pointers, `a` and `b`, both initialized to the head of the linked list. The `a` pointer is moved `n` steps ahead, and if the `a` pointer reaches the end of the linked list, it is removed. If the `a` pointer is not at the head of the linked list, the `a` pointer is removed and the node at the end of the linked list is removed.