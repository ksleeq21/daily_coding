class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Node(null)
  }

  show() {
    if (!this.head.next) {
      return 'List is empty'
    }
    let node = this.head.next
    let items = ''
    while(node) {
      items += `[${node.value}] `
      node = node.next
    }
    return items
  }

  size() {
    let len = 0
    let node = this.head.next
    while(node) {
      len += 1
      node = node.next
    }
    return len
  }

  empty() {
    return !!this.head.next
  }

  valueAt(index) {
    if (index < 0) {
      return `Invalid index received, index = ${index}`
    }
    let n = 0
    let node = this.head.next
    while(node && n < index) {
      n += 1
      if (n === index) {
        return node.value
      }
    }
    return `Index is bigger than number of items in the list, ${index} > ${n}`
  }

  pushFront(val) {
    const node = new Node(val)
    node.next = this.head.next
    this.head.next = node
  }

  popFront() {
    if (!this.head.next) {
      return 'List is empty'
    }
    const next = this.head.next
    this.head.next = next.next
    return next.value
  }

  pushBack(val) {
    const node = new Node(val)
    let curr = this.head
    while(curr.next) {
      curr = curr.next
    }
    curr.next = node
  }

  popBack() {
    if (!this.head.next) {
      return 'List is empty'
    }
    let prev = this.head
    let curr = this.head.next
    while(prev.next && curr.next) {
      prev = prev.next
      curr = curr.next
    }
    prev.next = curr.next
    return curr.value
  }

  front() {
    if (!this.head.next) {
      return 'List is empty'
    }
    return this.head.next.value
  }

  back() {
    if (!this.head.next) {
      return 'List is empty'
    }
    let node = this.head
    while(node.next) {
      node = node.next
    }
    return node.value
  }

  insert(index, val) {
    if (index < 0) {
      return `Invalid index received, index = ${index}`
    }
    let n = 0
    let prev = this.head
    let curr = this.head.next
    while (curr) {
      if (n === index) {
        const node = new Node(val)
        prev.next = node
        node.next = curr
        return
      }
      n += 1
      prev = prev.next
      curr = curr.next
    }
    return `Index is bigger than number of items in the list, ${index} > ${n}`
  }

  erase(index) {
    if (index < 0) {
      return `Invalid index received, index = ${index}`
    }
    let n = 0
    let prev = this.head
    let curr = this.head.next
    while (curr) {
      if (n === index) {
        prev.next = curr.next
        return
      }
      n += 1
      prev = prev.next
      curr = curr.next
    }
    return `Index is bigger than number of items in the list, ${index} > ${n}`
  }

  valueNFromEnd(n) {
    const stack = []
    if (n < 0) {
      return `Invalid n received, n = ${n}`
    }
    let len = 0
    let node = this.head.next
    if (!node) {
      return 'List is empty'
    }
    while (node) {
      stack.push(node)
      node = node.next
      len += 1
    }
    if (len < n) {
      return `Index is bigger than number of items in the list, ${n} > ${len}`
    }
    let popCnt = n + 1
    let popped = {}
    while(popCnt > 0) {
      popped = stack.pop()
      popCnt -= 1
    }
    return popped.value
  }

  reverse() {
    let current = this.head.next
    let prev = null
    let next = null
    while(current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head.next = prev
  }

  removeValue(val) {
    let prev = this.head
    let curr = this.head.next
    if (!curr) {
      return 'List is empty'
    }
    while(curr) {
      if (curr.value === val) {
        prev.next = curr.next
        return
      }
      prev = prev.next
      curr = curr.next
    }
    return `Value is not found in the list, vlaue = ${value}`
  }
}

const sl = new SinglyLinkedList()
sl.pushFront(4)
sl.pushFront(3)
sl.pushFront(2)
sl.pushFront(1)
sl.pushBack(0)
sl.pushBack(-1)
console.log('items:', sl.show())
console.log('size:', sl.size())
console.log('empty?', sl.empty())
console.log('valueAt(0):', sl.valueAt(0))
console.log('valueAt(10):', sl.valueAt(10))
console.log('front:', sl.front())
console.log('back:', sl.back())

console.log('items:', sl.show())
console.log('popFront():', sl.popFront())
console.log('items:', sl.show())
console.log('popBack():', sl.popBack())
console.log('items:', sl.show())

sl.insert(0, 10)
console.log('insert(0, 10) items:', sl.show())
sl.insert(2, 20)
console.log('insert(2, 20) items:', sl.show())
sl.insert(3, 20)
console.log('insert(3, 20) items:', sl.show())

sl.erase(0)
console.log('erase(0) items:     ', sl.show())
sl.erase(1)
console.log('erase(1) items:     ', sl.show())

sl.removeValue(20)
console.log('removeValue(20) items:', sl.show())

console.log('value_n_from_end 0:', sl.valueNFromEnd(0))
console.log('value_n_from_end 1:', sl.valueNFromEnd(1))
console.log('value_n_from_end 2:', sl.valueNFromEnd(2))

console.log('items:', sl.show())
sl.reverse()
console.log('reverse:', sl.show())
