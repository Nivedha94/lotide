const assertEqual = require('../assertEqual');
const tail   = require('../tail');

const words = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(words.length, 3); 
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

// const assert = require('chai').assert;
// const tail   = require('../tail');

// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.deepEqual(head([1, 2, 3]), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.deepEqual(head(['5']), '5'); 
//   });
// });