import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 349 - Intersection of Two Arrays

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Two Pointers, Binary Search, Sorting
- **Link:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/)

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

## Solution Approach
We can use a hash table to efficiently find the intersection of two arrays.

1. **Create a hash table:** Iterate through the `nums1` array and store each element as a key in the hash table with a value of 1. This indicates that the element is present in `nums1`.
2. **Iterate through `nums2`:** For each element in `nums2`, check if it exists as a key in the hash table.
3. **Add to result:** If the element exists in the hash table, it's an intersection element. Add it to the result array.


**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/fwUTXaMom6U" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n + m) where n is the length of `nums1` and m is the length of `nums2`. We iterate through both arrays once.
- **Space Complexity:** O(n) in the worst case, where all elements of `nums1` are unique and are added to the hash table.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python"},
    {label: "JavaScript", value: "javascript"},
    {label: "Java", value: "java"},
    {label: "C#", value: "csharp"},
    {label: "Go", value: "go"},
  ]}
>
<TabItem value="python">
```python
def intersect(nums1, nums2):
    hash_table = {}
    result = []
    for num in nums1:
        if num in hash_table:
            hash_table[num] += 1
        else:
            hash_table[num] = 1

    for num in nums2:
        if num in hash_table and hash_table[num] > 0:
            result.append(num)
            hash_table[num] -= 1
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
1. Create an empty hash table `hashTable` to store the elements of `nums1`.
2. Iterate through `nums1` and for each element `num`:
   - If `num` is already in `hashTable`, increment its count.
   - Otherwise, add `num` to `hashTable` with a count of 1.
3. Iterate through `nums2`:
   - For each element `num` in `nums2`:
     - If `num` exists in `hashTable` and its count is greater than 0:
       - Append `num` to the `result` array.
       - Decrement the count of `num` in `hashTable`.
4. Return the `result` array.

## Alternative Approaches
1. **Sorting:**
   - Sort both arrays.
   - Iterate through the arrays simultaneously, comparing elements.
   - If elements are equal, add them to the result and advance both pointers.
   - Time Complexity: O(n log n + m log m) for sorting
   - Space Complexity: O(1)

2. **Two Pointers:**
   - Use two pointers, one for each array.
   - Advance the pointers based on the comparison of elements.
   - If elements are equal, add them to the result and advance both pointers.
   - Time Complexity: O(n + m)
   - Space Complexity: O(1)

## Common Mistakes and Pitfalls
1. **Not handling duplicates correctly:**
   - Ensure that the intersection elements are unique and only added once to the result array.
2. **Forgetting to decrement counts in the hash table:**
   - When adding an element to the result, decrement its count in the hash table to avoid adding it multiple times.
3. **Incorrectly handling empty arrays:**
   - Consider edge cases where one or both arrays are empty.


## Related Problems
- [https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/) - Contains Duplicate
- [https://leetcode.com/problems/single-number-ii/](https://leetcode.com/problems/single-number-ii/) - Single Number II


