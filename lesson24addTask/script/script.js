const number = document.getElementById('number');
let count = 0; 
  
   const counter = () =>{
      count++;
      number.textContent = count;
   }

    let timerID = setInterval(counter , 7);
    setTimeout(() => {
      clearInterval(timerID);
    }, 2100);

    