№1
var arr = [];
var end = 1;
while (end < 100){
    end++;
    arr.push(end);
}
var a = 2;
var b = 2;
while (a <= 100){
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
a = 4;
b = 3;
while (a < 100){
    if (a % b ===0 && arr.indexOf(a) !== -1){
        arr.splice(arr.indexOf(a), 1);
    }else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);


№3
var i;
for ( i = 0; i <= 9; i++){
  console.log(i);
}

№4
for(var x = 0; x < 20; x++) {
  var str = "";
  for(var y = 0; y <= x; y++) {
    str += "x";
  }
  console.log(str);
}