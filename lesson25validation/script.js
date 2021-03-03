const myForm = document.getElementById('myform');
// const phone = document.getElementById('phone');

myForm.addEventListener('submit', valid);

const elementsForm = [];

for(const elem of myForm.elements){
  if(elem.tagName.toLowerCase() !== 'button' &&
  elem.type !== 'button'){
    elementsForm.push(elem);
  }
}

console.log(elementsForm);

// const showLog = function(){
//   this.value = this.value.replace(/\D/g, '');
// };
// phone.addEventListener('keydown', showLog);
// phone.addEventListener('keyup', showLog);
// phone.addEventListener('keypress', showLog);
//  phone.addEventListener('input', showLog);
function valid(event){
  const patternPhone = /^\d+$/
  elementsForm.forEach(elem => {
    if(!elem.value){
      elem.style.border = 'solid red';
      event.preventDefault();
    } else {
      elem.style.border = "";
    }
    if(elem.id === 'phone' && patternPhone.test(elem.value)){
      elem.style.border = 'solid red';
      event.preventDefault();
    }
  })
}
