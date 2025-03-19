import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 350 - Intersection of Two Arrays II

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Two Pointers, Binary Search, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays-ii)

## Problem Statement

Given two integer arrays <code>nums1</code> and <code>nums2</code>, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.


**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`


**Follow up:**

- What if the given array is already sorted? How would you optimize your algorithm?
- What if <code>nums1</code>&#39;s size is small compared to <code>nums2</code>&#39;s size? Which algorithm is better?
- What if elements of <code>nums2</code> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

## Solution Approach

The problem can be solved efficiently using a hash table (or dictionary) to store the frequency of elements in `nums1`. Then, iterate through `nums2`, and for each element, check if it exists in the hash table and decrement its count. Finally, collect all elements with a count greater than 0.

## Video Explanation

<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/XZ6ZL1Qg6og" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n + m) where n and m are the lengths of `nums1` and `nums2` respectively. We iterate through `nums1` once to build the hash table and then through `nums2` once to find the intersection.
- **Space Complexity:** O(n) in the worst case, where `nums1` has unique elements. The hash table stores all elements from `nums1`.

### Code Implementation



<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'Python', value: 'python' },
    {label: 'Javascript', value: 'javascript' },
    {label: 'Java', value: 'java' },
    {label: 'C#', value: 'csharp' },
    {label: 'Go', value: 'go' },
  ]}
>
<TabItem value="python">
```python
def intersect(nums1, nums2):
    hash_map = {}
    for num in nums1:
        if num in hash_map:
            hash_map[num] += 1
        else:
            hash_map[num] = 1
    result = []
    for num in nums2:
        if num in hash_map and hash_map[num] > 0:
            result.append(num)
            hash_map[num] -= 1
    return result
```
</TabItem>
<TabItem value="javascript">
```javascript
function intersect(nums1, nums2) {
  const hashmap = {};
  for (const num of nums1) {
    if (num in hashmap) {
      hashmap[num]++;
    } else {
      hashmap[num] = 1;
    }
  }
  const result = [];
  for (const num of nums2) {
    if (num in hashmap && hashmap[num] > 0) {
      result.push(num);
      hashmap[num]--;
    }
  }
  return result;
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> hashmap = new HashMap<>();
        for (int num : nums1) {
            if (hashmap.containsKey(num)) {
                hashmap.put(num, hashmap.get(num) + 1);
            } else {
                hashmap.put(num, 1);
            }
        }
        List<Integer> result = new ArrayList<>();
        for (int num : nums2) {
            if (hashmap.containsKey(num) && hashmap.get(num) > 0) {
                result.add(num);
                hashmap.put(num, hashmap.get(num) - 1);
            }
        }
        int[] res = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            res[i] = result.get(i);
        }
        return res;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
using System.Collections.Generic;
public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
        Dictionary<int, int> hashmap = new Dictionary<int, int>();
        foreach (int num in nums1) {
            if (hashmap.ContainsKey(num)) {
                hashmap[num]++;
            } else {
                hashmap[num] = 1;
            }
        }
        List<int> result = new List<int>();
        foreach (int num in nums2) {
            if (hashmap.ContainsKey(num) && hashmap[num] > 0) {
                result.Add(num);
                hashmap[num]--;
            }
        }
        return result.ToArray();
    }
}
```
</TabItem>
<TabItem value="go">
```go
func intersect(nums1 []int, nums2 []int) []int {
    hashmap := make(map[int]int)
    for _, num := range nums1 {
        if _, ok := hashmap[num]; ok {
            hashmap[num]++
        } else {
            hashmap[num] = 1
        }
    }
    result := []int{}
    for _, num := range nums2 {
        if count, ok := hashmap[num]; ok && count > 0 {
            result = append(result, num)
            hashmap[num]--
        }
    }
    return result
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation

1. **Create a hash table:** Initialize an empty hash table (dictionary) to store the frequency of elements in `nums1`.
2. **Populate the hash table:** Iterate through `nums1` and for each element:
   - If the element is already in the hash table, increment its count.
   - Otherwise, add the element to the hash table with a count of 1.
3. **Iterate through `nums2`:** For each element in `nums2`:
   - Check if the element exists in the hash table and its count is greater than 0.
   - If yes, append the element to the `result` and decrement its count in the hash table.
4. **Return the result:** Return the `result` array, which contains the intersection of `nums1` and `nums2`.

## Alternative Approaches

Not applicable for this specific problem.

## Common Mistakes and Pitfalls

- **Not handling duplicate elements:** Make sure to handle duplicate elements correctly in both arrays.
- **Incorrectly updating hash table counts:** Ensure that you decrement the count in the hash table when an element is added to the `result`.

## Related Problems

- [Intersection of Two Arrays] (https://leetcode.com/problems/intersection-of-two-arrays/)
- [Intersection of Two Arrays III] (https://leetcode.com/problems/intersection-of-two-arrays-iii/)



