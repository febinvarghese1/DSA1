class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeAtEnd(data) {
    if (this.head === null) {
      this.head = new Node(data, null);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data, null);
  }

  addNodeAtStart(data) {
    let node = new Node(data, this.head);
    this.head = node;
  }

  addNodebyValues(array) {
    for (let i = 0; i < array.length; i++) {
      this.addNodeAtEnd(array[i]);
    }
  }

  reverseList() {
    let previous = null;
    let currentNode = this.head;

    while (currentNode) {
      let nextValue = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = nextValue;
    }
    this.head = previous;
  }

  removeAt(position) {
    if (position === 0) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count == position - 1) {
        currentNode.next = currentNode.next.next;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  findValueAt(position) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (count === position - 1) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  printList() {
    if (this.head === null) {
      console.log("List is empty");
    }
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += currentNode.data + "---->";
      currentNode = currentNode.next;
    }
    console.log(str);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ll = new LinkedList();
ll.addNodeAtStart(0);
ll.addNodebyValues(array);
ll.removeAt(0);
ll.printList();
console.log(ll.findValueAt(3));

console.log("After reversing the list");
ll.reverseList();
ll.printList();
