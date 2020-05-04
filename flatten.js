const flatten = function(array) {
  const resultArr = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      resultArr.push(...flatten(item));
    } else {
      resultArr.push(item);
    }
  });
  return resultArr;
};



module.exports = flatten;