<template>
<div class="container-fluid read">
    <div class="row bg-top">
        <div :style="{'background':`url(${top_url[1]}) no-repeat`}"  class="col-sm-12 text-center image" >
            <p><img :src="top_url[0]" height="191" width="351"/></p>
             <h1 class="media-heading text-center">{{top_title}}</h1>
        </div>
        
    </div>
    
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in triD_info" :class="item.class" :key="index">
                <div class="row border">
                    <div class="text-center"><img :src="item.top_img_url"/></div>
                    <p class="text-center title" v-text="item.title"></p>
                    <div class="text-center footer">
                        <!-- <div class="more" :style="{'background':`url(${item.btn_url}) no-repeat`,'background-size': 'cover'}"><p class="text-center">{{item.btn_name}}</p></div> -->
                        <div class="more" ><p class="text-center">{{item.btn_name}}</p></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="swiper-pagination"></div>
        
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</div>
    


</template>
<script>
 import ImgButton from '~/components/ImgButton.vue'
 export default {
    head:{
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
          hoverbg:"",
          top_url:[
            "/img/index/cloud-big.png",
            "/img/index/blog-clouds-bg.png"
          ],
         'triD_info': [{
           class:"col-sm-3",
           title:"荣获《Brentwood》杂志读者推荐大奖",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-1.png",
           btn_url:"/img/index/btn_blue.png" 
        },{
           class:"col-sm-3",
           title:"入围FranchiseTimes全美特许经营500强",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-2.png",
           btn_url:"/img/index/btn_blue.png" 
        },{
           class:"col-sm-3",
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
    // margin-bottom: 10%;
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
        margin-top: -1%;
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
    }
    .border{
        border:1px solid #EBEBEB;
        height:600px;
     
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
    .more{
        padding-top:3%;
        margin: 20% auto 0;
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
    .swiper-slide{
         

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-pagination-bullet{
        width: 15px;
        height: 15px;
    }

}
@media screen  and (min-width:"1200px"){
    .read{
       .border{
            width:400px;
         img{
            
             height:150px;
          
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
        .border{
            height:500px;
        }
        .more{
            font-size: 18px;
        }
        .title {
            font-size: 25px;
        }
    }
}
@media screen and(max-width:"767px"){
    .read{
        .bg-top h1 {
            font-size: 24px;
            margin-top: 20%;
        }
        .border{
            width: 85%;
        }
        .bg-top img{
            width: 40%;
        }
        .title {
            font-size: 33px;
       
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