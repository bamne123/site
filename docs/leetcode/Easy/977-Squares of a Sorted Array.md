import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 977 - Squares of a Sorted Array

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Two Pointers, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array)

## Problem Statement
Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

### Examples
Input: `nums = [-4,-1,0,3,10]`
Output: `[0,1,9,16,100]`
Explanation: After squaring, the array becomes `[16,1,0,9,100]`. After sorting, it becomes `[0,1,9,16,100]`.

### Constraints
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order.

### Hints
- Try thinking about the output array negatively.
- Use the `two pointers` approach.

## Solution Approach
The problem requires us to square each element of a sorted array and then sort the squared elements in non-decreasing order. A naive approach would be to square each element and then use a sorting algorithm. However, since the input array is already sorted, we can use a two-pointer approach to achieve a more efficient solution. We can use two pointers, one at the beginning and one at the end of the array. We compare the absolute values of the elements pointed to by these pointers. The element with the larger absolute value will have the larger square. We place the square of this element at the end of the result array and move the corresponding pointer inwards. We repeat this process until both pointers meet.

### Complexity Analysis
- **Time Complexity:** O(n)
  - We iterate through the array once using two pointers.
- **Space Complexity:** O(n)
  - We create a new array of the same size to store the squared and sorted values.

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
def sortedSquares(nums):
    n = len(nums)
    result = [0] * n
    left, right = 0, n - 1
    for i in range(n - 1, -1, -1):
        if abs(nums[left]) > abs(nums[right]):
            result[i] = nums[left] ** 2
            left += 1
        else:
            result[i] = nums[right] ** 2
            right -= 1
    return result
```
</TabItem>
<TabItem value="javascript">
```javascript
function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
        } else {
            result[i] = nums[right] ** 2;
            right--;
        }
    }
    return result;
}
```
</TabItem>
<TabItem value="go">
```go
func sortedSquares(nums []int) []int {
    n := len(nums)
    result := make([]int, n)
    left, right := 0, n-1
    for i := n-1; i >= 0; i-- {
        if abs(nums[left]) > abs(nums[right]) {
            result[i] = nums[left] * nums[left]
            left++
        } else {
            result[i] = nums[right] * nums[right]
            right--
        }
    }
    return result
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int left = 0;
        int right = n - 1;
        for (int i = n - 1; i >= 0; i--) {
            if (Math.abs(nums[left]) > Math.abs(nums[right])) {
                result[i] = nums[left] * nums[left];
                left++;
            } else {
                result[i] = nums[right] * nums[right];
                right--;
            }
        }
        return result;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int[] SortedSquares(int[] nums) {
        int n = nums.Length;
        int[] result = new int[n];
        int left = 0;
        int right = n - 1;
        for (int i = n - 1; i >= 0; i--) {
            if (Math.Abs(nums[left]) > Math.Abs(nums[right])) {
                result[i] = nums[left] * nums[left];
                left++;
            } else {
                result[i] = nums[right] * nums[right];
                right--;
            }
        }
        return result;
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize two pointers, `left` and `right`, to the start and end of the input array, respectively.
2. Create a new array `result` of the same size as the input array to store the squared and sorted values.
3. Iterate from the end of the `result` array to the beginning.
4. In each iteration, compare the absolute values of the elements pointed to by the `left` and `right` pointers.
5. Place the square of the element with the larger absolute value at the current position in the `result` array.
6. Move the corresponding pointer inwards.
7. Repeat steps 4-6 until the `left` and `right` pointers meet.
8. Return the `result` array.

## Alternative Approaches
1. **Naive Approach**
   - Square each element in the array and then sort the resulting array.
   - Time Complexity: O(n log n)
   - Space Complexity: O(1) if sorting is done in-place, O(n) otherwise.
   - Trade-offs: Simpler to implement, but less efficient than the two-pointer approach.

2. **Using `sorted` function in Python**
    - Square each element in the array and use python's `sorted` function.
    - Time Complexity: O(n log n)
    - Space Complexity: O(n)
    - Trade-offs: concise, but less efficient.

## Common Mistakes and Pitfalls
1. Forgetting to handle negative numbers correctly.
2. Not using the two-pointer approach when the input array is already sorted.
3. Not squaring the values before comparing them.
4. Incorrectly placing the squared values in the result array.

## Related Problems
- [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [Sort Colors](https://leetcode.com/problems/sort-colors/)
