// const eqArrays = require('../eqArrays')
// const assertArraysEqual = require('../assertArraysEqual')
// const middle = require('../middle')

// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3]))// => [2]
// console.log(middle([1, 2, 3, 4, 5]))// => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]))// => [3, 4]

// assertArraysEqual(middle([1,2,3,4,5]), [4]);

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
});