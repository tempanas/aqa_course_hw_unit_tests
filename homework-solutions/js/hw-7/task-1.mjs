/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
// Ваш код
function devideBy(sentence) {
  const words = sentence.split(' ');
  const res = words.map((word, i) => {
    if (i === 0) {
      return word[0].toLowerCase() + word.slice(1);
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  return res.join('_');
}
console.log(devideBy('I am super engineer'));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 0) return 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let previous = 0;
  let current = 1;
  for (let i = 2; i <= n;i++){let next = previous + current;
    previous = current;
    current = next;
  } return current;
}
console.log(fibonacci(8));
export { mergeArrays, fibonacci, devideBy };
