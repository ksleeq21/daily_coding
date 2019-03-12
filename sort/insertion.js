function swap(list, i, j) {
  const tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
}

function sortAsc(list) {
  let curr = 1
  while(curr < list.length) {
    let prev = curr
    while(prev >= 0 && list[prev - 1] > list[prev]) {
      swap(list, prev, prev - 1)
      prev -= 1
    }
    curr += 1
  }
  return list
}

function sortDesc(list) {
  let curr = 1
  while(curr < list.length) {
    let prev = curr
    while(prev >= 0 && list[prev - 1] < list[prev]) {
      swap(list, prev, prev - 1)
      prev -= 1
    }
    curr += 1
  }
  return list
}

const list = [6, 5, 3, 1, 8, 7, 2, 4]
console.log('asc order:', sortAsc(list))
console.log('desc order:', sortDesc(list))
