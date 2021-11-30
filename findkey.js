const { findkey } = require(".");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKeyByValue = function(obj, callback) {
  let keys = Object.keys(obj);
  console.log(keys);
  for (let i = 0; i < keys.length; i++){
    if (callback(obj[keys[i]])){
      return keys[i];
    }
    
  }
  
  
}

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const results1 = findKeyByValue(object, x => x.stars === 2);
console.log(results1);

assertEqual(results1, "Ora");

module.exports = findKey;