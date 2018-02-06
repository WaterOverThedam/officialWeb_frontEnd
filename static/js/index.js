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
})