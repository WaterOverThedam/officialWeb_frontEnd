$(function(){
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
  $('.playhover').on('click',function(){
    //   $('.parent').each(function(){
    //    $(this).find('video')[0].pause();
    //    $(this).find('video')[0].currentTime=0;
    //    exitFullscreen();
    //  })
      //console.log($(this).parent());
    //   $('.parent .image').show();
    //   $('.parent video').hide();
    
// 让每个视频都暂停回到开始状态

$('video').each(function(i,e){
    // console.log(e)

    e.pause();

    // e.currentTime = 0; IE存在问题
    exitFullscreen();
   
})
//  隐藏所有视频 显示所有背景图
$('.loading').hide();
$('.img').show();
$('.play').show();
$('video').hide();
// 点击的视频开始播放
      $(this).parent().find('.img').hide();
      $(this).parent().find('.play').hide();
      $(this).parent().find('video').show().attr('src',$(this).parent().find('video').attr('dataSrc'));
    //   $(this).parent().find('video')[0].currentTime=0; IE存在问题
      $(this).parent().find('video')[0].play();
  })

//   视频缓冲放指定图片  缓冲中
  $('video').on('waiting',function(){
    //   console.log('正在缓冲');
    $(this).parent().find('.loading').show();

  })
//   缓冲结束执行
  $('video').on('playing',function(){
    //   console.log('缓冲结束')
  })




//  视频结束自动回到最开始的状态
  $('video').on('ended',function(){
      $(this).parent().find('video')[0].currentTime=0;
      $(this).parent().find('video')[0].pause();
      $(this).hide();
      $(this).parent().find('.img').show();
      $(this).parent().find('.play').show();
      $(this).parent().find('.loading').hide();
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
    if(x<=96&&x>=-2){

        $('#move').animate({marginLeft:x+'%'});
        var x2=x+2;
        if(x>=23){
            x2=x+1;
        }
        if(x>=64){
            x2=x;
        }
        // console.log(x2)
        $('.smallmove').stop().animate({left:x2+'%'});
    }
   
//     // 判断导航
    if(x<=24){
        $('html,body').stop().animate({'scrollTop':course1}); 
    }else if(x<=48){
        $('html,body').stop().animate({'scrollTop':course2});
    }else{
        $('html,body').stop().animate({'scrollTop':course3});
    }
      
})

// 文字显示
$('.btn-more').click(function(e){
    e.preventDefault();
    var i = Number($(this).attr('dataId'));
    if($('.desc').eq(i).hasClass('hidden')){
       
        $('.w-first').removeClass('hidden').eq(i).addClass('hidden');
        // console.log($('.first').eq(i));
        $('.desc').addClass('hidden').eq(i).removeClass('hidden');
        $('.words').stop().animate({'width':'42%'},1000).eq(i).stop().animate({'width':'100%'},1000)
    }else{
        
        $('.desc').eq(i).addClass('hidden')
        $('.words').eq(i).stop().animate({'width':'42%'},1000) 
        $('.w-first').removeClass('hidden');
    }

})

})