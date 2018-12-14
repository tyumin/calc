'use strict';

function g(a,b){
    return a+b;
}

alert(g);

function fib1(n) {
    //alert(n);
    if(n <= 2) return 1;
    return;
}

function fib(n){
    var prev = 0;
    var result = 1;
    for (var i = 1; i < n; i++) {
    // alert('prev - ' + prev + ' result - ' + result) ;
        var tmp = result;
        result = result + prev;
        prev = tmp;
    // alert('result - ' + result);
    }
    return result;
}

alert( fib(77) ); // (*)
alert( fib1(77) ); // (*)
