```markdown
# Problem Title: Two Sum

**Difficulty:** Easy

**Tags:** Array, Hash Table

**Problem Statement:**  
Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

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

**Constraints:**

* `2 <= nums.length <= 104`
* `-109 <= nums[i] <= 109`
* `-109 <= target <= 109`
* **Only one valid answer exists.**


**LeetCode Link:** https://leetcode.com/problems/two-sum

## Explanation
The problem requires finding two numbers within a given array that sum up to a specified target value.  The output should be the indices of these two numbers.  For example, in the array `[2, 7, 11, 15]` with a target of `9`, the function should return `[0, 1]` because `nums[0] (2) + nums[1] (7) = 9`.  The challenge lies in efficiently finding this pair within the array.

## Time & Space Complexity
- **Time Complexity:** O(n) -  This is achieved using a hash table (dictionary in Python).  We iterate through the array once.
- **Space Complexity:** O(n) - In the worst case, the hash table might store all elements of the input array.

## Solution
```python
def twoSum(nums, target):
    num_map = {}  # Create a hash map to store numbers and their indices
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i  # Add the number and its index to the map

```

## Solution Explanation
The solution uses a hash map (dictionary in Python) to store each number and its index.  It iterates through the `nums` array. For each number, it calculates the `complement` needed to reach the `target`. It then checks if the `complement` exists in the `num_map`. If it does, it means we've found the pair, and we return their indices. Otherwise, it adds the current number and its index to the `num_map`. This approach ensures a single pass through the array, resulting in O(n) time complexity.


## LeetCode Official Solutions  
- [Official LeetCode Solution](https://leetcode.com/problems/two-sum/solution/)
```
