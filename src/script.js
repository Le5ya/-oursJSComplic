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
lesson03
'use strict';

let incom = prompt('Ваш месячный доход?');
console.log(incom);

let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов', 'foods');
console.log(expenses1)
let amount1 = prompt('Во сколько это обойдётся?');
console.log(amount1);
let expenses2 = prompt('Введите обязательную статью расходов');
console.log(expenses2)
let amount2 = prompt('Во сколько это обойдётся?');
console.log(amount2);

let budgetMonth = incom - amount1 - amount2;
console.log(budgetMonth);

let mission = prompt('Цель:', 99999.5);
console.log("Цель заработать" +" " + mission + " " + "рублей");
let period = Math.ceil(mission / budgetMonth );
console.log("Период равен"+" " + period +" " + "месяцев");

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if (budgetDay > 1200) {
  alert("У вас высокий уровень дохода");
} else {
 if (budgetDay > 600 && budgetDay <= 1200) {
   alert("У вас средний уровень дохода");
 } else {
  if (budgetDay >= 0 && budgetDay < 600) {
   alert("К сожалению у вас уровень дохода ниже среднего");
 } else {
   if (budgetDay < 0) {
  alert("Что то пошло не так");
}
 }
 } 
} 
















budgetDay