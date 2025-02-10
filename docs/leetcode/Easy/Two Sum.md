# Problem Title: [Two Sum](https://leetcode.com/problems/two-sum)

**Difficulty:** Easy 

**Tags:** Array, Hash Table

## Problem Statement:
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Explanation
To solve this problem, we can use a hash table to store the elements in the array as keys and their indices as values. Then, for each element in the array, we check if its complement (i.e., `target - nums[i]`) is already in the hash table. If it is, we return the current index and the index of the complement. If not, we continue to the next element.

## Time & Space Complexity:
- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(n), where n is the length of the array.

## Solution
```markdown
def twoSum(nums, target):
    # Create a hash table to store elements and their indices
    num_dict = {}
    
    for i, num in enumerate(nums):
        # Calculate the complement
        complement = target - num
        
        # Check if the complement is already in the hash table
        if complement in num_dict:
            # Return the current index and the index of the complement
            return [num_dict[complement], i]
        
        # Otherwise, store the current element and its index in the hash table
        num_dict[num] = i
    
    # If no solution is found, return an empty list
    return []
```

## Solution Explanation
The key insight here is to use a hash table to store elements and their indices. By doing so, we can efficiently check if the complement of each element exists in the array. The time complexity is O(n) because we only need to iterate through the array once.

## LeetCode Official Solutions
- [Official LeetCode Solution](https://leetcode.com/problems/two-sum/solution/)
```
Note: This is a sample solution and may not be the most efficient or elegant solution. It's intended to illustrate the concept and provide a starting point for further optimization.