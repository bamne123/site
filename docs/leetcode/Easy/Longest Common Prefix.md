**Gather the Problem Details for creating markdown data**

Title of problem is Longest Common Prefix.
Fetch the full problem statement from the link: https://leetcode.com/problems/longest-common-prefix.
Provide a clear explanation of the problem with an example for better understanding.

### **1. Explanation of the Problem**

The problem is to find the longest common prefix between a given string and another string. The goal is to determine the longest sequence of characters that appears in both strings.

**Example:**

Given two strings:
```
s = "flower"
t = "flow"
```
The longest common prefix between "flower" and "flow" is "fl".

**Constraints:**

* The strings only contain lowercase English letters.
* The strings are case-insensitive.

### **2. Solution (if provided by the user)**

Detect and format the user's code in Markdown.
Analyze and explain the time complexity and space complexity of the solution.

### **4. Generate a Markdown Data**

```md
# Problem Title: Longest Common Prefix  
# Problem Statement: Find the longest common prefix between two given strings.  
# Difficulty: Easy  
# Tags: String, Trie  
# URL: https://leetcode.com/problems/longest-common-prefix  

## Explanation  
The problem is to find the longest common prefix between a given string and another string. The goal is to determine the longest sequence of characters that appears in both strings.

## Time & Space Complexity  
- **Time Complexity:** O(n + m)  
- **Space Complexity:** O(1)  

## Solution  
```language
[User's solution code]

## Explanation  
This solution uses a helper function to compare characters at the same position in both strings. If a character is the same, add it to the result. If not, break the loop.

```python
def longestCommonPrefix(str1, str2):
    result = ""
    for i in range(min(len(str1), len(str2))):
        if str1[i] == str2[i]:
            result += str1[i]
        else:
            break
    return result
```

## Example Use Case  
```python
s = "flower"
t = "flow"
print(longestCommonPrefix(s, t))  # Output: "fl"
```

### **5. Additional Features**

* If no solution is provided by the user, leave the "Solution" section empty.
* If the problem is not found, respond with a polite message.
* Ensure that the JSON structure is valid and all fields are properly filled.

Your goal is to automate and streamline **LeetCode problem documentation**, organizes the problem, solution, and explanations efficiently.