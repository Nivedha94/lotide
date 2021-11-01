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

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])){
      return array.slice(0, i);
    }
    
  }
  
  
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
let results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2])
assertArraysEqual(results2, [1,2,5,7,2])


// const takeUntil = (arr, fn) => {
//   for (const [i, val] of arr.entries()) if (fn(val)) return arr.slice(0, i);
//   return arr;
// };
// const result = takeUntil([1, 2, 3, 4], n => n >= 3); 
// console.log(result);