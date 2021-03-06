export interface ITreeNode {
    val: number;
    left: ITreeNode;
    right: ITreeNode;
}

export interface IListNode {
    val: number;
    next: IListNode;
}


export interface TreeLinkNode{
    left: TreeLinkNode;
    right: TreeLinkNode;
    next: TreeLinkNode;
}