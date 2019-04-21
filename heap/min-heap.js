class MinHeap {
    constructor() {
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
    distance(point) {
        if (!point) return
        const x = point[0]
        const y = point[1]
        return x * x + y * y
    }
    swap(x, y) {
        const temp = this.array[x]
        this.array[x] = this.array[y]
        this.array[y] = temp
    }

    insert(point) {
        if (this.array.length === 0) {
            this.array.push(point)
            return
        }
        this.array.push(point)
        const childIdx = this.array.length - 1
        this.bubbleUp(childIdx)
    }
    extract() {
        if (this.array.length === 0) return null
        const root = this.array[0]
        const last = this.array.pop()
        this.array[0] = last
        this.bubbleDown(0)
        return root
    }
    bubbleUp(chidx) { // insert
        while(1) {
            let pidx = this.getParentIdx(chidx)
            if (pidx < 0) {
                break
            }
            let chval = this.distance(this.array[chidx])
            let pval = this.distance(this.array[pidx])

            if (pval < chval) {
                break
            }
            this.swap(pidx, chidx)
            chidx = pidx
        }
    }
    bubbleDown(pidx) { // extract
        let lidx = this.getLeftChildIdx(pidx)
        let ridx = this.getRightChildIdx(pidx)

        let ppoint = this.array[pidx]
        let lpoint = this.array[lidx]
        let rpoint = this.array[ridx]

        let smidx = pidx
        let pval = this.distance(ppoint)

        if (lpoint && pval > this.distance(lpoint)) {
            smidx = lidx
        }
        if (rpoint && this.distance(this.array[smidx]) > this.distance(rpoint)) {
            smidx = ridx
        }
        if (pidx !== smidx) {
            this.swap(pidx, smidx)
            this.bubbleDown(smidx)
        }
    }
}
