import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 448 - Find All Numbers Disappeared in an Array

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table
- **Link:** [LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array)

## Problem Statement

<p>Given an array <code>nums</code> of <code>n</code> integers where <code>nums[i]</code> is in the range <code>[1, n]</code>, return <em>an array of all the integers in the range</em> <code>[1, n]</code> <em>that do not appear in</em> <code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre>
<strong>Input:</strong> nums = [4,3,2,7,8,2,3,1]
<strong>Output:</strong> [5,6]
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre>
<strong>Input:</strong> nums = [1,1]
<strong>Output:</strong> [2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
    <li><code>n == nums.length</code></li>
    <li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
    <li><code>1 &lt;= nums[i] &lt;= n</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do it without extra space and in <code>O(n)</code> runtime? You may assume the returned list does not count as extra space.</p>


### Hints
- The input array's elements are within the range [1, n].
- Consider using a set to store the numbers present in the input array.
- Iterate through the range [1, n] and check if each number is present in the set.

## Solution Approach
The solution involves creating a set to store the unique numbers present in the input array `nums`. Then, it iterates from 1 to `n` (inclusive), checking if each number is in the set. If a number is not in the set, it means that number is missing from the input array, and it's added to the result list. Finally, the list of missing numbers is returned.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/8i-f24YFWC4" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n)
  - The algorithm iterates through the input array `nums` once to add elements to the set and then iterates from 1 to `n` to find missing numbers.
- **Space Complexity:** O(n)
  - A set is used to store the unique numbers from the input array, which can take up to O(n) space in the worst case.

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
<TabItem value='python'>
```python
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        temp = set()
        result = []

        for num in nums:
            temp.add(num)

        for i in range(1, len(nums)+1):
            if i not in temp:
                result.append(i)

        return result
```
</TabItem>
<TabItem value='javascript'>
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    const result = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }

    return result;
};
```
</TabItem>
<TabItem value='java'>
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        List<Integer> result = new ArrayList<>();

        for (int num : nums) {
            numSet.add(num);
        }

        for (int i = 1; i <= nums.length; i++) {
            if (!numSet.contains(i)) {
                result.add(i);
            }
        }

        return result;
    }
}
```
</TabItem>
<TabItem value='csharp'>
```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        HashSet<int> numSet = new HashSet<int>(nums);
        List<int> result = new List<int>();

        for (int i = 1; i <= nums.Length; i++) {
            if (!numSet.Contains(i)) {
                result.Add(i);
            }
        }

        return result;
    }
}
```
</TabItem>
<TabItem value='go'>
```go
func findDisappearedNumbers(nums []int) []int {
    numSet := make(map[int]bool)
    result := []int{}

    for _, num := range nums {
        numSet[num] = true
    }

    for i := 1; i <= len(nums); i++ {
        if !numSet[i] {
            result = append(result, i)
        }
    }

    return result
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Create an empty set called `temp` to store the unique numbers in `nums`.
2. Iterate through the `nums` array and add each number to the `temp` set.
3. Create an empty list called `result` to store the disappeared numbers.
4. Iterate from 1 to `n` (the length of `nums` plus 1).
5. For each number `i` in the range, check if `i` is present in the `temp` set.
6. If `i` is not in `temp`, it means `i` is a disappeared number, so add it to the `result` list.
7. After the loop finishes, return the `result` list containing all the disappeared numbers.

## Alternative Approaches
1. **In-place Modification:**
   - Time Complexity: O(n)
   - Space Complexity: O(1)
   - Trade-offs: Modifies the original array, but uses constant space.

2. **Using an Auxiliary Array:**
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: Does not modify the original array, but uses linear space.

## Common Mistakes and Pitfalls
1. Forgetting to handle the edge case where the input array is empty.
2. Not considering the constraint that the numbers are in the range [1, n].
3. Using the wrong data structure, which can lead to inefficient code.

## Related Problems
- [First Missing Positive](https://leetcode.com/problems/first-missing-positive)
- [Missing Number](https://leetcode.com/problems/missing-number)
