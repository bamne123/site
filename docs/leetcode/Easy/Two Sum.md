**Two Sum** is a classic problem in **LeetCode** where you're given an array of integers and a target sum, and you need to find two elements in the array that add up to the target sum.

**Problem Statement:**
Given an array of integers `nums` and an integer `target`, return indices of the two elements which add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**
Input: `nums = [2, 7, 11, 15], target = 9`
Output: `Indices of the two elements which add up to 9: [0, 1]`

**Solution:**
```python
def two_sum(nums, target):
    """
    Returns indices of the two elements which add up to the target sum.

    Args:
        nums (list): A list of integers.
        target (int): The target sum.

    Returns:
        list: Indices of the two elements which add up to the target sum.
    """
    # Create a dictionary to store elements and their indices
    num_dict = {}
    
    # Iterate through the array with two pointers
    for i, num in enumerate(nums):
        # Calculate the complement of the current number
        complement = target - num
        
        # Check if the complement is in the dictionary
        if complement in num_dict:
            # Return the indices of the two elements
            return [num_dict[complement], i]
        
        # Add the current number and its index to the dictionary
        num_dict[num] = i
    
    # If no solution is found, return an empty list
    return []
```
**Time Complexity:** O(n)
**Space Complexity:** O(n)

**Explanation:**
The algorithm uses a dictionary to store elements and their indices. It iterates through the array with two pointers, `i` and `j`, where `i` points to the current element and `j` points to the next element. For each element, it calculates the complement of the current number with respect to the target sum. If the complement is in the dictionary, it means that there are two elements that add up to the target sum, so it returns their indices. If not, it adds the current number and its index to the dictionary.

**Example Use Cases:**

* `two_sum([2, 7, 11, 15], 9)` returns `[0, 1]`
* `two_sum([3, 2, 4], 6)` returns `[1, 2]`
* `two_sum([3, 3], 6)` returns `[0, 1]`