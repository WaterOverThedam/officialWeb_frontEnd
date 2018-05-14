<template>
<div class="container-fluid read">
    <div class="row bg-top">
        <div   class="col-sm-12 text-center image" >
            <p><img :src="top_url[0]" height="191" width="351"/></p>
             <h1 class="media-heading text-center">{{top_title}}</h1>
        </div>
        
    </div>
    
    <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in triD_info" :class="item.class" :key="index">
                <div class="row border">
                    <div class="text-center"><img :src="item.top_img_url"/></div>
                    <p class="text-center title" v-text="item.title"></p>
                    <div class="text-center footer">
                        <nuxt-link to="/news"><div class="more" ><p class="text-center">{{item.btn_name}}</p></div></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="swiper-pagination"></div>
        
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div> -->

   
    <div class="row news">
        <div class="gym-news">
            <div v-for="(item,index) in triD_info" :class="item.class" class="gym-box col-xs-12" :key="index">
                <div class="row border">
                    <div class="text-center"><img :src="item.top_img_url"/></div>
                    <p class="text-center title" v-text="item.title"></p>
                    <div class="text-center footer">
                        <nuxt-link to="/news"><div class="more" ><p class="text-center">{{item.btn_name}}</p></div></nuxt-link>
                    </div>
                </div>
            </div>
            <div v-for="(item,index) in triD_info" :class="item.class" class="gym-box col-xs-12" >
                <div class="row border">
                    <div class="text-center"><img :src="item.top_img_url"/></div>
                    <p class="text-center title" v-text="item.title"></p>
                    <div class="text-center footer">
                        <nuxt-link to="/news"><div class="more" ><p class="text-center">{{item.btn_name}}</p></div></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrow">
            <img :src="arr_prev" alt="" class="arrow-prev">           
            <img :src="arr_next" class="arrow-next" alt="">           
        </div>
        <ul class="uls">
            <li class="current"></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    



    <!-- <div class="row news">
        <el-carousel :autoplay="false" trigger="click" indicator-position="outside" class="hidden-xs">
            <el-carousel-item  v-for="(item,index) in triD_info" :class="item.class" :key="index">
                <div v-for="(item,index) in triD_info" :class="item.class" :key="index">
                    <div class="row border">
                        <div class="text-center"><img :src="item.top_img_url"/></div>
                        <p class="text-center title" v-text="item.title"></p>
                        <div class="text-center footer">
                            <nuxt-link to="/news"><div class="more" ><p class="text-center">{{item.btn_name}}</p></div></nuxt-link>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>

        <el-carousel :autoplay="false" indicator-position="outside" class="visible-xs-block">
            <el-carousel-item  v-for="(item,index) in triD_info" :class="item.class" :key="index">
                    <div class="row border">
                        <div class="text-center"><img :src="item.top_img_url"/></div>
                        <p class="text-center title" v-text="item.title"></p>
                        <div class="text-center footer">
                            <nuxt-link to="/news"><div class="more" ><p class="text-center">{{item.btn_name}}</p></div></nuxt-link>
                        </div>
                    </div>
            </el-carousel-item>
        </el-carousel>
        
    </div> -->

        

</div>
    


</template>
<script>
 import ImgButton from '~/components/ImgButton.vue'
 export default {
    head:{
        link:[
            { rel:'stylesheet',type:'text/css',href:'/css/reset.css'}
        ],

         script: [
            
            {src: '/js/swiper.js'},
        ]  
    },
  components: {
    ImgButton
  },
  data () {
    return {
          top_title: "新闻中心",
          arr_prev:"/img/search/prve.png",
          arr_next:"/img/search/next.png",
          top_url:[
            "/img/index/cloud-big.png",
            "/img/index/blog-clouds-bg.png"
          ],
         'triD_info': [{
           class:"col-sm-2",
           title:"荣获《Brentwood》杂志读者推荐大奖",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-1.png",
           btn_url:"/img/index/btn_blue.png" 
        },{
           class:"col-sm-2",
           title:"入围FranchiseTimes全美特许经营500强",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-2.png",
           btn_url:"/img/index/btn_blue.png" 
        },{
           class:"col-sm-2",
           title:"春季购课赢好礼 带您亲临俄罗斯世界杯现场",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-3.png",
           btn_url:"/img/index/btn_blue.png" 
        }]
       
    }
  }
 }
</script>

<style lang="scss" scoped>

.read{
    // border:1px solid red;
    
 




    img{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
    }
    .image{
        height: 300px;
        padding: 0px;
        
    }
    .bg-top h1 {
        font-size: 36px;
        color: #B5D615;
        padding-top: 0px;
        margin-top: -5%;
       font-family: "J-YUAN";
    }
    .bg-top p{
        padding-top: 0px;
        margin-top: -10px;
    }
    .bg-top{
        img{
            width:20%;
        }
    }
    .bg-top .image{
        height: 200px;
        margin: 0px;
        background-image: url(/img/index/blog-clouds-bg.png);
        background-repeat: no-repeat;
    }
    .news{
        // padding: 0  2%;

        // 新增
        height:500px;

        position: relative;
        // overflow: hidden;
 
        .gym-news{
            position: absolute;
            width: 200%;
            height:100%;
            .gym-box{
                background-color: #fff;
            }
        }
        .arrow{
            img{
                position: absolute;
                width: 40px;
                height: 40px;
                left:25px;
                top:50%;
                transform: translateY(-50%);
                cursor: pointer;
               
            }
            .arrow-next{
                left:auto;
                right:25px;
            }

        }
        ul{
            margin: 0;
            padding: 0;
            bottom: 0;
            position: absolute;
            bottom:-6%;
            left:50%;
            transform: translateX(-50%);
             z-index: 10;
            li{
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: #CCCCCC;
                margin: 0 3px;
                cursor: pointer;
               
            }
            .current{
                background-color:#42CCCC;
            }
        
        
        }
       

    }
    .border{
        border:1px solid #EBEBEB;
        // height:500px;
        height:100%;
        margin: 0 2%;
        cursor:pointer;
        img{
            width:100%;
          
        }
    }
    .title {
        padding:30px 10%;;
        height:250px;
        font-size: 44px;
        color: #515E9A;
        font-family: "J-YUAN";
    }
    a{
        text-decoration: none;
    }
    .more{
        padding-top:3%;
        margin: 20% auto 4%;
        color:white;
        font-size: 22px;
        padding-bottom: 2%;
        width:42%;
        font-family: "J-YUAN";
        cursor: pointer;
        background-image: url(/img/components/readbg.png);
        background-repeat: no-repeat;
        background-size: cover;
        P{
            padding: 5% 0 0;
        }
        &:hover{
            background-image: url(/img/components/read-hoverbg.png);
        }

    }

}

@media screen  and (min-width:"1200px"){
    .read{
        .bg-top .image{
            background-size: 100% 100%;
   
        }
        .news{
            height:600px;
            ul{
        
                bottom:-14%;

            }
        
        }
        
       
    }
}
@media screen and (max-width:1200px){
    .read{
        .title {
            padding:30px 5%;;
            font-size: 36px;
        }
       
    }
      
}
@media screen  and (max-width:"768px"){
    .read{
         .bg-top h1 {
            margin-top: 3%;
        }
        .news{
            height:350px;
            .arrow{
                img{
                    width: 30px;
                    height:30px;
                    
                }
                
            }   
        }
        
        .more{
            font-size: 18px;
        }
        .title {
            font-size: 25px;
             height:160px;
        }
    }
}
@media screen and(max-width:"767px"){
    .read{
        .bg-top h1 {
            font-size: 24px;
            margin-top: 15%;
        }
        .news{
            height: 450px;
            .gym-news{
                 width: 600%;
                 .gym-box{
                     width: 16.6667%;
                 }
            }
            
        }
        .border{
            width: 85%;
            margin: 0 auto;
            height:450px;        }
        .bg-top img{
            width: 40%;
        }
        .title {
            font-size: 33px;
             height:250px;
       
        }
        .more{
            margin: 0 auto;
            padding-bottom: 1%;
        }
      /* Center slide text vertically */
      display: block;
    }






 }
















/* 
.read{
    margin-bottom: 10%;
}
.offset{
  width:12.499999995%;
}
img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}

.image{
    height: 300px;
    padding: 0px;
}

.bg-top h1 {
    font-size: 44px;
    color: #B5D615;
    padding-top: 0px;
    margin-top: -6%;
}
 .bg-top p{
     padding-top: 0px;
     margin-top: -10px;
 }
 
.bg-top .image{
    height: 200px;
    margin: 0px;
}

.course .col-sm-3 .row {
    border:2px solid #EEEEEE;
}
.title {
    padding:30px 40px;
    height:250px;
    font-size: 44px;
    color: #515E9A;
}

.more{
    padding-top:6%;
    margin: 0px auto;
    color:white;
    font-size: 30px;
    padding-bottom: 2%;

}
 .more p{
    vertical-align: middle;

} 
  
 


@media(max-width:992px) {
    .title {
      font-size: 16px;
    }

 
}
@media(max-width:760px) {

    .course{
      margin-top:5%;
    }
    .title {
        font-size:40px;
        height:125px;
        margin-top:-12px;
        margin-bottom:60px;

    }
    .course .col-sm-3 .row {
      margin:auto 15%;
      border:3px solid #EEEEEE;
    }
   .more {
        width: 220px;
        font-size:40px;

    }
    .bg-top h1 {
        font-size: 52px;
        margin-top: -12%;

    }

} */

</style>