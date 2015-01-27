function countWords(inputWords) {
  return inputWords.reduce(function(storage, item){
    if (storage[item]) storage[item]++;
    else storage[item] = 1;
    return storage;
  }, {});
}

module.exports = countWords;