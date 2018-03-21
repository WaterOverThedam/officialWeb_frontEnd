$(function(){

//videoPlay
  $('video').bind('contextmenu',function() { return false; });
  //btn
  $('.parent div.btn').on('click',function(){
      $(this).parent().parent().find('.parent').hide();
      var v = $(this).parent().parent().find('video');
      v.show().attr('src',v.attr('dataSrc'));
      exitFullscreen();
      v[0].currentTime=0;
      v[0].play();
  })
  //video
  $('video').on('ended',function(){
      $(this).parent().find('video')[0].currentTime=0;
      $(this).parent().find('video')[0].pause();
      $(this).hide();
      $(this).parent().find('.parent').show();
      exitFullscreen(); 
  });


  //   swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
    
      }
  });
// if($(window).width()<768){
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         loop: true,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//         paginationType:'custom'

//     });
// }else{
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     }
    //   });
// }



})