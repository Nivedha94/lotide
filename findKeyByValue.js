const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  console.log(keys);
  for (let i = 0; i < keys.length; i++){
    if (obj[keys[i]] === value) {
      console.log([keys[i]]);
      return keys[i];
    } 
    
  }
  
  
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;