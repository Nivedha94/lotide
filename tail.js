const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};


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
    

const words = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(words.length, 3); 
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");