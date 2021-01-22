# compact
过滤数组中的假值，如0、NaN、false、""、null、undefined

## 源码
```javascript
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
```

注：
1. 性能
> 测试表明，数组长度到达1000000时，普通for循环性能明显优于for of循环

2. 数组参数为null，直接返回此参数，而不是[]