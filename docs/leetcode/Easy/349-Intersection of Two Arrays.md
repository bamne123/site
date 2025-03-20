import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 349 - Intersection of Two Arrays

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Two Pointers, Binary Search, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays)

## Problem Statement

<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their <span data-keyword="array-intersection">intersection</span></em>. Each element in the result must be <strong>unique</strong> and you may return the result in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2]
<strong>Output:</strong> [2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>Output:</strong> [9,4]
<strong>Explanation:</strong> [4,9] is also accepted.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
</ul>


### Hints
- Use a HashSet to store the elements of one array.
- Iterate through the second array and check if the element exists in the HashSet.

## Solution Approach
The solution involves using a hash table to store the elements of the first array and then iterating through the second array to check for common elements.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/fwUTXaMom6U" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n + m)
  - Where n and m are the lengths of the input arrays nums1 and nums2, respectively. The algorithm iterates through both arrays once.
- **Space Complexity:** O(min(n, m))
  - In the worst case, the space required to store the intersection is the size of the smaller array.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "python", value: "python" },
  ]}
>
<TabItem value="python">
```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
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
                temp[num] = 0

        return result
```
</TabItem>
<TabItem value="javascript">
```javascript
function intersect(nums1, nums2) {
  const hashTable = {};
  const result = [];
  for (const num of nums1) {
    if (num in hashTable) {
      hashTable[num]++;
    } else {
      hashTable[num] = 1;
    }
  }
  for (const num of nums2) {
    if (num in hashTable && hashTable[num] > 0) {
      result.push(num);
      hashTable[num]--;
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
        Map<Integer, Integer> hashTable = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        for (int num : nums1) {
            if (hashTable.containsKey(num)) {
                hashTable.put(num, hashTable.get(num) + 1);
            } else {
                hashTable.put(num, 1);
            }
        }
        for (int num : nums2) {
            if (hashTable.containsKey(num) && hashTable.get(num) > 0) {
                result.add(num);
                hashTable.put(num, hashTable.get(num) - 1);
            }
        }
        int[] resultArray = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            resultArray[i] = result.get(i);
        }
        return resultArray;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
        Dictionary<int, int> hashTable = new Dictionary<int, int>();
        List<int> result = new List<int>();
        foreach (int num in nums1) {
            if (hashTable.ContainsKey(num)) {
                hashTable[num]++;
            } else {
                hashTable[num] = 1;
            }
        }
        foreach (int num in nums2) {
            if (hashTable.ContainsKey(num) && hashTable[num] > 0) {
                result.Add(num);
                hashTable[num]--;
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
    hashTable := make(map[int]int)
    result := []int{}
    for _, num := range nums1 {
        if _, ok := hashTable[num]; ok {
            hashTable[num]++
        } else {
            hashTable[num] = 1
        }
    }
    for _, num := range nums2 {
        if _, ok := hashTable[num]; ok && hashTable[num] > 0 {
            result = append(result, num)
            hashTable[num]--
        }
    }
    return result
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Create a dictionary `temp` to store the frequency of each number in `nums1`.
2. Iterate through `nums1` and update the frequency of each number in `temp`.
3. Create an empty list `result` to store the intersection.
4. Iterate through `nums2`, and for each number, check if it exists in `temp` and its frequency is greater than 0.
5. If a number exists in both arrays, append it to `result` and decrement its frequency in `temp` to ensure uniqueness.
6. Return the `result` list, which contains the intersection of the two arrays.

## Alternative Approaches
1. **Using Sets**
   - Time Complexity: O(n + m)
   - Space Complexity: O(min(n, m))
   - Trade-offs: Simpler code, but may not be as efficient for very large arrays.

2. **Sorting and Two Pointers**
   - Time Complexity: O(n log n + m log m)
   - Space Complexity: O(1) if sorting is done in place, O(n) otherwise
   - Trade-offs: More efficient for sorted arrays or when space is a concern.

## Common Mistakes and Pitfalls
1. Forgetting to handle duplicates in the result.
2. Not considering the case where one of the arrays is empty.

## Related Problems
- [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii)
