function duckCount() {
  return Array.prototype.slice.call(arguments, 0).reduce(function(count, item) {
    if (Object.prototype.hasOwnProperty.call(item, 'quack')) count++;
    return count;
  }, 0);
}

module.exports = duckCount;