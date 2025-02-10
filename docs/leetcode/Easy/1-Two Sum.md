**Two Sum**

### Problem Statement

Given an array of integers and a target sum, return the indices of the two numbers that add up to the target sum. If such a pair exists, return the pair; otherwise, return an empty array.

**Constraints**

* The input array `nums` is not null and contains only non-negative integers.
* The `target` is not null and is equal to the sum of the elements in `nums`.

**Examples**

* Input: `nums = [2, 7, 11, 15], target = 9`
  Output: `[0, 1]`
* Input: `nums = [3, 2, 4], target = 6`
  Output: `[1, 2]`
* Input: `nums = [3, 3], target = 6`
  Output: `[0, 1]`
* Input: `nums = [5], target = 10`
  Output: `[]`

**Explanation**

We can solve this problem using a two-pointer technique along with a hash table to store the elements of the array and their indices. Here's a step-by-step explanation of the solution:

1. Create a hash table `numToIndex` to store the elements of the array and their indices.
2. Iterate over the array using the `i` variable, which represents the current element being processed.
3. For each element `nums[i]`, calculate its complement `target - nums[i]`.
4. If the complement is already in the hash table, it means we've found a pair that adds up to the target. Return the indices of the complement and the current element.
5. If the complement is not in the hash table, add the current element and its index to the hash table.
6. Continue iterating over the array until all elements have been processed.

**Code Implementation**

```javascript
/**
 * Returns the indices of the two numbers that add up to the target sum.
 * If such a pair exists, returns the pair; otherwise, returns an empty array.
 *
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} The indices of the two numbers that add up to the target sum.
 */

function twoSum(nums, target) {
  // Create a hash table to store the elements of the array and their indices.
  const numToIndex = {};
  
  // Iterate over the array using the i variable, which represents the current element being processed.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current element.
    const complement = target - nums[i];
    
    // If the complement is already in the hash table, it means we've found a pair that adds up to the target.
    if (numToIndex[complement]) {
      // Return the indices of the complement and the current element.
      return [numToIndex[complement], i];
    }
    
    // If the complement is not in the hash table, add the current element and its index to the hash table.
    numToIndex[nums[i]] = i;
  }
  
  // If no pair is found that adds up to the target, return an empty array.
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
```

### Solution Complexity

* Time complexity: O(n), where n is the number of elements in the array.
* Space complexity: O(n), where n is the number of elements in the array.

### Step-by-Step Explanation

1. Create a hash table `numToIndex` to store the elements of the array and their indices.
2. Iterate over the array using the `i` variable, which represents the current element being processed.
3. For each element `nums[i]`, calculate its complement `target - nums[i]`.
4. If the complement is already in the hash table, it means we've found a pair that adds up to the target. Return the indices of the complement and the current element.
5. If the complement is not in the hash table, add the current element and its index to the hash table.
6. Continue iterating over the array until all elements have been processed.