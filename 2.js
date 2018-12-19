'use strict';

function getMaxSubSum(array){
  var max = 0;
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] + sum > 0 ) {
      sum += array[i];
      if (max < sum) {
        max = sum;
      }
    }
  }
  return max;
}



alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([1, 2, 3]));
