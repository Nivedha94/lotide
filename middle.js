const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
      
    }
    return true;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};




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

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3]))// => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]))// => [3, 4]

assertArraysEqual(middle([1,2,3,4,5]), [4]);
