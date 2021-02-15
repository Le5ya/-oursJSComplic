'use strict';
let color = document.querySelector('#color'),
    change = document.querySelector('#change');

  

let x = Math.random(0.16)
    console.log(x)
change.addEventListener('click', () => {
      const maxColor = 16777215 // 255 + 255*16 + 255*16**2; F = 15; FF = 255
      let randomColor = Math.floor(Math.random()*maxColor).toString(16).toUpperCase();
      while(randomColor.length < 6){
        randomColor = '0' + randomColor;
      }
      randomColor = '#'+randomColor; 
      document.body.style.background = randomColor;
      color.innerHTML = randomColor;
})