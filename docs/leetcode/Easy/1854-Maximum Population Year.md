import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1854 - Maximum Population Year

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Counting, Prefix Sum
- **Link:** [LeetCode](https://leetcode.com/problems/maximum-population-year)

## Problem Statement
Given a list of vital records consisting of pairs of integers `birthYear` and `deathYear` where `birthYear` is the year a person was born and `deathYear` is the year they died, write a function `maximumPopulationYear` that returns the year with the maximum population.

You can assume that:
- Each record is unique.
- No two people are born in the same year or die in the same year.

### Examples
Input: `[[1993,1999],[2000,2010]]`
Output: `1999`
Explanation: Between 1993 and 2010, the maximum population is reached in the year 1999.

## Constraints
- `1 <= birthYear <= deathYear <= 1000`
- `1 <= birthYear.length <= 1000`

## Solution Approach
We can use a prefix sum array to track the population in each year.

1. Create a `population` array of size 1001, initialized with zeros.
2. Iterate through the `birthYear` and `deathYear` pairs.
3. For each pair, increment the population count for the years from `birthYear` to `deathYear - 1`.
4. Find the year with the maximum population count in the `population` array.

### Complexity Analysis
- **Time Complexity:** O(n), where n is the number of vital records.
  - We iterate through the records once to populate the `population` array.
  - Finding the maximum value in the `population` array takes O(n) time.
- **Space Complexity:** O(1), as the size of the `population` array is constant.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "Python", value: "python"},
    {label: "Javascript", value: "javascript"},
    {label: "Go", value: "go"},
    {label: "Java", value: "java"},
    {label: "C#", value: "csharp"},
  ]}
>
<TabItem value="python">
```python
def maximumPopulationYear(birthYears, deathYears):
    population = [0] * 1001
    for birth, death in zip(birthYears, deathYears):
        population[birth] += 1
        population[death] -= 1
    max_year = 0
    max_pop = 0
    for i in range(1001):
        population[i] += population[i - 1]
        if population[i] > max_pop:
            max_year = i
            max_pop = population[i]
    return max_year
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. **Initialize `population` array:** Create a list `population` of size 1001, filled with zeros. This array will store the population count for each year from 0 to 1000.
2. **Iterate through records:** Loop through each pair of `birthYear` and `deathYear` in the input list.
3. **Update population:** For each pair:
    - Increment the population count for the year `birthYear`.
    - Decrement the population count for the year `deathYear` to account for the person's death.
4. **Calculate cumulative population:** Iterate through the `population` array and calculate the cumulative population for each year.
5. **Find maximum population:** Find the year with the highest cumulative population and return it.



## Alternative Approaches
- **Using a dictionary:** Instead of a prefix sum array, you can use a dictionary to store the birth and death years of each person. This approach allows for more flexibility in handling different input formats. However, it may require more memory and time to process the data.

## Common Mistakes and Pitfalls
- **Forgetting to decrement population:** Make sure to decrement the population count for the year of death. 
- **Incorrect indexing:** Ensure you are using the correct indices in the `population` array to update and access population counts. 
- **Missing edge cases:** Consider edge cases like when birthYear and deathYear are equal.



## Related Problems
- [Maximum Points You Can Obtain from Cards] (https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
- [Count Good Triangles] (https://leetcode.com/problems/count-good-triangles/)