import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2 - Add Two Numbers

## Problem Information
- **Difficulty:** Medium
- **Category:** Linked List, Math, Recursion
- **Link:** [LeetCode](https://leetcode.com/problems/add-two-numbers)

## Problem Statement
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Examples
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

### Constraints
- The number of nodes in each linked list is in the range [1, 100].
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

### Hints
- Consider using a dummy head node to simplify the code.
- Keep track of the carry using one variable.
- Use a while loop to iterate until both lists are exhausted.

## Solution Approach
We can solve this problem by iterating through both linked lists simultaneously, adding the digits at each position, and keeping track of any carry. The result will be a new linked list representing the sum of the two numbers.

### Complexity Analysis
- **Time Complexity:** O(max(m, n))
  - Where m and n are the lengths of the two linked lists. We iterate up to the length of the longer list.
- **Space Complexity:** O(max(m, n))
  - The length of the new list is at most max(m, n) + 1.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python' },
    {label: 'javascript', value: 'javascript' },
    {label: 'go', value: 'go' },
    {label: 'java', value: 'java' },
    {label: 'csharp', value: 'csharp' },
  ]}
>
<TabItem value='python'>
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy_head = ListNode(0)
        current = dummy_head
        carry = 0

        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            total = val1 + val2 + carry
            carry = total // 10
            digit = total % 10

            current.next = ListNode(digit)
            current = current.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return dummy_head.next
```
</TabItem>
<TabItem value='javascript'>
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        const digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummyHead.next;
};
```
</TabItem>
<TabItem value='go'>
```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    dummyHead := &ListNode{Val: 0}
    current := dummyHead
    carry := 0

    for l1 != nil || l2 != nil || carry > 0 {
        val1 := 0
        if l1 != nil {
            val1 = l1.Val
        }

        val2 := 0
        if l2 != nil {
            val2 = l2.Val
        }

        sum := val1 + val2 + carry
        carry = sum / 10
        digit := sum % 10

        current.Next = &ListNode{Val: digit}
        current = current.Next

        if l1 != nil {
            l1 = l1.Next
        }
        if l2 != nil {
            l2 = l2.Next
        }
    }

    return dummyHead.Next
}
```
</TabItem>
<TabItem value='java'>
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode current = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry > 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;

            int sum = val1 + val2 + carry;
            carry = sum / 10;
            int digit = sum % 10;

            current.next = new ListNode(digit);
            current = current.next;

            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }

        return dummyHead.next;
    }
}
```
</TabItem>
<TabItem value='csharp'>
```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode current = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry > 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;

            int sum = val1 + val2 + carry;
            carry = sum / 10;
            int digit = sum % 10;

            current.next = new ListNode(digit);
            current = current.next;

            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }

        return dummyHead.next;
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize a dummy head node to simplify the handling of the first node in the result.
2. Initialize a current pointer to the dummy head and a carry variable to 0.
3. Iterate while either linked list has nodes or there is a carry.
4. Get the values of the current nodes from both linked lists, defaulting to 0 if a list is exhausted.
5. Calculate the sum of the two values and the carry.
6. Update the carry by integer dividing the sum by 10.
7. Calculate the digit by taking the sum modulo 10.
8. Create a new node with the digit and append it to the result linked list.
9. Move the current pointer to the new node.
10. Move the pointers of the input linked lists to the next nodes, if they exist.
11. Return the next node of the dummy head, which is the head of the result linked list.

## Alternative Approaches
1. **Recursive Approach**
   - Time Complexity: O(max(m, n))
   - Space Complexity: O(max(m, n)) due to the call stack
   - Trade-offs: Can be more elegant but may cause stack overflow for very large lists.

2. **In-place Modification**
   - Time Complexity: O(max(m, n))
   - Space Complexity: O(1) if we can modify one of the input lists
   - Trade-offs: Modifies the input list; may not be desirable.

## Common Mistakes and Pitfalls
1. Forgetting to handle the carry properly.
2. Not considering the case where one list is longer than the other.
3. Not handling the case where the sum of the last digits results in a carry, requiring an additional node in the result.

## Related Problems
- [Multiply Strings](https://leetcode.com/problems/multiply-strings)
- [Add Binary](https://leetcode.com/problems/add-binary)
