// Binary session tree

class Node { 
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
  }
}

class BST { 
    constructor() { }
    this.root = null
console.log("Empty BST Created");
}
insertNode(root, data) {
    if (root === null) return new Node(data);

    if (data === root.data) {
        console.log("Duplicate data found");
        return root;
    }

    if (data < root.data) {
        root.left = this.insertNode(root.left, data);
    } else {
        root.right = this.insertNode(root.right, data);
    }
    return root;
}
insert(data) {
    this.root = this.insertNode(this.root, data);
}
inorder(root = this.root) { 
    if (root != null) { 
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }
} 

const tree = new BST();
for (let i = 0; i < 25; i++) { 
    const x = Math.floor(Math.random() * 100);
}
tree.inorder();
