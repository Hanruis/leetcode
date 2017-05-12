"use strict";
var lodash_1 = require("lodash");
var TreeNode = (function () {
    function TreeNode(value) {
        this.val = this.value = value;
        this.left = null;
        this.right = null;
        this.next = null;
    }
    TreeNode.prototype.leafSide = function (value) {
        if (this.left && this.left.value === value)
            return 'left';
        if (this.right && this.right.value === value)
            return 'right';
        return null;
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinaryTree = (function () {
    function BinaryTree(value) {
        if (lodash_1.isArray(value)) {
            this.initalByArray(value);
        }
        else {
            this.root = new TreeNode(value);
        }
    }
    BinaryTree.prototype.append = function (value) {
        var node = this.root;
        while (node) {
            if (value < node.value) {
                node.left ? (node = node.left) : (node.left = new TreeNode(value), node = null);
            }
            else if (value >= node.value) {
                node.right ? (node = node.right) : (node.right = new TreeNode(value), node = null);
            }
        }
    };
    BinaryTree.prototype.initalByArray = function (arr) {
        this.root = new TreeNode(arr.shift());
        while (arr.length) {
            this.append(arr.shift());
        }
    };
    // 这个方法有问题，先放着。
    BinaryTree.prototype.del = function (value) {
        var parent = this.findParent(value);
        var node = this.find(value);
        var _node = node;
        var nodeSide = parent.leafSide(node);
        if (!node.left && !node.right) {
            parent[nodeSide] = null;
        }
        else if (node.left && node.right) {
            while (node.left) {
                node = node.left || node.right;
            }
        }
        else {
            node = node.left || node.right;
            parent[nodeSide] = node;
        }
        return _node;
    };
    BinaryTree.prototype.findParent = function (value) {
        var node = this.root;
        var _parent = null;
        while (node) {
            if (value < node.value) {
                node.left ? (_parent = node, node = node.left) : (node = null);
            }
            else if (value > node.value) {
                node.right ? (_parent = node, node = node.right) : (node = null);
            }
            else {
                return _parent;
            }
        }
        return null;
    };
    // 还差 中序遍历，后序遍历
    BinaryTree.prototype.preorder = function () {
        function recursion(node) {
            var _nodeList = [];
            if (node) {
                _nodeList.push(node);
            }
            else {
                return [];
            }
            var leftLeaves = recursion(node.left);
            var rightLeaves = recursion(node.right);
            return _nodeList.concat(leftLeaves).concat(rightLeaves);
        }
        return recursion(this.root);
    };
    BinaryTree.prototype.has = function (value) {
        return !!this.find(value);
    };
    BinaryTree.prototype.find = function (value) {
        var node = this.root;
        while (node) {
            if (value < node.value) {
                node.left ? (node = node.left) : (node = null);
            }
            else if (value > node.value) {
                node.right ? (node = node.right) : (node = null);
            }
            else {
                return node;
            }
        }
        return null;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
