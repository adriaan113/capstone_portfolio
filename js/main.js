const thumbnail=document.querySelectorAll('.thumbnail');
const border= document.querySelectorAll('.thumbnail svg');
const borderPath = document.querySelectorAll('.thumbnail svg path');
const btnContainer= document.querySelectorAll('.btn-container');
const gridItem= document.querySelectorAll('.grid-item');


for(let i=0;i<gridItem.length;i++){

  border[i].style.display= 'none';

  gridItem[i].addEventListener('mouseover',()=>{
      border[i].style.display='block';
      const length= borderPath[i].getTotalLength();
      borderPath[i].style.strokeDasharray= length;
      borderPath[i].style.strokeDashoffset= length;

      btnContainer[i].style.display='flex';
  });


  gridItem[i].addEventListener('mouseout',()=>{
     border[i].style.display='none';
     btnContainer[i].style.display= 'none';

      //borderPath.style.animationDirection='reverse';
  });
}
