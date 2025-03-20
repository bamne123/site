import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 80 - Remove Duplicates from Sorted Array II

## Problem Information
- **Difficulty:** Medium
- **Category:** Array, Two Pointers
- **Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)

## Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums`&nbsp;should hold the final result. It does not matter what you leave beyond the first&nbsp;`k`&nbsp;elements.

Return `k`* after placing the final result in the first *`k`* slots of `nums`.

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

**Example 1:**

```
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**

```
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**

- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in **non-decreasing** order.

### Hints
- Use two pointers, one for reading and one for writing.
- Check the current element with the element two positions before the write pointer to decide whether to write the current element.

## Solution Approach
The solution uses a two-pointer approach to solve the problem in-place. One pointer (fast) iterates through the array, and another pointer (slow) marks the position where the non-duplicate elements should be placed. We allow at most two occurrences of each element.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/ycAq8iqh0TI" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n)
  - Where n is the length of the input array, since we iterate through the array once.
- **Space Complexity:** O(1)
  - The algorithm operates in-place, using only a constant amount of extra space.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "python", value: "python" },
    {label: "javascript", value: "javascript" },
    {label: "java", value: "java" },
    {label: "csharp", value: "csharp" },
    {label: "go", value: "go" },
  ]}
>
<TabItem value="python">
```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return len(nums)

        slow = 2
        for fast in range(2, len(nums)):
            if nums[fast] != nums[slow-2]:
                nums[slow] = nums[fast]
                slow += 1

        return slow
```
</TabItem>
<TabItem value="javascript">
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 3) {
        return nums.length;
    }

    let slow = 2;
    for (let fast = 2; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
};
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length < 3) {
            return nums.length;
        }

        int slow = 2;
        for (int fast = 2; fast < nums.length; fast++) {
            if (nums[fast] != nums[slow - 2]) {
                nums[slow] = nums[fast];
                slow++;
            }
        }

        return slow;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length < 3) {
            return nums.Length;
        }

        int slow = 2;
        for (int fast = 2; fast < nums.Length; fast++) {
            if (nums[fast] != nums[slow - 2]) {
                nums[slow] = nums[fast];
                slow++;
            }
        }

        return slow;
    }
}
```
</TabItem>
<TabItem value="go">
```go
func removeDuplicates(nums []int) int {
    if len(nums) < 3 {
        return len(nums)
    }

    slow := 2
    for fast := 2; fast < len(nums); fast++ {
        if nums[fast] != nums[slow-2] {
            nums[slow] = nums[fast]
            slow++
        }
    }

    return slow
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Check if the length of the array is less than 3. If so, return the length since no duplicates need to be removed.
2. Initialize a slow pointer to 2, which represents the index up to which the array will contain the elements with at most two occurrences.
3. Iterate through the array starting from the third element (index 2) using a fast pointer.
4. Compare the current element at the fast pointer with the element two positions before the slow pointer.
5. If they are different, it means the current element is not a duplicate that exceeds the allowed count (2), so copy the current element to the slow pointer's position and increment the slow pointer.
6. After the loop finishes, the slow pointer represents the new length of the array with the duplicates removed. Return the slow pointer.

## Alternative Approaches
1. **Using a HashMap to Count Occurrences**
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: Requires additional space to store counts, but can handle unsorted arrays and different duplicate limits.

2. **Using a Counter Object (Python)**
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: More concise code but still requires additional space.

## Common Mistakes and Pitfalls
1. Incorrectly handling edge cases, such as arrays with fewer than 3 elements.
2. Not updating the slow pointer correctly, leading to incorrect placement of non-duplicate elements.
3. Using extra space when the problem requires an in-place solution.

## Related Problems
- [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes)
