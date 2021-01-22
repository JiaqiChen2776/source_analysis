# chunck
将数组拆分成多个等长的区块

## 源码
```javascript
import slice from './slice.js'
import toInteger from './toInteger.js'

function chunk(array, size = 1) {
  // 将size转换为大于等于0的整数
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    // 源码中的slice方法，没有Array.slice方法的浅拷贝问题
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}
```
注：
1. 参数默认值（size默认为1）
2. 参数类型转换（如数值型，size需转换为整数）
3. 参数临界值判断
4. 对象的深浅拷贝问题（对象数组需深拷贝）
