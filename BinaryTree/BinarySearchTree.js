class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  addNode(data) {git remote add origin https://github.com/febv1/DSA1.git
    if (data === this.data) {
      return;
    }
    if (data > this.data) {
      if (this.right) {
        this.right.addNode(data);
      } else {
        this.right = new BinarySearchTree(data);
      }
    } else {
      if (this.left) {
        this.left.addNode(data);
      } else {
        this.left = new BinarySearchTree(data);
      }
    }
  }

  preOrderTraversal() {
    let dataValues = [];

    dataValues += this.data + "\t";
    if (this.left) {
      dataValues += this.left.preOrderTraversal();
    }

    if (this.right) {
      dataValues += this.right.preOrderTraversal();
    }
    return dataValues;
  }
  postOrderTraversal() {
    let dataValues = [];

    if (this.left) {
      dataValues += this.left.postOrderTraversal();
    }

    if (this.right) {
      dataValues += this.right.postOrderTraversal();
    }
    dataValues += this.data + "\t";
    return dataValues;
  }

  inOrderTraversal() {
    let dataValues = [];

    if (this.left) {
      dataValues += this.left.inOrderTraversal();
    }
    dataValues += this.data + "\t";
    if (this.right) {
      dataValues += this.right.inOrderTraversal();
    }
    return dataValues;
  }
}

const buildTree = (array) => {
  const root = new BinarySearchTree(array[0]);
  for (let i = 1; i < array.length; i++) {
    root.addNode(array[i]);
  }
  return root;
};

const array = [50, 10, 20, 30, 40, 60, 70, 80, 90, 100];
const tree = buildTree(array);

console.log(`Inorder traversal   ${tree.inOrderTraversal()}`);
console.log(`Preorder traversal  ${tree.preOrderTraversal()}`);
console.log(`Postorder traversal ${tree.postOrderTraversal()}`);
