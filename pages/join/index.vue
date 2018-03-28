<template>
    <div class="join">
        <!-- <div id="logo"></div> -->
        <MyNav :bgColor="bgColor[counterNow]"></MyNav>
        <main>
            <!-- 版心图 -->
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
            </div>
            <Waves></Waves>
            <div class="title">
                <h3 v-text="title"></h3>
            </div>
            <div class="form" :style="{'background':`url(${form_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                <form action="javascript:0" >
                    <ul>
                        <li v-for="item in form">
                            <p v-text="item.title"></p>
                            <input type="text" :name="item.id" :style="{'background':`url(${input_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                        </li>
                        <li>
                            <button type="submit" v-text="submit" :style="{'background':`url(${submit_bg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"></button>
                        </li>
                    </ul>
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



            <MyMedia></MyMedia>
        </main>
        <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>
    </div>
 
</template>
<script>
    import join from './join'
    import Waves from '~/components/Waves.vue'
    import MyNav from '~/components/MyNav.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'

    export default {
        head:{
            "title":"加盟中心",
            script:[
                {"src":"/js/join.js"}
            ]
        },
        data(){
            return{
                ...join
            }
        },
        computed:{
            bgColor(){
                return this.$store.state.bgColor;
            },
            counterNow(){
                return parseInt(this.$store.state.counter/600)%this.bgColor.length;
            }
        },
        components:{
            Waves,
            MyNav,
            MyMedia,
            MyFooter
        }
        
    }
    
</script>

<style lang="scss" scoped>
.join {
    overflow: hidden;
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
            padding: 2% 8%;
            color:#4E5DA0
        }
    }
    .form {
        width:100%;
        padding-top:5%;
        padding-bottom:5em;
        text-align: center;
        li{
           font-size: 2.2em;
            margin: 2% 0;
            p{
                color: #4F62A2;
                margin: 0;
                padding: 0;
            }
            input{
                 width: 32%;
                 outline: none;
                 border: none;
                 text-indent: 1%;
            }
            button{
                margin-top:2%;
                color: #fff;
                border: none;
                outline: none;
                display: inline-block;
                width: 20%;
                padding: 0.5% 5%;
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
                font-size: 2em;
                color:#5460A2;
                padding: 0 9%;
                margin: 0;
            }

        }
        .form {
            padding-bottom:3em;
            li{
                font-size: 1.6em;
                input{
                    width: 40%;
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
                        bottom:63%;
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
