### **1. Gather the Problem Details for creating markdown data**  
- Title of problem is Add Two Numbers.
- Fetch the **full problem statement** from the link https://leetcode.com/problems/add-two-numbers.   
- Provide a **clear explanation** of the problem with an example for better understanding.

### **Full Problem Statement**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### **Explanation**
The problem involves adding two linked lists, where each node represents a digit in the reverse order. For example, if we have two linked lists:

``` 
1 -> 2 -> 3
```

and

```
4 -> 5 -> 6
```

The addition would be performed as follows:

- 3 + 6 = 9 (carrying 1)
- 2 + 5 + 1 = 8
- 1 + 4 = 5

So the result would be a new linked list: 5 -> 8 -> 9.

### **2. Extract the Solution (if provided by the user)**  
- Detect and format the **user's code** in Markdown.  
- Analyze and explain the **time complexity** and **space complexity** of the solution.

### **Solution**
```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode()
        current = dummy
        carry = 0
        
        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            sum = v1 + v2 + carry
            
            carry = sum // 10
            current.next = ListNode(sum % 10)
            current = current.next
            
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next
```

### **Time & Space Complexity**
- **Time Complexity:** O(max(m, n)) where m and n are the lengths of the input linked lists.
- **Space Complexity:** O(max(m, n)) for storing the result linked list.

### **4. Generate a Markdown Data**
```md
# Problem Title: [Add Two Numbers](https://leetcode.com/problems/add-two-numbers)  

**Difficulty:** Easy 

**Tags:** Linked List

**Problem Statement:**  
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Explanation  
The problem involves adding two linked lists, where each node represents a digit in the reverse order. For example, if we have two linked lists:

```
1 -> 2 -> 3
```

and

```
4 -> 5 -> 6
```

The addition would be performed as follows:

- 3 + 6 = 9 (carrying 1)
- 2 + 5 + 1 = 8
- 1 + 4 = 5

So the result would be a new linked list: 5 -> 8 -> 9.

## Time & Space Complexity  
- **Time Complexity:** O(max(m, n)) where m and n are the lengths of the input linked lists.
- **Space Complexity:** O(max(m, n)) for storing the result linked list.

## Solution  
```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode()
        current = dummy
        carry = 0
        
        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            sum = v1 + v2 + carry
            
            carry = sum // 10
            current.next = ListNode(sum % 10)
            current = current.next
            
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next
```

## Solution Explanation  
The solution uses a dummy node to simplify the code and avoid special cases for the head node. The carry variable is used to keep track of the carry from the previous addition. The while loop continues until there are no more nodes in either linked list or there is no carry. In each iteration, the sum of the current nodes is calculated, and the carry is updated accordingly. The result is stored in the next node of the current node.

## LeetCode Official Solutions  
- [Official LeetCode Solution](https://leetcode.com/problems/add-two-numbers/solution/)
```