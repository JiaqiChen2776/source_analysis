let total = 0
let _start = 0
let _end = 0

export function start() {
  _start = Date.now()
  console.log(`start: ${_start}`)
}

export function end() {
  _end = Date.now()
  total = _end - _start
  console.log(`end: ${_end}`)
  console.log(`total: ${total} ms`)
}