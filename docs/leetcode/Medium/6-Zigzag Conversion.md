```json
{
  "title": "Zigzag Conversion",
  "number": 6,
  "difficulty": "Medium",
  "tags": ["String"],
  "link": "https://leetcode.com/problems/zigzag-conversion"
}
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Zigzag Conversion

## Problem Information
- **Difficulty:** Medium
- **Category:** String
- **Link:** [LeetCode](https://leetcode.com/problems/zigzag-conversion)

## Problem Statement
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

`string convert(string s, int numRows);`

## Examples

Input: `s = "PAYPALISHIRING", numRows = 3`
Output: `"PAHNAPLSIIGYIR"`
Explanation:
```
P   A   H   N
A P L S I I G
Y   I   R
```

Input: `s = "PAYPALISHIRING", numRows = 4`
Output: `"PINALSIGYAHRPI"`
Explanation:
```
P     I    N
A   L S  I G
Y A   H R
P     I
```

Input: `s = "A", numRows = 1`
Output: `"A"`
Explanation: N/A

### Constraints
- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), ',' and '.'.
- `1 <= numRows <= 1000`

### Hints
- Use a matrix to represent the zigzag pattern.
- Observe the zigzag pattern and find a formula to calculate the index of each character in the matrix.

## Solution Approach
The key idea is to simulate the zigzag pattern by iterating through the input string and placing each character in the appropriate row. We can use an array of strings to represent the rows. We iterate through the input string, moving down the rows until we reach the bottom row, then moving up until we reach the top row, and so on.

### Complexity Analysis
- **Time Complexity:** O(n)
  - We iterate through the input string once, where n is the length of the string.
- **Space Complexity:** O(n)
  - We use an array of strings to store the rows, and the total length of the strings in the array is equal to the length of the input string.

### Code Implementation
<Tabs
  defaultValue="python"
  groupId="cody"
  values={[
    {label: "python", value: "python" },
    {label: "javascript", value: "javascript" },
    {label: "java", value: "java" },
    {label: "csharp", value: "csharp" },
    {label: "go", value: "go" },
  ]}
>
<TabItem value="python">
```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        rows = [""] * numRows
        currRow = 0
        goingDown = False
        for char in s:
            rows[currRow] += char
            if currRow == 0 or currRow == numRows - 1:
                goingDown = not goingDown
            currRow += 1 if goingDown else -1
        return "".join(rows)
```
</TabItem>
<TabItem value="javascript">
```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const rows = new Array(numRows).fill("");
    let currRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currRow] += char;

        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};
```
</TabItem>
<TabItem value="java">
```java
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        List<StringBuilder> rows = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            rows.add(new StringBuilder());
        }

        int currRow = 0;
        boolean goingDown = false;

        for (char c : s.toCharArray()) {
            rows.get(currRow).append(c);

            if (currRow == 0 || currRow == numRows - 1) {
                goingDown = !goingDown;
            }

            currRow += goingDown ? 1 : -1;
        }

        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) {
            result.append(row);
        }

        return result.toString();
    }
}
```
</TabItem>
<TabItem value="csharp">
```csharp
public class Solution {
    public string Convert(string s, int numRows) {
        if (numRows == 1) return s;

        List<StringBuilder> rows = new List<StringBuilder>();
        for (int i = 0; i < numRows; i++) {
            rows.Add(new StringBuilder());
        }

        int currentRow = 0;
        bool goingDown = false;

        foreach (char c in s) {
            rows[currentRow].Append(c);

            if (currentRow == 0 || currentRow == numRows - 1) {
                goingDown = !goingDown;
            }

            currentRow += goingDown ? 1 : -1;
        }

        StringBuilder result = new StringBuilder();
        foreach (StringBuilder row in rows) {
            result.Append(row.ToString());
        }

        return result.ToString();
    }
}
```
</TabItem>
<TabItem value="go">
```go
func convert(s string, numRows int) string {
    if numRows == 1 {
        return s
    }

    rows := make([]string, numRows)
    currRow := 0
    goingDown := false

    for _, char := range s {
        rows[currRow] += string(char)

        if currRow == 0 || currRow == numRows-1 {
            goingDown = !goingDown
        }

        if goingDown {
            currRow++
        } else {
            currRow--
        }
    }

    result := ""
    for _, row := range rows {
        result += row
    }

    return result
}
```
</TabItem>
</Tabs>

### Step-by-Step Explanation
1. If `numRows` is 1, return the original string `s` since there is no zigzag conversion needed.
2. Initialize an array of strings `rows` with `numRows` empty strings. Each string in this array will represent a row in the zigzag pattern.
3. Initialize `currRow` to 0, which represents the current row we are writing to.
4. Initialize `goingDown` to `False`. This boolean variable indicates whether we are moving down the rows or up the rows.
5. Iterate through each character `char` in the input string `s`.
6. Append the current character `char` to the string at index `currRow` in the `rows` array.
7. Check if `currRow` is at the top row (0) or the bottom row (`numRows - 1`). If it is, flip the value of `goingDown`.
8. Update `currRow` by adding 1 if `goingDown` is true (moving down), or subtracting 1 if `goingDown` is false (moving up).
9. After iterating through all the characters in `s`, join all the strings in the `rows` array to form the final result string.
10. Return the result string.

## Alternative Approaches
1. **Using Math Formula**
   - Time Complexity: O(n)
   - Space Complexity: O(1)
   - Trade-offs: This approach uses mathematical formulas to directly calculate the index of each character in the output string. It avoids the need for extra space but can be harder to understand and implement.

2. **Using a Single Array**
   - Time Complexity: O(n)
   - Space Complexity: O(n)
   - Trade-offs: This approach uses a single array to store the characters in the zigzag pattern. It is similar to the first approach but uses a different way to simulate the zigzag pattern.

## Common Mistakes and Pitfalls
1. Incorrectly handling the edge cases where `numRows` is 1 or greater than the length of the input string.
2. Not properly handling the direction change when reaching the top or bottom rows.
3. Off-by-one errors when calculating the row index.
4. Forgetting to join the rows at the end to form the final result.

## Related Problems
- [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)
- [Reverse Integer](https://leetcode.com/problems/reverse-integer/)
