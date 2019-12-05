// Provided by HackerRank
class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};
// End of Provided by HackerRank

function hasCycle(head) {
    const set = new Set();
    let current = head;
    while (current !== null) {
        if (set.has(current)) {
            return true;
        } else {
            set.add(current);
            current = current.next;
        }
    }
    return false;
}

const input1 = new SinglyLinkedList();
input1.insertNode(1);
console.log(hasCycle(input1.head));
const input2 = new SinglyLinkedList();
input2.insertNode(1);
input2.insertNode(2);
input2.insertNode(3);
input2.tail.next = input2.head.next;
console.log(hasCycle(input2.head));
