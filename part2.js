// let a = {
//   dd: "name ",
//   f: "fun",
//   [1]: "jkl",
// };

// console.log(a);

//Найдите гипотенузу k по теореме Пифагора
// let n = 3 ** 2;
// let m = 4 ** 2;
// let k = n + m;
// k = k ** (1 / 2);

// console.log(k);

//Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

// let m = 45;
// let n;

// if (m >= 45) {
//   n = "большое";
//   console.log(n);
// } else {
//   console.log("smal");
// }

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

// let i = 45;
// while (i < 68) {
//   console.log(i++);
// }

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.

// let i = 45;
// while (i++ < 670) {
//   i % 10 || console.log(i);
// }

//Напишите скрипт, который используя оператор for выполнит два предыдущих задания.

// for (let i = 45; i <= 67; i++) {
//   console.log(i);
// }

// for (let i = 45; i <= 670; i++) {
//   i % 10 || console.log(i);
// }

// let n = 9;
// switch (n) {
//   case 0:
//     alert("Ноль");
//   case 1:
//     alert("Один");
//     break;
//   case 2:
//     alert("Два");
//     break;
//   case 3:
//     alert("три");
//     break;
//   case 4:
//     alert("Четыре");
//     break;
//   case 5:
//     alert("Пять");
//     break;
//   case 6:
//     alert("Шесть");
//     break;
//   case 7:
//     alert("Семь");
//     break;
//   case 8:
//     alert("Восемь");
//     break;
//   case 9:
//     alert("Девять");
//     break;

//   default:
//     alert("Нет такого числа");
// }

// Используя document.write() и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить <img src="..." alt="..." />)

// for (let i = 0; i < 10; i++) {
//   document.write('<img src="..." alt="..." />');
//   console.log(i);
// }

// Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».

// function hello1() {
//   console.log("Привет, JavaScript!");
// }
// hello1();

// Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»

// function hello2(name) {
//   if (name === undefined) {
//     name = "гость!";
//   }
//   console.log("Привет " + name);
// }
// hello2("Василий");

// Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.

// function mul(n, m) {
//   const numb = (n + m) * n;
//   console.log(numb);
//   return numb;
// }

// mul(7, 55);

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка

// function repeat(str = "", n = 2) {
//   return str.repeat(n);
// }

// console.log(repeat());

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

// function color(r = 0, g = 0, b = 0) {
//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// console.log(color(55, 779, 355));

// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).

// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).

// function avg(arry) {
//   let summa = 0;
//   for (let i = 0; i < arry.length; i++) {
//     summa += arry[i];
//   }
//   if (arry.length === 0) return 0;
//   return summa / arry.length;
// }

// let num = [787, 75, 3, 1, 55, 9532];
// console.log(avg(num));

// Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.

// function m(a, b) {
//   return mul(a, b);
// }

// function mul(a, b) {
//   return a * b;
// }

// console.log(m(39, 9));

// Не доделал! Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов

// const city1 = {
//   name: "New York",
//   population: 10000000,
// };

// const city2 = {
//   name: "New York",
//   population: 1e6,
// };
