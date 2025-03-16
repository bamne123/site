import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 88 - Merge Sorted Array

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Two Pointers, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/merge-sorted-array/)

## Problem Statement
You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be *stored inside the array* `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

### Examples
Input: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`
Output: `[1,2,2,3,5,6]`
Explanation: The arrays we are merging are `[1,2,3]` and `[2,5,6]`.
The result of the merge is `[1,2,2,3,5,6]` with the underlined elements coming from `nums1`.

### Constraints
- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

### Hints
- You can avoid using extra space by performing the merge operation in-place, starting from the end of the array `nums1`.

## Solution Approach
The problem requires us to merge two sorted arrays, `nums1` and `nums2`, into `nums1` in a sorted manner. Since `nums1` has enough space to accommodate all elements from both arrays, we can use a two-pointer approach, starting from the end of the arrays to avoid overwriting elements from `nums1` that have not been merged yet. We compare the last elements of both arrays and place the larger one at the end of `nums1`. We decrement the corresponding pointer and the index in `nums1` where we placed the element. We repeat this process until one of the arrays is exhausted. Then, we copy the remaining elements from the other array into `nums1`.

### Complexity Analysis
- **Time Complexity:** O(m + n)
  - We iterate through both arrays at most once, where `m` is the number of elements in `nums1` and `n` is the number of elements in `nums2`.
- **Space Complexity:** O(1)
  - We perform the merge in-place, using only a constant amount of extra space for pointers.

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
<TabItem value='python'>
```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # Start with reverse index
        p1 = m - 1
        p2 = n - 1
        p = m + n - 1

        # Iterate on nums2 array
        while p2 >= 0:
            # nums1 > nums2 then replace nums1 value
            if p1 >= 0 and nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            # else replace nums2 value
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            # decrement pointer
            p -= 1
```
</TabItem>
<TabItem value='javascript'>
```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while(p2 >= 0){
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1 --;
        } else {
            nums1[p] = nums2[p2];
            p2 --;
        }
        p --;
    }  
};
```
</TabItem>
<TabItem value='go'>
```go
func merge(nums1 []int, m int, nums2 []int, n int)  {
    p1 := m - 1
    p2 := n - 1
    p := m + n - 1

    for p1 >= 0 && p2 >= 0 {
        if nums1[p1] > nums2[p2] {
            nums1[p] = nums1[p1]
            p1--
        } else {
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }

    // Copy remaining elements from nums2 if any
    for p2 >= 0 {
        nums1[p] = nums2[p2]
        p2--
        p--
    }
}
```
</TabItem>
<TabItem value='java'>
```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;

        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        // Copy remaining elements from nums2 if any
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }
}
```
</TabItem>
<TabItem value='csharp'>
```csharp
public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;

        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        // Copy remaining elements from nums2 if any
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize three pointers: `p1` pointing to the last element of `nums1` (up to index `m-1`), `p2` pointing to the last element of `nums2` (up to index `n-1`), and `p` pointing to the last position in `nums1` where the merged element will be placed (index `m+n-1`).
2. While `p1` and `p2` are both within the bounds of their respective arrays, compare the elements at `nums1[p1]` and `nums2[p2]`.
3. Place the larger of the two elements at `nums1[p]` and decrement the corresponding pointer (`p1` or `p2`) and `p`.
4. After the loop, if there are any remaining elements in `nums2`, copy them to the beginning of `nums1`. There is no need to copy remaining elements from `nums1` because they are already in the correct place.

## Alternative Approaches
1. **Using Extra Space**
   - Create a new array of size `m + n`, merge the elements from `nums1` and `nums2` into the new array, and then copy the elements back to `nums1`.
   - Time Complexity: O(m + n)
   - Space Complexity: O(m + n)
   - Trade-offs: Uses extra space, but the implementation is simpler.

## Common Mistakes and Pitfalls
1. Not handling the case where one of the arrays is completely processed before the other. Make sure to copy the remaining elements from the other array if needed.
2. Incorrectly initializing the pointers. Make sure `p1` and `p2` start at the last valid indices of the arrays being merged.
3. Overwriting elements in `nums1` before they are processed if starting from the beginning of the arrays instead of the end.

## Related Problems
- [Remove Element](https://leetcode.com/problems/remove-element/)
- [Sort Colors](https://leetcode.com/problems/sort-colors/)
