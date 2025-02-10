**Merge Two Sorted Lists**
=======================

### **Problem Statement**

Merge two sorted lists into a single sorted list.

**Example**

Given two sorted lists `nums1 = [1, 2, 3, 0, 0, 0]` and `nums2 = [0, 0, 1, 2]`, merge them into a single sorted list `nums3 = [0, 0, 1, 2, 3]`.

### **Solution**

We'll provide a solution in Python. Here's the code:

```python
class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int]) -> list[int]:
        # Create a new list to store the result
        result = []
        
        # Initialize indices for nums1 and nums2
        i, j = m, m
        
        # Merge smaller elements first
        while i < m and j < m:
            if nums1[i] < nums2[j]:
                result.append(nums1[i])
                i += 1
            else:
                result.append(nums2[j])
                j += 1
        
        # If there are remaining elements in nums1, append them to the result
        while i < m:
            result.append(nums1[i])
            i += 1
        
        # If there are remaining elements in nums2, append them to the result
        while j < m:
            result.append(nums2[j])
            j += 1
        
        return result
```

### **Explanation**

This solution uses a two-pointer technique to merge the two sorted lists. The `merge` method takes three parameters: `nums1`, `m`, and `nums2`. `nums1` is the first sorted list, and `m` is the length of `nums1`. `nums2` is the second sorted list.

The method creates a new list `result` to store the merged result. It then initializes two pointers, `i` and `j`, to the start of `nums1` and `nums2`, respectively.

The method enters a loop that continues until one of the pointers reaches the end of its list. In each iteration, it compares the current elements of `nums1` and `nums2` and appends the smaller element to the `result` list. Finally, it appends the remaining elements from `nums1` or `nums2` to the `result` list.

### **Time Complexity**

The time complexity of this solution is O(m + n), where m and n are the lengths of `nums1` and `nums2`, respectively.

### **Space Complexity**

The space complexity is O(n), where n is the length of the merged list.

### **Example Use Case**

```python
solution = Solution()
nums1 = [1, 2, 3, 0, 0, 0]
nums2 = [0, 0, 1, 2]
result = solution.merge(nums1, len(nums1), nums2)
print(result)  # [0, 0, 1, 2, 3]
```