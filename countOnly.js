const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    console.log(item);
  }
  for (let j = 0; j < allItems.length; j++) {
    if (!(allItems[j] in results )){
      results[allItems[j]] = 0;
    }
    results[allItems[j]] += 1;
  }
  console.log(results);
  return results;
  if (itemsToCount[item]) { 
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;