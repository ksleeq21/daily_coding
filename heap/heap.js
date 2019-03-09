class MinHeap {
  constructor() {
    this.array = []
  }

  levelOrderTraversal() {
    console.log(this.array)
  }

  getMin() {
    return this.array[0]
  }

  swapKey(parentIdx, childIdx) {
    const temp = this.array[parentIdx]
    this.array[parentIdx] = this.array[childIdx]
    this.array[childIdx] = temp
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2)
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2
  }

  extractMin() {
    if (this.array.length === 0) {
      return null
    }
    // replace root of the heap with the last element of the heap
    let parentIdx = 0
    const lastKey = this.array.pop()
    this.array[parentIdx] = lastKey
    // bubble down (or shift down)
    this.bubbleDown(parentIdx)
  }

  bubbleDown(parentIdx) {
    while(1) {
      let leftChildIdx = this.getLeftChildIdx(parentIdx)
      let rightChildIdx = this.getRightChildIdx(parentIdx)
      let childIdx = 0
      if (this.array[parentIdx] > this.array[leftChildIdx]) {
        childIdx = leftChildIdx
      } else if (this.array[parentIdx] > this.array[rightChildIdx]) {
        childIdx = rightChildIdx
      } else {
        break
      }
      this.swapKey(parentIdx, childIdx)
      parentIdx = childIdx
    }
  }

  // delete key at index idx
  deleteKey(idx) {
    const minKey = this.array[0]
    const replaceKey = minKey - 1
    this.array[idx] = replaceKey
    let childIdx = idx
    this.bubbleUp(childIdx)
    this.extractMin()
  }

  insertKey(key) {
    let childKey = key
    // add key to the end of the array
    this.array.push(childKey)
    let childIdx = this.array.length - 1
    this.bubbleUp(childIdx)
  }

  bubbleUp(childIdx) {
    let parentIdx = this.getParentIdx(childIdx)
    // shift up as long as needed
    while(parentIdx >= 0 && this.array[parentIdx] > this.array[childIdx]) {
      this.swapKey(parentIdx, childIdx)
      childIdx = parentIdx
      parentIdx = this.getParentIdx(childIdx)
    }
  }

  deleteKey() {}
}

const heap = new MinHeap()
heap.insertKey(5)
heap.insertKey(3)
heap.insertKey(17)
heap.insertKey(10)
heap.insertKey(84)
heap.insertKey(19)
heap.insertKey(6)
heap.insertKey(22)
heap.insertKey(9)
heap.levelOrderTraversal()

// heap.deleteKey(1)
// heap.levelOrderTraversal()

heap.extractMin()
heap.levelOrderTraversal()

heap.extractMin()
heap.levelOrderTraversal()
