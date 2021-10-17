const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data, node = this.rootNode) {
    let newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      node = this.rootNode;
    } else if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.add(newNode.data, node.left);
        }
      } else if (node.right === null) {
        node.right = newNode;
      } else {
        this.add(newNode.data, node.right);
    }
  }

  has(data, node = this.rootNode)
  {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.has(data, node.left);
    } else if (data > node.data) {
      return this.has(data, node.right);
    } else {
      return true;
    }
  }

  find(data, node = this.rootNode)
  {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data, root = this.rootNode) 
  {
    if (!root) {
      return null;
    }
  
    console.log(data, root)
    if (data < root.data) {
      root.left = this.remove(data, root.left);
    } else if (data > root.data) {
      root.right = this.remove(data, root.right);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.data = this.min(root.right);
        root.right = this.remove(root.data, root.right);
      }
    }
  
    return root;
  }

  min(node = this.rootNode) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.min(node.left);
    }
  }

  max(node = this.rootNode) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.max(node.right);
    }
  }
}