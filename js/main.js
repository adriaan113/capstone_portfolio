const thumbnail=document.querySelectorAll('.thumbnail');
const border= document.querySelectorAll('.thumbnail svg');
const borderPath = document.querySelectorAll('.thumbnail svg path');



for(let i=0;i<thumbnail.length;i++){

  border[i].style.display= 'none';

  thumbnail[i].addEventListener('mouseover',()=>{
      border[i].style.display='block';
      const length= borderPath[i].getTotalLength();
      borderPath[i].style.strokeDasharray= length;
      borderPath[i].style.strokeDashoffset= length;
  });

  thumbnail[i].addEventListener('mouseout',()=>{
     border[i].style.display='none';

      //borderPath.style.animationDirection='reverse';
  });


}
