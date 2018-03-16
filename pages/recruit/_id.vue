<template>
  <div class="detial">
      <div id="logo"></div>
      <main>
      <div class="banner"> 
          <img :src="detial.banner" alt="">
      </div>
      <Waves></Waves>
      <!-- 弹出层 -->
      <div id="login" class="login fixed " :style="{'background':`url(${detial.alertbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
          <span  id="close" class="text-right"  :style="{'background':`url(${detial.bgblue}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% 100%'}" >关闭</span>
          <form action="javascript:void(0)" method="post">
              <ul>
                  <li>
                     <input type="text" :placeholder="detial.pld1" :style="{'background':`url(${detial.write}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 1005'}"> 
                  </li>
                  <li>
                     <input type="text" :placeholder="detial.pld2" :style="{'background':`url(${detial.write}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}"> 
                  </li>
                  <li class="more">
                      <select id="centerName" name="center"  :style="{'background':`url(${detial.write}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}">
                          <option v-for="item in detial.selectword" :value="item.id" v-text="item.title" ></option>
                      </select>
                      <img :src="detial.more" alt="">
                  </li>
                  <li>
                      <input type="text"  :style="{'background':`url(${detial.write}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}">
                  </li>
                  <li class="submit" >
                      <input id="submit" type="submit" :style="{'background':`url(${detial.bgwhite}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}" v-model="detial.submit">
                  </li>

              </ul>
            
          </form>
      </div>
      <!-- 主体内容 -->
      <div class="container">
            <!-- 工作描述 -->
            <div class="row job_dec">
                <!-- 标题 -->
                <div class="title row">
                    <img :src="detial.cloud" alt="">
                    <h1 class="text-center" v-text="detial.titleName[paramsId].name"></h1>
                </div>
                <!-- 内容 -->
                <div class="row content">
                    <div class="col-sm-6 phone" v-for="(c,i) in detial.body[paramsId].job_dec">
                        <span v-text="c.title" :class="i%2==0?'top':''"></span>
                        <span v-text="c.content"></span>
                    </div>
                
                </div>
            </div>
            <!-- 责任描述 -->
            <div class="row  res_dec">
                <!-- 标题 -->
            
                <div class="title row">
                    <img :src="detial.cloud" alt="">
                    <h1 class="text-center" v-text="detial.title"></h1>
                </div>
                <!-- 内容 -->
                <div class="row content" >
                    <div class="row bottom"  v-for="b in detial.body[paramsId].res_dec">
                        <ul>
                            <p v-text="b.title"></p>
                            <li v-for="d in b.content" v-text="d.dec" ></li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- 申请按钮 -->
            <div class="btn text-center">
                <!-- 返回按钮 -->
                <button id="back" v-text="detial.back" :style="{'background':`url(${detial.bgblue}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% 100%' }"></button>
                <button id="apply" v-text="detial.apply" :style="{'background':`url(${detial.bgblue}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"></button>
            </div>




      </div>
      <MyMedia></MyMedia>
      </main>
      <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>
  </div>
</template>
<script>
    import detial from "./detial"
    import Waves from '~/components/Waves.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    export default {
        head:{
            "title":"招聘详情",
            script:[
                    {src: '/js/recruit.js'},
                ]
        },
        data(){
            return{
             ...detial,  
            // ...recruit
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
        asyncData ({params}) {
            // 获取地址栏id
                var paramsId = params.id.slice(2)
            // 返回对应数组
                return {
                    paramsId
                }
        },
        components:{
            Waves,
            MyMedia,
            MyFooter
        }
    }
    
</script>
<style lang="scss" scoped>
.detial {
    font-size: 12px;
    overflow: hidden;
    p{
        margin: 0;
    }
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
        
    }
    img {

        width:100%;
        height:100%; 
    }
    .banner {
        margin:0;
        padding:0;
        width:100%;
    }
    .login {
        display: none;
        position: fixed;
        width: 70%;
        text-align: center;
        z-index: 100;
        left: 50%;
        top: 5%;
        transform: translateX(-50%);
        padding:4% 0; 
        #close{
            font-size: 2em;
            display: inline-block;
            margin-right: -82%;
            padding: 2% 5%;
            cursor: pointer;
        }
        .more{
            position: relative;
            img{
                position: absolute;
                width:9%;
                right:16%;
                top:4%;
                pointer-events: none;
                height:auto;
            }
        }
        li {
            height: 7em;
            line-height: 7em;
            margin-bottom: 4%;
            input{
                width: 70%;
                border: none;
                outline: none;
                text-indent: 5%;
                font-size: 2em;
                height:70%;
                line-height:70%;
            }
            select{
                width:70%;
                border: none;
                outline: none;
                padding-left:20px;
                font-size: 2em;
                line-height:2.5em;
                height:2.5em;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                option {
                    font-size: 2em;
                }
            }
            select::-ms-expand { display: none; }
            
        }
        .submit {
                input{
                    cursor: pointer;
                    width: 50%;
                    display: inline-block;
                    letter-spacing: 0.2em;
                    text-align: center;
                    border: none;
                    outline: none;
                    color: #01CFCD;
                }
            }
        
    }
    // 标题样式
    .title {
        position: relative;
        margin-top:6%;
        margin-bottom: 4%;
        img{
            position: absolute;
            width: 16%;
            transform: scale(1.3);
            top:-4em;
            left:30%;
        }
        h1{
            font-size: 5.5em;
            color:#B0C937;
        }
    }
    // 内容样式
    .content {
        font-size: 2em;
        span,li,p{
            color:#969696;
        }
        li {
            width: 90%;
            margin-bottom: 8px;
        }
        p{
            margin-bottom: 4px;
        }
        
       .top{
           padding-left: 30%;
       }
       .bottom {
           padding-left: 20%;
       }
    }
    // 岗位职责
    .res_dec{
        .content{
            div{
                margin-bottom: 15px;
            }
            div:nth-child(3),div:nth-child(4){
                margin-top: 5% ;
            }
        }
    }
    //按钮
    .btn{
        width: 100%;
          padding-right: 10%;
         button{
            // cursor: pointer;
            width: 30%;
            display: inline-block;
            font-size: 2em;
            letter-spacing: 0.2em;
            text-align: center;
            color: #fff;
            border: none;
            outline: none;
            padding: 2%;
        }
        #back{
            width: 15%;
            float: left;
            margin: 0;

        }
    }
       
}
// 大屏PC
@media (min-width:"1200px"){
     .detial{
         .login{
            width: 52%;
            left: 50%;
            top: 1%;
            transform: translateX(-50%);
            padding: 0;         }
     }
}
//ipad
@media screen and (max-width:"1000px") {
    .detial{
        
        .title {
            img{
                width: 30%;
                transform: scale(1);
                top:-3.5em;
                left:18%;
            }
        }
        .content{
            .top{
                padding-left: 18%;
            }
        } 
        .login {    
            width:75%;
            padding: 3% 0;
            .more {
                img{
                    width:10%;
                }
            }
        }
    }  
}
//移动端
@media screen and (max-width:"767px") {
    .detial{
        font-size: 5px;
        .title {
            img{
                width: 30%;
                transform: scale(0.6);
                top:-1.5em;
                left:22%;
            }
           
        }
        .btn{
            width: 100%;
            padding-right: 10%;
            button{
                // cursor: pointer;
                width:36%;
                display: inline-block;
                font-size: 1em;
                letter-spacing: 0.2em;
                text-align: center;
                color: #fff;
                border: none;
                outline: none;
                padding: 2%;
            }
        }
        .content{
            .phone span:nth-child(1){
                padding-left: 25%;
            }
             li{
                width: 86%;
            }   
        }  
        .login {
            li{
                line-height: 4em;
                height: 4em;
                margin-bottom:10%;
                select {
                    height: 3em;
                    padding-left:10px;
                }
                input{
                     height: 3em;
                }
            }
            .more{
                img{
                    width:10%;
                    top:20%;
                }
            }
            .submit{
                input{
                    padding-top: 2%;
                }
            }
            
        }
    }
   
}
</style>
