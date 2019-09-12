
//BORDER ANIMATED SVG EFFECT
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

      btnContainer[i].style.display='block';
  });

  gridItem[i].addEventListener('mouseout',()=>{
     border[i].style.display='none';
     btnContainer[i].style.display= 'none';
  });
}

//FORM SEND BUTTON 'FUNCTIONALITY'
const sendBtn= document.querySelector('.form-btn');
const contactContainer= document.querySelector('.contact-container');
const btnFormContainer= document.querySelector('.btn-form-container');

sendBtn.addEventListener('click',()=>{

  const btnMessage= document.createElement('DIV');
        btnMessage.className= 'btn-message';
        btnMessage.innerHTML=

  `<?xml version="1.0" encoding="UTF-8"?>
  <svg class ="text-bubble" width="535px" height="243px" viewBox="0 0 535 243" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>fooled</title>
      <desc>Created with Sketch.</desc>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="fooled" transform="translate(-35.000000, 2.000000)">
              <path d="M208.160156,166.292969 C180.101643,159.637523 151.376298,158.746472 123.558594,150.671875 C108.83004,146.396643 77.7864443,139.840995 65.3007813,124.34375 C31.3785102,82.2393194 17.2676537,28.6499743 82.3359375,7.6328125 C98.9142901,2.27797757 133.338785,0.780570294 145.929688,0.64453125 C220.278215,-0.158771173 294.637707,0.119249565 368.988281,0.703125 C407.586258,1.00623511 442.478213,2.14937972 480.183594,10.5078125 C490.637953,12.8253083 500.172668,18.3261174 510.527344,21.0546875 C517.140535,22.7973356 524.452524,21.4461962 530.851563,23.859375 C549.529977,30.9033009 561.66197,44.6009067 566.261719,64.0429688 C571.010631,84.1155078 564.72776,122.643251 540.453125,129.742187 C454.208008,154.963931 460.778778,146.85575 455.675781,148 C443.4945,150.731421 546.697037,124.66387 474.730469,142.265625 C408.816489,158.387023 520.61888,140.969871 414.351562,150.851562 C400.965565,152.096313 387.897597,156.164154 374.472656,156.875 C259.419483,162.967026 314.304687,163.228805 286.726562,166.292969 C284.269988,166.565915 273.260972,163.228805 270.589844,166.292969 C263.733553,174.15811 262.605917,172.973453 257.558594,182.105469 C247.691576,199.957657 227.815753,231.200044 206.417969,238.84375 C204.73682,239.444289 206.268152,235.198998 206.828125,233.503906 C208.35685,228.87631 211.014902,224.680769 212.617188,220.078125 C213.681592,217.020572 214.314992,213.814746 214.796875,210.613281 C216.410593,199.892291 217.53125,189.102865 218.898438,178.347656 L208.160156,166.292969 Z" id="Path" stroke="#2D6AD7" stroke-width="3" fill="#2D6AD7"></path>
              <text id="HAHA-fooled-you!-Bac" font-family="ArialRoundedMTBold, Arial Rounded MT Bold" font-size="20" font-weight="normal" fill="#FFFFFF">
                  <tspan x="210.541016" y="29">HAHA fooled you! </tspan>
                  <tspan x="63.8417969" y="52">Back-end development is very much beyond me.</tspan>
                  <tspan x="55.7851562" y="75">But be that as it may, i really do love the front-end.</tspan>
                  <tspan x="69.9257812" y="98">If you want to get in touch, send me an email at </tspan>
                  <tspan x="137.943359" y="121"><a href="mailto:adriaanvanderploeg@gmail.com">adriaanvanderploeg@gmail.com</a></tspan>
              </text>
          </g>
      </g>
  </svg>`;

  btnFormContainer.appendChild(btnMessage);
  btnFormContainer.insertBefore(btnMessage, btnFormContainer.childNodes[0]);

  $('.btn-message').delay(5000).fadeOut(400);
});

//STICKY HEADER
$(window).scroll(function() {
if ($(this).scrollTop() > 132.83){
    $('.header-container').addClass("header-shrink");
    $('header').css({'position' : 'fixed', 'height' : '60px'});
  }
  else{
    $('.header-container').removeClass("header-shrink");
    $('header').css({'position' : 'static', 'height' : 'auto'});
  }
});

//LOGO HOVER
const path= document.querySelector('.path');
const logo= document.querySelector('.logo');

logo.addEventListener('mouseover',()=>{
  path.style.stroke = '#5736E6';
});

logo.addEventListener('mouseout',()=>{
  path.style.stroke = '#fff';
});

logo.addEventListener('click',()=>{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

//TEST TO RESIZE CAPTION IN FANCYBOX TO ACCOMODATE HORIZONTAL MOBILE DEVICE VIEWPORTS
const btn = document.createElement("DIV");
btn.className = 'fancybox-link';
btn.style.display = 'none';

function setWindowHeight(){
  const windowHeight = window.innerHeight;
  const fbCaptionBody= document.querySelector('.fancybox-caption__body');
  const fbSlide= document.querySelector('.fancybox-slide');
  const fbContainer= document.querySelector('.fancybox-container');

    if (windowHeight < 300 && fbContainer) {
      fbSlide.style.display = 'none';

    }else if(windowHeight < 570 && fbContainer){
      fbSlide.style.display = 'block';
      btn.style.display = 'none';
      fbSlide.style.transform = 'scale(.7)';
      fbSlide.style.top = '17vh';
      fbSlide.style.overflowX = 'hidden';
      fbCaptionBody.style.fontSize = '.9em';

    }else if(fbContainer){
      fbSlide.style.display = 'block';
      btn.style.display = 'none';
      fbSlide.style.transform = 'scale(1)';
      fbSlide.style.top = '20vh';
      fbCaptionBody.style.fontSize = '1em';
    }
}
window.addEventListener("resize",setWindowHeight,false);

//ALTERNATIVE: IF WINDOW.INNERHEIGHT < 300 YOU DONT GET A MODAL
// for(let i=0;i<6;i++){
//
//   const smallHeightLink= btnContainer[i].children[0];
//
//   smallHeightLink.addEventListener('click',()=>{
//     if(window.innerHeight < 300){
//       window.open(smallHeightLink.getAttribute("href"), '_blank' );
//       //don't open modal
//       //smallHeightLink.removeAttribute('data-fancybox');
//     }
//   })
// }
