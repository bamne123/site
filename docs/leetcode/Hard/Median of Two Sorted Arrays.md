### **Problem Title: Median of Two Sorted Arrays**  
https://leetcode.com/problems/median-of-two-sorted-arrays  

### **Difficulty:** Hard  

### **Tags:** Array, Binary Search

### **Problem Statement:**  
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, find the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

You may assume `nums1` and `nums2` cannot be both empty.

### **Explanation**  
The problem requires finding the median of two sorted arrays. The median is the middle value of the combined array when it is sorted. If the total number of elements is even, the median is the average of the two middle numbers.

For example, if we have two arrays `[1, 3]` and `[2]`, the combined array would be `[1, 2, 3]`. The median is `2` because it is the middle value.

### **Time & Space Complexity**  
- **Time Complexity:** O(log (m+n))  
- **Space Complexity:** O(1)  

### **Solution**  
```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        if (m > n) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
            int tempM = m;
            m = n;
            n = tempM;
        }
        int low = 0;
        int high = m;
        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
                } else {
                    return (double) Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }
        return 0.0;
    }
}
```

### **Solution Explanation**  
The solution uses binary search to find the partition point for both arrays. The partition point is the point where the elements on the left side of the partition are less than or equal to the elements on the right side.

We start by checking if the current partition point is valid. If it is, we calculate the median based on whether the total number of elements is odd or even. If the current partition point is not valid, we adjust the partition point by moving it closer to the correct position.

We repeat this process until we find the correct partition point.

### **LeetCode Official Solutions**  
- https://leetcode.com/problems/median-of-two-sorted-arrays/solution/