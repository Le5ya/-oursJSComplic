let num = 266219;
console.log(num);
let str = num.toString();
let arr = str.split('');
console.log(arr);
let mult = 1;
for(elem of arr) {
  mult = mult *= Number(elem); 
}
console.log(mult);
let powNum = 1;
for(i=1; i<=3; i++) {
  powNum *= mult;
}

console.log(powNum);
console.log(powNum.toString()[0]);
console.log(powNum.toString()[1]);