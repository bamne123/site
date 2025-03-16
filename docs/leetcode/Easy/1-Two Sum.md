import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1 - Two Sum

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table
- **Link:** [LeetCode](https://leetcode.com/problems/two-sum)

## Problem Statement
Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

### Examples
Input: `nums = [2,7,11,15], target = 9`
Output: `[0,1]`
Explanation: `Because nums[0] + nums[1] == 9, we return [0, 1]`.

### Constraints
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

### Hints
- Maintain a hash table of numbers already seen.

## Solution Approach
The solution iterates through the `nums` array. For each number, it checks if the complement (target - number) exists in a hash table. If it does, the indices of the current number and its complement are returned. Otherwise, the current number and its index are added to the hash table.

### Complexity Analysis
- **Time Complexity:** O(n)
  - Where n is the length of the input array `nums`. We iterate through the array once. Hash table lookups take O(1) time on average.
- **Space Complexity:** O(n)
  - In the worst case, we store all n elements of the array in the hash table.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python'},
    {label: 'javascript', value: 'javascript'},
    {label: 'go', value: 'go'},
    {label: 'java', value: 'java'},
    {label: 'csharp', value: 'csharp'},
  ]}
>
<TabItem value="python">
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        temp = {}

        for i, num in enumerate(nums):
            remaining = target - num
            if remaining in temp:
                return [temp[remaining], i]
            else:
                temp[num] = i
        
        return []
```
</TabItem>
<TabItem value="javascript">
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = {};

    for (let i = 0; i <= nums.length; i++){
        remaining = target - nums[i];
        if (remaining in temp){
            return [temp[remaining], i];
        } else {
            temp[nums[i]] = i;
        }
    }

    return [];
};
```
</TabItem>
<TabItem value="go">
```go
func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if j, ok := numMap[complement]; ok {
            return []int{j, i}
        } else {
            numMap[num] = i
        }
    }
    return []int{}
}
```
</TabItem>
<TabItem value="java">
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[] { numMap.get(complement), i };
            } else {
                numMap.put(nums[i], i);
            }
        }
        return new int[] {};
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> numMap = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (numMap.ContainsKey(complement)) {
                return new int[] { numMap[complement], i };
            } else {
                numMap[nums[i]] = i;
            }
        }
        return new int[] {};
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize a hash table `numMap` to store each number and its index.
2. Iterate through the `nums` array using a `for` loop, with index `i` and value `num`.
3. Calculate the `complement` needed to reach the `target` (i.e., `complement = target - num`).
4. Check if the `complement` is already present as a key in the `numMap`.
   - If yes, return a new array containing the index of the `complement` (obtained from `numMap[complement]`) and the current index `i`.
   - If no, add the current number `num` as a key to the `numMap` with its index `i` as the value.
5. If no solution is found after iterating through the entire array (which, according to the problem statement, should not happen), you can return an empty array.

## Alternative Approaches
1. **Brute Force**
   - Time Complexity: O(n^2)
   - Space Complexity: O(1)
   - Trade-offs: Simple to implement, but not efficient for large arrays.

2. **Sorted Array and Two Pointers**
   - Time Complexity: O(n log n)
   - Space Complexity: O(n)
   - Trade-offs: Requires sorting the array first, which can be slower than the hash table approach. It also changes the relative indices of the input array which may be undesirable.

## Common Mistakes and Pitfalls
1. Forgetting to handle the case where no solution exists (though the problem states there is exactly one solution).
2. Returning the same index twice.
3. Not checking for integer overflow when calculating the complement.

## Related Problems
- [3Sum](https://leetcode.com/problems/3sum)
- [4Sum](https://leetcode.com/problems/4sum)
