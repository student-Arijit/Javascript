// Search for a given value in a linked list.

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

    search(val) {
        for (let node = this.head; node; node = node.next) {
            if (node.value === val) return true;
        }
        return false;
    }   
}

let head = new LinkedList();
head.prepend(40);
head.prepend(30);
head.prepend(20);
head.prepend(10);
console.log("Value in the Linked-List present " + head.search(40))
