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


  $('.sticky').click(function(e){
    e = e || window.event;
 //   年龄段导航
 var course1 = parseInt($('.course1').offset().top - ((3*$('.sticky').height())));
 var course2 = parseInt($('.course2').offset().top - ((3*$('.sticky').height())));
 var course3 = parseInt($('.course3').offset().top - ((3*$('.sticky').height())));


// 获取移动图标距离左侧位置
    var imgX = e.pageX-$('#move').width()/2
// 获取年龄段长度
    var agewidth = $('.age').width();
// 获取鼠标点击位置所占百分比
    var baifen = parseInt(e.pageX/agewidth*100);
    // 移动图片
    $('#move').animate({marginLeft:imgX});
    // 判断导航
    if(baifen<=26){
        $('html').animate({'scrollTop':course1}); 
    }else if(baifen<=50){
        $('html').animate({'scrollTop':course2});
    }else{
        $('html').animate({'scrollTop':course3});
    }
      
  })


})