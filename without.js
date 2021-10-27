const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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


const without = function(sourceArray, toRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    
    if (toRemoveArray[i] !== sourceArray[i]) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
  if (eqArrays(sourceArray, newArray)) {
    assertArraysEqual(sourceArray, newArray);
  }
};

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);