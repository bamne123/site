import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 80 - Remove Duplicates from Sorted Array II

## Problem Information
- **Difficulty:** Medium
- **Category:** Array, Two Pointers
- **Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)

## Problem Statement
Given a sorted array nums with duplicates, you need to remove the duplicates in-place such that each element appears only once and return the new length of the array.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

**Example 1:**
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,2,3,_,_]

Explanation: Your function should return length = 5, and nums should become [1,2,3,_,_]. It doesn't matter what you put in those extra two ends.


**Example 2:**
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]

## Constraints
- `1 <= nums.length <= 3 * 10^4`
- `-10^9 <= nums[i] <= 10^9`
- nums is sorted in ascending order.



## Solution Approach
The problem can be solved efficiently using the Two Pointers approach with an optimization to handle the duplicates.

1. **Initialization:**
   - Initialize two pointers, `slow` and `fast`, both pointing to the beginning of the array.

2. **Traversal:**
   - Iterate through the array using the `fast` pointer.
   - If `nums[fast]` is different from `nums[slow]`, it's a unique element. Move `slow` forward and copy `nums[fast]` to `nums[slow]`.

3. **Duplicate Handling:**
   - If `nums[fast]` is equal to `nums[slow]`, it's a duplicate.
   - Skip the duplicate by incrementing `fast`.

4. **Return Length:**
   - The value of `slow` will point to the next available position for a unique element.
   - Return `slow + 1` as the new length of the array.



### Complexity Analysis
- **Time Complexity:** O(n)
  - We traverse the array once using the `fast` pointer.
- **Space Complexity:** O(1)
  - We only use a constant amount of extra space for the pointers.


### Code Implementation

<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Javascript", value: "javascript" },
    {label: "Python", value: "python" },
    {label: "Go", value: "go" },
    {label: "Java", value: "java" },
    {label: "Csharp", value: "csharp" },
  ]}
>
<TabItem value="javascript">
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
};
```
</TabItem>
<TabItem value="python">
```python
def removeDuplicates(nums):
    slow = 0
    fast = 0
    while fast < len(nums):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
        fast += 1
    return slow + 1
```
</TabItem>
<TabItem value="go">
```go
func removeDuplicates(nums []int) int {
    slow := 0
    fast := 0
    for fast < len(nums) {
        if nums[fast] != nums[slow] {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int slow = 0;
        int fast = 0;
        while (fast < nums.length) {
            if (nums[fast] != nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
            fast++;
        }
        return slow + 1;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int slow = 0;
        int fast = 0;
        while (fast < nums.Length) {
            if (nums[fast] != nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
            fast++;
        }
        return slow + 1;
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Start with two pointers, `slow` and `fast`, both at index 0.
2. Iterate through the array using the `fast` pointer.
3. If the element at `fast` is different from the element at `slow`, it means we've encountered a new unique element. Move the `slow` pointer forward by one position and copy the element at `fast` to `slow`.
4. If the elements are the same, it's a duplicate. Simply increment the `fast` pointer to skip the duplicate.
5. Continue this process until `fast` reaches the end of the array.
6. The value of `slow` will point to the last unique element in the modified array.
7. Return `slow + 1` as the new length of the array.

## Alternative Approaches


## Common Mistakes and Pitfalls



## Related Problems
