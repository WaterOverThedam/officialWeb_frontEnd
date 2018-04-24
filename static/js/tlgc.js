$(document).ready(function () {
   $(window).scroll(function() {
       show_scroll();
       //console.log(this.logShow);
    });

   function show_scroll(){
       var point = window.scrollY||pageYOffset;
       if(!$('#logo')){
          return false;
       }
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
        // var videobox  = document.getElementById('videobox');
        var videobox  = document.getElementById('video');
        docHtml.style.cssText = "";
        docBody.style.cssText = "";
        // videobox.style.cssText = "";
        document.IsFullScreen = false;
    }
}

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}



function escape2Html(str) {
  var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}
function GetRequest() {
  var url = decodeURI(location.search); //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

function toDate(input){
  var oDate=new Date(input);
  return oDate.getFullYear()+'-'+(f(oDate.getMonth()+1))+'-'+f(oDate.getDate())+' '+f(oDate.getHours())+':'+f(oDate.getMinutes());
  function f(s) {
      return ('00'+s).substr(-2);
  }
}

function toDate_s(dt,hr=""){
  var oDate=new Date(dt);
  if (hr==""){
     return oDate.getFullYear()+'-'+(f(oDate.getMonth()+1))+'-'+f(oDate.getDate());
  }else{
     return oDate.getFullYear()+'-'+(f(oDate.getMonth()+1))+'-'+f(oDate.getDate())+' '+hr;
  }
  function f(s) {
      return ('00'+s).substr(-2);
  }
}

