$(function(){

    // 屏幕宽度改变触发
    $(window).resize(function(){
    // console.log ($(window).width())
    
    })


    // 如果是移动端
    if($(window).width()<768){
        
        $('.button').click(function(e){
            var i = Number($(this).attr('title'));
            if($('.desc').eq(i).hasClass('hidden')){
                $('.desc').addClass('hidden').eq(i).removeClass('hidden');
            }else{
                $('.desc').eq(i).addClass('hidden')
            }

        })
    }
    else{
        $('.button').click(function(e){
            e.preventDefault();
            var i = Number($(this).attr('title'));
            if($('.desc').eq(i).hasClass('hidden')){
                $('.desc').addClass('hidden').eq(i).removeClass('hidden');
                $('.words').stop().animate({'width':'46%'},1000).eq(i).stop().animate({'width':'100%'},1000)
            }else{
                $('.desc').eq(i).addClass('hidden')
                $('.words').eq(i).stop().animate({'width':'46%'},1000)
            }
        
        })

    }
   
})