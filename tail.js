const assertEqual = require('./assertEqual');

const tail = function (array) {
  let newArray = [];
  if (array.length <= 1 || array === undefined || array === null) {
    return [];
  } else {
    for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
    }
  }
  return newArray;
};
    

module.exports = tail;