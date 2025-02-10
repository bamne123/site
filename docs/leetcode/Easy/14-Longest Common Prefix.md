**Longest Common Prefix**
========================

**Problem Information**
------------------------

*   **Difficulty**: Easy
*   **Category**: String Matching
*   **Companies**: Known companies that frequently ask this
*   **Link**: [LeetCode](${link})
*   **Companies**: ${companies.join(', ')}
*   **Tags**: String Trie, Longest Common Prefix
*   **Number**: 14

**Problem Statement**
----------------------

Given an array of strings, find the longest common prefix among all strings.

**Examples**
------------

### Example 1
Input: ["flower", "flow", "flight"]
Output: "fl"
Explanation:
*   The common prefix is "fl"

### Example 2
Input: ["dog", "racecar", "car"]
Output: ""
Explanation:
*   There is no common prefix

### Example 3
Input: ["intersperse", "interseg", "insec"]
Output: ""
Explanation:
*   There is no common prefix

### Example 4
Input: ["hello", "hello world", "hello again"]
Output: "hello"
Explanation:
*   The common prefix is "hello"

### Example 5
Input: ["abc", "abd", "abf"]
Output: ""
Explanation:
*   There is no common prefix

### Example 6
Input: ["apple", "banana", "cherry"]
Output: ""
Explanation:
*   There is no common prefix

**Constraints**
--------------

*   Time Complexity: O(n*m)
*   Space Complexity: O(1)

**Solution Approach**
--------------------

1.  **Create Trie Node**: Create a Trie node class to store characters from each string.
2.  **Create Trie**: Create a Trie class with a root node and methods to insert characters and find the longest common prefix.
3.  **Iterate Through Strings**: Iterate through each string in the input array and find the longest common prefix with the current prefix.

**Solution Code**
-----------------

```java
public class Trie {
    private class TrieNode {
        private TrieNode[] children = new TrieNode[26];
        private boolean isEndOfWord;

        public TrieNode() {
            isEndOfWord = false;
        }
    }

    public Trie() {
        this.root = new TrieNode();
    }

    private TrieNode root;

    public void insert(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            if (current.children[c - 'a'] == null) {
                current.children[c - 'a'] = new TrieNode();
            }
            current = current.children[c - 'a'];
        }
        current.isEndOfWord = true;
    }

    public String longestCommonPrefix() {
        TrieNode current = root;
        for (char c = 'a'; c <= 'z'; c++) {
            if (current.children[c - 'a'] == null) {
                return "";
            }
            current = current.children[c - 'a'];
        }
        return String.valueOf(current.isEndOfWord ? 'T' : 'a');
    }
}

public class Solution {
    public String longestCommonPrefix(String[] strings) {
        Trie trie = new Trie();
        for (String word : strings) {
            trie.insert(word);
        }
        return trie.longestCommonPrefix();
    }
}
```

**Step-by-Step Explanation**
-------------------------------

1.  Create a Trie node class to store characters from each string.
2.  Create a Trie class with a root node and methods to insert characters and find the longest common prefix.
3.  Iterate through each string in the input array and find the longest common prefix with the current prefix.

**Complexity Analysis**
------------------------

*   Time Complexity: O(n*m) - where n is the number of strings and m is the maximum length of a string.
*   Space Complexity: O(1) - as the Trie only uses a constant amount of space.

**Code Implementation**
-------------------------

```java
public class Solution {
    public String longestCommonPrefix(String[] strings) {
        Trie trie = new Trie();
        for (String word : strings) {
            trie.insert(word);
        }
        return trie.longestCommonPrefix();
    }
}
```

**Step-by-Step Explanation**
-------------------------------

1.  Create a Trie node class to store characters from each string.
2.  Create a Trie class with a root node and methods to insert characters and find the longest common prefix.
3.  Iterate through each string in the input array and insert the string into the Trie.
4.  Find the longest common prefix with the current prefix.

**Complexity Analysis**
------------------------

*   Time Complexity: O(n*m) - where n is the number of strings and m is the maximum length of a string.
*   Space Complexity: O(1) - as the Trie only uses a constant amount of space.