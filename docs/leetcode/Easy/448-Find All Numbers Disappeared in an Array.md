import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 448 - Find All Numbers Disappeared in an Array

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table
- **Link:** [LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array)

## Problem Statement
Given an array of integers where `1 <= a[i] <= n (n = size of array)`, find all the elements of the array which are missing from the range 1 to n.

**Example:**

Input: `[4,3,2,7,8,2,3,1]`
Output: `[5,6]`


## Solution Approach
The problem can be solved using a hash table. 

1. Create a hash table to store the presence of each number from 1 to n.
2. Iterate through the array and mark the presence of each number encountered in the hash table.
3. After processing the array, iterate through the hash table and identify the numbers that are not marked as present. These are the missing numbers.

### Complexity Analysis
- **Time Complexity:** O(n)
  - We iterate through the array once to mark the presence of each number and then iterate through the hash table once to find the missing numbers.
- **Space Complexity:** O(n)
  - The hash table can store up to n unique elements.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python" },
    {label: "Javascript", value: "javascript" },
    {label: "Go", value: "go" },
    {label: "Java", value: "java" },
    {label: "C#", value: "csharp" }
  ]}
>
<TabItem value="python">
```python
def findDisappearedNumbers(nums):
    seen = set(nums)
    return [i for i in range(1, len(nums) + 1) if i not in seen]
```
</TabItem>
<TabItem value="javascript">
```javascript
function findDisappearedNumbers(nums) {
  const seen = new Set(nums);
  return Array.from({ length: nums.length }, (_, i) => i + 1).filter(num => !seen.has(num));
}
```
</TabItem>
<TabItem value="go">
```go
func findDisappearedNumbers(nums []int) []int {
  seen := make(map[int]bool)
  for _, num := range nums {
    seen[num] = true
  }
  var missing []int
  for i := 1; i <= len(nums); i++ {
    if !seen[i] {
      missing = append(missing, i)
    }
  }
  return missing
}
```
</TabItem>
<TabItem value="java">
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public int[] findDisappearedNumbers(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            seen.add(num);
        }
        List<Integer> missing = new ArrayList<>();
        for (int i = 1; i <= nums.length; i++) {
            if (!seen.contains(i)) {
                missing.add(i);
            }
        }
        return missing.stream().mapToInt(i -> i).toArray();
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int[] FindDisappearedNumbers(int[] nums) {
        HashSet<int> seen = new HashSet<int>();
        foreach (int num in nums) {
            seen.Add(num);
        }
        List<int> missing = new List<int>();
        for (int i = 1; i <= nums.Length; i++) {
            if (!seen.Contains(i)) {
                missing.Add(i);
            }
        }
        return missing.ToArray();
    }
}
```
</TabItem>
</Tabs>



## Step-by-Step Explanation
1. **Create a set:** Initialize an empty set called `seen` to keep track of the numbers present in the array.
2. **Populate the set:** Iterate through the input array `nums` and add each number to the `seen` set.
3. **Iterate through the range:** Iterate from 1 to `n` (where `n` is the length of the array).
4. **Check for presence:** For each number `i` in the range, check if it exists in the `seen` set.
5. **Add missing numbers:** If the number `i` is not found in the `seen` set, it means it's missing from the array. Add it to the `missing` list.
6. **Return the result:** Return the `missing` list, which contains all the numbers that are missing from the range 1 to `n`.



