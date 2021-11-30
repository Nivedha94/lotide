const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3]))// => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]))// => [3, 4]

assertArraysEqual(middle([1,2,3,4,5]), [4]);

// const assert = require('chai').assert;
// const middle   = require('../middle');

// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.deepEqual(head([1, 2, 3]), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.deepEqual(head(['5']), '5'); 
//   });
// });