# Delete duplicate-value nodes from a sorted linked list

> You're given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order. Delete as few nodes as possible so that the list does not contain any value more than once. The given head pointer may be null indicating that the list is empty.
## Input Format
    You have to complete the SinglyLinkedListNode* removeDuplicates(SinglyLinkedListNode* head) method which takes one argument - the head of the sorted linked list. You should NOT read any input from stdin/console.
## Constraints
- 1 <= t <= 10
- 1 <= n <= 1000
- 1 <= list <= 1000

## Output Format
    Delete as few nodes as possible to ensure that no two nodes have the same data. Adjust the next pointers to ensure that the remaining nodes form a single sorted linked list. Then return the head of the sorted updated linked list. Do NOT print anything to stdout/console.
## Sample Input
    1
    2
    2
    3
    4
## Sample Output
    1 2 3 4 
## Explanation
    The initial linked list is: 1 -> 2 -> 2 -> 3 -> 4 -> NULL
    
    The final linked list is: 1 -> 2 -> 3 -> 4 -> NULL

[HackerRank link](https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign)