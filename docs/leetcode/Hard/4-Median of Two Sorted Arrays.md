**Median of Two Sorted Arrays**

### Problem Statement

Given two sorted arrays, `nums1` and `nums2`, where `nums1` is the first sorted array and `nums2` is the second sorted array, return the median of the two arrays combined. If one of the arrays is shorter than the other, the missing elements are filled in ascending order.

### Examples

**Input:** `nums1 = [1, 2, 3], nums2 = [4, 5, 6, 7]`
**Output:** `4`

**Constraints:**

*   `1 <= nums1.length <= 50000`
*   `1 <= nums2.length <= 50000`
*   `-1000000000 <= nums1[i] <= 1000000000`
*   `-1000000000 <= nums2[i] <= 1000000000`
*   All elements in `nums1` and `nums2` are unique.
*   `nums1` and `nums2` are sorted arrays.

### Solution

You can solve this problem using a two-pointer technique. The time complexity is O(log(min(n, m))), where n and m are the lengths of the two input arrays.

```python
def findMedianSortedArrays(nums1, nums2):
    # Make sure nums1 is the smaller array
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    # Calculate the total length
    total_length = len(nums1) + len(nums2)

    # Check if the total length is odd or even
    half_length = total_length // 2

    # Initialize the binary search range
    left = 0
    right = len(nums1) - 1

    while True:
        # Calculate the partition point for nums1
        i = (left + right) // 2
        j = half_length - i - 2

        # Calculate the corresponding partition point for nums2
        k = i
        if j < 0:
            # If j is negative, nums2 is all elements
            # Simply return the average of the elements in nums1 and nums2
            return (min(nums1[i], nums2[k]) + max(nums1[i], nums2[k])) / 2

        # If i is too small, move the left pointer
        if i - left < 0:
            # If j is negative, nums1 is all elements
            return (min(nums1[left], nums2[j + 1])) if nums1[left] < nums2[j + 1] else max(nums1[left], nums2[j + 1])

        # If j is too small, move the right pointer
        if j - j - 1 < 0:
            # If i is negative, nums2 is all elements
            return (min(nums1[i], nums2[left])) if nums1[i] < nums2[left] else max(nums1[i], nums2[left])

        # If i is too large, move the left pointer
        if nums1[i] > nums2[j + 1]:
            right = i - 1
        elif nums1[i] < nums2[j + 1]:
            left = i + 1
        else:
            # If the partition point is correct, calculate the total length and return the median
            return (min(nums1[i], nums2[j + 1]) + max(nums1[i], nums2[j + 1])) / 2
```

### Time and Space Complexity

*   Time complexity: O(log(min(n, m)))
*   Space complexity: O(1)

Note that the binary search range is used to find the partition point for each array, and the final step is to calculate the median as the average of the elements in the two arrays.