<template>
	<div class="party">
		<MyNav :bgColor="bgColor[counterNow]"></MyNav>
        <main>
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                  <img class="left"   :src="cloud" alt="">
                  <img class="right" :src="cloud" alt="">
            </div>
            <!-- <Waves></Waves> -->
            <!-- 导航栏 -->
            <div :class="{'hidden-xs':true,'sticky':true,'fixed':isfixed}">
               <ul>
                   <li v-for="(item,index) in words" :class="index%2==0?'text-right':'text-left'">
                       <a v-text="item.title" :href="'#'+item.id"></a>
                       <img :src="item.pic" alt="" id="line">
                   </li>
               </ul>
            </div>
            <div class="container">
                <!-- 介绍 -->
                <div class="row title" id="party">
                    <p v-text="desc"></p>
                </div>
                <!-- 内容 -->
                <div class="row contents" >
                    <div class="col-sm-7">
                        <img :src="party" alt="">
                    </div>
                    <div class="col-sm-5 words first" >
                        <h3 v-text="words[0].title"></h3>
                        <img :src="partyhz" alt="">
                        <p v-text="words[0].content" ></p>
                    </div>
                </div>
                <div class="row contents" id="camp" >
                     <div class="col-sm-5 words second">
                        <h3 v-text="words[1].title" class="h3_camp"></h3>
                        <img :src="camphz" alt="">
                        <p v-text="words[1].content"></p>
                    </div>
                    <div class="col-sm-7">
                        <img :src="camp" alt="">
                    </div>
                </div>

            </div>
            <common></common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>

	</div>
	
</template>
<script>
    import party from './party'
    import MyNav from '~/components/MyNav.vue'
    import Waves from '~/components/Waves.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import GoTop from '~/components/GoTop.vue'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        head:{
            title:"派对和夏令营",

            script:[
                //  {src: '/js/sticky.js'},
            ]
        
        },
        computed:{
            bgColor(){
                return this.$store.state.bgColor;
            },
            counterNow(){
                return parseInt(this.$store.state.counter/600)%this.bgColor.length;
            },
            originY(){
                return document.querySelector('.sticky').offsetTop
            }
        },
         // 数据来源
        data(){
            return {
                 isfixed:false,
                ...party,
               
            }
        },
        components: {
            Waves,
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop
        },
         methods: {
             stickyHeader(){
                    var point = window.scrollY||pageYOffset;
                    if(point> this.originY){
                        this.isfixed=true;
                    }else{
                        this.isfixed=false;
                    }
             },        
        ...mapMutations([
            "tester"
             ]),
        ...mapActions([
             "incrementAsync"
            ])
        },
        mounted(){
            window.addEventListener('scroll',this.stickyHeader);
        },
        destroyed(){
            window.removeEventListener('scroll',this.stickyHeader);
        }
    }
    
</script>
<style lang="scss" scoped>
.party{
    color:#8C94C1;
    overflow: hidden;
    font-family: "J-YUAN";
    .left{
       left: 0;
    }
    .right{
        right:0;
    }
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    #banner{
        margin:0;
        padding:0;
        width:100%;
        margin-top:3%;
        padding-top:40%;
        padding-bottom:15em;  
        position: relative;
         img{
             position: absolute;
            width: 50%;
            bottom:-5px;
            // height: 10%;    
        }
    }
 
        /* * 吸顶效果 */ 
    .fixed {  
        position: fixed;  
        top: 45px;  
        background: #F5FBFE;
        z-index:101;
    }  
    .sticky {  
        width: 100%;
        padding-top: 2em;
        li{
            text-align: center;
            width: 50%;
            display: inline-block;
           
            a{
                font-size: 2.6em;
                margin: 0;
                color: #5662A3;
                cursor: pointer;
                display: block;
                text-decoration: none;
            }
            img{
                transform: scaleX(1.5);
                // visibility: hidden;
                // display: none;
            }
            a:hover #line{
                //  visibility:visible;
                // display: block;

            }

            a:hover,a:active{
                color:#47BDBF;
                
            }
            
            
        
        }
        li:nth-child(1){
             padding-left:20%;
        }
        li:nth-child(2){
             padding-right:20%;
        }
       
       
        

    }
    //中心内容
    .container{
        margin-top: 2%;
        // 标题文字介绍
        .title{
            font-size: 1.8em;
            p{
               margin: 0;
               padding: 0 15px;
            }
        }
        // 图片和内容列表
        .contents{
            background-color:#EEF9FF ;
            margin:5% 0;
            .col-sm-7,.col-sm-5{
                padding: 0;
            }
            
            // 文字内容
            .words {
                padding: 0 3%;
                font-size: 1.8em;
                position: relative;
                h3{
                    font-size: 1.8em;
                    margin-bottom: 5%;
                    color:#AECE26;
                }
                .h3_camp{
                    width: 60%;
                }
                img{
                    width: 20%;
                    position: absolute;
                    top:10%;
                    right:12%;
                }

            }
            // 第一个文字内容单独样式
            .first {
                margin-top: 5%;
                img{
                    top:-5%;
                }
            }
            //第二个文字内容单独样式
            .second{
                img{
                    right:20%;
                }
            }
        }   
    }   
}
// 适配
@media (min-width: 1200px){
     .party{
        .container{
            .contents {
                 //第一个文字内容单独样式
                .first{
                    img{
                        right:20%;
                    }
                }
                  
            }
        }
    }
        
  

}

 
@media screen and (max-width: 767px){
    .party{
        .container{
            .contents {
                // 文字内容
                .words {
                    margin-bottom: 4%;
                    img{
                        width: 12%;
                        position: absolute;
                        top:-2%;
                        right:40%;
                    }
                    .h3_camp{
                        width: 50%;
                    }
                } 
                 //第二个文字内容单独样式
                .second{
                    img{
                        right:40%;
                    }
                }
                  
            }
        }
    }
 
}
</style>
