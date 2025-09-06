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

let arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.unshift(0);
arr1.splice(2, 1);
arr1.pop();
console.log(arr1);