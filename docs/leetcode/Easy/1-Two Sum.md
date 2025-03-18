import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1 - Two Sum

### Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table
- **Link:** [LeetCode](https://leetcode.com/problems/two-sum/)

## Problem Statement

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have **<em>exactly</em> one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

### Examples
**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints:
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- **Only one valid answer exists.**

### Follow-up:  
Can you come up with an algorithm that is less than `O(n^2)` time complexity?

**Video Explanation:**
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/UXDSeD9mN-k" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n)
  - The algorithm iterates through the array once, building a hash table and checking for complements in constant time.
- **Space Complexity:** O(n)
  - The hash table can store up to n elements in the worst case.

### Code Implementation

<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python"},
    {label: "JavaScript", value: "javascript"},
    {label: "Java", value: "java"},
    {label: "C#", value: "csharp"},
    {label: "Go", value: "go"}
  ]}
>

<TabItem value="python">
```python
def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []
```
</TabItem>

</Tabs>

### Step-by-Step Explanation
1. **Create a hash map:** Initialize an empty dictionary `num_map` to store numbers encountered so far as keys and their indices as values.
2. **Iterate through the array:** Loop through each number `num` and its index `i` in the input array `nums`.
3. **Calculate the complement:** For each number, calculate the `complement` needed to reach the `target`.
4. **Check if complement exists:** Look up the `complement` in the `num_map`.
    - If the `complement` is found in the map, it means we have found a pair that sums to the `target`. Return the indices of the current number and the complement from the map.
    - If the `complement` is not found, add the current number and its index to the `num_map` for future lookups.
5. **No solution:** If the loop completes without finding a pair, return an empty list indicating no solution was found.



