
import { isArray } from 'lodash';

export {
    BinaryTree,
    TreeNode
};

class TreeNode {

    value: any;
    val: any;
    left: TreeNode;
    right: TreeNode;
    next: TreeNode;
    constructor(value) {
        this.val = this.value = value;
        this.left = null;
        this.right = null;
        this.next = null;
    }
    leafSide(value) {
        if (this.left && this.left.value === value) return 'left';
        if (this.right && this.right.value === value) return 'right';
        return null;
    }
}

class BinaryTree {

    root: TreeNode;

    constructor(value) {
        if (isArray(value)){
            this.initalByArray(value);
        }else{
            this.root = new TreeNode(value);
        }
    }

    append(value) {
        let node = this.root;

        while (node) {
            if (value < node.value) {
                node.left ? (node = node.left) : (node.left = new TreeNode(value), node = null);
            } else if (value >= node.value) {
                node.right ? (node = node.right) : (node.right = new TreeNode(value), node = null);
            }
        }
    }
    initalByArray(arr: any[]){
        this.root = new TreeNode(arr.shift());
        while (arr.length) {
            this.append(arr.shift());
        }
    }
    // 这个方法有问题，先放着。
    del(value) {
        let parent = this.findParent(value);
        let node = this.find(value);
        let _node = node;
        let nodeSide = parent.leafSide(node);
        if (!node.left && !node.right) {
            parent[nodeSide] = null;
        } else if (node.left && node.right) {
            while (node.left) {
                node = node.left || node.right;
            }
        } else {
            node = node.left || node.right;
            parent[nodeSide] = node;
        }

        return _node;
    }
    findParent(value): TreeNode | null {
        let node = this.root;
        let _parent = null;
        while (node) {
            if (value < node.value) {
                node.left ? (_parent = node, node = node.left) : (node = null);
            } else if (value > node.value) {
                node.right ? (_parent = node, node = node.right) : (node = null);
            } else {
                return _parent;
            }
        }
        return null;
    }
    // 还差 中序遍历，后序遍历
    preorder() {
        function recursion(node) {
            let _nodeList = [];
            if (node) {
                _nodeList.push(node);
            } else {
                return [];
            }

            let leftLeaves = recursion(node.left);
            let rightLeaves = recursion(node.right);

            return _nodeList.concat(leftLeaves).concat(rightLeaves);

        }

        return recursion(this.root);
    }
    has(value) {
        return !!this.find(value);
    }
    find(value) {
        let node = this.root;

        while (node) {
            if (value < node.value) {
                node.left ? (node = node.left) : (node = null);
            } else if (value > node.value) {
                node.right ? (node = node.right) : (node = null);
            } else {
                return node;
            }
        }
        return null;
    }
}





