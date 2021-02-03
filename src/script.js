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
// lesson05
let arr = ['123', '234', '345', '456', '12345', '2345', '4567'];
 for(let i=0; i<7; i++) {
   let str = arr[i];
   if(str[0] == '2' || str[0] == '4') {
     console.log(arr[i]);
   }
 }
// task-2
primeloop: for(let i = 1; i < 100; i++) {
  //let prime = true
     
  
  for(let j = 2; j < i; j++) {
    if (i % j == 0) {
      //i++;
      //prime = false
     // break
     continue primeloop
    }
  }
  /*
  if (!prime){
    continue
  }
  */
  console.log(i);
}


















