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

// №4
let a = +prompt ('Введите число от 1 до 15');
switch (a) {
	case 1:
        console.log(a++);
	case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
}

// №5
var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}

// №6
function mathOperation(arg1, arg2, operation){
    switch(operation){
       	case 'сложение':
            return plus(arg1, arg2);
       	case 'вычитание':
            return minus(arg1, arg2);
        case 'деление':
            return div(arg1, arg2);
       	case 'умножение':
            return mult(arg1, arg2);
   	}
}

// №8
function power(a, b) {
	if (a == 0)
		return 0;
	else if (b == 0)
		return 1;
	else if (a < 0)
        return power(1/b, -a);
	else
        return (b *  power(b, a-1));
}
