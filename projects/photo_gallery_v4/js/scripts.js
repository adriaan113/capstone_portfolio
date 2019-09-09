
// Jquery code: i wanted to code this challenge with jquery but could not figure out how to make
//the [data-title] toLowerCase.



//@randy: Hi! thanks for taking a look mate. Here you'll find
//all the code. The top one is from the code you linked to.
//below is my own code.
//below that is a vanilla JS code that i found online and adjusted. So not completely mine.
//


  $(".input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("[data-title]").filter(function() {
      $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
    });
  });


// let input;
// let filter;
//
//
//   $('.input').on('keyup',function(){
//       input= $(this).val().toLowerCase();
//       filter= $('[data-title]');
//
//       if(input != ''){
//         filter.not(input).hide();
//         $('[data-title*="' + input +'"]').show();
//           }else{
//             filter.show();
//       }
//     });



//JS code

  // function search() {
  //
  //   let links;
  //   let final;
  //   let input = document.querySelector('.input');
  //   let filter = input.value.toLowerCase();
  //   let li = document.getElementsByTagName('li');
  //
  //   for (let i = 0; i < li.length; i++) {
  //     links = li[i].getElementsByTagName("a")[0];
  //     final = links.getAttribute('data-title');
  //     if (final.toLowerCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // }
