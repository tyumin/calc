'use strict';

function camelize(str){
  var arr = str.split('-');
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}

function addClass(obj, newClassName){
  var classes = obj.className.split(' ');
//  alert(~(obj.className.indexOf(newClassName)));
  // alert(classes.indexOf(newClassName));
  if (!~(classes.indexOf(newClassName))) {
    classes.push(newClassName);
  }
  obj.className = classes.join(' ');
}

function getMaxSubSum(array){
  var max = 0;
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

function sieve(n){
  var p = 2;
  var list = new Array(n-2);
  var sum = 0;

  for (var i = 2; i < list.length; i++) {
    list[i] = i;
  }
  while(p*p < n){
    for (var k = 2; k <= list.length; k++) {
      delete list[p*k];
    }
    for (var j = 2; j < list.length; j++) {
      if (list[j] > p){
        p = list[j];
        break;
      }
    }
  }
  for (var i = 0; i < list.length; i++) {
    if (list[i] !== undefined) sum += list[i];
  }
  return sum;
}

function multiplyNumeric(obj){
  for(var key in obj){
    if(isNumeric(obj[key])){
      obj[key] *= 2;
    }
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isEmpty(obj){
  for(var key in obj){
    return false;
  }
  return true;
}

function ucFirst(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkSpam(str){
  var spam1 = 'viagra';
  var spam2 = 'xxx';
  if (~str.toLowerCase().indexOf(spam1) || ~str.toLowerCase().indexOf(spam2)){
    return true;
  }
  return false;
}

function truncate(str, maxlength){
  if(str.length > maxlength){
    return str.slice(0,maxlength-3) + '...';
  }
  return str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}

// alert(checkSpam(''));

//var str = prompt('str?','');
// alert(ucFirst(str));
