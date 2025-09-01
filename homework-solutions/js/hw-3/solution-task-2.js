const n = 5;
const nStr = n.toString(); //преобразуем число в строку
const nn = nStr + nStr;
const nnn = nStr + nStr + nStr; //по задаче у нас n + nn + nnn, где n не перемножаются, а конкатенируются
const nNum = Number(nStr);
const nnNum = Number(nn);
const nnnNum = Number(nnn);
const sum = nNum + nnNum + nnnNum;
console.log(sum);