
exports.min = function min (array) {
  if (!array.isArray || array.length == 0 ) return 0;
  let min = 1;
  array.forEach(element => {
    if(element < min){
      min = element;
    }
  });
  return min;
}

exports.max = function max (array) {
  if (!array.isArray || array.lenfth == 0) return 0;
  let max = 1;
  array.forEach(element => {
    if(element > max){
      max = el;
    }
  });
  return max;
}

exports.avg = function avg (array) {
  if (!array.isArray || array.length == 0) return 0;
  let avg = 0;
  array.forEach(element => {
    avg += element;
  });
  return avg / array.length;
}