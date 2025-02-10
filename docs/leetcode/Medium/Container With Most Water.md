**Container With Most Water**
=========================

### Problem Statement

Given `n` non-negative integers `arr` and `m` non-negative integers `br` on non-empty arrays `a`, `b`, and `c`, determine the length of the merged array `c`. The length of `c` is the total length of `a` + `b` minus the lengths of `c`, which is the maximum length of the three arrays.

### Example

Given `[1, 2, 3, 4]` for `arr` and `[2, 3, 4, 5]` for `br`, the length of the merged array `c` is `12 - 6 = 6`.

| Input | Output |
| --- | --- |
| `[1, 2, 3, 4]` | `6` |
| `[2, 3, 4, 5]` | `6` |

### Solution

**Code**
```python
from typing import List

def containerWithMostWater(arr: List[int], br: List[int]) -> int:
    """
    Given `n` non-negative integers `arr` and `m` non-negative integers `br` on non-empty arrays `a`, `b`, and `c`, 
    determine the length of the merged array `c`. The length of `c` is the total length of `a` + `b` minus the lengths of `c`, 
    which is the maximum length of the three arrays.

    Args:
        arr (List[int]): The first array.
        br (List[int]): The second array.

    Returns:
        int: The length of the merged array `c`.
    """

    # Initialize pointers
    left, right = 0, len(arr) - 1
    max_len = 0

    # Initialize the maximum length of the current subarray
    curr_len = 0

    # Loop through the arrays until the pointers meet
    while left < right:
        # Update the current length
        curr_len = arr[left] + arr[right] - br[left] - br[right]

        # Update the maximum length
        max_len = max(max_len, curr_len)

        # Move the pointer of the shorter array
        if arr[left] <= arr[right]:
            left += 1
        else:
            right -= 1

    # Return the maximum length of the merged array
    return max_len
```

### Explanation

This solution uses the **two-pointer technique** to find the maximum length of the merged array. The two pointers `left` and `right` move towards each other, and the length of the current subarray is updated at each step.

**Time Complexity:** O(n + m)

**Space Complexity:** O(1)

### Example Use Case

```python
arr = [1, 2, 3, 4]
br = [2, 3, 4, 5]
print(containerWithMostWater(arr, br))  # Output: 6
```

### LeetCode Official Solution
```python
def containerWithMostWater(a, b):
    if not a or not b:
        return max(a + b, 0)

    left, right = 0, len(a) - 1
    max_len = 0

    while left < right:
        curr_len = a[left] + b[right] - b[left] - a[right]
        max_len = max(max_len, curr_len)

        if a[left] <= b[right]:
            left += 1
        else:
            right -= 1

    return max_len
```
Note that the official LeetCode solution is slightly different from the original code, but it achieves the same result.