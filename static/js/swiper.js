$(function(){

swiper();

window.onresize = function(){
    swiper();
}
function swiper(){
    var userAgentInfo = navigator.userAgent;
    console.log(userAgentInfo);
      // 声明父盒子
      var dom = $('.news');
     //找到存放滑动内容的父类
      var box = dom.find('.gym-news');
      var lis = $('.uls li');

      box.css({left:0});
      lis.eq(0).addClass('current').siblings().removeClass('current')
    //获取滑动内容父类的宽度
      var width  = box.width();
    // 获取每次滑动展示的份数
      var speed = width/6
    // 声明最重要的变化索引
      var index = 0;
    // 获取滑动的内容
         var son = box.find('.gym-box')
    // 声明滑动开始时间和坐标 用于移动设备
      var startTime,startX;
        var prev = $('.arrow-prev');
        var next = $('.arrow-next');

        prev.click(function(){
            console.log(1111)
            prevImg();
        })
        next.click(function(){
            nextImg();
        })
        lis.click(function(){
            // console.log(1111)
            console.log($(this).index())
            
            index=$(this).index();
            move()

        })
      box[0].addEventListener("touchstart", function (e) {
        if(e.targetTouches.length>1){
            return
        }
        // 记录按下的事件
        startTime = Date.now();

        // 3 记录按下的坐标
        startX = e.targetTouches[0].clientX;

        })
        // 手指离开
        box[0].addEventListener('touchend',function(e){
           
            // 判断手指个数
            if(e.changedTouches.length>1){
                return;
            }
            // 判断按下的时间
            var endTime = Date.now();
            if(endTime -startTime >800){
                return;
            }
            // 判断按下的距离
            var endX = e.changedTouches[0].clientX;
            
            if(Math.abs(endX-startX)>20){
                if(endX>startX){
                    prevImg()
                   
                }else{
                    nextImg()
                }
            }
        })

  // 声明动画
      function move(){
          // 父盒子移动的距离
          box.stop().animate({left:-speed*index},300);
          // 显示对应的索引图标
          lis.eq(index).addClass('current').siblings().removeClass('current')
      }
  
      // 上一张
      function prevImg(){
          console.log(index)
          if(index==0){
              box.css({left:3*-speed});
              index=3;
          }
          index--;
          move()
      }
      //下一张 
      function nextImg(){
        
          if(index==2){
              lis.eq(0).addClass('current').siblings().removeClass('current')    
          }
          if(index==3){
              box.css({left:0});
              index=-1;
          }
          index++;
          move()
          console.log(index)
      }

      dom.mousedown(function(e){
          var event = e || window.event; 
          if(e.preventDefault) { 
              event .preventDefault(); 
              }else{ 
              event .returnValue = false; 
              } 
          startX = e.pageX;
      })
      dom.mouseup(function(e){
          var event = e || window.event; 
          if(e.preventDefault) { 
              event .preventDefault(); 
              }else{ 
              event .returnValue = false; 
              } 
          var result = e.pageX-startX;
      
          if(Math.abs(result)>=25){
              if(result>0){
                  prevImg()
              }else{
                  nextImg()
              }
          }
         
      })
  
  
  
  
  

}



  
})