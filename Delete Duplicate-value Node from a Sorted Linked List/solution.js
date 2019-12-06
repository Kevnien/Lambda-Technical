// Provided by HackerRank
const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
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
// End Provided by HackerRank

function printSinglyLinkedList(list) {
    let string = "";
    let current = list.head;
    while (current !== null) {
        string += current.data + ' ';
        current = current.next;
    }
    console.log(string);
}

function removeDuplicates(head) {
    let current = head;
    while (current !== null) {
        let next = current.next;
        while (next !== null && next.data === current.data) {
            next = next.next;
        }
        current.next = next;
        current = current.next;
    }
    return head;
}

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);

console.log('before');
printSinglyLinkedList(list);
removeDuplicates(list.head);
console.log('after');
printSinglyLinkedList(list);