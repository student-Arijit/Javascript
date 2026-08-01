

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

    size() {
        let tempNode = this.head;
        let count = 0;
        while (tempNode) {
            count += 1;
            tempNode = tempNode.next;
        }
        return count;
    }

    print() {
        let tempNode = this.head;
        let result = "";
        while (tempNode) {
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
console.log("Size = " + head.size())
