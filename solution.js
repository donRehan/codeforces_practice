/*
  * Creating a min heap implementation by hand to understand heaps properly
  */

class MinHeap {
  
  // Creates the heap
  constructor() {
    this.heap = [];
  }

  // ==== Core operations ====
  // Insert , Extract Min , peek , heaipfy

  insert(value) {
    //TODO: Add insertion logic
    }
}

// Write an example to test the MinHeap class, Have a heap with some values , 
// show the heap after insertion and how it should be after insertion 

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.heap); // Output should be a valid min-heap: [3, 5, 20, 10, 8]
console.log("Output should be a valid min-heap: [3, 5, 20, 10, 8]");
