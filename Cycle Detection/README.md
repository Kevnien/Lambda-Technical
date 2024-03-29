# Cycle Detection
> A linked list is said to contain a cycle if any node is visited more than once while traversing the list.
Complete the function provided for you in your editor. It has one parameter: a pointer to a Node object named  that points to the head of a linked list. Your function must return a boolean denoting whether or not there is a cycle in the list. If there is a cycle, return true; otherwise, return false.
> Note If the list is empty, head will be null.

## Input Format
    Our hidden code checker passes the appropriate argument to your function. You are not responsible for reading any input from stdin.
**Constraints**
- 0 <= list size <= 1000
## Output Format
    If the list contains a cycle, your function must return true. If the list does not contain a cycle, it must return false. The binary integer corresponding to the boolean value returned by your function is printed to stdout by our hidden code checker.
## Sample Input
    The following linked lists are passed as arguments to your function:
![sample input image](sample-input.png)

## Sample Output
    false
    true
**Explanation**

> The first list has no cycle, so we return false and the hidden code checker prints  to stdout.
> The second list has a cycle, so we return true and the hidden code checker prints  to stdout.

[HackerRank link](https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign)