**Two Sum Problem**

### Problem Statement

Given an array of integers and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example 1:**

Input: `[2,7,11,15]`, `target = 9`
Output: `[0,1]` (indices of 2 and 4 in the array)

**Example 2:**

Input: `[2,7,11,15]`, `target = 5`
Output: `[0,1]` (indices of 0 and 0 in the array)

**Example 3:**

Input: `[2,7,11,15]`, `target = 3`
Output: `[1,2]` (indices of 1 and 2 in the array)

### Solution

Here's a Python solution that uses a HashMap to store the numbers we've seen so far and their indices:

```python
def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return []
```

### Explanation

1. We start by creating an empty dictionary `num_dict` to store the numbers we've seen so far and their indices.
2. We iterate through the `nums` array, and for each number `num`, we calculate its complement `complement = target - num`.
3. We check if `complement` is already in `num_dict`. If it is, it means we've found two numbers that add up to `target`, so we return their indices.
4. If `complement` is not in `num_dict`, we add `num` and its index `i` to `num_dict`.
5. If we finish iterating through the array without finding two numbers that add up to `target`, we return an empty list.

### Time Complexity

The time complexity of this solution is O(n), where n is the length of the `nums` array, because we're doing a constant amount of work for each element in the array.

### Space Complexity

The space complexity of this solution is O(n), because in the worst case, we might need to store all elements of the `nums` array in `num_dict`.

### Example Use Cases

* `two_sum([2,7,11,15], 9)` returns `[0,1]`
* `two_sum([2,7,11,15], 5)` returns `[0,1]`
* `two_sum([2,7,11,15], 3)` returns `[1,2]`

### Notes

* This solution has a time complexity of O(n) because we're doing a constant amount of work for each element in the array.
* This solution has a space complexity of O(n) because in the worst case, we might need to store all elements of the `nums` array in `num_dict`.
* This solution assumes that there is exactly one solution to the problem. If there are multiple solutions, the problem is called "multi-partitive".