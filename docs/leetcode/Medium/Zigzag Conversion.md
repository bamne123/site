**Zigzag Conversion**
====================

**Problem Statement**
--------------------

Given a multi-length linked list, convert it to a single linked list with alternating nodes.

**Example**
------------

Input: `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8`

Output: `1 -> 3 -> 5 -> 7 -> 2 -> 4 -> 6`

**Rules**
-------

* The input linked list should be modified in-place.
* The output linked list should not be modified.
* Each node should have an integer value and a `next` pointer.

**Constraints**
------------

* The input linked list can contain duplicate values.
* The linked list should be a valid C++ list.

**Solution**
------------

### **Solution**

```cpp
class Solution {
public:
    void convert(vector<int>& head, int prev_val, int curr_val) {
        prev_val = curr_val;
        while (head) {
            // Create a new node with the current value
            Node* newNode = new Node(curr_val);
            newNode->next = head;
            
            // Link the new node to the previous node
            prev_val->next = newNode;
            
            prev_val = newNode;
            head = newNode->next;
        }
    }
};

class Node {
public:
    int val;
    Node* next;

    Node(int val) : val(val), next(nullptr) {}
};
```

### **Explanation**

1.  We initialize two pointers: `prev_val` and `curr_val`, which will keep track of the previous and current node values, respectively.
2.  We iterate through the linked list using the `head` pointer.
3.  For each node, we create a new node with the current value and link it to the previous node using the `next` pointer.
4.  We update the `prev_val` pointer to point to the new node.
5.  We repeat this process until the end of the linked list is reached.
6.  Finally, we return the modified linked list.

### **Time Complexity**

O(n), where n is the number of nodes in the linked list.

### **Space Complexity**

O(n), where n is the number of nodes in the linked list.

### **Example Use Case**

```cpp
int main() {
    Solution solution;
    
    // Create a sample linked list
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    head->next->next->next->next->next = new Node(6);
    head->next->next->next->next->next->next = new Node(7);
    head->next->next->next->next->next->next->next = new Node(8);
    
    // Convert the linked list to an alternating linked list
    solution.convert(head, nullptr, nullptr);
    
    // Print the modified linked list
    while (head) {
        std::cout << head->val << " ";
        head = head->next;
    }
    std::cout << std::endl;
    
    return 0;
}
```

This code demonstrates the Zigzag Conversion problem, where a single linked list is converted into an alternating linked list. The provided explanation, solution, and example use cases should help to create a well-structured and informative response.