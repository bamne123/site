import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 724 - Find Pivot Index

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Prefix Sum
- **Link:** [LeetCode](https://leetcode.com/problems/find-pivot-index/)

## Problem Statement

Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return *the **leftmost pivot index***. If no such index exists, return `-1`.

### Hints
- You could use a prefix sum approach.
- Think about how to calculate the sum of elements to the left and right of each index efficiently.

## Solution Approach

The problem can be solved efficiently using the prefix sum technique. We calculate the prefix sum of the array, which stores the sum of elements from index 0 to each subsequent index. Then, we iterate through the array, calculating the sum of elements to the right of each index as the difference between the total sum and the prefix sum at that index.

We compare the left sum (0 for the first element) and the right sum, and if they are equal, we found the pivot index. We return the index if found, and -1 if no pivot index exists.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/u89i60lYx8U" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n) - We iterate through the array once to calculate prefix sums and once to find the pivot index.
  - The calculation of prefix sums takes O(n) time.
  - The iteration to find the pivot index also takes O(n) time.
- **Space Complexity:** O(n) - We need to store the prefix sums, which have the same size as the input array.

### Code Implementation

<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python" },
    {label: "Java", value: "java" },
    {label: "C#", value: "csharp" },
    {label: "Go", value: "go" },
    {label: "JavaScript", value: "javascript" },
  ]}
>
<TabItem value="python">
```python
def pivotIndex(nums):
    prefix_sum = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix_sum[i + 1] = prefix_sum[i] + nums[i]

    for i in range(len(nums)):
        left_sum = prefix_sum[i]
        right_sum = prefix_sum[-1] - prefix_sum[i + 1]
        if left_sum == right_sum:
            return i
    return -1
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int pivotIndex(int[] nums) {
        int[] prefixSum = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        for (int i = 0; i < nums.length; i++) {
            int leftSum = prefixSum[i];
            int rightSum = prefixSum[nums.length] - prefixSum[i + 1];
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
using System;

public class Solution {
    public int PivotIndex(int[] nums) {
        int[] prefixSum = new int[nums.Length + 1];
        for (int i = 0; i < nums.Length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        for (int i = 0; i < nums.Length; i++) {
            int leftSum = prefixSum[i];
            int rightSum = prefixSum[nums.Length] - prefixSum[i + 1];
            if (leftSum == rightSum) {
                return i;
            }
        }
        return -1;
    }
}
```
</TabItem>
<TabItem value="go">
```go
func pivotIndex(nums []int) int {
    prefixSum := make([]int, len(nums)+1)
    for i := 0; i < len(nums); i++ {
        prefixSum[i+1] = prefixSum[i] + nums[i]
    }

    for i := 0; i < len(nums); i++ {
        leftSum := prefixSum[i]
        rightSum := prefixSum[len(nums)] - prefixSum[i+1]
        if leftSum == rightSum {
            return i
        }
    }
    return -1
}
```
</TabItem>
<TabItem value="javascript">
```javascript
function pivotIndex(nums) {
    const prefixSum = [];
    prefixSum[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        const leftSum = prefixSum[i];
        const rightSum = prefixSum[nums.length] - prefixSum[i + 1];
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. **Calculate Prefix Sums:**
   - Create a `prefixSum` array to store the cumulative sum of elements up to each index.
   - `prefixSum[i]` will contain the sum of `nums[0]` to `nums[i-1]`.
   - Initialize `prefixSum[0]` to 0.

2. **Iterate through the Array:**
   - For each index `i` in the `nums` array:
     - Calculate the `leftSum` as `prefixSum[i]`.
     - Calculate the `rightSum` as the difference between the total sum (`prefixSum[nums.length]`) and the sum up to the next index (`prefixSum[i+1]`).

3. **Compare Sums:**
   - If `leftSum` is equal to `rightSum`, we have found the pivot index and return `i`.

4. **Return -1:**
   - If no pivot index is found after iterating through the entire array, return `-1`.

## Related Problems
- [Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/)