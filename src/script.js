
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
  


/*
let boldGraf = function(){
  console.log('%c Oh my heavens! ', 'font-weight: bold');

}


console.log(boldGraf());
*/

