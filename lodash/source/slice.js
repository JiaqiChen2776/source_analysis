// 截取区间：左闭右开
function slice(arr, start = 0, end) {
  if (arr == null || !arr.length) {
    return []
  }
  start = start < 0 ? 0 : start
  end = (end < 0 || end == null) ? arr.length : end

  if (end <= start) {
    return []
  }

  let result = []
  arr.forEach((item, index) => {
    if (index >= start && index < end) {
      result.push(item)
    }
  })
  return result
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = slice(arr, 3, 7)
console.log(result)