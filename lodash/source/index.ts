const moduleA = require('./a')

let a: number = 1;
let str: string = 'a';
console.log(a + str)

function getRound(r: number): number {
  return 2 * moduleA.Pi * r
}
let r: number = 5
let round: number = getRound(r)
console.log('round:', round)