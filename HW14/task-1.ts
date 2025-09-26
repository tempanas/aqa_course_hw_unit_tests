//Дженерик-функция wrapInArray
function wrapInArray<T>(value: T): T[] {
    return [value];
}
const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray('Hello'); // ['Hello']
console.log(numberArray); // [5]
console.log(stringArray); // ['Hello']

//Дженерик-функция getLastElement
function getLastItem<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}
console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'

//Дженерик-интерфейс IPair
interface IPair<T, U> {
    first: T;
    second: U;
}
//Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.
function describePair<T, U>(pair: IPair<T, U>): string {
    return `${pair.first} and ${pair.second}`;
}
console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"