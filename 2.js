'use strict';

var obj = {
  className: 'open menu'
};

// removeClass(obj, 'menu'); // obj.className='menu'
removeClass(obj, 'open'); // без изменений (нет такого класса)


function removeClass(obj, cls){
  var classes = obj.className.split(' ');
  while (~classes.indexOf(cls)) {
    classes.splice(classes.indexOf(cls), 1);
  }
  obj.className = classes.join(' ');
  alert(obj.className);
}
