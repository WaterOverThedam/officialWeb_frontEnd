<template>
	<div class="news">
		<MyNav></MyNav>
        <main>
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                  <!-- <img class="left"   :src="cloud" alt="">
                  <img class="right" :src="cloud" alt=""> -->
            </div>
            <Waves></Waves>
            <!-- 导航栏 -->
            <div :class="{'sticky':true,'fixed':isfixed}">
               <ul>
                   <li class="text-center">
                       <a v-for="(item,index) in nav" @click="switchType(index+1)" v-text="item.title" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"></a>
                   </li>
               </ul>
            </div>
            <div v-show="isShow" id="alert" class="alert" >
                <div class="main" id="main" :style="{'background-image':`url(${alertyellow})`}">
                    <img :src="close" alt="" class="close_x" id="close" @click="closeDetail">
                    <img :src="border" alt="" class="border">
                    <div class="center">
                        
                        <div class="desc">
                            <img :src="alertPic" alt="">
                        </div>
                        <h3 v-text="alertTitle"></h3>
                        <div class="line">
                            <img :src="line" alt="" class="line_img">
                        </div> 
                        <!-- 测试数据 -->
                       <div class="detail" v-html="alertContent">

                       </div>
                       
                    </div>
                </div>
            </div>
           
           
            <!-- 中心内容 -->
            <div class="container">
                <ul class="uls">
                    <li v-for="(item,index)  in News.list"  class="col-sm-4 lis" @click="showNews(item)">
                        <div class="list"  :num="index">
                            <img :src="item.headPic" alt="">
                            <div class="words">
                                <h3  v-text="item.title"></h3>
                                <!-- <h3 v-if="item.type==2" v-text="item.title"></h3> -->
                                <!-- <h3 v-else v-text="str(item.title)"></h3> -->
                               
                                <img :src="line" alt="">
                                <div class="title2" v-html="item.summary"></div>
                                <!-- <p v-text="item.summary"></p> -->
                            </div>
                        </div>
                    </li>
                   
                    <li>
                       
                    </li>
                </ul>
         
               
            </div>
               <div class="container block">
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="pageNum"
                        layout="prev, pager, next"
                        :total="News.total">
                    </el-pagination>
                </div>  
             
        
            <Common></Common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <!-- <MyFooter :bgColor="bgColor_cur"></MyFooter> -->
        <MyFooter ></MyFooter>

	</div>
	
</template>
<script>
    import news from './news'
    import MyNav from '~/components/MyNav.vue'
    import Waves from '~/components/Waves.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import axios from 'axios'
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import GoTop from '~/components/GoTop.vue'
    export default {
         head:{
            title:"新闻中心",
             link:[ 
                { rel:'stylesheet',type:'text/css',href:'/css/reset.css'}
            ],
            script:[
                {src:"/js/news.js"}
            ]
        
        },
        computed:{
            ...mapState([
              'LanguageType',
              'News'
            ]),
            originY(){
                return document.querySelector('.sticky').offsetTop
            },
            // 公共地址
            baseUrl(){
                return this.$conf.evnData[this.$conf.env_cur].baseUrl;
            }
        },
         // 数据来源
        data(){
            return {
                 pageNum:1,
                 type:1,
                 isfixed:false,
                ...news,
                isShow:false,
                alertPic:'',
                alertTitle:'',
                alertContent:'',

            }
        },
        components: {
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop,
            Waves
        },
        methods: {
            // 过滤字符串
            // str(str){
            //     return str = str.substr(4)
            // },
            // 新闻详情
            showNews(item){
                // console.log(item);
                this.alertPic= item.headPic;
                this.alertTitle= item.title;
                this.alertContent= item.content;
                this.isShow = true;
                

            },
            closeDetail(){
                this.isShow = false;
            },
            handleCurrentChange(val) {
                this.pageNum=val;
                this.getNews();
                console.log(`当前页: ${val}`);
            },
            //替换新闻类型
            switchType(val){
                this.type=val;
                this.getNews();
                console.log(this.News)
            },
            // 获取新闻
            getNews(){
                var param ={
                    pageNum:this.pageNum,
                    type:this.type,
                    LanguageType:this.LanguageType
                }
                this.$getData(this.baseUrl+"/api/getNews",'News',param);
               
            },
            // 导航固定
            stickyHeader(){
                    var point = window.scrollY||pageYOffset;
                    if(point> this.originY){
                        this.isfixed=true;
                    }else{
                        this.isfixed=false;
                    }
            },        
        ...mapActions([
             "incrementAsync"
            ])
        },
        mounted(){
            // 如果News为空调用获取新闻
            if(!this.News||this.News.length==0){
               this.getNews();
              
            }
            // window.addEventListener('scroll',this.stickyHeader);
        },
        destroyed(){
            // window.removeEventListener('scroll',this.stickyHeader);
        }
    }

</script>
<style lang="scss" scoped>

// 本页面样式
.news{
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
        padding-top:32%;
        padding-bottom:15em;  
        position: relative;
         img{
            position: absolute;
            width: 50%;
            bottom:-5px;  
        }
    }
        /* * 吸顶效果 */ 
    .fixed {  
        position: fixed;  
        top: 45px;  
        background: #fff;
        z-index:301;
    }  
    .sticky {  
        width: 100%;
        padding: 1em 0;
        li{
            a{
                font-size: 2.6em; 
                cursor: pointer;
                color: #fff;
                display: inline-block;
                text-decoration: none;
                padding:1% 3%;
                margin: 0 3%;
            }
            a:nth-child(1),:nth-child(3){
                padding: 1% 6.5%;
            }
        }
       
    }
    // 弹出框内容    
    .alert {
        background: rgba($color: #000000, $alpha: 0.6);
        position: absolute;
        top:0;
        z-index: 9999;
        width: 100%;
        // height:100%;
        .main{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top:5%;
            width: 60%;
            padding: 6.5% 6% 5%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            // background-clip: content-box;
            background-position: center;
            .detail{
                height:500px;
                overflow: auto;
            }
        }
        
       
        // display: none;
        
        font-size: 1em;
        .close_x{
                position: absolute;
                transform: scale(0.5);
                right:2%;
                cursor: pointer;
                top:2%; 
        }
        .border {
             
                // transform: rotateZ(180deg);
              
       
            }
            
        .center {
                
     
            color:#8A8A8A;
            border-top: 1px solid red;
            background-color: #fff;
            padding: 2% 4%;
            h3{
                text-align: center;
                color:#6771AB;
                font-size: 1.6em;
            }
            .line {
                text-align: center;
            }
            p{
                margin: 3px 0  ;
            }
            div{
                margin-bottom: 1%;
                span{
                    color:#000;
                    border: 1px solid #000;
                    border-left:none;
                    display: inline-block;
                    padding: 1% 1%;
                }
                span:nth-child(1){
                    border-left:1px solid #000;
                }
                
            }
        }
    }

    // 主体内容
    .container{
        .list{
            cursor: pointer;
            margin: 4% 3%;
            .words{
                text-align: center;
                border: 2px solid #DADADA;
                border-top: 2px solid transparent;
                border-radius:0 0 5px 5px;
                padding: 0 5%;
                height:270px;
                border-bottom: 5px solid #F58026;
                overflow:auto;
              
                h3{
                    font-size: 1.6em;
                    color:#4D5EA0;
                }
                .title2{
                    color: #909090;
                    text-align: left;
                    margin-bottom: 4%;
                    font-size: 1.2em;
                     
                    
                }
            }
        }
         li:nth-child(2),li:nth-child(5),li:nth-child(8),li:nth-child(11){
             .words{
                  border-bottom: 5px solid #C2D72F;
             }
           
        }
        li:nth-child(3n){
             .words{
                  border-bottom: 5px solid #36A6DE;
             }
           
        }
    }
}
@media screen and(min-width:"1200px") {
    .news{
        .alert {
            .main{
                .close_x{
                    top:2%;
                    right:3%;
                }
                
            }
           
        }
    }
}
@media (max-width:768px){
    .news .container .list .words{
        height: 200px;
    }
    .news .alert .main .detail{
        height:300px;
    }
    .news .alert .close_x{
        top:0;
    }
}
@media screen and(max-width:"767px") {
    .news{
        .alert {
            .main{
                padding: 12% 9% 8%;
                top:2%;
                width: 94%;
                .close_x{
                    transform: scale(0.3);
                    top:-1%;
                    right:-2%;
                }
                
                .center {
                    div{
                        span:last-child{
                            border-left: 1px solid #000;
                        }
                    }
                }
                
            }
       
            
        }
    }






}
</style>
