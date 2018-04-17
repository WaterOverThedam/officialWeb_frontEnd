window.onload=function(){
    var  warn = document.getElementById('warn');
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器 
    if(isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = Number(parseFloat(RegExp["$1"]));
      if(fIEVersion<=8){
        // warn.style.display="block";
      }
      // console.log(111)
    };
    // $("#center").click(function(){
    //   alert(1111)
    //   $("#center").css({'background-image':'url(/img/components/search-hoverbg.png)'})
    // }) 

    // 关闭按钮
    // var close = document.getElementById('cl');
    // close.onclick = function(){
    //     warn.style.display="none";
    // }
  
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




}