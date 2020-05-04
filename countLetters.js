const countLetters = function(inputString) {
  const results = {};

  for (let char of inputString) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;