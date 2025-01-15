//Trees, Binary Search Trees (BST) and Recursion

// Binary session tree

class Node { 
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
  }
}

class BST {
    constructor() {
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
    preorder(root = this.root) {
        if (root != null) {
            console.log(root.data);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root = this.root) {
        if (root != null) {
            console.log(root.data);
            this.inorder(root.left);
            this.inorder(root.right);
        }
    }
    postorder(root = this.root) {
        if (root != null) {
            this.postorder(root.left);
            this.postorder(root.right);
            res.push(root.data);
        }
    }

    findHeight(root = this.root) {
        if (root == null) return -1;
        return Math.max(
            1 + this.findHeight(root.left),
            1 + this.findHeight(root.right)
        );
    }

    alertIt(root = this.root) {
        if (root == null) return;
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        this.alertIt(root.left);
        this.alertIt(root.right);
    }

    checkBST(root = this.root) {
        if (root == null) return true;
        if (root.left != null && root.left.data > root.data) return false;
        if (root.right != null && root.right.data < root.data) return false;
        return this.checkBST(root.left) && this.checkBST(root.right);
    }

    lca(data1, data2, root = this.root) {
        if (data1 > data2) return this.lca(data2, data1, root);
        if (root == null) return -1;
        if (root.data == data1 || root.data == data2 || (root.data > data1 && root.data < data2))
            return root.data;
        if (root.data > data1 && root.data < data2)
            return this.lca(data1, data2, root.left);
        if (root.data < data1 && root.data > data2)
            return this.lca(data1, data2, root.right);
    }


    countLeaf(root = this.root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        return this.countLeaf(root.left) + this.countLeaf(root.right);
    }
}



const tree = new BST();
for (let i = 0; i < 25; i++) { 
    const x = Math.floor(Math.random() * 100);
}
tree.inorder();
