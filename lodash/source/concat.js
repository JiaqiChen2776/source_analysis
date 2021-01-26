function concat(arr, ...vals) {
  if (arr ==  null && !vals.length) return arr

  let result = Array.isArray(arr) ? arr : [arr]
  vals.forEach(i => {
    if (i instanceof Array) {
      i.forEach(j => {
        result.push(j)
      })
    } else {
      result.push(i)
    }
  })
  return result
}

console.log(concat([], [1, 2]))
console.log(concat([], 1, 2, [3, 4, [5]]))