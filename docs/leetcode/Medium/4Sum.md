**4Sum**
================

**Problem Statement**
-------------------

Given an array of integers `nums` and an integer `target`, return the indices of the 4 Sum array elements that add up to `target`.

**Example**
-----------

*   Input: `nums = [1, 0, -1, 0, -2, 2, 2], target = 0`
*   Output: `[4, 5]`

**Solution**
------------

```python
def fourSum(nums, target):
    """
    Returns the indices of the 4 Sum array elements that add up to target.

    Args:
    - nums (list): The input array of integers.
    - target (int): The target sum.

    Returns:
    - list: The indices of the 4 Sum array elements that add up to target.
    """
    nums.sort()
    result = []
    for i in range(len(nums) - 3):
        # Skip duplicates to avoid duplicates in the result
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, len(nums) - 2):
            # Skip duplicates to avoid duplicates in the result
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            left, right = j + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]
                if total < target:
                    left += 1
                elif total > target:
                    right -= 1
                else:
                    result.append([i, j, left, right])
                    # Skip duplicates to avoid duplicates in the result
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
    return result
```

**Explanation**
--------------

This solution uses the two-pointer technique to efficiently find the 4 Sum array elements that add up to the target sum.

1.  First, we sort the input array `nums`.
2.  We then iterate through the array with two nested loops. The outer loop iterates from the first element to the third last element, and the inner loop iterates from the fourth element to the second last element.
3.  We use two pointers, `left` and `right`, to find the pair of elements that add up to the target sum.
4.  We initialize `left` to the next element of the first element and `right` to the last element.
5.  We then enter a while loop to find the pair of elements that add up to the target sum.
6.  Inside the while loop, we calculate the total sum of the four elements.
7.  If the total sum is less than the target sum, we increment `left` to find the next element.
8.  If the total sum is greater than the target sum, we decrement `right` to find the previous element.
9.  If the total sum is equal to the target sum, we add the indices of the four elements to the result array and skip duplicates to avoid duplicates in the result.
10. Finally, we return the result array.

**Time Complexity**
-------------------

The time complexity of this solution is O(n^2), where n is the length of the input array.

**Space Complexity**
-------------------

The space complexity of this solution is O(n), where n is the length of the input array.

**Note**
----

This solution assumes that the input array `nums` is sorted. If the input array is not sorted, we need to sort it before using this solution.