// provided by HackerRank
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
// End provided by HackerRank

function mergeLists(head1, head2) {
    let current1 = head1;
    let current2 = head2;
    let previous = head1;
    while (current1 !== null || current2 !== null) {
        if (current1 !== null) {
            if (current1.data <= current2.data) {
                previous = current1;
                if (current1.next !== null && current1.next.data > current2.data) {
                    current1 = current1.next;
                    previous.next = current2;
                } else {
                    current1 = current1.next;
                }
                if (current1.next == null) {
                    current1.next = current2;
                    break;
                }
            } else {
                previous = current2;
                current2 = current2.next;
                previous.next = current1;
            }
        } else {
            previous.next = current2;
            break;
        }
    }
    if (head1.data <= head2.data) return head1;
    return head2;
}

function print(node) {
    let string = '';
    while (node !== null) {
        string += node.data + ' ';
        node = node.next;
    }
    console.log(string);
}

const list1 = new SinglyLinkedList();
list1.insertNode(1);
list1.insertNode(2);
list1.insertNode(3);

const list2 = new SinglyLinkedList();
list2.insertNode(3);
list2.insertNode(4);

print(mergeLists(list1.head, list2.head));

const list3 = new SinglyLinkedList();
list3.insertNode(1);
list3.insertNode(6);
list3.insertNode(9);

const list4 = new SinglyLinkedList();
list4.insertNode(4);
list4.insertNode(7);
list4.insertNode(9);
list4.insertNode(10);

print(mergeLists(list3.head, list4.head));

const list5 = new SinglyLinkedList();
list5.insertNode(4);
list5.insertNode(6);

const list6 = new SinglyLinkedList();
list6.insertNode(1);
list6.insertNode(7);

print(mergeLists(list5.head, list6.head));

const list7 = new SinglyLinkedList();
list7.insertNode(1);
list7.insertNode(4);

const list8 = new SinglyLinkedList();
list8.insertNode(6);
list8.insertNode(7);

print(mergeLists(list7.head, list8.head));

const list9 = new SinglyLinkedList();
list9.insertNode(1);
list9.insertNode(1);

const list10 = new SinglyLinkedList();
list10.insertNode(1);
list10.insertNode(2);

print(mergeLists(list9.head, list10.head));