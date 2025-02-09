### **Problem Title: Two Sum (https://leetcode.com/problems/two-sum)**

**Difficulty:** Easy 

**Tags:** Array, Hash Table

**Problem Statement:** 

You are given a **non-empty** array of integers `nums`, and an integer `target`. One element in `nums` must appear twice. Return the **first duplicate** pair in `nums` of size 2 in any order. If no such numbers exist, return `[null, null]`.

**Example:**

* Input: `nums = [1, 2, 3, 1], target = 4`
* Output: `[1,3]`
* Explanation: The first pair of duplicates is `[1, 3]` for index `(0, 2)` in the array `[1, 2, 3, 1]`.

## Explanation

The problem requires finding the first pair of duplicates in an array of integers. We can use a hash table to achieve this in efficient time complexity.

## Time & Space Complexity

- **Time Complexity:** O(n) where n is the number of elements in the array.
- **Space Complexity:** O(n) for storing the elements in the hash table.

## Solution
```markdown
```python
def findDuplicates(nums):
    seen = set()
    duplicates = []
    for i in nums:
        if i in seen:
            duplicates.append(i)
        seen.add(i)
    return duplicates
```
## Solution Explanation

The solution works by iterating over the array and keeping track of the elements seen so far in a set. When an element is encountered again, it is added to the duplicates list. Finally, the duplicates list is returned.

Note: This solution does not find the first duplicate pair, it finds all duplicate elements in the array.

## LeetCode Official Solutions  
- [Official LeetCode Solution](https://leetcode.com/problems/two-sum/solution/)  

Note: The official LeetCode solution for the Two Sum problem is different from this solution, it finds the indices of the two numbers in the array which add up to the target sum, not the first duplicate pair.