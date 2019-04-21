// return index of value
// return -1
function search(array, l, r, value) {
  if (r < l) {
    return -1
  }
  const midIdx = l + Math.floor((r - l) / 2)
  if (value === array[midIdx]) {
    return midIdx
  }
  if (value > array[midIdx]) {
    return search(array, midIdx + 1, r, value)
  }
  return search(array, l, midIdx - 1, value)
}

const array = [1,2,3,4,5,6,7,8,9,10]
console.log(search(array, 0, array.length, 3))
console.log(search(array, 0, array.length, 7))
console.log(search(array, 0, array.length, 11))
console.log(search([1, 2], 0, 2, 1))
