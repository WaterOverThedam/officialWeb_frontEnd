$(function(){
// 视频播放
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
$('video').bind('contextmenu',function() { return false; });
  //videoPlay
$('.play').on('click',function(){
// 让每个视频都暂停回到开始状态
// $('video').on('onloademetadata',function(){
  $('video').each(function(i,e){
    console.log(e)
    e.pause();
    // e.currentTime = 0;
    exitFullscreen();
})
//  隐藏所有视频 显示所有背景图
$('.play').show();
$('.img').show();
$('video').hide();
// 点击的视频开始播放
      $(this).parent().find('.img').hide();
      $(this).parent().find('.play').hide();
      $(this).parent().find('video').show().attr('src',$(this).parent().find('video').attr('dataSrc'));
      // $(this).parent().find('video')[0].currentTime=0;
      $(this).parent().find('video')[0].play();
  // })

})

//  视频结束自动回到最开始的状态
  $('video').on('ended',function(){
      $(this).parent().find('video')[0].currentTime=0;
      $(this).parent().find('video')[0].pause();
      $(this).hide();
      $(this).parent().find('.img').show();
      $(this).parent().find('.play').show();
      exitFullscreen() 
  });


















})