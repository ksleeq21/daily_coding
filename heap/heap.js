class MinHeap {
  constructor() {
    this.array = []
  }

  levelOrderTraversal() {
    console.log(this.array)
  }

  getMin() {}

  getKey(idx) {
    return this.array[idx]
  }

  setKey(idx, key) {
    this.array[idx] = key
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

  extractMin() {}

  decreaseKey(idx) {}

  insertKey(key) {
    let newKey = key
    // add key to the end of the array
    this.array.push(newKey)
    let newIdx = this.array.length - 1
    let parentIdx = this.getParentIdx(newIdx)
    // shift up as long as needed
    while(parentIdx >= 0) {
      let parentKey = this.getKey(parentIdx)
      if (parentKey <= newKey) {
        return
      }
      this.setKey(parentIdx, newKey)
      this.setKey(newIdx, parentKey)
      newIdx = parentIdx
      parentIdx = this.getParentIdx(newIdx)
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
