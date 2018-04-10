<template>
    <div class="join">
        <!-- <div id="logo"></div> -->
        <MyNav :bgColor="bgColor_cur"></MyNav>
        <main>
            <!-- 版心图 -->
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
            </div>
            <Waves></Waves>
            <div class="title text-center">
                <h3 v-text="title[0]"></h3>
                <h3 v-text="title[1]"></h3>
                <h3 v-text="title[2]"></h3>
            </div>
            <div class="form" :style="{'background':`url(${form_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                <form action="javascript:0"  id="ValidatorForm">
                    <div class="form-group" v-for="item in form">
                       <label v-text="item.title"></label>
                        <input class="form-control" :type="item.type" :id="item.id" :name="item.id" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn" v-text="submit"></button>
                    </div>
                        <!-- <ul>
                            <li v-for="item in form">
                                <label v-text="item.title"></label>
                                <input :type="item.type" :id="item.id" :name="item.id" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                            </li>
                            <li>
                                <button type="submit" v-text="submit"></button>
                            </li>
                        </ul> -->
                        
                   
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
                                <span class="more">more</span>
                        </span>
                        <!-- 图片 -->
                        <div :class="index%2==0?'right':'left'" class="pic" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                           
                        </div>
                        
                    </li>
                </ul>
            </div>


            <common></common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter :bgColor="bgColor_cur"></MyFooter>
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
    import { mapGetters } from 'vuex'

    export default {
        head:{
            "title":"加盟中心",
            link:[
               { rel:'stylesheet',type:'text/css',href:'/css/bootstrapValidator.min.css'}
            ],
            script:[
                {"src":"/js/join.js"},
                {"src":"/ui/bootstrapValidator.min.js"}
              
            ]
        },
        data(){
            return{
                ...join
            }
        },
        computed:{
            ...mapGetters([
                'bgColor_cur'
            ]),
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
        padding-top:45%;
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
        .form-group{
            font-size: 2.2em;
            margin: 2% auto;
            width: 36%;
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
                padding: 5% 5px;
                display: inline;
                font-size: 0.8em;
                height:auto;
                max-height: 34px;
            }
            // 提示符号
            .form-control-feedback {
                top:50px !important;
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
                // &:hover{
                //     background-image: url(/img/join/sure-hoverbg.png)
                // }
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
                    .more{
                        color:#B6D713;
                        position: absolute;
                        bottom: -32%;
                        left:-9%;
                        font-size: 1.5em;
                        font-weight: 600;
                    }
                    img{
                        transform: scale(2)
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
                        // text-align: center;
                        font-size: 1.4em;
                        color:#5160AC;
                    }
                }
                
                
            }
            
               
        }
    }




}
// @font-face { 
// font-family: 'GD-HEI'; 
// src: url('/font/bak/hei.ttf') format('truetype'); 
// } 
@media screen and (max-width:"768px") {
    .join{
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
                        bottom:68%;
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
