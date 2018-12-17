"use strict";

// Exercise 14
// Получить последний элемент массива
// Как получить последний элемент из произвольного массива?
// У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
// Напишите код для получения последнего элемента goods.

// var goods = ["goods1","goods2","goods3"];
// console.log(goods[goods.length-1]);

// Exercise 15
// Добавить новый элемент в массив
// Как добавить элемент в конец произвольного массива?
// У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».

// var goods = ["Ноутбук","Телефон","Планшет"];
// goods.push("Компьютер");
// console.log(goods);

// Exercise 16
// Создание массива
// Задача из 5 шагов-строк:
// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».
// Массив в результате каждого шага:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-Ролл
// Джаз, Классика, Рок-н-Ролл
// Классика, Рок-н-Ролл
// Рэп, Регги, Классика, Рок-н-Ролл

// var styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-Ролл");
// console.log(styles);
// styles[styles.length-2] = "Классика";
// console.log(styles);
// alert(styles.shift());
// console.log(styles);
// styles.unshift("Рэп","Регги");
// console.log(styles);

// Exercise 17
// Получить случайное значение из массива
// Напишите код для вывода alert случайного значения из массива:
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// P.S. Код для генерации случайного целого от min to max включительно:
// var rand = min + Math.floor(Math.random() * (max + 1 - min));

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = Math.floor(Math.random() * arr.length);
// console.log(arr[rand]);

// Exercise 18
// Создайте калькулятор для введённых значений
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

// var arr = [], i=0, max = 0;
// while (true) {
//   arr[i] = prompt("enter nubmer","");
//   if (arr[i] === "" || isNaN(arr[i]) || arr[i] === null) break;
//   arr[i] = +arr[i];
//   i++;
// }
// arr.length = arr.length-1;
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   max += arr[i];
// }
// console.log(max);

// Exercise 19
// Поиск в массиве
// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
// Например:
// arr = ["test", 2, 1.5, false];
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, 0); // -1

// function find(arr, value) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// }
// var arr = ["test", 2, 1.5, false];
// console.log(find(arr, "test")); // 0
// console.log(find(arr, 2)); // 1
// console.log(find(arr, 1.5)); // 2
// console.log(find(arr, 0)); // -1

// Exercise 20
// Фильтр диапазона
// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
// Пример работы:
// var arr = [5, 4, 3, 8, 0];
// var filtered = filterRange(arr, 3, 5);
// // теперь filtered = [5, 4, 3]
// // arr не изменился

// function filterRange(arr, a, b) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (a <= arr[i] && arr[i] <= b)
//       newArr.push(arr[i]);
//   }
//   return newArr;
// }
// var arr = [5, 4, 3, 8, 0];
// console.log(filterRange(arr, 3, 5));

// Exercise 21
// Решето Эратосфена
// Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.
// Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:
// Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
// Пусть p=2, это первое простое число.
// Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
// Поменять значение p на первое не зачеркнутое число после p.
// Повторить шаги 3-4 пока p2 < n.
// Все оставшиеся не зачеркнутыми числа – простые.
// Посмотрите также анимацию алгоритма.
// Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
// Найдите все простые числа до 100 и выведите их сумму.

// var n = +prompt("enter number","");
// var arr = new Array(n+1);
// var primal = [];
// var p = 2, max = 0;
// while ((p*p) < n){
//   for (var i = 2; i < arr.length; i++) {
//     if ((i*p) < arr.length)
//     arr[i*p] = null;
//   }
//   for (var j = 2; j < arr.length; j++) {
//     if(arr[j] !== null && j > p){
//       p = j;
//       break;
//     }
//   }
// }
// for (i = 2; i < arr.length; i++) {
//   if(arr[i] !== null)
//   primal.push(i);
// }
// for (var i = 0; i < primal.length; i++) {
//   max += primal[i];
// }
// console.log(primal);
// console.log(max);

// Exercise 22
// Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
// Ваша функция должна возвращать только эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)
// Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:
// getMaxSubSum([-1, -2, -3]) = 0
// Постарайтесь придумать решение, которое работает за O(n2), а лучше за O(n) операций.

// function getMaxSubSum(arr) {
//   var maxMid = 0, maxFin = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0)
//       maxMid += arr[i];
//     if (arr[i] < 0){
//       maxMid += arr[i];
//       if (maxMid < 0) {
//         maxMid = 0;
//       }
//     }
//     if (maxMid > maxFin) {
//       maxFin = maxMid;
//     }
//   }
//   return maxFin;
// }
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));

// Exercise 23
// Добавить класс в строку
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
// var obj = {
//   className: 'open menu'
// }
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// alert( obj.className ); // "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.

// function addClass(obj, cls) {
//   var arr = [];
//   if (obj.className){
//     arr = obj.className.split(" ");
//   }
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === cls) {
//       return;
//     }
//   }
//   arr.push(cls);
//   obj.className = arr.join(" ");
// }
// var obj = {
//   className: '' //open menu
// }
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// console.log(obj.className);

// Exercise 24
// Перевести текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.
// Например:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// Такая функция полезна при работе с CSS.
// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

// function camelize(str) {
//   var arr = str.split("-");
//   for (var i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return str = arr.join("");
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// Exercise 24
// Функция removeClass
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
// var obj = {
//   className: 'open menu'
// };
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
// obj = {
//   className: 'my menu menu'
// };
// removeClass(obj, 'menu');
// alert( obj.className ); // 'my'
// Лишних пробелов после функции образовываться не должно.

// function removeClass(obj, cls) {
//   var arr = obj.className.split(" ");
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === cls) {
//       arr.splice(i,1);
//       i--;
//     }
//   }
//   return obj.className = arr.join(" ");
// }
// var obj = {
//   className: 'open menu menu'
// };
// removeClass(obj, 'menu');
// console.log(obj.className);

// Exercise 25
// Фильтрация массива "на месте"
// Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.
// Например:
// arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // массив изменился: остались [3, 1]

// function filterRangeInPlace(arr, a, b) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i,1);
//       i--;
//     }
//   }
// }
// var arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// Exercise 26
// Сортировать в обратном порядке
// Как отсортировать массив чисел в обратном порядке?
// var arr = [5, 2, 1, -10, 8];
// // отсортируйте?
// alert( arr ); // 8, 5, 2, 1, -10

// var arr = [5, 2, 1, -10, 8];
// arr.sort(function (a,b) {
//   return b-a;
// });
// console.log(arr);

// Exercise 27
// Скопировать и отсортировать массив
// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.
// var arr = ["HTML", "JavaScript", "CSS"];
// // ... ваш код ...
// alert( arrSorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
// Постарайтесь сделать код как можно короче.

// var arr = ["HTML", "JavaScript", "CSS"], arrSorted;
// arrSorted = arr.concat().sort();
// console.log(arrSorted);

// Exercise 28
// Случайный порядок в массиве
// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
// var arr = [1, 2, 3, 4, 5];
// arr.sort(ваша функция);
// alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

// var arr = [1, 2, 3, 4, 5];
// arr.sort(function (a,b) {
//   return Math.random(a)-Math.random(b);
// });
// console.log(arr);

// Exercise 29
// Сортировка объектов
// Напишите код, который отсортирует массив объектов people по полю age.
// Например:
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };
// var people = [ vasya , masha , vovochka ];
// ... ваш код ...
// // теперь people: [vovochka, masha, vasya]
// alert(people[0].age) // 6
// Выведите список имён в массиве после сортировки.

// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };
// var people = [ vasya , masha , vovochka ];
// people.sort(function (person1, person2) {
//   return person1.age - person2.age;
// })
// console.log(people);
