import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1854 - Maximum Population Year

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Counting, Prefix Sum
- **Link:** [LeetCode](https://leetcode.com/problems/maximum-population-year/)

## Problem Statement

You are given a 2D integer array `logs` where each `logs[i] = [birth<sub>i</sub>, death<sub>i</sub>]` indicates the birth and death years of the `i<sup>th</sup>` person.

The **population** of some year `x` is the number of people alive during that year. The `i<sup>th</sup>` person is counted in year `x`'s population if `x` is in the **inclusive** range `[birth<sub>i</sub>, death<sub>i</sub> - 1]`. Note that the person is **not** counted in the year that they die.

Return *the **earliest** year with the **maximum population**.*

### Hints
-  

## Solution Approach


### Video Explanation

<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/NW_CNIwP3_E" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>




### Complexity Analysis
- **Time Complexity:** O(n log n)
  - Sorting the `logs` array takes O(n log n) time. The prefix sum calculation then takes O(n) time.
- **Space Complexity:** O(n)
  - We use an array to store the prefix sum, which has a size of n.

### Code Implementation


### Step-by-Step Explanation
1. Sort the `logs` array based on the birth years.
2. Create an array `counts` to store the population count for each year. Initialize it with zeros.
3. Iterate through the sorted `logs` array. For each person:
    - Increment the population count in each year from their birth year to their death year - 1.
4. Find the maximum population count and the corresponding year.



## Alternative Approaches

## Common Mistakes and Pitfalls

## Related Problems


