### **1. Gather the Problem Details for creating markdown data**

Title of problem: [Two Sum](https://leetcode.com/problems/two-sum)

**Problem Statement:**
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

Example:
Input: `nums = [2, 7, 11, 15], target = 9`
Output: `[0, 1]`

### **2. Extract the Solution (if provided by the user)**

Detect and format the **user's code** in Markdown:

**User's Solution:**
```python
def two_sum(nums, target):
    """
    Returns indices of the two numbers in the array that add up to the target.

    Args:
        nums (list): A list of integers.
        target (int): The target sum.

    Returns:
        list: A list containing the indices of the two numbers that add up to the target.
    """
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None
```
### **3. Generate a Markdown Data**

```md
# Problem Title: [Two Sum](https://leetcode.com/problems/two-sum)  

**Difficulty:** Easy 

**Tags:** Array, Hash Table

**Problem Statement:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

## Explanation  
This problem is a classic example of the two-pointer technique. We initialize two pointers, one at the start of the array and one at the end. We then move the pointer that points to the smaller number forward until we find a pair that adds up to the target. We use a dictionary to keep track of the numbers we have seen so far and their indices.

## Time & Space Complexity  
The time complexity of this solution is O(n), where n is the length of the input array. This is because we only need to iterate through the array once. The space complexity is O(n) as well, because in the worst case, we need to store every number in the dictionary.

## Solution  
```python
def two_sum(nums, target):
    """
    Returns indices of the two numbers in the array that add up to the target.

    Args:
        nums (list): A list of integers.
        target (int): The target sum.

    Returns:
        list: A list containing the indices of the two numbers that add up to the target.
    """
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None
```
## LeetCode Official Solutions  
- [Official LeetCode Solution](https://leetcode.com/problems/two-sum/)
```
## Solution Explanation  
This solution uses a dictionary to store the numbers we have seen so far and their indices. We iterate through the array and for each number, we check if its complement (i.e., the number that adds up to the target) is in the dictionary. If it is, we return the indices of the two numbers. If not, we add the current number and its index to the dictionary. If we reach the end of the array without finding a pair that adds up to the target, we return None.