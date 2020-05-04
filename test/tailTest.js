const assertEqual = require('../assertEqual');
const tail = require('../tail');

const testArr = ["Hello", "Lighthouse", "Labs"];
const result = tail(testArr);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// make sure that the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);