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


  $('.during').click(function(e){
    e = e || window.event;
 //   年龄段导航
 var course1 = parseInt($('.course1').offset().top - ((3*$('.sticky').height())));
 var course2 = parseInt($('.course2').offset().top - ((3*$('.sticky').height())));
 var course3 = parseInt($('.course3').offset().top - ((3*$('.sticky').height())));

// 获取年龄段长度
var agewidth = $('.age').width();
//
    // var x = parseInt(e.pageX/agewidth*100);
    var x = parseInt(e.offsetX/agewidth*100)-2;
    // console.log(x);

    // 规定图片移动区域并移动
    if(x<=95&x>=0){

        $('#move').animate({marginLeft:x+'%'});
        var x2 = x
        if(x2>40){x2-=1};
        if(x2>80){x2-=2.6};
        $('.smallmove').animate({left:x2+'%'});
    }
   
//     // 判断导航
    if(x<=24){
        $('html').animate({'scrollTop':course1}); 
    }else if(x<=48){
        $('html').animate({'scrollTop':course2});
    }else{
        $('html').animate({'scrollTop':course3});
    }
      
  })


})