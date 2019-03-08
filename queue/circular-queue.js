class QueueFixedSizedArray {
  constructor(size) {
    this.max = size
    this.front = 0
    this.rear = 0
    this.list = new Array(size)
  }

  enqueue(value) {
    if (this.full()) {
      console.log(`Queue is full, can't add ${value}, ${this.front} ${this.rear}`)
      return
    }
    this.rear = (this.rear + 1) % this.max
    this.list[this.rear] = value
  }

  dequeue() {
    if (this.empty()) {
      console.log('Queue is empty')
      return
    }
    this.front = (this.front + 1) % this.max
    return this.list[this.front]
  }

  empty() {
    return this.front === this.rear
  }

  full() {
    return ((this.rear + 1) % this.max) === this.front
  }
}

const q = new QueueFixedSizedArray(8)
console.log('q.empty():', q.empty())
console.log('q.full():', q.full())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)
q.enqueue(10)
console.log('q.empty():', q.empty())
console.log('q.full():', q.full())

console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
console.log('q.dequeue():', q.dequeue())
