const forOf = [];
const arr = [1,2,3,4,5,6,7,8,9,10];
for (const num of arr){
    if (num % 2 === 0){
        forOf.push(num ** 2);
    }
        else {
            forOf.push(num ** 3);}
}
console.log(forOf);

let result = [1, 2, 3, 4, 5];
result.push(6);
result.unshift(0);
result.splice(2, 1);
result.pop();
console.log(result);

const arr1 = [3, 11, 32, 7, 20];
const [first, second, ...rest] = arr1;
console.log(first);
console.log(second);
console.log(rest);

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [6, 7, 8, 9, 10];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);