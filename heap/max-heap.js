class MaxHeap {
    constructor() {
        this.array = []
    }
    getParentIdx = idx => Math.floor((idx - 1) / 2)
    getLeftChildIdx = idx => idx * 2 + 1
    getRightChildIdx = idx => idx * 2 + 2
    insert = key => {
        this.array.push(key)
        if (this.array.length !== 1) {
            this.bubbleUp(this.array.length - 1)
        }
    }
    swap = (x, y) => {
        const temp = this.array[x]
        this.array[x] = this.array[y]
        this.array[y] = temp
    }
    bubbleUp = chIdx => {
        let pIdx = this.getParentIdx(chIdx)
        while(pIdx >= 0 && this.array[pIdx] < this.array[chIdx]) {
            this.swap(pIdx, chIdx)
            chIdx = pIdx
            pIdx = this.getParentIdx(chIdx)
        }
    }
    extract = () => {
        const max = this.array[0]
        const last = this.array.pop()
        this.array[0] = last
        this.bubbleDown(0)
        return max
    }
    bubbleDown = pIdx => {
        const leftIdx = this.getLeftChildIdx(pIdx)
        const rightIdx = this.getRightChildIdx(pIdx)
        let childIdx = pIdx
        if (this.array[childIdx] < this.array[leftIdx]) {
            childIdx = leftIdx
        }
        if (this.array[childIdx] < this.array[rightIdx]) {
            childIdx = rightIdx
        }
        if (childIdx !== pIdx) {
            this.swap(childIdx, pIdx)
            pIdx = childIdx
            this.bubbleDown(pIdx)
        }
    }
}
