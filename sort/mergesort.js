function mergesort(list, firstIdx, lastIdx) {
  if (firstIdx < lastIdx) {
    const middleIdx = firstIdx + Math.floor((lastIdx - firstIdx) / 2)
    mergesort(list, firstIdx, middleIdx)
    mergesort(list, middleIdx + 1, lastIdx)
    merge(list, firstIdx, middleIdx, lastIdx)
  }
}

function merge(list, firstIdx, middleIdx, lastIdx) {
  const left = list.slice(firstIdx, middleIdx + 1)
  const right = list.slice(middleIdx + 1, lastIdx + 1)
  let i = 0
  let j = 0
  let idx = firstIdx
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      list[idx++] = left[i++]
    } else {
      list[idx++] = right[j++]
    }
  }
  while(i < left.length) {
    list[idx++] = left[i++]
  }
  while(j < right.length) {
    list[idx++] = right[j++]
  }
}

const list = [6, 5, 3, 1, 8, 7, 2, 4]
console.log(list)
mergesort(list, 0, list.length - 1)
console.log(list)
