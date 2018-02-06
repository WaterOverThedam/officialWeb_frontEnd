$(function(){

  $('video').bind('contextmenu',function() { return false; });

  //videoPlay
  $('.parent .image').on('click',function(){
      $('.parent').each(function(){
       $(this).find('video')[0].pause();
       $(this).find('video')[0].currentTime=0;
       exitFullscreen();
     })
      //console.log($(this).parent());
      $('.parent .image').show();
      $('.parent video').hide();
 
      $(this).parent().find('.image').hide();
      $(this).parent().find('video').show().attr('src',$(this).parent().find('video').attr('dataSrc'));
      $(this).parent().find('video')[0].currentTime=0;
      $(this).parent().find('video')[0].play();
  })

 
  $('video').on('ended',function(){
      $(this).parent().find('video')[0].currentTime=0;
      $(this).parent().find('video')[0].pause();
      $(this).hide();
      $(this).parent().find('.image').show();
      exitFullscreen() 
  });


})