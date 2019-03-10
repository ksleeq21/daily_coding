class HeapSort {
  constructor(array) {
    this.array = array
    // create MaxHeap
    for (let i = 0 ; i < this.array.length ; i += 1) {
      this.shiftUp(this.array, i)
    }
    this.show('heap:')
    this.array = this.sort(this.array)
  }

  sort(array) {
    let endIdx = this.array.length - 1
    if (endIdx <= 1) return array
    // exit when the range of the list is one element
    while(endIdx > 1) {
      // replace first element with last element
      this.swap(this.array, 0, endIdx)
      // reduce the range of the list by one
      endIdx -= 1
      // shift-down to
      this.shiftDown(this.array, endIdx)
    }
    return array
  }

  show(prefix) {
    console.log(`${prefix ? `${prefix} ${this.array}` : `${this.array}`}`)
  }

  swap(array, p, c) {
    const temp = array[p]
    array[p] = array[c]
    array[c] = temp
  }

  shiftDown(array, endIdx) {
    let prevMaxIdx = 0
    while(1) {
      let maxIdx = prevMaxIdx
      let leftIdx = maxIdx * 2 + 1
      let rightIdx = maxIdx * 2 + 2
      if (leftIdx > endIdx || rightIdx > endIdx) break
      if (array[maxIdx] < array[leftIdx]) maxIdx = leftIdx
      if (array[maxIdx] < array[rightIdx]) maxIdx = rightIdx
      if (maxIdx === prevMaxIdx) break
      this.swap(array, prevMaxIdx, maxIdx)
      prevMaxIdx = maxIdx
    }
  }

  shiftUp(array, idx) {
    let childIdx = idx
    while(1) {
      let parentIdx = Math.floor((childIdx - 1) / 2)
      if (parentIdx < 0 || array[childIdx] <= array[parentIdx]) break
      this.swap(array, parentIdx, childIdx)
      childIdx = parentIdx
    }
  }
}

const heapSort = new HeapSort([6, 5, 3, 1, 8, 7, 2, 4 ])
heapSort.show('sorted array:')
