let item_1 = 5; //создаем переменную item_1 и присваиваем ей число
console.log(item_1); //выводим переменную в консоль

let item_2 = 3; //создаем переменную item_2 и присваиваем ей число
console.log(item_2); //выводим переменную в консоль

let item_3 = item_1 + item_2; //создаем переменную item_3 и присваиваем ей сумму item_1 и item_2
console.log(item_3);

let item_4 = "Hello World"; //создаем переменную item_4 и присваиваем ей строку
console.log(item_4); //выводим переменную в консоль

console.log('item_3 + item_4:', item_3 + item_4); // склеивает строку item_4 и число item_3
console.log('item_3 * item_4:', item_3 * item_4); // перемножаем строку item_4 и число item_3, результатом должно быть NaN, тк строку невозможно умножить на число

let item_5 = item_3; //присваиваем переменной item_5 переменную item_3

let item_6 = 15; //присваиваем переменной item_6 значение 15
let item_6_type = typeof item_6;  //создаем item_6_type и присваиваем переменной item_6_type тип переменной item_6
console.log('item_6', item_6, 'item_6_type', item_6_type);

let item_7 = String(item_6); //создаем переменную item_7 и в ней преобразуем тип item_6 из number в String.
let item_7_type = typeof item_7; //создаем item_7_type и присваиваем переменной item_6_type тип переменной item_7
console.log('item_7', item_7, 'item_7_type', item_7_type);
