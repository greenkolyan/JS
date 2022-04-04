// №1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 c = 1 + 1
d = b++; alert(d);           // 1 увеличит b на 1, но вернет старое значение
c = (2+ ++a); alert(c);      // 5 c = 2 + 2 + 1
d = (2+ b++); alert(d);      // 4 d = 2 + старое значение b
alert(a);                    // 3 a = 3
alert(b);                    // 3 b = 3

// №2
var a = 2;
var x = 1 + (a *= 2);        // x = 1 + (2 * 2) = 5

// №3
let a = +prompt('Введите первое число: ');
let b = +prompt('Введите первое число: ');
let c;

if (a > 0 && b > 0){
    c = a - b;
    alert(c);
}
else if (a < 0 && b < 0){
    c = a * b;
	alert (c);
}
else {
	x = a + b;
    alert (x);
}

