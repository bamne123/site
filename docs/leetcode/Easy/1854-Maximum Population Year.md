import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1854 - Maximum Population Year

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Counting, Prefix Sum
- **Link:** [LeetCode](https://leetcode.com/problems/maximum-population-year)

## Problem Statement

<p>You are given a 2D integer array <code>logs</code> where each <code>logs[i] = [birth<sub>i</sub>, death<sub>i</sub>]</code> indicates the birth and death years of the <code>i<sup>th</sup></code> person.</p>

<p>The <strong>population</strong> of some year <code>x</code> is the number of people alive during that year. The <code>i<sup>th</sup></code> person is counted in year <code>x</code>'s population if <code>x</code> is in the <strong>inclusive</strong> range <code>[birth<sub>i</sub>, death<sub>i</sub> - 1]</code>. Note that the person is <strong>not</strong> counted in the year that they die.</p>

<p>Return <em>the <strong>earliest</strong> year with the <strong>maximum population</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> logs = [[1993,1999],[2000,2010]]
<strong>Output:</strong> 1993
<strong>Explanation:</strong> The maximum population is 1, and 1993 is the earliest year with this population.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> logs = [[1950,1961],[1960,1971],[1970,1981]]
<strong>Output:</strong> 1960
<strong>Explanation:</strong> 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= logs.length &lt;= 100</code></li>
	<li><code>1950 &lt;= birth<sub>i</sub> &lt; death<sub>i</sub> &lt;= 2050</code></li>
</ul>


### Hints
- Use an array to record the change in population for each year.
- Iterate through the logs array and update the population array for each birth and death year.
- Find the year with the maximum population by iterating through the population array.

## Solution Approach
The solution uses a prefix sum approach to track the population each year. It initializes an array to store population changes and iterates through the logs to increment the population at birth years and decrement at death years. Finally, it calculates the prefix sum to find the year with the maximum population.

**Video Explanation:** 
<iframe 
  width="560"
  height="315"
  src="https://www.youtube.com/embed/NW_CNIwP3_E" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen="">
</iframe>

### Complexity Analysis
- **Time Complexity:** O(n + m)
  - Where n is the length of the `logs` array, and m is the range of years (2050 - 1950 + 1 = 101).
- **Space Complexity:** O(m)
  -  Where m is the range of years, used to store the population array.

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
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        # Initialise variables from contraints
        years, start_year, end_year = 101, 1950, 2050
        
        # Initialise population array for years
        population = [0] * (years)
        
        # Populate population array from logs
        for birth, death in logs:
            population[birth - start_year] += 1
            population[death - start_year] -= 1
        
        # Increment population in between years
        for i in range(years):
            population[i] += population[i-1]

        # Maximum population        
        maxPopulation = max(population)
        return population.index(maxPopulation) + start_year
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize the range of years from 1950 to 2050, and calculate the total number of years.
2. Create a population array to store the population change for each year.
3. Iterate through the logs array and update the population array: increment at birth years and decrement at death years.
4. Calculate the prefix sum of the population array to get the actual population for each year.
5. Find the maximum population and its corresponding year.
6. Return the earliest year with the maximum population.

## Alternative Approaches
1. **Sorting Approach**
   - Time Complexity: O(n log n)
   - Space Complexity: O(n)
   - Trade-offs: Sorting birth and death years and then iterating to find the maximum population year.

2. **Hash Map Approach**
   - Time Complexity: O(n + m)
   - Space Complexity: O(m)
   - Trade-offs: Using a hash map to count the population for each year in the given range.

## Common Mistakes and Pitfalls
1. Incorrectly calculating the population for each year.
2. Not considering the case where multiple years have the same maximum population.
3. Off-by-one errors when calculating the index for the population array.

## Related Problems
- [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii)
- [Range Addition](https://leetcode.com/problems/range-addition)
