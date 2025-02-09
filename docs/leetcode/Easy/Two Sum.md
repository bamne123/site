### **Problem Title:** [Two Sum](https://leetcode.com/problems/two-sum)  

**Difficulty:** Easy 

**Tags:** Array, Hash Table

**Problem Statement:**  
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Example 1:
```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Explanation  
The problem is asking to find two numbers in an array that add up to a given target. We are given an array of integers `nums` and an integer `target`, and we need to return the indices of the two numbers that add up to `target`. The key constraint here is that we cannot use the same element twice.

## Time & Space Complexity  
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Solution  
```python
def twoSum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None
```
## Solution Explanation  
This solution uses a hash table `num_dict` to store the numbers we have seen so far and their indices. We iterate through the array, and for each number, we check if its complement (i.e., `target - num`) is in the hash table. If it is, we have found the two numbers that add up to `target`, and we return their indices. If not, we add the current number and its index to the hash table and continue iterating.

## LeetCode Official Solutions  
- [Official LeetCode Solution](https://leetcode.com/problems/two-sum/solution/)  

Note: The above solution is one possible solution, and there may be other solutions with different time and space complexities.