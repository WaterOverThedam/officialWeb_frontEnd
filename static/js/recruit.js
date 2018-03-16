$(function(){
    // 点击弹出申请框
    $('#apply').click(function(){
    
        $('#login').css("display","block");
    })
    //点击关闭弹出层
    $('#close').click(function(){

        $('#login').css('display','none');
    })
    // 返回上一页
    $('#back').click(function(){
        window.history.go(-1);

    })
    


})