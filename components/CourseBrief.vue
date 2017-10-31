<template>
  
  <div class="my-Course">
    <span class="title">{{top_title}}</span>
    <img class="big-cloud" src="/img/index/cloud-big.png" >
    <div class="arrow-down" ></div>
    <div class="blog-cloud showCase"></div>
    <div class="three-D">
      <div v-for="item,index in triD_info" :class="item.class">
        <img :src="item.top_img_url" alt="">
        <span v-text="item.title"></span>
        <img :class="'btn btn'+index" :src="item.btn_url">
        <span class="btn-name" v-text="item.btn_name"></span>
      </div>
    </div>
  </div>

</template>
<script>
 import MyButton from '~/components/MyButton.vue'
 import ImgButton from '~/components/ImgButton.vue'
 export default {
  props: ["mediaAttr"], 
  components: {
    MyButton,
    ImgButton
  },
  data () {
    return {
          top_title: "《成长季》Tips",
         'triD_info': [{
           class:"item grow",
           title:"春季长高系列",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-1.png",
           btn_url:"/img/index/bottom_blue.png" 
        },{
           class:"item parent-child",
           title:"提升亲子关系系列",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-2.png",
           btn_url:"/img/index/bottom_blue.png" 
        },{
           class:"item visual",
           title:"前庭觉系列",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-3.png",
           btn_url:"/img/index/bottom_blue.png" 
        }]
       
    }
  }
 }
</script>

<style scoped>
  
  
  img {
     width:auto;
     height:auto;
     max-width:100%;
     max-height:100%;
     //border:3px solid blue;
  }
  .three-D {
    margin-top:-75px;
    margin-left: 28%;
  }

  .three-D .item span {
    display: block;
    margin-top: 50%;
    margin-left: 25%;
    font-size: 30px;
    color: #515E9A;
    width: 110px;
    //border:3px solid blue;
  }
  .item{
    margin-top: 100px;
    float:left;
    font-weight: normal;
    width: 200px;
    height: 350px;
    border:3px solid #EEEEEE;
  }
  .item img{
    float:left;
  }

  .title {
    padding-top: 16%;
    color: #B5D615;
    padding-left: 100px;
    font-size: 50px;
    font-weight: bold;
    position:absolute;
    left:28%;
    z-index:6011 ;
   // border:3px solid red;
  }
 
  .blog-cloud{
        margin-top:-200px;
        padding-top: 15%;
        background: url("/img/index/blog-clouds-bg.png") 50% 50% repeat;
        //border:3px solid blue;
   }
   .my-Course{ 
      width: 100%;
      height: 600px;
      margin:0 auto; 
      margin-top: -100px;
      //border:3px solid blue;
      margin-bottom:20px;
      
   } 

   .big-cloud{
       margin-left: 30%;
       margin-top: 30px;
   }


   .three-D .item  .btn{
     margin-top: 100px;
   }

   .three-D .item .btn1{
     margin-top: 58px;
   }

   .three-D .item .btn-name{
     float:left;
     width:auto;
     height:auto;
     max-width:100%;
     max-height:100%;
     margin-top:-50px;
     color:white;
     font-size: 25px;
    
   }


   @media(max-width:992px){
       .big-cloud {
           width:30%;
           height:20%;
       }
       .title{
          font-size:25px;
          margin-top: 2px;
          width:40%;
          height:40%;
       }
       .three-D .item {
          margin-top: 125px;
          height: 200px;
          width:  120px;
       }
       .three-D .item span {
        font-size: 15px;
        color: #515E9A;
        width: 50px;
        //border:3px solid blue;
       }
       .three-D .item .btn-name{
         font-size: 15px;
         margin-top:-32px;
         color:white;
       }

       .three-D .item  .btn{
         margin-top: 60px;
       }

       .three-D .item .btn1{
         margin-top: 40px;
       }
       .my-Course{
         height:400px;
       }

   }

   @media(max-width:768px){
       .title{
          font-size:18px;
          margin-top: 25px;
          width:40%;
          height:40%;
       }
       .three-D .item {
          margin-top: 115px;
          height: 160px;
          width:  90px;
       }
       .three-D .item span {
        font-size: 15px;
        color: #515E9A;
        width: 35px;
        //border:3px solid blue;
       }

       .three-D .item .btn-name{
         font-size: 10px;
         margin-top:-24px;
         color:white;
       }

       .three-D .item  .btn{
         margin-top: 22px;
       }

       .three-D .item .btn1{
         margin-top: 1.5px;
       }
      .my-Course{
         height:350px;
      }
  }
</style>