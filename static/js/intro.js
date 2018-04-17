$(function(){
 // 表单验证
 $('#IntroForm').bootstrapValidator({
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        username: {
            message: 'The username is not valid',
            // validators: {
            //     notEmpty: {
            //         message: '请您填写宝宝姓名'
            //     },
          
            // }
        },
        tel: {
            validators: {
                notEmpty: {
                    message: '请您填写联系方式'
                },
                regexp: {
                    regexp: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
                    message: '请填写您的正确联系方式'
                }
            }
        },
     
       

    }
});

























})