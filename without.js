const without = function(source, itemsToRemove) {
  let resultArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      resultArr.push(source[i]);
    }
  }
  return resultArr;
};

module.exports = without;