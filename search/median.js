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

var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    const max1 = nums1[nums1.length - 1]
    const min2 = nums2[0]

    if (max1 <= min2) {
        merged = nums1.concat(nums2)
    } else {
        const max1Idx = search(nums1, 0, nums1.length, min2)
        const min2Idx = search(nums2, 0, nums2.length, max1)
        console.log({ max1Idx, min2Idx })
        merged = merged.concat(nums1.slice(0, max1Idx))
        for (let i = max1Idx, j = min2Idx ; i < nums1.length || j < nums2.length ; ) {
            if (i < nums1.length && j < nums2.length) {
                if (nums1[i] < nums2[j]) {
                    merged.push(nums1[i])
                    i += 1
                } else {
                    merged.push(nums2[j])
                    j += 1
                }
            } else if (nums1[i] !== undefined) {
                merged.push(nums1[i])
                i += 1
            } else {
                merged.push(nums2[j])
                i += 1
            }
        }
        merged = merged.concat(nums2.slice(min2Idx))
    }
    console.log(merged)
    if (merged.length % 2 === 1) {
        return merged[Math.floor(merged.length / 2) + 1]
    }
    const midIdx = Math.floor(merged.length / 2)
    return (merged[midIdx] + merged[midIdx + 1]) / 2

}

console.log(findMedianSortedArrays([1,3], [2]))
