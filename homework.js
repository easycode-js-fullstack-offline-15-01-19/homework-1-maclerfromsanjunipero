// -------------------------- Home work --------------------------
// -------------------------- Василенко Максим Александрович --------------------------

//--- Задачи.Строки ---
//--- Задача 1 ---

let value;
let string = 'some test string';

value = string[0] + string[string.length-1];

//--- Задача 2 ---

value = value.toUpperCase();

//--- Задача 3 ---

value = string.indexOf('string');

//--- Задача 4 ---

let firstSpaceIndex = string.indexOf(' ');
value = string.indexOf(' ', firstSpaceIndex + 1);

//--- Задача 5 ---

value = string.substr(4,  4);

//--- Задача 6 ---

value = string.substring(4, 9);

//--- Задача 7 ---

value = string.slice(0, -6);

//--- Задача 8 ---

let a = 20,
    b = 16;

string = String(a) + String(b);

value = string;



//--- Задачи.Числа ---
//--- Задача 1 ---

value =(Math.PI).toFixed(2);

//--- Задача 2 ---

value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

//--- Задача 3 ---

value =(Math.random()).toFixed(2);

value = Math.round(Math.random() *15);

//--- Задача 4 ---

value = ((0.6 * 10  + 0.7 * 10) / 10);

//--- Задача 5 ---

value = parseInt('100$');



//--- Задачи.Объекты ---
//--- Задача 1 ---

let obj = {
    product: 'iphone'
};

//--- Задача 2 ---

obj.price = 1000;
obj.currency = 'dollar';

//--- Задача 3 ---

obj.details = {
    model: 'XsMax',
    color: 'Red'
};

value = obj;

console.log(value);

