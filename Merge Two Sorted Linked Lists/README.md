# Merge Two Sorted Linked Lists
> You’re given the pointer to the head nodes of two sorted linked lists. The data in both lists will be sorted in ascending order. Change the next pointers to obtain a single, merged linked list which also has data in ascending order. Either head pointer given may be null meaning that the corresponding list is empty.
## Input Format
    You have to complete the SinglyLinkedListNode MergeLists(SinglyLinkedListNode headA, SinglyLinkedListNode headB) method which takes two arguments - the heads of the two sorted linked lists to merge. You should NOT read any input from stdin/console.
## Output Format
    Change the next pointer of individual nodes so that nodes from both lists are merged into a single list. Then return the head of this merged list. Do NOT print anything to stdout/console.
## Sample Input
    list1:
    1
    2
    3
    
    list2:
    3
    4
## Sample Output
    1 2 3 3 4 
## Explanation
    The first linked list is: 1 -> 2 -> 3 -> NULL
    The second linked list is: 3 -> 4 -> NULL
    Hence, the merged linked list is: 1 -> 2 -> 3 -> 3 -> 4 -> NULL
[HackerRank link](https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign)