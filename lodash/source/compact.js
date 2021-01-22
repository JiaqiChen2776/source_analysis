import { addToArr } from '../utils/setData.js'
import { start, end } from '../utils/detectSpeed.js'

let arr = [0, 1, null, undefined, false, 2, NaN, '']

function compact1(arr) {
  if (arr == null) return []
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue
    result.push(arr[i])
  }
  return result
}

function compact(array) {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }
  // for of 遍历数组，不包含原型链上的属性
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

arr = addToArr(arr, 1000000)
start()
let result = compact1(arr)
console.log(result)
end()