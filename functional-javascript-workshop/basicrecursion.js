function reduce(arr, fn, initial) {
  if (!arr.length) return initial;
  return reduce(arr.slice(1), fn, fn(initial, arr[0]));
}

module.exports = reduce;

/*
solution that allows index to be passed:

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
}

*/