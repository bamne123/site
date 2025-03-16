import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 283 - Move Zeroes

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Two Pointers
- **Link:** [LeetCode](https://leetcode.com/problems/move-zeroes)

## Problem Statement
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note:** that you must do this in-place without making a copy of the array.

### Examples
Input: `nums = [0,1,0,3,12]`
Output: `[1,3,12,0,0]`
Explanation: Non-zero elements are moved to the front while keeping their original order, and all zeros are moved to the end.

### Constraints
- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`

### Hints
- Maintain the relative order of the non-zero elements.
- The array must be modified in-place.
- Minimize the total number of operations.

## Solution Approach
The solution uses a two-pointer approach to move non-zero elements to the front of the array while keeping track of where to place the next non-zero element.

### Complexity Analysis
- **Time Complexity:** O(n)
  - Where n is the length of the input array. We iterate through the array once.
- **Space Complexity:** O(1)
  - The algorithm operates in-place and does not use any additional data structures.

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
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left = 0
        for right in range(len(nums)):
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
```
</TabItem>
<TabItem value='javascript'>
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
};
```
</TabItem>
<TabItem value='go'>
```go
func moveZeroes(nums []int)  {
    left := 0
    for right := 0; right < len(nums); right++ {
        if nums[right] != 0 {
            nums[left], nums[right] = nums[right], nums[left]
            left++
        }
    }
}
```
</TabItem>
<TabItem value='java'>
```java
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            if (nums[right] != 0) {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
            }
        }
    }
}
```
</TabItem>
<TabItem value='csharp'>
```csharp
public class Solution {
    public void MoveZeroes(int[] nums) {
        int left = 0;
        for (int right = 0; right < nums.Length; right++) {
            if (nums[right] != 0) {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
            }
        }
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize a left pointer to 0.
2. Iterate through the array with the right pointer.
3. If the element at the right pointer is not 0, swap it with the element at the left pointer and increment the left pointer.
4. After iterating through the array, all non-zero elements will be at the front, and all zeros will be at the end.

## Alternative Approaches
1. **Using Additional Array:**
   - Create a new array and copy all non-zero elements into it, then fill the remaining spaces with zeros.
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: Requires additional space, not in-place.

2. **Using List Comprehension (Python Specific):**
   - Create a new list by concatenating non-zero elements and zeros.
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: Creates a new list, not in-place.

## Common Mistakes and Pitfalls
1. Not maintaining the relative order of non-zero elements.
2. Using extra space when the problem requires an in-place solution.
3. Incorrectly handling edge cases such as an array with all zeros or no zeros.

## Related Problems
- [Remove Element](https://leetcode.com/problems/remove-element/)
- [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)
