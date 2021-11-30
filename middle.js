const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let newArray = [];
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 !== 0) {
    newArray.push(array[(((array[array.length-1]) - array[0]) / 2)]);
  } else {
    let a = array.length/2;
    newArray.push(array[a-1]);
    newArray.push(array[a]);
  }
  return newArray;
}


module.exports = middle;