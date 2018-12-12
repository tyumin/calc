'use strict';

for(var i=2; i<=100; i++){
  var prime = true;
  for(var j=2; j<i; j++){
    if(!(i % j)) prime = false
    }
    // alert("Сравним "+i+' '+j+'='+x);
  if(prime) alert(i);
}
