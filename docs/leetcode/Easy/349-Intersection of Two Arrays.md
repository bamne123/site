import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 349 - Intersection of Two Arrays

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Two Pointers, Binary Search, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays)

## Problem Statement
Given two integer arrays nums1 and nums2, return the intersection of the two arrays. The intersection is the set of elements common to both arrays.
You may return the intersection in any order.

### Examples
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

### Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- `-1000 <= nums1[i], nums2[i] <= 1000`
- Each element in the input arrays is unique.

## Solution Approach
One efficient approach to find the intersection of two arrays is using a hash set. 

1. **Create a Hash Set:**
   - Convert `nums1` into a hash set. This allows for efficient membership checking (O(1) on average).
2. **Iterate through `nums2`:**
   - For each element in `nums2`, check if it exists in the hash set created from `nums1`.
   - If an element is found in the hash set, add it to the result list.
3. **Return the Result:** 
   - Return the list containing the intersection elements.

### Complexity Analysis
- **Time Complexity:** O(n + m) where n is the length of `nums1` and m is the length of `nums2`. 
    - Creating the hash set takes O(n) time. 
    - Iterating through `nums2` and checking for elements in the hash set takes O(m) time.
- **Space Complexity:** O(n) to store the elements of `nums1` in the hash set.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Javascript", value: "javascript" },
    {label: "Python", value: "python" },
    {label: "Go", value: "go" },
    {label: "Java", value: "java" },
    {label: "C#", value: "csharp" },
  ]}
>
<TabItem value="python">
```python
def intersection(nums1, nums2):
    set1 = set(nums1)
    intersection_set = set()
    for num in nums2:
        if num in set1:
            intersection_set.add(num)
    return list(intersection_set)
```
</TabItem>
<TabItem value="javascript">
```javascript
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const intersectionSet = new Set();
    for (const num of nums2) {
        if (set1.has(num)) {
            intersectionSet.add(num);
        }
    }
    return Array.from(intersectionSet);
};
```
</TabItem>
<TabItem value="go">
```go
func intersection(nums1 []int, nums2 []int) []int {
    set1 := make(map[int]bool)
    for _, num := range nums1 {
        set1[num] = true
    }

    intersection := []int{}
    for _, num := range nums2 {
        if _, ok := set1[num]; ok {
            intersection = append(intersection, num)
        }
    }

    return intersection
}
```
</TabItem>
<TabItem value="java">
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : nums1) {
            set1.add(num);
        }
        Set<Integer> intersection = new HashSet<>();
        for (int num : nums2) {
            if (set1.contains(num)) {
                intersection.add(num);
            }
        }
        return intersection.stream().mapToInt(Integer::intValue).toArray();
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
using System.Collections.Generic;

public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        HashSet<int> set1 = new HashSet<int>();
        foreach (int num in nums1) {
            set1.Add(num);
        }
        HashSet<int> intersection = new HashSet<int>();
        foreach (int num in nums2) {
            if (set1.Contains(num)) {
                intersection.Add(num);
            }
        }
        return intersection.ToArray();
    }
}
```
</TabItem>
</Tabs>

## Step-by-Step Explanation
1. **Create a Hash Set:** Convert `nums1` to a hash set using `set(nums1)`. This allows for quick lookups (O(1) on average).
2. **Iterate through `nums2`:** Loop through each element `num` in `nums2`.
3. **Check for Membership:** Use the `in` operator to check if `num` is present in the hash set `set1`.
4. **Add Intersection Elements:** If `num` is found in `set1`, add it to the `intersection_set`.
5. **Return Result:** Convert the `intersection_set` to a list using `list(intersection_set)` and return it.



