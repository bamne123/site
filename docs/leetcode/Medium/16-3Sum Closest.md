**3Sum Closest**

### Problem Information

**Difficulty:** Medium
**Category:** Two Pointers, Sorting
**Companies:** [Known companies that frequently ask this]

**Problem Statement:**
Given an integer array `nums` and an integer `k`, return the sum of the k nearest integers in the sorted array `nums`. The k nearest integers are the elements that are k consecutive integers away from the current element.

### Examples:
```
Input: `[1, 2, 3, 1]`, `k = 3`
Output: `7`
Explanation: The k nearest integers are `[1, 2, 3]`.
```

```markdown
# [3] 3SumClosest

## Problem Information
- **Difficulty:** Medium
- **Category:** Two Pointers, Sorting
- **Companies:** [Known companies that frequently ask this]
- **Link:** https://leetcode.com/problems/3sum-closest
- **Companies:** [Known companies that frequently ask this]
- **Code:** https://github.com/leetcode-leetCode/leetcode/blob/master/problems/3SumClosest.js
- **Time:** O(n^2)
- **Space:** O(1)
```

### Solution Approach

The solution involves two pointers, one at the start and one at the end of the array. We maintain a frequency array to keep track of the frequency of each integer in the array.

```javascript
function threeSumClosest(nums, k) {
    let result = Infinity;
    let frequency = new Array(1000001).fill(0);

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let n = nums.length - 1;
        let temp = frequency;

        while (j < n) {
            let sum = nums[i] + nums[j] + nums[n];
            temp[sum]++;

            j++;
            while (j < n && nums[j] === nums[j - 1]) {
                j++;
            }

            let count = j - i - 1;
            while (count > 0 && temp[sum + nums[i] + nums[j]] > 0) {
                temp[sum + nums[i] + nums[j]]--;
                count--;
                j++;
            }
        }

        let sum = nums[i] + nums[i + 1] + nums[i + 2];
        frequency[sum]++;
        if (sum < result) {
            result = sum;
        }
    }

    return result;
}
```

### Step-by-Step Explanation

1.  Initialize an array `frequency` to store the frequency of each integer in the array.
2.  Iterate through the array with two pointers, one at the start and one at the end.
3.  For each pair of pointers, calculate the sum of the three integers and update the frequency array.
4.  While the j pointer is less than the n pointer, increment the j pointer, and then increment the frequency array of the sum plus the current integer.
5.  While the count of elements in the frequency array of the sum plus the current integer is greater than 0, decrement the count of elements in the frequency array of the sum plus the previous integer, increment the j pointer, and update the frequency array of the sum plus the current integer.
6.  Find the sum of the three integers with the minimum frequency, which is the sum closest to the target sum.
7.  Return the result.

### Time Complexity

The time complexity of this solution is O(n^2), where n is the length of the input array. This is because we are iterating through the array with two pointers, and for each pair of pointers, we are updating the frequency array and calculating the sum of the three integers.

### Space Complexity

The space complexity of this solution is O(1), as we are using a constant amount of space for the frequency array.

### Example Use Cases

*   Find the sum of the 3 nearest elements in the array `[1, 2, 3, 1]` with k = 3.
*   Find the sum of the 3 nearest elements in the array `[1, 1, 1, 1]` with k = 3.

### Code Implementation

```javascript
function threeSumClosest(nums, k) {
    let result = Infinity;
    let frequency = new Array(1000001).fill(0);

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let n = nums.length - 1;
        let temp = frequency;

        while (j < n) {
            let sum = nums[i] + nums[j] + nums[n];
            temp[sum]++;

            j++;
            while (j < n && nums[j] === nums[j - 1]) {
                j++;
            }

            let count = j - i - 1;
            while (count > 0 && temp[sum + nums[i] + nums[j]] > 0) {
                temp[sum + nums[i] + nums[j]]--;
                count--;
                j++;
            }
        }

        let sum = nums[i] + nums[i + 1] + nums[i + 2];
        frequency[sum]++;
        if (sum < result) {
            result = sum;
        }
    }

    return result;
}
```