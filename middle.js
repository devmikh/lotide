const middle = function(array) {
  let midPart = [];
  if (array.length <= 2){
    return midPart;
  } else if (array.length % 2 !== 0) {
    midPart.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    midPart.push(array[array.length / 2 - 1]);
    midPart.push(array[array.length / 2]);
  }
  return midPart;
}

module.exports = middle;