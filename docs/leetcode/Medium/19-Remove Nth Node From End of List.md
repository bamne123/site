**Remove Nth Node From End of List**
=====================================

**Problem Information**
------------------------

* **Difficulty:** Medium
* **Category:** Linked List, Two Pointers
* **Companies:** Known companies that frequently ask this
* **Link:** https://leetcode.com/problems/remove-nth-node-from-end-of-list
* **Companies:** Google, Amazon, Facebook
* **Link:** https://leetcode.com/problems/remove-nth-node-from-end-of-list/

**Problem Statement**
--------------------

Given the head of a singly linked list, remove the nth node from the end of the list.

**Examples**
------------

* Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 (n = 2)
  Output: 2 -> 3 -> 4 -> 5 -> 6
* Input: 1 -> 2 -> 3 -> 4 -> 5 (n = 1)
  Output: 1 -> 2 -> 3 -> 4
* Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 (n = 5)
  Output: 1 -> 2 -> 3 -> 4

**Constraints**
--------------

* Time complexity: O(n)
* Space complexity: O(1)

**Solution Approach**
--------------------

1.  Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
2.  Move the `fast` pointer `n` steps ahead of the `slow` pointer.
3.  Once the `fast` pointer reaches the end of the linked list, the `slow` pointer will be at the node before the nth node from the end.
4.  Remove the nth node from the end by updating the `next` pointer of the node pointed to by the `slow` pointer.

**Code Implementation**
-----------------------

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        # Initialize pointers
        slow = head
        fast = head
        
        # Move the fast pointer n steps ahead
        for _ in range(n):
            fast = fast.next
        
        # Once the fast pointer reaches the end, the slow pointer will be at the node before the nth node from the end
        if not fast:
            return head.next
        
        # Remove the nth node from the end
        while fast.next:
            fast = fast.next
            slow = slow.next
        
        # Update the next pointer of the node pointed to by the slow pointer
        slow.next = slow.next.next
        
        return head
```

**Step-by-Step Explanation**
------------------------------

1.  We initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
2.  We move the `fast` pointer `n` steps ahead of the `slow` pointer.
3.  Once the `fast` pointer reaches the end of the linked list, the `slow` pointer will be at the node before the nth node from the end.
4.  We remove the nth node from the end by updating the `next` pointer of the node pointed to by the `slow` pointer.

**Alternative Approaches**
---------------------------

*   **Using Two Pointers**
    *   Initialize two pointers, `head1` and `head2`, both pointing to the head of the linked list.
    *   Move `head1` `n` steps ahead of `head2`.
    *   Once `head1` reaches the end, `head2` will be at the node before the nth node from the end.
    *   We can remove the nth node from the end by updating the `next` pointer of `head2`.
*   **Using Deque**
    *   Convert the linked list to a deque.
    *   Remove the nth node from the end using the deque.
    *   Convert the deque back to a linked list.

**Common Mistakes and Pitfalls**
-------------------------------

*   Make sure to initialize the pointers correctly.
*   Handle the case where the fast pointer reaches the end of the linked list.
*   Handle the case where there are multiple nodes before the nth node from the end.

**Related Problems**
---------------------

*   [Remove Nth Node from End of Linked List](https://leetcode.com/problems/remove-nth-node-from-end-of-linked-list/)

**Quality Checks**
-----------------

*   Verify that the code works correctly for all possible inputs.
*   Test the code with different inputs.
*   Test the code with inputs that may cause it to fail in the future.
*   Test the code with inputs that may have unknown or unexpected behavior.

**Special Cases**
----------------

*   Handle the case where the linked list is empty.
*   Handle the case where the head pointer is `None`.
*   Handle the case where the input is not a valid linked list.