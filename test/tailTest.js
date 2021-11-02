const assertEqual = require('../assertEqual');

const words = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(words.length, 3); 
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");