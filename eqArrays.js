const eqArrays = function(arr1, arr2) {
  // check if length of each array is the same
  if (arr1.length === arr2.length) {
    // loop through each element in the array 1 and compare to each element in the array 2
    for (let i = 0; i < arr1.length; i++) {
      // if both elements are arrays, compare them
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      // if both elements are values, compare them
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


module.exports = eqArrays;