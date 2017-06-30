var count__number = document.getElementById('count__number');
var count__numberValue = count__number.getAttribute('data-number');
var count__less = document.getElementById('count__less');
var count__more = document.getElementById('count__more');

count__less.onclick = function() {
  if(!count__numberValue) {
    return false;
  } else {
    count__numberValue--;
    count__number.innerHTML = count__numberValue;
  }
};
count__more.onclick = function() {
  if(count__numberValue > 99) {
    return false;
  } else {
    count__numberValue++;
    count__number.innerHTML = count__numberValue;
  }
};
