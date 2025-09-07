/*1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch*/

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log('2 seconds passes'));

const promise1 = new Promise((resolve) => resolve(1));
promise1.then((result) => console.log('Promise resolved:', result));

const promise2 = new Promise((_, reject) => reject('Promise failed'));
promise2.catch((error) => console.log('Promise rejected:', error));

function promiseNumber(num) {
  return new Promise((resolve) => resolve(num));
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, idx) => {
    console.log(`Promise ${idx + 1} resolved with:`, result);
  });
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, idx) => {
    console.log(`Promise ${idx + 1} status:`, result.status, 'value', result.value);
  });
});

async function runPromiseAllSettled() {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result, idx) => {
      console.log(`(async) Promise ${idx + 1} status:`, result.status, 'value:', result.value);
    });
  } catch (error) {
    console.log('(async) Promise.allSettled error:', error);
  }
}
runPromiseAllSettled();
