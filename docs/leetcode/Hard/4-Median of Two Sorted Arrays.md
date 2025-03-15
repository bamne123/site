import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Median of Two Sorted Arrays

## Problem Information
- **Difficulty:** Hard
- **Category:** Array, Binary Search, Divide and Conquer
- **Link:** [LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays)

## Problem Statement
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

### Examples
Input: `nums1 = [1,3], nums2 = [2]`
Output: `2.00000`
Explanation: `merged array = [1,2,3]` and the median is 2.

### Constraints
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

### Hints
- To solve this problem efficiently, you can use binary search to find the correct partition of the arrays.
- Consider the edge cases where one of the arrays is empty.
- Make sure to handle both odd and even length merged arrays.

## Solution Approach
The problem can be solved using binary search. The main idea is to find the correct partition in both arrays such that all elements to the left of the partition are smaller than all elements to the right of the partition. Once the correct partition is found, the median can be easily computed based on whether the total number of elements is even or odd.

### Complexity Analysis
- **Time Complexity:** O(log(min(m, n)))
  - We perform binary search on the smaller array to find the correct partition. The time complexity is logarithmic with respect to the size of the smaller array.
- **Space Complexity:** O(1)
  - We use a constant amount of extra space regardless of the input size.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python' },
    {label: 'javascript', value: 'javascript' },
    {label: 'go', value: 'go' },
    {label: 'java', value: 'java' },
    {label: 'csharp', value: 'csharp' },
  ]}
>
<TabItem value="python">
```python
class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        m, n = len(nums1), len(nums2)
        low, high = 0, m
        while low <= high:
            partitionX = (low + high) // 2
            partitionY = (m + n + 1) // 2 - partitionX

            maxLeftX = nums1[partitionX - 1] if partitionX > 0 else float('-inf')
            minRightX = nums1[partitionX] if partitionX < m else float('inf')

            maxLeftY = nums2[partitionY - 1] if partitionY > 0 else float('-inf')
            minRightY = nums2[partitionY] if partitionY < n else float('inf')

            if maxLeftX <= minRightY and maxLeftY <= minRightX:
                if (m + n) % 2 == 0:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
                else:
                    return max(maxLeftX, maxLeftY)
            elif maxLeftX > minRightY:
                high = partitionX - 1
            else:
                low = partitionX + 1
```
</TabItem>
<TabItem value="javascript">
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxLeftX = partitionX > 0 ? nums1[partitionX - 1] : -Infinity;
        const minRightX = partitionX < m ? nums1[partitionX] : Infinity;

        const maxLeftY = partitionY > 0 ? nums2[partitionY - 1] : -Infinity;
        const minRightY = partitionY < n ? nums2[partitionY] : Infinity;

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
};
```
</TabItem>
<TabItem value="go">
```go
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    if len(nums1) > len(nums2) {
        nums1, nums2 = nums2, nums1
    }
    m, n := len(nums1), len(nums2)
    low, high := 0, m
    for low <= high {
        partitionX := (low + high) / 2
        partitionY := (m + n + 1) / 2 - partitionX

        maxLeftX := -1 << 31 // Minimum int
        if partitionX > 0 {
            maxLeftX = nums1[partitionX-1]
        }
        minRightX := 1<<31 - 1 // Maximum int
        if partitionX < m {
            minRightX = nums1[partitionX]
        }

        maxLeftY := -1 << 31
        if partitionY > 0 {
            maxLeftY = nums2[partitionY-1]
        }
        minRightY := 1<<31 - 1
        if partitionY < n {
            minRightY = nums2[partitionY]
        }

        if maxLeftX <= minRightY && maxLeftY <= minRightX {
            if (m+n)%2 == 0 {
                return float64(max(maxLeftX, maxLeftY)+min(minRightX, minRightY)) / 2.0
            } else {
                return float64(max(maxLeftX, maxLeftY))
            }
        } else if maxLeftX > minRightY {
            high = partitionX - 1
        } else {
            low = partitionX + 1
        }
    }
    return 0.0
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
        }
        int m = nums1.length;
        int n = nums2.length;
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
                    return (double) (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
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
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.Length > nums2.Length) {
            (nums1, nums2) = (nums2, nums1);
        }
        int m = nums1.Length;
        int n = nums2.Length;
        int low = 0;
        int high = m;
        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;

            int maxLeftX = (partitionX == 0) ? int.MinValue : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? int.MaxValue : nums1[partitionX];

            int maxLeftY = (partitionY == 0) ? int.MinValue : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? int.MaxValue : nums2[partitionY];

            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 == 0) {
                    return (double)(Math.Max(maxLeftX, maxLeftY) + Math.Min(minRightX, minRightY)) / 2;
                } else {
                    return (double)Math.Max(maxLeftX, maxLeftY);
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
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Ensure `nums1` is the smaller array to optimize binary search.
2. Initialize binary search boundaries `low` and `high` to `0` and `m` respectively.
3. In a loop, calculate `partitionX` and `partitionY` to divide arrays.
4. Determine `maxLeftX`, `minRightX`, `maxLeftY`, `minRightY` based on partition positions, handling edge cases with `-Infinity` and `Infinity`.
5. If partitions are correct (`maxLeftX <= minRightY && maxLeftY <= minRightX`), calculate the median based on the parity of `(m + n)`.
6. If `maxLeftX > minRightY`, adjust `high` to search in the lower half.
7. Otherwise, adjust `low` to search in the upper half.
8. Return the calculated median.

## Alternative Approaches
1. **Merge and Find Median**
   - Time Complexity: O(m + n)
   - Space Complexity: O(m + n)
   - Trade-offs: Simple implementation but does not meet the logarithmic time complexity requirement.

2. **Binary Search on Elements**
   - Time Complexity: O(log(10^6)), assuming the range of numbers is -10^6 to 10^6.
   - Space Complexity: O(1)
   - Trade-offs: Not optimal if the range of numbers is very large.

## Common Mistakes and Pitfalls
1. Incorrectly handling edge cases, like empty arrays.
2. Not considering the parity of the total elements when computing the median.
3. Integer overflow when calculating partition indices.

## Related Problems
- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)