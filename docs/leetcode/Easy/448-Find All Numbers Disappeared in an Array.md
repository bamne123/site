import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 448 - Find All Numbers Disappeared in an Array

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table
- **Link:** [LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array)

## Problem Statement

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return *an array of all the integers in the range* `[1, n]` *that do not appear in* `nums`.

**Example 1:**
```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

**Example 2:**

```
Input: nums = [1,1]
Output: [2]
```


**Constraints:**
- `n == nums.length`
- `1 &lt;= n &lt;= 10^5`
- `1 &lt;= nums[i] &lt;= n`


**Follow up:** Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.


## Solution Approach

This problem can be efficiently solved using a hash table (or a set). The core idea is to iterate through the input array `nums` and mark the presence of each number in the range [1, n].  

**Here's a breakdown:**

1. **Initialization:** Create a hash table (or set) to store the presence of each number from 1 to `n`.
2. **Marking Presence:** Iterate through `nums`. For each number `num` in `nums`, mark its presence in the hash table by setting the corresponding key to `True`. 
3. **Identifying Missing Numbers:**  After processing all numbers in `nums`, iterate through the range [1, n].  For each number `i`, if it is not present (has a value of `False`) in the hash table, add it to the result list.



## Solution Code
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python" },
    {label: "JavaScript", value: "javascript" },
    {label: "Java", value: "java" },
    {label: "C#", value: "csharp" },
    {label: "Go", value: "go" },
  ]}
>
<TabItem value="python">
```python
def findDisappearedNumbers(nums):
    n = len(nums)
    present = [False] * (n + 1)
    for num in nums:
        present[num] = True
    result = []
    for i in range(1, n + 1):
        if not present[i]:
            result.append(i)
    return result
```
</TabItem>
<TabItem value="javascript">
```javascript
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const present = Array(n + 1).fill(false);

    for (let num of nums) {
        present[num] = true;
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
        if (!present[i]) {
            result.push(i);
        }
    }
    return result;
};
```
</TabItem>
<TabItem value="java">
```java
import java.util.*;

class Solution {
    public int[] findDisappearedNumbers(int[] nums) {
        int n = nums.length;
        boolean[] present = new boolean[n + 1];

        for (int num : nums) {
            present[num] = true;
        }

        List<Integer> result = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (!present[i]) {
                result.add(i);
            }
        }
        return result.stream().mapToInt(i -> i).toArray();
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int[] FindDisappearedNumbers(int[] nums) {
        int n = nums.Length;
        bool[] present = new bool[n + 1];

        for (int num : nums) {
            present[num] = true;
        }

        List<int> result = new List<int>();
        for (int i = 1; i <= n; i++) {
            if (!present[i]) {
                result.Add(i);
            }
        }
        return result.ToArray();
    }
}
```
</TabItem>
<TabItem value="go">
```go
func findDisappearedNumbers(nums []int) []int {
    n := len(nums)
    present := make([]bool, n+1)

    for _, num := range nums {
        present[num] = true
    }

    var result []int
    for i := 1; i <= n; i++ {
        if !present[i] {
            result = append(result, i)
        }
    }
    return result
}
```
</TabItem>
</Tabs>

## Step-by-Step Explanation

1. **Create a Hash Table:**
   - Initialize a boolean array `present` of size `n+1` (where `n` is the length of the input array `nums`). This array will act as our hash table. 
   - Each index in `present` corresponds to a number from 1 to `n`.
   - Initially, all elements in `present` are set to `False`, indicating that no numbers are present yet.

2. **Mark Numbers:**
   - Iterate through each number `num` in the input array `nums`. 
   - For each `num`, set the corresponding index in `present` to `True`. This marks the number as "present" in our hash table.

3. **Identify Missing Numbers:**
   - Iterate from 1 to `n`.
   - For each number `i` in this range:
     - If `present[i]` is `False`, it means that number `i` is not present in the input array `nums`.
     - Append `i` to the `result` list.

4. **Return Result:**
   - Return the `result` list, which contains all the missing numbers.



## Common Mistakes and Pitfalls

- **Off-by-One Error:**
   -  Ensure the hash table size is `n+1` to accommodate numbers from 1 to `n`.

- **Incorrect Indexing:**
   -  Verify that you are correctly using the number `num` as the index in the `present` array.

- **Space Complexity:**
   -  If the input array `nums` can be very large, be mindful of the space complexity of creating a hash table of size `n+1`.



## Related Problems
- [Missing Number](https://leetcode.com/problems/missing-number/)
- [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)