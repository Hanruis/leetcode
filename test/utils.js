function createTreeNode(val) {
    return {
        val,
        left:null,
        right:null
    }
}

function createListNode(val) {
    return {
        val,
        next:null
    }
}


function linkedListToArray(list) {
    const result = [];
    let curNode = list;
    while(curNode){
        result.push(curNode.val);
        curNode = curNode.next
    }
    return result
}

function arrayToLinkedList(array) {

    if(!array || !array.length){
        return null;
    }

    let i = 1;
    const len = array.length
    let head = createListNode(array[0])
    let curNode = head;
    while (i<len) {
        curNode.next = createListNode(array[i])
        curNode = curNode.next
        i++;
    }
    return head;
}


function arrayToBinarySearchTree(arr) {
    
}

exports.createTreeNode = createTreeNode;
exports.createListNode = createListNode;
exports.linkedListToArray = linkedListToArray;
exports.arrayToLinkedList = arrayToLinkedList;