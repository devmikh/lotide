const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // check if number of keys in each object is the same 
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      // check if value of each key in both objects is an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // compare arrays
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      // check if value of each key in both objects is an object itself
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && object1[key] !== null && object2[key] !== null) {
        return eqObjects(object1[key], object2[key]);
      // if it's neither array nor object, just compare the values
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  // return true if every if statement passed
  return true;
};

module.exports = eqObjects;