const logo= document.querySelector('svg');
const test=document.querySelector('.test');

test.style.fill= 'black';

logo.addEventListener('click', ()=>{

if(test.style.fill === 'black'){
  test.style.fill= 'yellow';
}else if(test.style.fill === 'yellow'){
  test.style.fill= 'black';
}

});
