"use strict";

// Exercise 10
// Определите, пуст ли объект
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
// Работать должно так:
// function isEmpty(obj) {
//   /* ваш код */
// }
// var schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "подъём";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//   for (var key in obj) {
//     if (key in obj) return false;
//   }
//   return true;
// }
// var schedule = {};
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "подъём";
// console.log( isEmpty(schedule) ); // false

// Exercise 11
// Сумма свойств
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// Например:
// "use strict";
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// //... ваш код выведет 650
// P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.

// var summary = 0, salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// for (var variable in salaries) {
//   summary += salaries[variable];
// }
// console.log(summary);

// Exercise 12
// Свойство с наибольшим значением
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
// Например:
// "use strict";
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// // ... ваш код выведет "Петя"

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// var biggestSalaries = 0, name = "";
// for (var key in salaries) {
//   if (salaries[key] > biggestSalaries) {
//     biggestSalaries = salaries[key];
//     name = key;
//   }
// }
// if (biggestSalaries === 0) {
//   name = "нет сотрудников";
// }
// console.log(name);

// Exercise 13
// Умножьте численные свойства на 2
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
// // до вызова
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// // после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// P.S. Для проверки на число используйте функцию:
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }
// function multiplyNumeric(obj) {
//   for (var key in obj) {
//     if (isNumeric(obj[key])) obj[key] *= 2;
//   }
// }
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// console.log(menu);
