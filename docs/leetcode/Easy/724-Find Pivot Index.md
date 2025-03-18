import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 724 - Find Pivot Index

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Prefix Sum
- **Link:** [LeetCode](https://leetcode.com/problems/find-pivot-index)

## Problem Statement
Given an array of integers `nums`, write a function `pivotIndex(nums)` that returns the index of the pivot index (if it exists). 
The pivot index is defined as the index `i` where the sum of the elements before `i` is equal to the sum of the elements after `i`.

If no pivot index exists, return `-1`.

### Examples
Input: `nums = [1, 7, 3, 6, 5, 6]`
Output: `3`
Explanation: `sum(0, 2) = 1 + 7 + 3 = 11`
`sum(3, 5) = 6 + 5 + 6 = 17`
`nums[3] = 6` is the pivot index.

## Solution Approach
We can efficiently find the pivot index by calculating the prefix sum of the array. 

1. **Calculate Prefix Sum:**
   - Create an array `prefixSum` to store the cumulative sum of elements.
   - `prefixSum[i]` will represent the sum of elements from index 0 to `i`.

2. **Find Pivot Index:**
   - Iterate through the array `nums`.
   - For each index `i`, calculate the sum of elements after `i` (`totalSum - prefixSum[i]`).
   - If the sum of elements before `i` (`prefixSum[i]`) equals the sum of elements after `i`, then `i` is the pivot index.

## Complexity Analysis
- **Time Complexity:** O(n)
    - Calculating the prefix sum takes O(n) time.
    - Iterating through the array to find the pivot index takes O(n) time.
- **Space Complexity:** O(n)
    - The `prefixSum` array stores the cumulative sum up to each element, requiring O(n) space.

## Code Implementation

<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'Javascript', value: 'javascript' },
    {label: 'Python', value: 'python' },
    {label: 'Go', value: 'go' },
    {label: 'Java', value: 'java' },
    {label: 'C#', value: 'csharp' }
  ]}
>
<TabItem value="javascript">
```javascript
function pivotIndex(nums) {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  for (let i = 0; i < n; i++) {
    const leftSum = prefixSum[i];
    const rightSum = prefixSum[n] - prefixSum[i + 1];
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}
```
</TabItem>
<TabItem value="python">
```python
def pivotIndex(nums):
  n = len(nums)
  prefixSum = [0] * (n + 1)
  for i in range(n):
    prefixSum[i + 1] = prefixSum[i] + nums[i]

  for i in range(n):
    leftSum = prefixSum[i]
    rightSum = prefixSum[n] - prefixSum[i + 1]
    if leftSum == rightSum:
      return i
  return -1
```
</TabItem>
<TabItem value="go">
```go
func pivotIndex(nums []int) int {
  n := len(nums)
  prefixSum := make([]int, n+1)
  for i := 0; i < n; i++ {
    prefixSum[i+1] = prefixSum[i] + nums[i]
  }

  for i := 0; i < n; i++ {
    leftSum := prefixSum[i]
    rightSum := prefixSum[n] - prefixSum[i+1]
    if leftSum == rightSum {
      return i
    }
  }

  return -1
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int pivotIndex(int[] nums) {
        int n = nums.length;
        int[] prefixSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        for (int i = 0; i < n; i++) {
            int leftSum = prefixSum[i];
            int rightSum = prefixSum[n] - prefixSum[i + 1];
            if (leftSum == rightSum) {
                return i;
            }
        }

        return -1;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int PivotIndex(int[] nums) {
        int n = nums.Length;
        int[] prefixSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        for (int i = 0; i < n; i++) {
            int leftSum = prefixSum[i];
            int rightSum = prefixSum[n] - prefixSum[i + 1];
            if (leftSum == rightSum) {
                return i;
            }
        }

        return -1;
    }
}
```
</TabItem>
</Tabs>

## Step-by-Step Explanation
1. Calculate the prefix sum of the array.
2. Iterate through the array.
3. For each index `i`, calculate the sum of elements before `i` (`prefixSum[i]`) and the sum of elements after `i` (`prefixSum[n] - prefixSum[i + 1]`).
4. If the two sums are equal, return the index `i`.
5. If no pivot index is found, return `-1`.



## Related Problems
- [Equal Subarrays](https://leetcode.com/problems/equal-subarrays/)
- [Find the Distance of the Nearest Lexicographically Larger Letter](https://leetcode.com/problems/find-the-distance-of-the-nearest-lexicographically-larger-letter)



