<template>
	<div class="news">
		<MyNav :bgColor="bgColor_cur"></MyNav>
        <main>
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                  <img class="left"   :src="cloud" alt="">
                  <img class="right" :src="cloud" alt="">
            </div>
            <!-- <Waves></Waves> -->
            <!-- 导航栏 -->
            <div :class="{'hidden-xs':true,'sticky':true,'fixed':isfixed}">
               <ul>
                   <li class="text-center">
                       <a v-for="(item,index) in nav" @click="switchType(index+1)" v-text="item.title" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"></a>
                   </li>
               </ul>
            </div>
            <div id="alert" class="alert" >
                <div class="main" id="main" :style="{'background':`url(${alertyellow}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    <img :src="close" alt="" class="close_x" id="close">
                    <img :src="border" alt="" class="border">
                    <div class="center">
                        
                        <div class="desc">
                            <img :src="pic" alt="">
                        </div>
                        <h3 v-text="temptitle"></h3>
                        <div class="line">
                            <img :src="line" alt="" class="line_img">
                        </div> 
                        <!-- 测试数据 -->
                        <p>
                            <span>活动时间: </span>
                            <span>2018年1月11日-2018年2月22日</span>
                        </p>
                        <p>活动规则:</p>
                        <p>小小运动馆已经签约的会员每成功推荐1个家庭报名【50课时及以上】,推荐人将会获得:</p>
                        <p>1) 当地现有同城优惠和新年机会卡1张(同城推荐)</p>
                        <p>2) 新年机会卡1张(异地推荐)</p>
                        <p>被推荐人将会获得: 当地现有同城优惠.</p>
                        <p>奖品设置:</p>
                        <div>
                            <span>Tada拉杆箱</span>
                            <span>京东购物卡(100-500)</span>
                            <span>Hape TLG联名工具箱</span>
                            <span>随机红包</span>
                        </div>
                        <p>活动流程</p>
                        <p>第一步: 会员登录页面,输入报名时登记的手机号,创建个人推荐主页;非会员是无法生成个人推荐页面的.</p>
                    </div>
                </div>
            </div>
           
           
            <!-- 中心内容 -->
            <div class="container">
                <ul>
                    <li v-for="(item,index)  in News.list"  class="col-sm-4">
                        <div class="list"  :num="index">
                            <img :src="item.headPic" alt="">
                            <div class="words">
                                 <h3 v-text="item.title"></h3>
                                <img :src="line" alt="">
                                <p v-html="item.summary"></p>
                            </div>
                        </div>
                    </li>
                    <li class="page">
                        <div class="block">
                        <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="pageNum"
                            layout="prev, pager, next"
                            :total="News.total">
                        </el-pagination>
                        </div>
                            <!-- <span>                          
                                <img :src="pre" alt="">
                            </span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>
                                <img :src="next" alt="">
                            </span> -->
                    </li>
                </ul>
            </div>
            <Common></Common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter :bgColor="bgColor_cur"></MyFooter>

	</div>
	
</template>
<script>
    import news from './news'
    import MyNav from '~/components/MyNav.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import axios from 'axios'
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'
    import GoTop from '~/components/GoTop.vue'
    export default {
         head:{
            title:"新闻中心",
            script:[
                {src:"/js/news.js"}
            ]
        
        },
        computed:{
            ...mapState([
              'LanguageType',
              'News'
            ]),
            ...mapGetters([
                'bgColor_cur'
            ]),
            originY(){
                return document.querySelector('.sticky').offsetTop
            },
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
            }
        },
        components: {
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop
        },
        methods: {
            handleCurrentChange(val) {
                this.pageNum=val;
                this.getNews();
                console.log(`当前页: ${val}`);
            },
            switchType(val){
                this.type=val;
                this.getNews();
            },
            getNews(){
                var param ={
                    pageNum:this.pageNum,
                    type:this.type,
                    LanguageType:this.LanguageType
                }
                this.$getData(this.baseUrl+"/api/getNews",'News',param);
            },
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
            if(!this.News||this.News.length==0){
               this.getNews();
            }
            window.addEventListener('scroll',this.stickyHeader);
        },
        destroyed(){
            window.removeEventListener('scroll',this.stickyHeader);
        }
    }

</script>
<style lang="scss" scoped>
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
        padding-top:35%;
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
        }
        
       
        display: none;
        
        font-size: 1em;
        .close_x{
                position: absolute;
                transform: scale(0.5);
                right:2%;
                cursor: pointer;
                top:2%; 
        }
        .border {
             
                transform: rotateZ(180deg);
              
       
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
                border: 2px solid #DADADA;
                border-top: 2px solid transparent;
                border-radius:0 0 5px 5px;
                padding: 0 6%;
                margin-bottom: 3%;
                border-bottom: 5px solid #F58026;
                text-align: center;
              
                h3{
                    text-align: left;
                    line-height: 1.2em;
                    width: 80%;
                    color:#4D5EA0;
                }
                p{
                    text-align: left;
                    margin:0 0 4%;
                    color: #909090;
                }
            }
        }
         li:nth-child(2),li:nth-child(5){
             .words{
                  border-bottom: 5px solid #C2D72F;
             }
           
        }
        li:nth-child(3n){
             .words{
                  border-bottom: 5px solid #36A6DE;
             }
           
        }
        .page {
            span {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 1px solid #909090;
                display: inline-block;
                text-align: center;
                line-height: 20px;
                cursor: pointer;


            }
            span:first-child,span:last-child{
                border: none;
            }
        }
        
    }
}


@media screen and(min-width:"1200px") {
    .news{
        .alert {
            .main{
                .close_x{
                    top:4%;
                    right:3%;
                }
                
            }
           
        }
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
