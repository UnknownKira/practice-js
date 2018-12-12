"use strict";

// Exercise 1
// Интерфейс суммы
// Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

// var n1,n2;
// n1 = +prompt("enter number 1","");
// n2 = +prompt("enter number 2","");
// console.log("sum", n1 + n2);

// Exercise 2
// Формула Бине
// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//
// Код для их вычисления (из задачи Числа Фибоначчи):
//
// function fib(n) {
//   var a = 1,
//     b = 0,
//     x;
//   for (i = 0; i < n; i++) {
//     x = a + b;
//     a = b
//     b = x;
//   }
//   return b;
// }
// Существует формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение.
//
// Напишите функцию fibBinet(n), которая будет вычислять Fn, используя эту формулу. Проверьте её для значения F77 (должно получиться fibBinet(77) = 5527939700884757).
//
// Одинаковы ли результаты, полученные при помощи кода fib(n) выше и по формуле Бине? Если нет, то почему и какой из них верный?

// function finBinet(n){
//   return Math.pow((1+Math.sqrt(5))/2,n)/Math.sqrt(5);
// }
// var result;
// result = finBinet(+prompt("enter number",""));
// console.log(result);

// Exercise 3
// Случайное из интервала (0, max)
// Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.

// var max = +prompt("enter number","");
// console.log(Math.random()*max);

// Exercise 4
// Случайное из интервала (min, max)
// Напишите код для генерации случайного числа от min до max, не включая max

// var min = +prompt("enter min","");
// var max = +prompt("enter max","");
// console.log(Math.random()*(max-min)+min);

// Exercise 5
// Случайное целое от min до max
// Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.
// Любое число из интервала min..max должно иметь одинаковую вероятность.

// function randomInteger(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }
// var min = +prompt("enter min","");
// var max = +prompt("enter max","");
// console.log(randomInteger(min, max));
