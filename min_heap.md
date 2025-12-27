# Important properties regarding min-heap

1. It's a complete binary tree. 
2. The value of the root node must be **smaller** than all children nodes.
   Same should hold true for the left and right branches of the root node.

## **Complete Binary tree**

I believe it means that each node should have exactly two children nodes 
and not more than that or less. BUT that's actually **Full binary tree**

According to Mr chatgpt 

```
Nodes do not need to have two children

Nodes may have 0, 1, or 2 children

The structure/placement matters, not the exact number of children per node
```

#### Example of a complete binary tree 
        A
       / \
      B   C
     / \  /
    D  E F


#### Example of a non complete binary tree 

        A
       / \
      B   C
     / \   \
    D   E   F

Why ? Because it's filled from right to left not the opposite.

>> I doubt this is the case but won't dig deep now unless understanding 
Heaps requires that.

## Implementing Min-Heap

A Min-Heap is a Data Structure with the following properties.

    It is a Complete Binary Tree.
    The value of the root node must be the smallest among all its descendant nodes and the same thing must be done for its left and right sub-tree also.

min-heap-1.webpmin-heap-1.webp
Internal Implementation of Min-Heap Data Structure

A heap can be efficiently represented using an array.

    If a node is stored at index i:
    Its left child is at index 2*i + 1.
    Its right child is at index 2*i + 2.
    The parent of a node at index i can be found at index [(i-1)/2]. 

### Inserting into min heap 

The insertion operation in a min-heap involves the following steps:

    Add the new element to the end of the heap, in the next available position in the last level of the tree.
    Compare the new element with its parent. If the parent is greater than the new element, swap them.
    Repeat step 2 until the parent is smaller than or equal to the new element, or until the new element reaches the root of the tree.

Hence I guess it would be ?
```
// O(log n)
Insert (value) {

    heap.push(value);
    while(value , parent equation of value >= value && value is not at 0)
        swap.
    //Should be done.
}
```

Was correct. Indeed here is my implementation : 

Uncaught SyntaxError: Unexpected token '...'
> function insert(value, heap) {
...  heap.push(value); let index = heap.length - 1;
...  while ( index > 0 && heap[Math.floor((index-1) /2)] > heap[index]) {
...  let temp = heap[index]; heap[index] = heap[Math.floor((index-1) / 2)]; 
...  heap[Math.floor((index-1)/2)] = temp;
...  index = Math.floor((index-1)/2);}
...  }

Remaining insert. peek. remove.

Remove logic , You don't "remove" rather you remove the parent node.
Then you need hepify logic to re arrange the whole array to be correct.
GOAL LEARN HEAPIFY.
