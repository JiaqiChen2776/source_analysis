# baseFlatten
数组拍平

## 源码
```js
// baseFlatten.js
import isFlattenable from './isFlattenable.js'

function baseFlatten(array, depth, predicate, isStrict, result) {
  // 判断需要拍平元素的方法，默认为 isFlattenable
  predicate || (predicate = isFlattenable)
  // 初始化结果数组
  result || (result = [])
  // array 为null、undefined时，直接返回结果
  if (array == null) {
    return result
  }

  for (const value of array) {
    // 判断元素是否可拍平
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // 递归
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        // 深度为1时，将可拍平元素（数组、类数组、argument等）展开加入到结果数组中
        result.push(...value)
      }
    } else if (!isStrict) {
      // isStrict 是否要限制不可拍平元素
      result[result.length] = value
    }
  }
  return result
}
```
```js
// isFlattenable.js
import isArguments from '../isArguments.js'
const spreadableSymbol = Symbol.isConcatSpreadable

function isFlattenable(value) {
  // 判断是否可拍平：数组、arguments、其他可展开对象
  return Array.isArray(value) || isArguments(value) ||
    !!(value && value[spreadableSymbol])
}
```

## 补充
### Symbol.isConcatSpreadable
对象的内置属性，用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素。
```js
let strArr = ['a', 'b', 'c']
let numArr = [1, 2, 3]
let result1 = strArr.concat(numArr) // ['a', 'b', 'c', 1, 2, 3]

numArr[Symbol.isConcatSpreadable] = false
let result2 = strArr.concat(numArr) // ['a', 'b', 'c', [1, 2, 3]]
```