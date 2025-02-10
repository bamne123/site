**3Sum Closest**

**Problem Statement:**

Given an array of integers `nums` and an integer `target`, return the sum of the three elements in `nums` that are closest to `target`.

**Example:**

* Input: `nums = [-1, 0, 1, 2, -1, -4], target = 0`
* Output: `3` (since `nums = [-1, -1, 2]` is closest to `target = 0`)

**Constraints:**

* `1 <= nums.length <= 5 * 10^4`
* `0 <= target <= 5 * 10^4`
* `-10^5 <= nums[i] <= 10^5`
* `i` is 0-indexed

**Solution:**

```python
def threeSumClosest(nums, target):
    nums.sort()
    closest_sum = float('inf')
    result = []

    for i in range(len(nums) - 2):
        # Skip duplicate values
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1

        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]

            if current_sum < target:
                left += 1
            elif current_sum > target:
                right -= 1
            else:
                # Update the closest sum if necessary
                if abs(current_sum - target) < abs(closest_sum - target):
                    closest_sum = current_sum
                    result = [nums[i], nums[left], nums[right]]

                # Move the pointers
                if current_sum < target:
                    left += 1
                else:
                    right -= 1

    return closest_sum
```

**Explanation:**

1. First, sort the input array `nums`.
2. Initialize the closest sum to infinity (`float('inf')`) and an empty result list (`[]`).
3. Iterate through the array, considering each element as the first element of the three-sum closest to the target.
4. For each element, initialize two pointers (`left` and `right`) to the next element and the last element of the array, respectively.
5. While the pointers haven't crossed each other, calculate the current sum of the three elements.
6. If the current sum is less than the target, move the left pointer to the right to increase the sum.
7. If the current sum is greater than the target, move the right pointer to the left to decrease the sum.
8. If the current sum is equal to the target, update the closest sum if necessary and add the current three numbers to the result list.
9. Move both pointers after each iteration.
10. Finally, return the closest sum found.

**Time Complexity:** O(n^2)

**Space Complexity:** O(1) (excluding the output space for the result list and the target value)

**Example Use Cases:**

* `nums = [-1, 0, 1, 2, -1, -4], target = 0` returns `3`
* `nums = [1, 2, 3, 4, 5], target = 6` returns `-1`