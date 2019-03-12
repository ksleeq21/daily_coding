function swap(list, i, j) {
  const tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
}

function sortAsc(list) {
  let curr = 0
  while(curr < list.length - 1) { // ignore last element in unsorted sublist
    let next = curr + 1
    while(next < list.length) {
      if (list[curr] > list[next]) {
        swap(list, curr, next)
      }
      next += 1
    }
    curr += 1
  }
  return list
}

function sortDesc(list) {
  let curr = 0
  while(curr < list.length - 1) { // ignore last element in unsorted sublist
    let next = curr + 1
    while(next < list.length) {
      if (list[curr] < list[next]) {
        swap(list, curr, next)
        next += 1
      }
    }
    curr += 1
  }
  return list
}

const list = [6, 5, 3, 1, 8, 7, 2, 4]
console.log('asc order:', sortAsc(list))
console.log('desc order:', sortDesc(list))
