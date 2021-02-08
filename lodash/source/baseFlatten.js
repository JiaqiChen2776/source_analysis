function baseFlatten(arr, result) {
  if (arr == null || !arr.length) return []
  result || (result = [])

  for (let i of arr) {
    if (Array.isArray(i)) {
      baseFlatten(i, result)
    } else {
      result.push(i)
    }
  }
  return result
}

let arr = [1, [2, 3], [4, [5, [6]]]]
console.log(baseFlatten(arr))