//Traverse and print all elements of a singly linked list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    print() {
        let tempNode = this.head;
        let result = "";
        while(tempNode) {
            result += tempNode.value + "->";
            tempNode = tempNode.next;
        }
        result += "null";
        console.log(result);
    }
}

let head = new LinkedList();
head.prepend(30);
head.prepend(20);
head.prepend(10);
head.print();
