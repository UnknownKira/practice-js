"use strict";

// Exercise 6
// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке
// P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

// function ucFirst(str) {
//   return str = str.charAt(0).toUpperCase() + str.slice(1);
// }
// var str = prompt("enter text","");
// console.log(ucFirst(str));

// Exercise 7
// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//   var aim1 = "viagra", aim2 = "xxx";
//   if (str.toLowerCase().indexOf(aim1) != -1 || str.toLowerCase().indexOf(aim2) != -1) return true;
//   return false;
// }
// var str = prompt("enter text","");
// console.log(checkSpam(str));

// Exercise 8
// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом функции должна быть (при необходимости) усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
// truncate("Всем привет!", 20) = "Всем привет!"
// Эта функция имеет применение в жизни. Она используется, чтобы усекать слишком длинные темы сообщений.
// P.S. В кодировке Unicode существует специальный символ «троеточие»: … (HTML: &hellip;), но в этой задаче подразумеваются именно три точки подряд.

// function truncate(str, maxlength) {
//   if (str.length > maxlength)
//   str = str.substr(0, maxlength-3) + "...";
//   return str;
// }
// var str = prompt("enter text","");
// var maxlength = +prompt("enter maxlength","");
// console.log(truncate(str, maxlength));

// Exercise 9
// Выделить число
// Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// var str = prompt("enter cost","");
// console.log(extractCurrencyValue(str));
