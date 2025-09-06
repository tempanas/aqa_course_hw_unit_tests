let evenNumbersResult = ''; // Результирующая строка

for (let i = 10; i >= 0; i -= 2) {
    evenNumbersResult += i;
    if (i > 0) {
        evenNumbersResult += '-';
    }
}
console.log(evenNumbersResult);

//решение с делением на 2
let evenNumbersResult1 = '';          

for (let i = 10; i >= 0; i--) {
    if (i % 2 === 0) {
        evenNumbersResult1 += i;
        if (i > 0) {evenNumbersResult1 += '-';
        }
    }
}
console.log(evenNumbersResult); 

let smilePatternResult = '';

for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++){
         smilePatternResult += ':)'; 
    }
    smilePatternResult += '\n';
}
console.log(smilePatternResult);

const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = text.replaceAll(' ', '1');
console.log(replaceSpacesWithOneResult);