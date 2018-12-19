'use strict';

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
