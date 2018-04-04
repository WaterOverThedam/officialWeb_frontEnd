$(function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器 
    if(isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = Number(parseFloat(RegExp["$1"]));
      // if(fIEVersion<=9)
      console.log(fIEVersion)
    }
  
    // console.log(1222)
//videoPlay
//   $('video').bind('contextmenu',function() { return false; });

//   $('.parent div.btn').on('click',function(){
//       $(this).parent().parent().find('.parent').hide();
//       var v = $(this).parent().parent().find('video');
//       v.show().attr('src',v.attr('dataSrc'));
//       exitFullscreen();
//       v[0].currentTime=0;
//       v[0].play();
//   })

//   $('video').on('ended',function(){
//       $(this).parent().find('video')[0].currentTime=0;
//       $(this).parent().find('video')[0].pause();
//       $(this).hide();
//       $(this).parent().find('.parent').show();
//       exitFullscreen(); 
//   });



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