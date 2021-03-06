// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  inorderRecursively(node, values) {
    if (!node) return
    this.inorderRecursively(node.left, values)
    values.push(node.value)
    this.inorderRecursively(node.right, values)
  }

  preorderRecursively(node, values) {
    if (!node) return
    values.push(node.value)
    this.preorderRecursively(node.left, values)
    this.preorderRecursively(node.right, values)
  }

  postorderRecursively(node, values) {
    if (!node) return
    this.postorderRecursively(node.left, values)
    this.postorderRecursively(node.right, values)
    values.push(node.value)
  }

  breadthFirst(node) {
    const queue = []
    const values = []
    if (!node) {
      return values
    }
    queue.push(node)
    while(queue.length > 0) {
      let popped = queue.shift()
      values.push(popped.value)
      if (popped.left) {
        queue.push(popped.left)
      }
      if (popped.right) {
        queue.push(popped.right)
      }
    }
    return values
  }

  search(node, value) {
    if (!node) {
      return null
    }
    if (value === node.value) {
      return node
    }
    if (value < node.value) {
      return this.search(node.left, value)
    }
    return this.search(node.right, value)
  }

  findMin(node) {
    let curr = node
    while (curr.left) {
      curr = curr.left
    }
    return curr
  }

  remove(value) {
    this.removeRecursively(this.root, value)
  }

  removeRecursively(node, value) {
    if (!node) {
      return null
    } else if (value < node.value) {
      node.left = this.removeRecursively(node.left, value)
      return node
    } else if (value > node.value) {
      node.right = this.removeRecursively(node.right, value)
      return node
    } else {
      if (!node.left && !node.right) { // no children
        node = null
        return node
      } else if (!node.left) { // only right child
        node = node.right
        return node
      } else if (!node.right) { // only left child
        node = node.left
        return node
      } else { // two children
        const aux = this.findMin(node.right)
        node.value = aux.value
        node.right = this.removeRecursively(node.right, aux.value)
        return node
      }
    }
  }
}

const tree = new Tree()
tree.insert(15)
tree.insert(25)
tree.insert(10)
tree.insert(7)
tree.insert(22)
tree.insert(17)
tree.insert(13)
tree.insert(5)
tree.insert(9)
tree.insert(27)
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
let values = []
tree.inorderRecursively(tree.root, values)
console.log('inorderRecursively:', values)
// 5 7 9 10 13 15 17 22 25 27

tree.remove(5)
console.log('remove 5')
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17
values = []
tree.inorderRecursively(tree.root, values)
console.log('inorderRecursively:', values)
// 7 9 10 13 15 17 22 25 27
values = []
tree.preorderRecursively(tree.root, values)
console.log('preorderRecursively:', values)

values = []
tree.postorderRecursively(tree.root, values)
console.log('postorderRecursively:', values)

console.log('breadthFirst:', tree.breadthFirst(tree.root))
// 15 10 25 7 13 22 27 9 17

console.log('remove 7')
tree.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17
values = []
tree.inorderRecursively(tree.root, values)
console.log('inorderRecursively:', values)
// 9 10 13 15 17 22 25 27

console.log('remove 15')
tree.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
values = []
tree.inorderRecursively(tree.root, values)
console.log('inorderRecursively:', values)
// 9 10 13 17 22 25 27
