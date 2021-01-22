// 造数据
export function resetArr(arr, total = 1000) {
  arr = []
  for (let i = 1; i <= total; i++) {
    arr.push(i)
  }
  return arr
}

export function addToArr(arr, total = 1000) {
  for (let i = 1; i <= total; i++) {
    arr.push(i)
  }
  return arr
}
