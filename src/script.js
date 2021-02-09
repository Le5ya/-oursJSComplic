let container = document.querySelector('.container');
let dateFirst = document.querySelector('.date_first');
let dateSecond = document.querySelector('.date_second');

container.style.marginLeft = '400px';
container.style.marginTop = '250px';
container.style.width = '490px'
container.style.fontSize = '36px';
container.style.color = 'tomato';

let x = new Date;
let month = x.getMonth();
let monthes = ['янвaря', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


let hourses = ["час", "часа", "часов"];
let hours;
ddd = function(val){
   val = x.getHours();
if(x.val ===1) {
  hours = hourses[0];
}else if( x.val < 5) {
  hours = hourses[1];
} else {
  hours = hourses[2];
}
}

let minutes = ["минута", "минуты", "минут"];
let minute;
if(x.getMinutes() ===1) {
  minute = minutes[0];
}else if( x.getMinutes() < 5) {
  minute = minutes[1];
} else {
  minute = minutes[2];
  
}
let seconds = ["секунда", "секунды", "секунд"]
let second;

if(x.getSeconds() ===1) {
  second = seconds[0];
}else {
  if( x.getSeconds() < 5){
   second = seconds[1]; 
  }else {
    second = seconds[2];
  }
} 
  




let string = "Сегодня " + x.getDate() + " " +  monthes[month] +" "+ x.getFullYear() +" года, "+ x.getHours() +" " + hours +' ' + x.getMinutes() +" " + minute +  " " + x.getSeconds() + " " + second; 

dateFirst.innerHTML = string;

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let y = new Date();
let string1 = addZero(y.getDate()) +'.'+addZero(y.getMonth()) +'.'+addZero(y.getFullYear()) + ' '+'-'+ addZero(y.getHours())+':'+ addZero(y.getMinutes())+':'+addZero(y.getSeconds());

dateSecond.innerHTML = string1; 





let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let i = 0;
  let date = new Date();
let weekDay = function() {
   if (date.getDay() == (i + 1) % 7){
      console.log("%c" + week[i], 'font-weight: bold');
   } else if(i>= 5){
     console.log("%c" + week[i], 'font-style: italic');  
   }else {
     console.log(week[i]);
   }
   i++;
  if(i <= 6){
    weekDay();
  }

}
weekDay();
  
// function foo(i) {
//   if (i < 0)
//     return;
//   console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end: ' + i);
// }
// foo(3);

/*
let boldGraf = function(){
  console.log('%c Oh my heavens! ', 'font-weight: bold');

}


console.log(boldGraf());
*/
// let num = 266219;
// console.log(num);
// let str = num.toString();
// let array = str.split('');
// console.log(array);
// let mult = 1;
// for(elem of array) {
//   mult = mult *= Number(elem); 
// }
// console.log(mult);
// let powNum = 1;
// for(i=1; i<=3; i++) {
//   powNum *= mult;
// }

// console.log(powNum);
// console.log(powNum.toString()[0]);
// console.log(powNum.toString()[1]);
// // lesson03-1
// // a.

//  let langEntr = prompt('Enter lang');

//  if (langEntr == 'ru') {
//     alert ('пн, вт, ср, чт, пт, сб, вс');
//  } else {
//   if(langEntr == 'en') {
//     alert ('mn,ts,wd, th, fr, st, sn');
//    }
 
//  }
// // b.
// let lang = 'ru';
// // let lang = 'en';
// switch(lang){
//   case('ru'):
//   console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
//   break;
//   case('en'):
//   console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
//   break;

// }
// // c.
// let langRu =['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let langEn =['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// let langs = [langRu, langEn];
// console.log(langs[0]);
// console.log(langs[1]);

// // lesson03-2

//  let namePerson = 'Артем';
// // let namePerson = 'Максим';
// // let namePerson = 'Fox';
// (namePerson == 'Артем') ? console.log("директор") : (namePerson == 'Максим')  
// ? console.log("преподаватель") : console.log("студент");

// // lesson04
// function getString(str) {
//   str = prompt('write a string');
//   str = str.trim();
//   if(str.length > 30) {
//     str = str.slice(0, 30)+'...';
//     console.log(str);

//   }
  
// }
// getString(str);
// function makeCounter() {
//   var currentCount = 0;

//   return function() {
//    currentCount++;
//    return currentCount;
//   };
// }
// console.log(makeCounter()) ;
// var counter = makeCounter();
// console.log(counter()) ;
// console.log(counter()) ;
// console.log(counter()); // 3
// lesson05
// let arr = ['123', '234', '345', '456', '12345', '2345', '4567'];
//  for(let i=0; i<7; i++) {
//    let str = arr[i];
//    if(str[0] == '2' || str[0] == '4') {
//      console.log(arr[i]);
//    }
//  }
// // task-2
// primeloop: for(let i = 1; i < 100; i++) {
  //let prime = true
     
  
//   for(let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       i++;
//       prime = false
//       break
//      continue primeloop
//     }
//   }
  
//   if (!prime){
//     continue
//   }
  
//   console.log(i);
// }
// lesson6
