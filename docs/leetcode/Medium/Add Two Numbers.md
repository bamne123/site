**Add Two Numbers**
================

**Problem Statement**
-------------------

Given two non-negative integers `num1` and `num2` (both integers), return the sum of these two numbers without using any multiplication.

**Example**
-----------

*   `num1` = 2, `num2` = 5
*   `result` = 7

**Constraints**
---------------

*   `0 <= num1 < 2**31`, `0 <= num2 < 2**31`
*   The input integers will not be NULL and will not have any leading zeros.

**Solution**
------------

### **1. Detect the Problem Details for creating markdown data**

```markdown
# Problem Title: Add Two Numbers
```


### **2. Extract the Solution (if provided by the user)**

Detect and format the user's code in Markdown.

```markdown
# User's Solution

## Solution Explanation
```


### **4. Generate a Markdown Data**

```markdown
# Problem Title: Add Two Numbers
## Difficulty: Medium

## Tags: Linked List, Math, Recursion

## Problem Statement:
Given two non-negative integers `num1` and `num2` (both integers), return the sum of these two numbers without using any multiplication.

## Explanation
## The problem is a classic example of a recursive approach. We can break down the problem into smaller sub-problems by adding the last two digits of `num1` and `num2`, and then combining them.

## Time & Space Complexity
## - **Time Complexity:** O(log(n))
## - **Space Complexity:** O(1)

## Solution
## 
```language
def addTwoNumbers(num1, num2):
    dummy_head = ListNode(0)
    dummy_tail = dummy_head
    carry = 0

    while num1 != 0 or num2 != 0:
        x = num1 % 10
        y = num2 % 10
        sum_val = x + y + carry
        carry = sum_val // 10
        dummy_tail.next = ListNode(sum_val % 10)
        dummy_tail = dummy_tail.next

        num1, num2 = num1 // 10, num2 // 10

    if carry > 0:
        dummy_tail.next = ListNode(carry)

    return dummy_head.next
```
## Time Complexity
The time complexity is O(log(n)) because we are using a recursive approach. Each recursive call reduces the size of the problem by 10.

## Space Complexity
The space complexity is O(1) because we are using a constant amount of space to store the dummy head and tail of the linked list.

## Solution Explanation
The solution uses a recursive approach to add two numbers without using any multiplication. We start by creating a dummy head of a linked list and initialize a carry variable to store any overflow. We then iterate through the input numbers, adding the last digit of each number and the carry. We use the sum of the digits and the carry to update the carry and the next node in the linked list. Finally, we return the next node in the linked list, which represents the result.

**Example Use Cases**
---------------------

*   `addTwoNumbers(2, 5)` returns `7`
*   `addTwoNumbers(123, 456)` returns `579`

**Time and Space Complexity**
----------------------------

*   Time Complexity: O(log(n))
*   Space Complexity: O(1)