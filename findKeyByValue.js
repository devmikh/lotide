const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (obj[key] === val){
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const person = {
//   fname: "Mikhail",
//   lname: "Serebriakov",
//   age: 22,
//   country: "Canada"
// }

// assertEqual(findKeyByValue(person, 22), "age");