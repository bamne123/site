import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 169 - Majority Element

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Hash Table, Divide and Conquer, Sorting, Counting
- **Link:** [LeetCode](https://leetcode.com/problems/majority-element/)

## Problem Statement
Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

### Examples
Input: `nums = [3,2,3]`
Output: `3`
Explanation: `3` appears twice, which is more than `⌊3 / 2⌋ = 1` time.

Input: `nums = [2,2,1,1,1,2,2]`
Output: `2`
Explanation: `2` appears 4 times, which is more than `⌊7 / 2⌋ = 3` times.

### Constraints
- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

### Hints
- How can you use a hash table to solve this problem?
- Can you solve this problem in linear time and O(1) space?

## Solution Approach
The simplest approach is to use a hash table to count the frequency of each element. The element with frequency greater than `⌊n / 2⌋` is the majority element.

### Complexity Analysis
- **Time Complexity:** O(n)
  - We iterate through the array once.
- **Space Complexity:** O(1)
  - We only use a constant amount of extra space for the candidate and count.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python' },
    {label: 'javascript', value: 'javascript' },
    {label: 'java', value: 'java' },
    {label: 'csharp', value: 'csharp' },
    {label: 'go', value: 'go' },
  ]}
>
<TabItem value='python'>
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # HashMap Solution
        temp = {}
        
        for num in nums:
            if num in temp:
                temp[num] += 1
            else:
                temp[num] = 1
        
        return max(temp, key=temp.get)
        
        # # HashMap Solution with max variable
        temp, maximum = {}, nums[0]

        for num in nums:
            if num in temp:
                temp[num] += 1
                maximum = num if temp[num] > len(nums) // 2 else maximum
            else:
                temp[num] = 1
        
        return maximum

        # # Boyer-Moore Voting Solution
        candidate, count = None, 0

        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)

        return candidate
```
</TabItem>
<TabItem value='javascript'>
```javascript
function majorityElement(nums) {
    let candidate = null;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }
    return candidate;
}
```
</TabItem>
<TabItem value='java'>
```java
class Solution {
    public int majorityElement(int[] nums) {
        Integer candidate = null;
        int count = 0;
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate ? 1 : -1);
        }
        return candidate;
    }
}
```
</TabItem>
<TabItem value='csharp'>
```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        int? candidate = null;
        int count = 0;
        foreach (int num in nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate ? 1 : -1);
        }
        return candidate ?? 0;
    }
}
```
</TabItem>
<TabItem value='go'>
```go
func majorityElement(nums []int) int {
    candidate := 0
    count := 0
    for _, num := range nums {
        if count == 0 {
            candidate = num
        }
        if num == candidate {
            count++
        } else {
            count--
        }
    }
    return candidate
}
```
</TabItem>
</Tabs>

# Step-by-Step Explanation
1.  **Initialization:**
    * A storage container (a dictionary, often called a hash map) is created. This container will be used to keep track of how many times each number appears in the list.

2.  **Counting Occurrences:**
    * The algorithm goes through each number in the input list, one by one.
    * For each number, it checks if the number has already been encountered and recorded in the storage container.
        * If the number has been seen before, its count in the storage container is increased by one.
        * If it's the first time the number is encountered, it is added to the storage container, and its count is set to one.
    * This process continues until every number in the list has been processed.

3.  **Finding the Majority Element:**
    * Once the algorithm has counted the occurrences of every number, the storage container holds the count of each unique number.
    * The algorithm then identifies the number that has the highest count.
    * This number with the highest count is then returned as the majority element.


## Alternative Approaches
1. **Boyer-Moore Voting Algorithm**
    A more efficient approach is to use the Boyer-Moore Voting Algorithm, which iterates through the array and maintains a candidate and a count. If the current element is the same as the candidate, increment the count; otherwise, decrement the count. If the count becomes zero, update the candidate with the current element and reset the count to 1. At the end of the iteration, the candidate will be the majority element.

    #### Step-by-Step Explanation
    1. Initialize `candidate` to `None` and `count` to `0`.
    2. Iterate through the `nums` array.
    3. If `count` is `0`, set the current element as the `candidate`.
    4. If the current element is equal to the `candidate`, increment `count`. Otherwise, decrement `count`.
    5. After iterating through the entire array, return the `candidate`.

2. **Sorting**
   - Time Complexity: O(n log n)
   - Space Complexity: O(1) or O(n) depending on the sorting algorithm
   - Trade-offs: In-place sorting algorithms have O(1) space complexity, but sorting takes longer than the Boyer-Moore Voting Algorithm.

## Common Mistakes and Pitfalls
1. Forgetting to reset the count to 1 after updating the candidate.
2. Not handling the case where the array is empty. (Although the problem statement says that the majority element always exists.)

## Related Problems
- [Majority Element II](https://leetcode.com/problems/majority-element-ii/)
