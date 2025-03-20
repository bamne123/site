import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1 - Two Sum

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table
- **Link:** [LeetCode](https://leetcode.com/problems/two-sum)

## Problem Statement

<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>2 `<=` nums.length `<=` 10<sup>4</sup></code></li>
 <li><code>-10<sup>9</sup> `<=` nums[i] `<=`10<sup>9</sup></code></li>
 <li><code>-10<sup>9</sup> `<=` target `<=` 10<sup>9</sup></code></li>
 <li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?

### Hints
- Use a hash table to store the numbers and their indices.
- Check if the complement (target - num) exists in the hash table.

## Solution Approach
The solution iterates through the `nums` array, storing each number and its index in a hash table (`temp`). For each number, it checks if the complement (target - number) is already in the hash table. If it is, the function returns the indices of the current number and its complement. This approach avoids the need for nested loops, resulting in a more efficient solution.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/UXDSeD9mN-k" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n)
  - The solution iterates through the array once, performing constant-time operations for each element.
- **Space Complexity:** O(n)
  - In the worst case, the hash table stores all elements of the array.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python' },
    {label: 'javascript', value: 'javascript' },
    {label: 'java', value: 'java' },
    {label: 'csharp', value: 'csharp' },
    {label: 'go', value: 'go' },
  ]}
>
<TabItem value="python">
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        temp = {}

        for i, num in enumerate(nums):
            remaining = target - num
            if remaining in temp:
                return [temp[remaining], i]
            else:
                temp[num] = i
        
        return []
```
</TabItem>
<TabItem value="javascript">
```javascript
function twoSum(nums, target) {
    const temp = {};
    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (remaining in temp) {
            return [temp[remaining], i];
        } else {
            temp[nums[i]] = i;
        }
    }
    return [];
}
```
</TabItem>
<TabItem value="java">
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> temp = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int remaining = target - nums[i];
            if (temp.containsKey(remaining)) {
                return new int[] {temp.get(remaining), i};
            } else {
                temp.put(nums[i], i);
            }
        }
        return new int[] {};
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> temp = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int remaining = target - nums[i];
            if (temp.ContainsKey(remaining)) {
                return new int[] {temp[remaining], i};
            } else {
                temp[nums[i]] = i;
            }
        }
        return new int[] {};
    }
}
```
</TabItem>
<TabItem value="go">
```go
func twoSum(nums []int, target int) []int {
    temp := make(map[int]int)
    for i, num := range nums {
        remaining := target - num
        if index, ok := temp[remaining]; ok {
            return []int{index, i}
        } else {
            temp[num] = i
        }
    }
    return []int{}
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize an empty hash table `temp` to store numbers and their indices.
2. Iterate through the `nums` array with index `i` and value `num`.
3. Calculate the `remaining` value needed to reach the `target`: `remaining = target - num`.
4. Check if `remaining` exists as a key in the `temp` hash table.
5. If `remaining` is in `temp`, return the array `[temp[remaining], i]`, where `temp[remaining]` is the index of the `remaining` number.
6. If `remaining` is not in `temp`, add the current `num` as a key to `temp` with its index `i` as the value: `temp[num] = i`.
7. If no solution is found after iterating through the entire array, return an empty array `[]`.

## Alternative Approaches
1. **Brute Force**
   - Time Complexity: O(n^2)
   - Space Complexity: O(1)
   - Trade-offs: Simple to implement but not efficient for large arrays.

2. **Sorted Array and Two Pointers**
   - Time Complexity: O(n log n)
   - Space Complexity: O(1) or O(n) depending on the sorting algorithm
   - Trade-offs: Requires sorting the array first, but can be more efficient than brute force for larger arrays.

## Common Mistakes and Pitfalls
1. Not handling the case where no solution exists in the array.
2. Returning the same element twice when the problem states you cannot use the same element twice.
3. Forgetting to consider negative numbers in the array.

## Related Problems
- [3Sum](https://leetcode.com/problems/3sum)
- [4Sum](https://leetcode.com/problems/4sum)