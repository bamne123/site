import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 350 - Intersection of Two Arrays II

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Two Pointers, Binary Search, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays-ii)

## Problem Statement

<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must appear as many times as it shows in both arrays and you may return the result in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2]
<strong>Output:</strong> [2,2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>Output:</strong> [4,9]
<strong>Explanation:</strong> [9,4] is also accepted.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>What if the given array is already sorted? How would you optimize your algorithm?</li>
	<li>What if <code>nums1</code>'s size is small compared to <code>nums2</code>'s size? Which algorithm is better?</li>
	<li>What if elements of <code>nums2</code> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li>
</ul>

### Hints
- Use a hash map to count the occurrences of each number in the first array.
- Iterate through the second array, and for each number, check if it exists in the hash map and its count is greater than 0.
- If the number exists and its count is greater than 0, add it to the result and decrement the count in the hash map.

## Solution Approach
The solution uses a hash map (dictionary in Python) to store the frequency of each number in the first array (nums1). Then, it iterates through the second array (nums2), checking if each number is present in the hash map and has a count greater than 0. If so, it appends the number to the result list and decrements its count in the hash map. Finally, it returns the result list containing the intersection of the two arrays with the correct frequencies.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/XZ6ZL1Qg6og" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(m + n)
  - The time complexity is O(m + n), where n is the length of nums1 and m is the length of nums2, as we iterate through both arrays once.
- **Space Complexity:** O(min(m, n))
  - The space complexity is O(min(m, n)) in the worst case when one array contains all unique elements and we store them in the hash map.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python' },
  ]}
>
<TabItem value='python'>
```python
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        temp = {}
        result = []

        for num in nums1:
            if num in temp:
                temp[num] += 1
            else:
                temp[num] = 1
        
        for num in nums2:
            if num in temp and temp[num] > 0:
                result.append(num)
                temp[num] -= 1
        
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
1. Initialize an empty hash map `temp` to store the frequency of numbers in `nums1`.
2. Initialize an empty list `result` to store the intersection of the two arrays.
3. Iterate through `nums1`:
   - If a number is already in `temp`, increment its count.
   - Otherwise, add the number to `temp` with a count of 1.
4. Iterate through `nums2`:
   - If a number is in `temp` and its count is greater than 0:
     - Append the number to `result`.
     - Decrement the count of the number in `temp`.
5. Return the `result` list.

## Alternative Approaches
1. **Sorting and Two Pointers**
   - Time Complexity: O(n log n + m log m)
   - Space Complexity: O(1) (excluding space for sorting)
   - Trade-offs: Requires sorting both arrays, but uses constant extra space. More efficient if the arrays are already sorted.

2. **Using Collections.Counter (Python)**
   - Time Complexity: O(m + n)
   - Space Complexity: O(min(m, n))
   - Trade-offs: More concise using Python's built-in `Counter` class for frequency counting.

## Common Mistakes and Pitfalls
1. Not handling the case where a number appears multiple times in both arrays.
2. Incorrectly updating the frequency count in the hash map, leading to incorrect results.
3. Not considering the case where one of the arrays is empty.

## Related Problems
- [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays)
- [Find Common Characters](https://leetcode.com/problems/find-common-characters)
