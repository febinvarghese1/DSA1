
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

const ll = new LinkedList();
ll.addNodeAtEnd(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);
ll.addNodeAtEnd(5);
ll.addNodeAtEnd(6);
ll.addNodeAtEnd(7);
ll.addNodeAtStart(0);
ll.printList()