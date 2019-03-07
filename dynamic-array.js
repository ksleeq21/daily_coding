
class DynamicArray {
  constructor(capacity) {
    this.size = 0
    this.list = new Array(capacity).fill(undefined)
    this.capacity = capacity
  }

  showItems() {
    return this.list.reduce((acc, cur) => {
      acc += `[${cur}] `
      return acc
    }, '')
  }

  getSize() {
    return this.size
  }

  capacity() {
    return this.capacity
  }

  isEmpty() {
    return size === 0
  }

  at(i) {
    if (i >= 0 && i < this.capacity) {
      return this.list[i]
    } else {
      throw new Error(`Invalid i received, i = ${i}`)
    }
  }

  increaseSize() {
    this.size += 1
  }

  decreaseSize() {
    this.size -= 1
  }

  resize(doubledCapacity) {
    this.capacity = doubledCapacity
    let doubledList = new Array(this.capacity).fill(undefined)
    for (let i = 0 ; i < this.size ; i += 1) {
      doubledList[i] = this.list[i]
    }
    delete this.list
    this.list = doubledList
  }

  push(item) {
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2)
    }
    this.list[this.size] = item
    this.increaseSize()
  }

  insert(i, item) {
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2)
    }
    for (let idx = this.capacity - 2 ; idx >= i ; idx -= 1) {
      this.list[idx + 1] = this.list[idx]
    }
    this.list[i] = item
    this.increaseSize()
  }

  prepend(item) {
    this.insert(0, item)
  }

  pop() {
    const item = this.list[this.size - 1]
    this.list[this.size] = undefined
    this.decreaseSize()
  }

  remove(i) {
    if (i < 0 || i >= this.size) {
      throw new Error(`Invalid i received, i = ${i}`)
    }
    const item = this.list[i]
    for (let idx = i ; idx < this.size ; idx += 1) {
      this.list[idx] = this.list[idx + 1]
    }
    this.decreaseSize()
  }

  find(item) {
    for (let i = 0 ; i < this.size ; i += 1) {
      if (this.list[i] === item) {
        return i
      }
    }
    return -1
  }
}

const da = new DynamicArray(8)
for (let i = 0 ; i < 18 ; i += 1) {
  da.push(i)
}
console.log(da.list)
console.log(`da.size = ${da.getSize()} da.capacity = ${da.capacity}`)
da.prepend(-1)
console.log(da.list, da.getSize())

console.log(`da.at(11) = ${da.at(11)}`)
da.remove(0)
da.remove(0)
da.remove(0)
console.log(da.list, da.getSize())
