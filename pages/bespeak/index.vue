<template>
  <div class="bespeak">
        <!-- <div id="logo"></div> -->
        <MyNav :bgColor="bgColor[counterNow]"></MyNav>
        <main>
            <!-- 版心图 -->
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                <img :src="cloud" alt="">
            </div>
            <!-- 表单样式 -->
            <div class="formbg" :style="{'background-image':`url(${formbg})`}">
                    <div class="form">
                        <h1 v-text="title[0]"></h1>
                        <h1 v-text="title[1]"></h1>
                        <form action="">
                            <ul>
                                <li v-for="item in input">
                                    <span v-text="item.title"></span>
                                    <input type="text" :name="item.id" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">     
                                </li>
                                <li>
                                    <span v-text="select.city"></span>
                                    <select name="province" id="province" class="m_right" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                       
                                    </select>
                                    <select name="city" id="city" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        
                                    </select>
                                </li>
                                <li>
                                    <span v-text="select.center"></span>
                                    <select class="select2" name="" id="" :style="{'background':`url(${selectbg2}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        
                                    </select>
                                </li>
                                <li>
                                    <button v-text="btnword" class="text-center" :style="{'background':`url(${button}) no-repeat`,'background-size':'contain','-webkit-background-size':'100%'}"></button>
                                </li>
                            </ul>
                            
                        </form>
                    </div>
                    
            </div>
            <!-- 上半部图片 -->
            <div class="row pic1">
                <span class="col-xs-4" v-for="item in pic1">
                    <img :src="item.pic" alt="" class="pic">
                </span>
            </div>
            <!-- 蓝色背景区域 -->
            <div class="row blue hidden-xs" :style="{'background':`url(${blue.bluebg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                <img :src="blue.cut" alt="" class="cut">
                <!-- <div class="imgL col-sm-6">
                    <img :src="blue.three" alt="">
                </div>
                <div class="imgR col-sm-6">
                    <p v-for="(item,index) in blue.words" v-text="item.p" :class="index%2==0?'text-left':'text-right'"></p>
                    <div class="m">
                        <img :src="blue.person" alt="">
                        <p v-for="item in blue.desc" v-text="item.p"></p>   
                    </div>
                </div> -->
                <img :src="blue.wordsbg" alt="">
            </div>
            <!-- 下半部图片 -->
            <div class="row pic2">
                <span v-for="item in pic2" class="col-xs-5">
                    <img :src="item.pic" alt="">
                </span>
            </div>
            <!-- 底部内容 -->
            <div class="row bto">
                <div class="col-sm-6 activity">
                    <h3 v-text="bto.p1"></h3>
                    <h3 v-text="bto.p2"></h3>
                    <img :src="bto.pic" alt="">
                </div>
                <div class="col-sm-6 rule">
                    <img :src="cloud2" alt="">
                    <h3 v-text="bto.ruletitle"></h3>
                    <p v-for="item in bto.rule" v-text="item.p"></p>
                    <span v-for="item in bto.prize" v-text="item"></span>
                </div>
            </div>
            <Common></Common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>
    </div>
</template>
<script>
    import bespeak from './bespeak'
    import MyNav from '~/components/MyNav.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'

    import GoTop from '~/components/GoTop.vue'
    export default {
        head:{
            "title":"预约中心",
            script:[
                {"src":"/js/bespeak.js"}
            ]
        },
        data(){
            return{
                ...bespeak
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
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop
        }
    }

</script>
<style lang="scss" scoped>
.bespeak{
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
        padding-top:50%;
        position: relative;

        img{
            width: 100%;
            bottom: 0;
            position: absolute;
        }
    }
    // 表单样式
    .formbg{
        padding: 20% 0;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        .form{
            width: 30%;
            text-align: center;
            color:#fff;
            position: absolute;
            top:0;
            left: 11%;
            li{
                font-size: 1.6em;
                margin: 3% 0;
                input{
                    color:black;
                    outline: none;
                    border: none;
                    width: 54%;
                }
                span{
                    margin-right: 2%;
                }
                select {
                    color:#000;
                    border: none;
                    outline: none;
                    width: 25%;
                    appearance:none;   
                    -ms-appearance: none;
                    -moz-appearance:none;   
                    -webkit-appearance:none;  
                }
                select::-ms-expand { display: none; }
                .m_right{
                        margin-right: 4%;
                        
                }
                .select2{
                    width: 54%;
                }
                button{
                    padding: 2% 8%;
                    border: none;
                    outline: none;
                }


            }
            h1{
                text-align: center;
                padding: 0 9%;
                font-size: 3em;
                letter-spacing: 0.2em;
                
                font-family: "GD-HEI";
                margin-top: 10px;
            }
            
        }
    }
    // 上半部图片
    .pic1{
        padding: 0 10%;
        margin: 8% 0 5%;
    }
    // 蓝色背景区域
    .blue{
        padding:5% 0 ;
        position: relative;
        .cut{
            width: 100%;
            position: absolute;
            top:-1%;
            
        }
        // .imgL{
        //     text-align: center;
        //     img{
        //         margin-left: 10%;
        //         width: 80%;
        //     }
        // }
        // .imgR{
        //     font-size: 1.8em;
        //     color:#fff;
        //     padding-right:5%;
        //     .m{
        //         margin-top: 15%;
        //         img {
        //             float: left;
        //             margin-right: 5%;
        //         }
        //     }
        // }
    }
    // 下半部图片
    .pic2{
        margin:6% 0;
        padding-left:17%;
    }
    // 底部
    .bto{
        // margin-bottom: 10%;
        padding: 0 5%;
        h3{
            font-size: 2.2em;
            font-weight: 700;
            color:#1CC4BB;
        }
        // 左侧
        .activity{
            // padding: 0 5%;
            text-align: center;
            h3{
                text-align: left;
                margin-top: 0;
            }
        }
        // 右侧
        .rule{
            
            h3{
               text-align: center; 
            }
            p,span{
                font-size: 1.6em;
                color:#9C9C9C
            }
            span{
                display: inline-block;
                width: 50%;
            }
            img{
                width: 20%;
                position: absolute;
                top:-3%;
                left:30%;
            }
        }
    }
}
@media screen and (min-width:1440px) {
    .bespeak{
        .formbg{
            .form{

                h1{
                   margin-top: 20px;
                }
            }
        }
    }
}
@media screen and (min-width:1200px){
    .bespeak{
        .formbg{
            .form{
                li{
                    margin: 6% 0;
                }   
                h1{
                    padding: 0 9%;
                    font-size: 5em;
                    margin-bottom: -4%;
                }
            }
        }
        .blue{
            // .imgR{
            //     margin-top: 3%;
            //     .m{
            //         margin-top: 20%;
            //     }
            // }
        }
            // 底部
        .bto{
    
            // 左侧
            .activity{
                padding-left: 5%;
                text-align: left;
            }
             // 右侧
            .rule{
                span{
                    margin: 3% 0; 
                }
            }
        }
    }
}
@media screen  and (max-width:1024px){
     .bespeak{
         #banner{
         padding-top: 65%;
        }

    }
}
@media screen and (max-width:768px){
    .bespeak{
        .formbg{
            .form{
                h1{
                    font-size: 4em;
                }
            }
        }
    }
}
@media screen and (max-width:767px){
    .bespeak{
        font-size: 6px;
        .formbg{
            background-position: 10% bottom;
            padding: 40% 0;
            .form{
                width:58%;
                li{
                    font-size: 2.5em;
                    margin: 5% 0;
                    select{
                        font-size: 1.1em;
                    }
                }   
                h1{
                    padding: 0 10%;
                    font-size: 5.6em;
                    margin: 3% 0 0;
                }
            }
        }
        // 上半部分图
        .pic1{
            padding: 0;
        }
        // 蓝色背景区域
        .blue{
            // .imgL{
            //     text-align: center;
            //     img{
            //          margin: 0;
            //     }     
            // }
            // .imgR{
            //     font-size: 2.4em;
            //     padding:0 10%;
            //     .m{
            //         padding: 0 10%;
            //         img {
            //             width: 30%;
            //         }
            //     }
            // }
        }
        // 底部
        .bto{
    
            // 左侧
            .activity{
                // padding: 0 5%;
      
                h3{
                    text-align: left;
                    margin-top: 0;
                }
            }
            // 右侧
            .rule{
                margin-top: 8%;
                h3{
                    text-align: center; 
                }
                p,span{
                    font-size: 2em;
                }
                 img{
                    width: 20%;
                    top:-10%;
                    left:35%;
                }
            }
        }
        
    }
}    

</style>
