import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 724 - Find Pivot Index

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Prefix Sum
- **Link:** [LeetCode](https://leetcode.com/problems/find-pivot-index)

## Problem Statement

Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return *the **leftmost pivot index***. If no such index exists, return `-1`.

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,7,3,6,5,6]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong>
There is no index that satisfies the conditions in the problem statement.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,-1]
<strong>Output:</strong> 0
<strong>Explanation:</strong>
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
 <li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as&nbsp;1991:&nbsp;<a href="https://leetcode.com/problems/find-the-middle-index-in-array/" target="_blank">https://leetcode.com/problems/find-the-middle-index-in-array/</a></p>

### Hints
- Consider prefix sums.
- The pivot index is the one where prefix sum to the left equals suffix sum to the right.
- Be careful about edge cases (e.g., first or last element as pivot).

## Solution Approach
The solution uses the prefix sum method to efficiently find the pivot index. It calculates the prefix sum of the array and then iterates through the array to find the index where the left sum equals the right sum.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/u89i60lYx8U" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n)
  - The algorithm iterates through the array twice, once to calculate the prefix sum and once to find the pivot index.
- **Space Complexity:** O(n)
  - An additional array of size n+1 is used to store the prefix sum.

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
    def pivotIndex(self, nums: List[int]) -> int:
        # Prefix Sum Method
        prefixSum = [0] * (len(nums) + 1)

        # Populate Prefix Sum
        for i in range(len(nums)):
            prefixSum[i + 1] += prefixSum[i] + nums[i]

        for i in range(len(nums)):
            leftSum = prefixSum[i]  # leftSum is Current Total
            rightSum = prefixSum[-1] - prefixSum[i + 1] # rightSum is last total - next total

            if leftSum == rightSum:
                return i
        
        return -1
```
</TabItem>
<TabItem value="javascript">
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefixSum = new Array(nums.length + 1).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    for (let i = 0; i < nums.length; i++) {
        let leftSum = prefixSum[i];
        let rightSum = prefixSum[nums.length] - prefixSum[i + 1];
        
        if (leftSum === rightSum) {
            return i;
        }
    }
    
    return -1;
};
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
    prefixSum := make([]int, len(nums) + 1)
    
    for i := 0; i < len(nums); i++ {
        prefixSum[i + 1] = prefixSum[i] + nums[i]
    }
    
    for i := 0; i < len(nums); i++ {
        leftSum := prefixSum[i]
        rightSum := prefixSum[len(nums)] - prefixSum[i + 1]
        
        if leftSum == rightSum {
            return i
        }
    }
    
    return -1
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize a prefix sum array of size n+1 with all elements set to 0.
2. Calculate the prefix sum for each index in the input array.
3. Iterate through the input array, and for each index, calculate the left sum and right sum using the prefix sum array.
4. If the left sum equals the right sum, return the current index.
5. If no such index is found, return -1.

## Alternative Approaches
1. **Using Total Sum**:
   - Calculate the total sum of the array. Iterate through the array, keeping track of the left sum. The right sum can be calculated as totalSum - leftSum - nums[i].
   - Time Complexity: O(n)
   - Space Complexity: O(1)
   - Trade-offs: More space-efficient as it doesn't require an additional array, but the time complexity remains the same.

## Common Mistakes and Pitfalls
1. Forgetting the edge cases where the pivot is the first or last element.
2. Not handling cases where no pivot exists, returning -1.
3. Incorrectly calculating prefix sum or left and right sums.

## Related Problems
- [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)
- [Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/)
