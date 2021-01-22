# slice
裁剪数组，从`start`到`end`，但不包括`end`

## 源码
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
- 有符号位移`>>`、`<<`
```javascript
-5 >> 2 // -2
```
**-5的二进制表示：1111 1111 1111 1111 1111 1111 1111 1011**
<br>
原码：1000 0000 0000 0000 0000 0000 0000 0101；
反码：1111 1111 1111 1111 1111 1111 1111 1010；
补码：1111 1111 1111 1111 1111 1111 1111 1011；
<br>
**右移2位：1111 1111 1111 1111 1111 1111 1111 1110**
<br>
反码：1111 1111 1111 1111 1111 1111 1111 1101；
原码：1000 0000 0000 0000 0000 0000 0000 0010
<br>
**结果：-2**

- 无符号位移`>>>`、`<<<`
```javascript
-5 >>> 2 // 1073741822
```
**-5的二进制表示：1111 1111 1111 1111 1111 1111 1111 1011**
<br>
**右移2位：0011 1111 1111 1111 1111 1111 1111 1110**
<br>
**结果：1073741822**

3. 移位0的意义
>移位操作符在移位前做了两种转换，第一将不是number类型的数据转换为number，第二将number转换为无符号的32bit数据，也就是Uint32类型。这些与移位的位数无关，移位0位主要就是用了js的内部特性做了前两种转换。
- 不能转为number，则为0
```javascript
'a' >>> 0  // 0
```
- 如果为非整数，先转换为整数
```javascript
function ToInteger(x) {
    x = Number(x);
    // 小于0向上取整，否则向下取整
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}
```
- 转为32位无符号数据：如果是正数，返回正数，如果是负数，返回负数 + 2的32次方
```javascript
function modulo(a, b) {
    return a - Math.floor(a/b)*b;
}
function ToUint32(x) {
    return modulo(ToInteger(x), Math.pow(2, 32));
}
ToUint32(5) // 5
ToUint32(-5) // 4294967291
```

参考：
- https://blog.csdn.net/wutingyehe/article/details/92166140