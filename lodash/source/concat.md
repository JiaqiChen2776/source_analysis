# concat
拼接数组

## 源码
```javascript
function concat() {
  var length = arguments.length;
  // 判定是否有参数
  if (!length) {
    return [];
  }
  // 获取源数组及要拼接的其他参数
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  // isArray是Array.isArray方法
  // 1. 判断array是否为数组，不是则创建新数组[array]
  // 2. array是数组，则对array进行浅拷贝
  // 3. baseFlatten对除源数组外的参数进行深度为1的展开
  // 4. arrayPush拼接源数组及其他参数
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}
```
