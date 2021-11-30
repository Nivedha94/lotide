const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = function(string) {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    const ch = (string[i]);
    if (!obj[ch]) {
      obj[ch] = 0;
    }
    obj[ch]++;
  }
  console.log(obj);
};

const words = "Nivedha";
assertEqual(countLetters(words));

module.exports = countLetters;