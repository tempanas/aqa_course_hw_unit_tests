function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

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
console.log(devideBy('Hello world and JS'));

function fibonacci(n) {
  if (n < 0) return undefined;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

console.log(fibonacci(8));
