$(function(){
    // 点击弹出
    $('.list').click(function(){
        var i = Number($(this).attr('num'));
        // 根据不同位置改变弹出框背景图
        if(i==1||i==4){
            $('#main').css({'background-image':'url(/img/news/alert_green.png)'});
        }else if(i==2||i==5){
            $('#main').css({'background-image':'url(/img/news/alert_blue.png)'});
        }else{
            $('#main').css({'background-image':'url(/img/news/alert_yellow.png)'});
        }
        // 回到页面顶部
        $(window).scrollTop(0);
        // 黑色半透明遮罩层的范围
        $('#alert').css({'display':'block','height':document.body.scrollHeight});
    });
    // 点击关闭弹窗
    $('#close').click(function(){
        $('#alert').css({'display':'none'});
    })

})