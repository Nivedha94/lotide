const eqObjects = function(object1, object2) {
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (a.length !== b.length) {
    return false;
  } else {
    for (let elem of a) {
      for (let anElem of b) {
        if (object1[elem] === object2[elem]) {
          return true;
        }
      }
      
    }
    return false;
  }
  
};

const assertObjectsEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;
  if (eqObjects(arr1, arr2)){
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(`Example label: ${inspect(actual)}`);