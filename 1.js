'use strict';

main: for(var i=2; i<=100; i++){
  for(var j=2; j<i; j++){
    if(!(i % j)) continue main;
    }
  alert(i);
}
