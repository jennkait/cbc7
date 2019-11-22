function spliceNslice(arr1, arr2, n) {
  let combinedArrays = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
    combinedArrays.splice(n, 0, arr1[i])
    n++
  }
  return combinedArrays
}

spliceNslice([11, 12, 13], [14, 15, 16], 1);