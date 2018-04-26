<template>
    <div class="join">
        <div id="logo"></div>
        <MyNav></MyNav>
        <main>
            <!-- 版心图 -->
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% 100%'}">  
            </div>
            <Waves></Waves>
            <div class="title text-center">
                <h3 v-text="title[0]"></h3>
                <h3 v-text="title[1]"></h3>
                <h3 v-text="title[2]"></h3>
            </div>
            <div class="form" :style="{'background':`url(${form_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                <form action="javascript:0"  id="JoinForm">
                    <!-- 姓名 -->
                    <div class="form-group">
                       <label>姓名</label>
                        <input v-model="Join.UserName" class="form-control" type="text" id="username" name="usesrname" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    </div>
                    <!-- 联系方式 -->
                    <div class="form-group">
                       <label>手机号</label>
                        <input @change="checkPhone"  v-model="Join.UserPhone" class="form-control" maxlength="11" type="text" id="tel" name="tel" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    </div>
                    <p class="tip">{{msg}}</p>
                    <!-- 电子邮箱 -->
                    <div class="form-group">
                       <label>电子邮箱</label>
                        <input @change="checkEmail" v-model="Join.UserEmail" class="form-control" type="email" id="email" name="email" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    </div>
                    <p class="tip">{{emailTip}}</p>
                    <!-- 加盟城市 -->
                    <div class="form-group">
                       <label>加盟城市</label>
                        <input v-model="Join.City" class="form-control" type="text" id="city" name="city" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    </div>
                    <div class="form-group">
                        <button :disabled="isDisabled" type="submit" @click.prevent="saveJoin()" class="btn" v-text="submit"></button>
                    </div> 
                </form>
            </div>
            <!-- 主题内容 -->
            <div class="container">
                <ul >
                    <li v-for="(item,index) in body ">
                       
                        <!-- 文字内容 -->
                        <div :class="index%2==0?'left':'right'" class="words">
                            <h3 v-text="item.title" class="text-center"></h3>
                            
                            <div class="desc hidden">
                                <p v-for="c in item.content" v-text="c"></p>
                    
                            </div>
                            <!-- <div>
                                
                            </div> -->
                        </div>
                         <!-- 按钮 -->
                        <span  class="button" :title="item.id" :class="index%2==0?'l':'r'">
                                
                                <img :src="button" alt="">
                                <!-- <span class="more">more</span> -->
                        </span>
                        <!-- 图片 -->
                        <div :class="index%2==0?'right':'left'" class="pic" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% 100%'}">
                           
                        </div>
                        
                    </li>
                </ul>
            </div>
            <common></common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter></MyFooter>
    </div>
 
</template>
<script>
    import join from './join'
    import Waves from '~/components/Waves.vue'
    import MyNav from '~/components/MyNav.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import GoTop from '~/components/GoTop.vue'
 

    export default {
        head:{
            "title":"加盟中心",
            link:[
                { rel:'stylesheet',type:'text/css',href:'/css/reset.css'}
            ],
            script:[
                {"src":"/js/join.js"},
            ]
        },
        data(){
            return{
                ...join,
                Join:{
                    UserName:'',
                    UserPhone:'',
                    UserEmail:'',
                    City:'',
                },
                isDisabled:false,
                msg:"",
                emailTip:""  
            }
        },
        methods:{
            
            checkPhone(){
                var result = this.Join.UserPhone.match(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/)
                // console.log(this.Join.UserPhone)
                console.log(result)
                if(result!==null||this.Join.UserPhone==""){
                     this.msg=""
                }
                else{
                    this.msg = "请输入正确的手机号"
                }
            },
            // 验证邮箱
            checkEmail(){
                var result = this.Join.UserEmail.match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/)
                if(result!==null||this.Join.UserEmail==""){
                     this.emailTip=""
                }
                else{
                    this.emailTip = "请输入正确的邮箱地址"
                }
            },
             saveResult(res){
              var msg=""
              if(res.code==0){
                 msg = {content:"申请提交成功",title:'提示',type:"success"}
              }else{
                 msg= {content:res.msg,title:'错误',type:"error"}
              }
              this.$alert(msg.content, msg.title, {
                    confirmButtonText: '确定',
                    type: msg.type,
                    callback:()=>{
                        this.isDisabled = res.code?false:true;
                    }
                    //roundButton:true
              })
           },
            // 提交表单信息

            saveJoin(){
                //this.isDisabled = true;
                // 判断
                if(this.Join.UserName==''||this.Join.UserPhone==''||this.Join.UserEmail==''||this.Join.City==''){
                    var msg = "";
                    if(this.Join.UserName==''){
                        msg= {content:"请填写您的姓名",title:'提示',type:"warning"}
                    }
                    if(this.Join.UserPhone==''){
                        msg= {content:"请填写您的手机号",title:'提示',type:"warning"}
                    }
                    if(this.Join.UserEmail==''){
                        msg= {content:"请填写您的邮箱地址",title:'提示',type:"warning"}
                    }
                    if(this.Join.City==''){
                        msg= {content:"请填写您想要加盟的城市",title:'提示',type:"warning"}
                    }
                    this.$alert(msg.content, msg.title, {
                        confirmButtonText: '确定',
                        type: msg.type,
                        callback:()=>{
                            this.isDisabled = false;
                        }
                    })
                }else{
                    this.$getDataAsync(this.baseUrl+"/api/saveAppli/",this.Join,this.saveResult);
                }



            }
        },
        computed:{
            baseUrl(){
                return this.$conf.evnData[this.$conf.env_cur].baseUrl;
            }
        },
        components:{
            Waves,
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop
        }
        
    }
    
</script>

<style lang="scss" scoped>
.join {
    overflow: hidden;
    font-family: "J-YUAN";
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    #banner{
        margin:0;
        padding:0;
        width:100%;
        padding-top:42%;
        padding-bottom:8em;
    }
 
    .title {
        
        h3 {
            font-family: 'GD-HEI';
            font-size: 5em;
            padding: 1% 8%;
            color:#4E5DA0;
            margin: 0;
        }
    }
    .form {
        width:100%;
        padding-top:5%;
        padding-bottom:5em;
        text-align: center;
        .tip{
            color: red;
            font-size: 16px;
            margin: 0;
            padding: 0;

        }
        .form-group{
            font-size: 2.2em;
            margin: 1% auto;
            width: 36%;
            position: relative;
            label{
                color: #4F62A2;
                margin: 0;
                padding: 0;
                display: block;
            }
            input{
                 width: 100%;
                 outline: none;
                 border: none;
                 text-indent: 1%;
            }
        
            .form-control{
                padding: 3% 5px;
                font-size: 0.8em;
                height:40px;
                max-height: 40px;
            }
              
            .btn{
                margin-top:2%;
                color: #fff;
                border: none;
                outline: none;
                display: inline-block;
                width: 70%;
                padding: 1% 5%;
                font-size: 1em;
                background-color: transparent;
                background-image: url(/img/join/surebg.png);
                background-repeat: no-repeat;
                background-size: cover;
                -webkit-background-size:100%;
                }

        }

    }
    .container{
        margin-top: 5%;
        li{
            background-color: #EDF9FF;
            color:#46CDCD;
            margin-bottom: 5%;
            height: 320px;
            // padding: 10%;
            position: relative;
            .left{
                left:0;
            }
            .right{
               right:0;
            }
            // 背景图片样式
            .pic{
                position: absolute;
                height:100%;
                z-index: 101;
                width: 54%;
            }
            // 按钮样式
                span {
                    position: absolute;
                    bottom:10%;
                    cursor: pointer;
                    z-index:103;
                    // .more{
                    //     color:#B6D713;
                    //     position: absolute;
                    //     bottom: -32%;
                    //     left:-9%;
                    //     font-size: 1.5em;
                    //     font-weight: 600;
                    // }
                    img{
                        transform: scale(1.5)
                    }
                }
                //  左右两边
                .l{
                    left:2.5%;
                }
                .r{
                    right:2.5%
                }

            // 文字样式
            .words{
                width: 46%;
                overflow: auto;
                height:100%;
                padding:10% 10% 0;
                z-index: 102;
                
                
                background-color: #EDF9FF;
                h3{
                    font-family: 'GD-HEI'; 
                    text-align: center;
                    font-size: 4em;
                }
                position: absolute;
                
                // 隐藏的文字
                .desc{    
                    p{  
                        font-size: 1.4em;
                        color:#5160AC;
                    }
                }
                
                
            }
            
               
        }
    }




}
@media screen and (max-width:"768px") {
    .join{
         .form {
            .form-group{
                .form-control{
                    height: auto;
                }
            }
        }
        .container{
            li{
                span{
                    .more{
                            bottom: -18%;
                            left:-2%;
                            font-size: 2em;
                    }
                    img{
                            transform: scale(1.5)
                    }
                }
            }
        }
    }





}
@media screen and (max-width:"767px") {
    .join .form .tip{
        font-size: 12px
    }
    .join{
        .title{
            h3 {
                font-size: 3em;
                color:#5460A2;
                padding: 0 9%;
                margin: 0;
            }

        }
        .form {
            padding-bottom:3em;
            .form-group{
                font-size: 1.6em;
                input{
                    width: 100%;
                }
                .form-control{
                    padding: 3% 5px 0;
                    // max-height;
                    height: auto;
                }
            }
        }
        .container{
            margin-top: 5%;
            li{
                margin-bottom: 5%;
                height: auto;
                // 背景图片样式
                .pic{
                    position: static;
                    height:200px;
                    width: 100%;
                }
                // 按钮样式
                    span {
                        bottom:64%;
                        transform: scale(0.6);
                        .more{
                            position: absolute;
                            bottom: -34%;
                            left:-35%;
                            font-size: 3.5em;
                            font-weight: 600;
                        }
                       
                    }
                    //  左右两边
                    .l{
                        left:0;
                    }
                    .r{
                        right:0
                    }


                // 文字样式
                .words{
                    position: static;
                    width: 100%;
                    overflow: visible;
                    height:auto;
                    padding:8% 10% 10%;
                    h3{
                        font-size: 3em;
                    }           
                }
            
               
            }
        }

    }
}
</style>
