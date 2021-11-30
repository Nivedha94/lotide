// const assertEqual = require('../assertEqual');
// const tail   = require('../tail');

// const words = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(words.length, 3); 
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});