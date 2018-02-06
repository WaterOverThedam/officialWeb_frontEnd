$(document).ready(function () { //本人习惯这样写了
   
  
   $(window).scroll(function() {
       show_scroll();
       //console.log(this.logShow);
    });

   function show_scroll(){
       var point = window.scrollY||pageYOffset;
       var offset = $("#logo").offset().top+$("#logo").width()||220
       if(point>offset){
         $(".navbar .logo").show();
       }else{
         $(".navbar .logo").hide();
       }
   }
});


function checkBrowser(){
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))
      {alert('你是使用IE')}
    else if (navigator.userAgent.indexOf('Firefox') >= 0){alert('你是使用Firefox')}
    else if (navigator.userAgent.indexOf('Chrome') >= 0){alert('你是使用Chrome')}
    else if (navigator.userAgent.indexOf('Safari') >= 0){alert('你是使用Safari')}
    else {alert('你是使用其他的浏览器浏览网页！'+ navigator.userAgent)}
}

function exitFullscreen()
   {
       if (document.exitFullscreen) {
         document.exitFullscreen();
       } else if (document.msExitFullscreen) {
         document.msExitFullscreen();
       } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
       } else if(document.oRequestFullscreen){
            document.oCancelFullScreen();
        }else if (document.webkitExitFullscreen){
         document.webkitExitFullscreen();
       }else{
        var docHtml  = document.documentElement;
        var docBody  = document.body;
        var videobox  = document.getElementById('videobox');
        docHtml.style.cssText = "";
        docBody.style.cssText = "";
        videobox.style.cssText = "";
        document.IsFullScreen = false;
    }
}

