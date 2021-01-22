import { resetArr } from '../utils/setData.js'
import { start, end } from '../utils/detectSpeed.js'

let chunkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let chunkSize = 3

// slice 浅拷贝
function chunk1(arr, size) {
  if (arr.length === 0 || size <= 0) return arr
  let newSize = arr.length % size === 0 ? arr.length / size : Math.floor(arr.length / size) + 1
  let result = []
  for (let i = 0; i < newSize; i++) {
    let item = arr.slice(i * size, i * size + size)
    result.push(item)
  }
  return result
}
// 根据元素计算元素所在位置，并 push
function chunk2(arr, size) {
  if (arr.length === 0 || size <= 0) return arr
  let result = []
  arr.forEach((item, index) => {
    let subIndex = Math.floor(index / size)
    if (!result[subIndex]) {
      result[subIndex] = []
    }
    result[subIndex].push(item)
  })
  return result
}

chunkArr = resetArr(chunkArr, 1000000)
start()
let chunkResult = chunk2(chunkArr, chunkSize)
console.log(chunkResult)
end()
