class MinHeap {
  constructor(k) {
    this.k = k
    this.array = []
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
  insert(key) {
    if (this.array.length === 0) {
      this.array.push(key)
    } else if (this.array.length < this.k) {
      this.array.push(key)
      this.bubbleUp(this.array.length - 1)
    } else if (key > this.array[0]) {
      this.array[0] = key
      this.bubbleDown(0)
    }
  }
  swap(x, y) {
      const temp = this.array[x]
      this.array[x] = this.array[y]
      this.array[y] = temp
  }
  bubbleUp(chIdx) {
      let pIdx = this.getParentIdx(chIdx)
      while(pIdx >= 0 && this.array[pIdx] > this.array[chIdx]) {
          this.swap(pIdx, chIdx)
          chIdx = pIdx
          pIdx = this.getParentIdx(chIdx)
      }
  }
  extract() {
      const max = this.array[0]
      const last = this.array.pop()
      this.array[0] = last
      this.bubbleDown(0)
      return max
  }
  bubbleDown(pIdx) {
      const leftIdx = this.getLeftChildIdx(pIdx)
      const rightIdx = this.getRightChildIdx(pIdx)
      let childIdx = pIdx
      if (this.array[childIdx] > this.array[leftIdx]) {
          childIdx = leftIdx
      }
      if (this.array[childIdx] > this.array[rightIdx]) {
          childIdx = rightIdx
      }
      if (childIdx !== pIdx) {
          this.swap(childIdx, pIdx)
          pIdx = childIdx
          this.bubbleDown(pIdx)
      }
  }
}

const findKthLargest = (nums, k) => {
    const heap = new MinHeap(k)
    nums.forEach(n => heap.insert(n))
    const kth = heap.array[0]
    console.log(heap.array)
    console.log(`${k}th:`, kth)
}

findKthLargest([3,2,1,5,6,4], 2)
