# slice 源码
```javascript
function slice(array, start, end) {
  // 校验数组及其长度
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // start、end赋默认值
  start = start == null ? 0 : start
  end = end === undefined ? length : end
  // start、end非正常范围
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // 右移运算符
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}
```
注：
1. 非正常范围
- `start < 0`: start 与 length 相加，负数则为0
- `end < 0`：end 与 length 相加
- `end > length`：end 为 length

2. 位移运算符
上述代码中，`>>>`为右移，`>>>=`为右移赋值
- 有符号位移
- 无符号位移