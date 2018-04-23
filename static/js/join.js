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
    // 表单验证
    // $('#JoinForm').bootstrapValidator({
    //     message: 'This value is not valid',
    //     feedbackIcons: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh'
    //     },
    //     fields: {
    //         username: {
    //             message: 'The username is not valid',
    //             validators: {
    //                 // notEmpty: {
    //                 //     message: '姓名不为空'
    //                 // },
    //                 // stringLength: {
    //                 //     min: 6,
    //                 //     max: 30,
    //                 //     message: 'The username must be more than 6 and less than 30 characters long'
    //                 // },
    //                 // regexp: {
    //                 //     regexp: /^[a-zA-Z0-9_\.]+$/,
    //                 //     message: 'The username can only consist of alphabetical, number, dot and underscore'
    //                 // }
    //             }
    //         },
    //         tel: {
    //             validators: {
    //                 notEmpty: {
    //                     message: '请填写联系方式'
    //                 },
    //                 regexp: {
    //                     regexp: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
    //                     message: '请填写您的正确联系方式'
    //                 }
    //             }
    //         },
    //         email: {
    //             validators: {
    //                 notEmpty: {
    //                     message: '邮箱不能为空'
    //                 },
    //                 emailAddress: {
    //                     message: '请填写正确的邮箱地址'
    //                 }
    //             }
    //         },
    //         city: {
    //             validators: {
    //                 // notEmpty: {
    //                 //     message: '请说明您要加盟的城市'
    //                 // },
                   
    //             }
    //         },
           
    
    //     }
    // });





   
})