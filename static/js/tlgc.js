$(document).ready(function () { //本人习惯这样写了
   $(window).scroll(function() {
       var point = window.scrollY||pageYOffset;
       if(point>80){
         $(".menu-gb").hide();
       }else{
         $(".menu-gb").show();
       }
       //console.log(this.logShow);
    });
});


function checkBrowser(){
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))
      {alert('你是使用IE')}
    else if (navigator.userAgent.indexOf('Firefox') >= 0){alert('你是使用Firefox')}
    else if (navigator.userAgent.indexOf('Chrome') >= 0){alert('你是使用Chrome')}
    else if (navigator.userAgent.indexOf('Safari') >= 0){alert('你是使用Safari')}
    else {alert('你是使用其他的浏览器浏览网页！'+ navigator.userAgent)}
}

