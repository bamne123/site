### Problem Title: Median of Two Sorted Arrays
#### Difficulty: Hard

The problem asks us to find the median of two sorted arrays.

**Problem Statement:**
Given two sorted arrays `nums1` and `nums2`, return the median of the two arrays merged into one. If the total number of elements is odd, the median is the middle element. If the total number of elements is even, the median is the average of the two middle elements.

**Example:**
```
Input: nums1 = [1, 3]
Input: nums2 = [2]
Output: 2
```
**Explanation:**
To solve this problem, we can use a two-pointer technique. We start by comparing the first elements of `nums1` and `nums2`. If the first element is smaller, we move the pointer in `nums1` one step forward. If the first element is larger, we move the pointer in `nums2` one step forward. We continue this process until we reach the end of one of the arrays.

Here's the code in Markdown:

```md
# Problem Title: Median of Two Sorted Arrays
#### Difficulty: Hard

#### Problem Statement:
Given two sorted arrays `nums1` and `nums2`, return the median of the two arrays merged into one. If the total number of elements is odd, the median is the middle element. If the total number of elements is even, the median is the average of the two middle elements.

## Explanation
To solve this problem, we can use a two-pointer technique. We start by comparing the first elements of `nums1` and `nums2`. If the first element is smaller, we move the pointer in `nums1` one step forward. If the first element is larger, we move the pointer in `nums2` one step forward. We continue this process until we reach the end of one of the arrays.

## Time & Space Complexity
- **Time Complexity:** O(n + m)
- **Space Complexity:** O(1)

## Solution
```language
def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    merged = []
    i, j = 0, 0
    
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            merged.append(nums1[i])
            i += 1
        else:
            merged.append(nums2[j])
            j += 1
            
    merged += nums1[i:]
    merged += nums2[j:]
    
    if len(merged) % 2 == 0:
        return (merged[len(merged) // 2 - 1] + merged[len(merged) // 2]) / 2
    else:
        return merged[len(merged) // 2]
```
## LeetCode Official Solutions
- [LeetCode Solution](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### Additional Features

- If no solution is provided by the user, leave the "Solution" section empty.
- If the problem is not found, respond with a polite message.
- Ensure that the JSON structure is valid and all fields are properly filled.