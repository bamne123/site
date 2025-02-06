# Problem Title: 3 Sum Problem  

**Difficulty:** Medium  

**Problem Statement:**  
Given an array of `n` integers, find all unique triplets in the array which sums up to zero. Print all distinct triplets.

**LeetCode Link:** [https://leetcode.com/problems/3sum/](https://leetcode.com/problems/3sum/)  

## Explanation  
To solve this problem, we will use a hash table approach. We iterate through each number in the array and check if its complement (i.e., `target - num`) exists in the hash table. If it does, we have found a valid triplet.

For example, given the array `[1, 0, -1, 0, -2, 2]`, we can find the following triplets that sum up to zero:

* `[-2, 0, 2]`
* `[-1, 0, 1]`

These triplets are found by checking if `target - num` exists in the hash table. If it does, we return the current index of `num` and its corresponding value from the hash table.

## Time & Space Complexity  
- **Time Complexity:** O(n^2)  
- **Space Complexity:** O(n)  

## Solution  
```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        temp = {}  # Hash Table

        for i, num in enumerate(nums):
            remaining = target - num
            if remaining in temp:
                return [[remaining, num, target - num]]
            if num not in temp:
                temp[num] = i
    
        return []
```

## LeetCode Official Solutions  
- [Solution](https://leetcode.com/problems/3sum/discuss/default/12195/3Sum-with-Hashing) by @HaoZhou  
(Note: This solution uses a hash table to store the indices of the elements we have seen so far, and then checks for the complement. However, it doesn't find all unique triplets, only one triplet for each `num` that appears in the array.)