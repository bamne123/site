import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 26 - Remove Duplicates from Sorted Array

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Two Pointers
- **Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

## Problem Statement
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length of the array.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

## Examples
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: The first and second elements of nums are the same, so only the first element should remain.

## Constraints
- `1 <= nums.length <= 3 * 10^4`
- `-10^9 <= nums[i] <= 10^9`
- nums is sorted in ascending order.

## Solution Approach
We can use a two-pointer approach to remove duplicates in-place.

1. Initialize two pointers: `slow` and `fast`. Both pointers start at index 0.
2. Iterate through the array using the `fast` pointer.
3. If the element at `fast` is different from the element at `slow`, then move `slow` one position forward and copy the element at `fast` to `nums[slow]`.
4. Continue iterating until `fast` reaches the end of the array.
5. The value of `slow` + 1 represents the new length of the array with duplicates removed.

## Complexity Analysis
- **Time Complexity:** O(n)
  - We iterate through the array once using the `fast` pointer.
- **Space Complexity:** O(1)
  - We are modifying the input array in-place, so we use constant extra space.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Javascript", value: "javascript" },
    {label: "Python", value: "python" },
    {label: "Go", value: "go" },
    {label: "Java", value: "java" },
    {label: "C#", value: "csharp" },
  ]}
>
<TabItem value="javascript">
```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
```
</TabItem>
<TabItem value="python">
```python
def remove_duplicates(nums):
  if len(nums) == 0:
    return 0
  slow = 0
  for fast in range(1, len(nums)):
    if nums[fast] != nums[slow]:
      slow += 1
      nums[slow] = nums[fast]
  return slow + 1
```
</TabItem>
<TabItem value="go">
```go
func removeDuplicates(nums []int) int {
  if len(nums) == 0 {
    return 0
  }
  slow := 0
  for fast := 1; fast < len(nums); fast++ {
    if nums[fast] != nums[slow] {
      slow++
      nums[slow] = nums[fast]
    }
  }
  return slow + 1
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int slow = 0;
        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[fast] != nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
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
        if (nums.Length == 0) {
            return 0;
        }
        int slow = 0;
        for (int fast = 1; fast < nums.Length; fast++) {
            if (nums[fast] != nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
        }
        return slow + 1;
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize `slow` to 0.
2. Iterate through the array from index 1 (using `fast`).
3. If the element at `fast` is different from the element at `slow`:
   - Increment `slow`.
   - Copy the element at `fast` to `nums[slow]`.
4. The loop continues until `fast` reaches the end of the array.
5. `slow + 1` represents the new length of the array with duplicates removed.

## Alternative Approaches
Not applicable for this problem.

## Common Mistakes and Pitfalls
- **Not handling empty array case:** Ensure to handle the case when the input array is empty.
- **Incorrect pointer updates:** Make sure to update `slow` and `fast` pointers correctly based on the comparison.



