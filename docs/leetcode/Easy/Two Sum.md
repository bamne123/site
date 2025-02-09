### **Problem Title:** Two Sum

**Difficulty:** Easy

**Tags:** Array, Hash Table

**Problem Statement:**

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Explanation

The problem is asking us to find two numbers in an array that add up to a given target value. We need to return the indices of these two numbers. The constraints are that each input has exactly one solution and we cannot use the same element twice.

## Time & Space Complexity

- **Time Complexity:** O(n), where n is the number of elements in the array. This is because we are doing a single pass through the array.
- **Space Complexity:** O(n), where n is the number of elements in the array. This is because we are storing the elements of the array in a hash map.

## Solution

Here is a Python solution that uses a hash map to store the elements of the array and their indices:

```python
def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None
```

## Solution Explanation

The solution works by iterating through the array and for each element, we check if its complement (i.e., the number we need to add to it to get the target) is in the hash map. If it is, we return the indices of the complement and the current element. If not, we add the current element to the hash map with its index.

Note that this solution has a time complexity of O(n) and a space complexity of O(n), making it efficient for large inputs.

## LeetCode Official Solutions

You can find the official LeetCode solution [here](https://leetcode.com/problems/two-sum/solution/).