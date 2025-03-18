import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 350 - Intersection of Two Arrays II

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Two Pointers
- **Link:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays-ii)

## Problem Statement
Given two arrays, `nums1` and `nums2`, **both** of which contain unique integers,  return the intersection of these two arrays.  **The intersection** is the set of numbers that are common to both arrays.

You may assume that the arrays were sorted in ascending order. It's guaranteed that each element in the arrays will not exceed 1000.  **The output array can be in any order.**

### Examples
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

### Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- `-1000 <= nums1[i], nums2[i] <= 1000`
- nums1 and nums2 contain no duplicate elements.
- nums1 and nums2 are sorted in a non-decreasing order.

## Solution Approach
We can use a hash table to efficiently find the intersection of the two arrays. Here's a breakdown of the approach:

1. **Create a hash table:** Initialize an empty hash table to store the elements of `nums1`.

2. **Populate the hash table:** Iterate through the elements of `nums1` and add each element as a key in the hash table. The value associated with each key can be any arbitrary value (e.g., `1`).

3. **Iterate through `nums2`:** Iterate through the elements of `nums2`. For each element, check if it exists as a key in the hash table. If it does, add it to the result list.

4. **Return the result list:** Return the list containing the intersection of the two arrays.

### Complexity Analysis
- **Time Complexity:** O(n + m), where n is the length of `nums1` and m is the length of `nums2`. We iterate through both arrays once.

- **Space Complexity:** O(n) in the worst case, as we store all elements of `nums1` in the hash table.

## Code Implementation

```python
def intersect(nums1, nums2):
    hash_table = {}
    result = []
    for num in nums1:
        if num not in hash_table:
            hash_table[num] = 1
    for num in nums2:
        if num in hash_table:
            result.append(num)
            hash_table[num] = 0
    return result


```

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

```go
func intersect(nums1 []int, nums2 []int) []int {
    hashTable := make(map[int]int)
    result := []int{}
    for _, num := range nums1 {
        if _, ok := hashTable[num]; !ok {
            hashTable[num] = 1
        } else {
            hashTable[num]++
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
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
```

```csharp
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
```




## Step-by-Step Explanation
1. **Create a hash table:**
   - This hash table will store the elements of `nums1` as keys, and we can use `1` as the value for each key.

2. **Populate the hash table:**
   - Iterate through each element in `nums1` and add it as a key in the hash table. If the element already exists in the hash table, increment its value.

3. **Iterate through `nums2`:**
   - For each element in `nums2`, check if it exists as a key in the hash table.
   - If it exists and its value is greater than 0, it means the element is present in both arrays. Add it to the `result` list and decrement its value in the hash table to avoid duplicates.

4. **Return the result list:**
   - The `result` list will contain the intersection of the two arrays.



