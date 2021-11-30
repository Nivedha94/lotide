const letterPositions = function(string) {
  const results = {};
  let emptyArray = [];
  for (let i = 0; i < string.length; i++) {
    emptyArray.push(string[i]);
  }
  for (let j = 0; j < emptyArray.length; j++) {
    const ch = emptyArray[j];
    if(!(results[ch])) {
      results[ch] = [j];
    } else {
      results[ch].push(j);
    }
  }
  console.log("++++++++++", results);
  return results;
}




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

assertArraysEqual(letterPositions("hello")['e'], [1]);

module.exports = letterPositions;