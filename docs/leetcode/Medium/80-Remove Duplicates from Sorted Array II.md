import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 80 - Remove Duplicates from Sorted Array II

## Problem Information
- **Difficulty:** Medium
- **Category:** Array, Two Pointers
- **Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` *after placing the final result in the first `k` slots of* `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

### Hints
- Think about how you can modify the array in-place.
- Consider using two pointers.
- Remember that you need to maintain the order of the elements.

## Solution Approach
The solution uses a two-pointer approach. 

1. Initialize two pointers, `slow` and `fast`, both starting at 0.
2. Iterate through the array using the `fast` pointer.
3. If the current element pointed to by `fast` is different from the element pointed to by `slow`, then increment `slow` and copy the element pointed to by `fast` to the position pointed to by `slow`.
4. Otherwise, if the current element pointed to by `fast` is the same as the element pointed to by `slow`, increment `fast`. 
5. Continue this process until `fast` reaches the end of the array.
6. The `slow` pointer will point to the index of the last unique element, and `k` will be `slow + 1`.

**Video Explanation:**
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/ycAq8iqh0TI" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n) - We iterate through the array once using the `fast` pointer.
- **Space Complexity:** O(1) - We only use a constant amount of extra space for the pointers.

### Code Implementation

<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python" },
    {label: "JavaScript", value: "javascript" },
    {label: "Java", value: "java" },
    {label: "C#", value: "csharp" },
    {label: "Go", value: "go" },
  ]}
>
<TabItem value="python">
```python
def removeDuplicates(nums):
    slow = 0
    fast = 1
    while fast < len(nums):
        if nums[slow] != nums[fast]:
            slow += 1
            nums[slow] = nums[fast]
        fast += 1
    return slow + 1
```
</TabItem>

<TabItem value="javascript">
```javascript
function removeDuplicates(nums) {
    let slow = 0;
    let fast = 1;
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int slow = 0;
        int fast = 1;
        while (fast < nums.length) {
            if (nums[slow] != nums[fast]) {
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
        int fast = 1;
        while (fast < nums.Length) {
            if (nums[slow] != nums[fast]) {
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
<TabItem value="go">
```go
func removeDuplicates(nums []int) int {
    slow := 0
    fast := 1
    for fast < len(nums) {
        if nums[slow] != nums[fast] {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize `slow` and `fast` to 0 and 1 respectively.
2. Iterate through the array using `fast`. 
3. If the element pointed to by `fast` is different from the element pointed to by `slow`, increment `slow` and copy the element pointed to by `fast` to the position pointed to by `slow`. 
4. Otherwise, if the element pointed to by `fast` is the same as the element pointed to by `slow`, increment `fast` only.
5. Repeat steps 2-4 until `fast` reaches the end of the array.
6. `slow` will point to the index of the last unique element, and `k` will be `slow + 1`.

## Alternative Approaches
N/A

## Common Mistakes and Pitfalls
- Forgetting to handle the case where the array is already sorted with no duplicates.



## Related Problems
- [Remove Duplicates from Sorted Array][https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [Container With Most Water][https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)


