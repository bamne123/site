import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 121 - Best Time to Buy and Sell Stock

## Problem Information
- **Difficulty:** Easy
- **Category:** Array, Dynamic Programming
- **Link:** [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

## Problem Statement
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Examples
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Constraints
- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

### Hints
- The problem is to find the maximum difference between two numbers in the array such that the smaller number appears before the larger number.
- Use a variable to track the minimum price seen so far.
- Use a variable to track the maximum profit seen so far.

## Solution Approach
The solution iterates through the `prices` array, keeping track of the minimum price seen so far and the maximum profit that can be achieved by selling at the current price. At each iteration, the minimum price is updated if the current price is smaller than the current minimum price. The maximum profit is updated if the profit that can be achieved by selling at the current price is greater than the current maximum profit.

### Complexity Analysis
- **Time Complexity:** O(n)
  - The algorithm iterates through the `prices` array once.
- **Space Complexity:** O(1)
  - The algorithm uses only a constant amount of extra space.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: 'python', value: 'python' },
    {label: 'javascript', value: 'javascript' },
    {label: 'go', value: 'go' },
    {label: 'java', value: 'java' },
    {label: 'csharp', value: 'csharp' },
  ]}
>
<TabItem value="python">
```python
def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit
```
</TabItem>
<TabItem value="javascript">
```javascript
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}
```
</TabItem>
<TabItem value="go">
```go
func maxProfit(prices []int) int {
    minPrice := int(1e9 + 7)
    maxProfit := 0
    for _, price := range prices {
        if price < minPrice {
            minPrice = price
        } else if price - minPrice > maxProfit {
            maxProfit = price - minPrice
        }
    }
    return maxProfit
}
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public int MaxProfit(int[] prices) {
        int minPrice = int.MaxValue;
        int maxProfit = 0;
        foreach (int price in prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. Initialize `min_price` to infinity and `max_profit` to 0.
2. Iterate through the `prices` array.
3. If the current price is less than `min_price`, update `min_price` to the current price.
4. If the current price minus `min_price` is greater than `max_profit`, update `max_profit` to the current price minus `min_price`.
5. Return `max_profit`.

## Alternative Approaches
1. **Brute Force**
   - Time Complexity: O(n^2)
   - Space Complexity: O(1)
   - Trade-offs: This approach checks every possible pair of buy and sell days, which is inefficient.

2. **Dynamic Programming**
   - Time Complexity: O(n)
   - Space Complexity: O(1)
   - Trade-offs: Similar to the optimal solution, but may be less intuitive.

## Common Mistakes and Pitfalls
1. Failing to initialize `min_price` to a sufficiently large value.
2. Not handling the case where no profit can be made (returning 0).
3. Trying to sell before buying.

## Related Problems
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
