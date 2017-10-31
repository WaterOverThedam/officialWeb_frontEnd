<template>
  
    <div class="my-media">
      <div class="media">
          <div class="media-body">
            <h2 class="media-heading" style="margin-right:20px">{{mediaAttr.comment.title}}</h2>
            <div class="sub-body">
            <p>
              {{mediaAttr.comment.context}} 
            </p>
            <div class="icon-left"></div>
            <div class="icon-right"></div>
            <ImgButton class="btn-comment" v-bind:btnAttr="mediaAttr.btn_comment"></ImgButton>
            </div>

          </div>
          <div class="media-right">
            <a href="#">  
               <img class="media-object" src="/img/index/marquee-franchise.png" alt="...">
            </a>
          </div>
    </div>
    <div  class="my-media-buttom"> 
      <img class="cloud" src="/img/index/clouds-teal.png" alt="">
      <span class="nearGym">到离你最近的小小运动馆</span>
      <ImgButton class="btn-city" v-bind:btnAttr="mediaAttr.btn_city"></ImgButton>
      <ImgButton class="btn-search" v-bind:btnAttr="mediaAttr.btn_search"></ImgButton>
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
   
    }
  }
 }
</script>

<style scoped>  
.my-media{
  width: 100%;

 } 
.my-media-buttom{
  margin:0 auto;
  //border:3px solid blue;
  width: 100%;
}
.nearGym {
    height: auto;
    max-height: 100%;
    color: white;
    padding-top: 100px;
    font-size: 40px;
    position:absolute;
    left:28%;
    z-index:6011 ;
    //border:3px solid red;
}
 
.btn-city{
  margin:0 auto;
  color: white;
  margin-top:-180px;
  margin-left: 30%;
  z-index:60010;
 //border:3px solid blue;
}
.btn-search{
  margin:0 auto;
  color: #33CCCC;
  margin: 0 auto;
  margin-top:-220px;
  margin-left: 50%;
  z-index:6011 ;
  //border:3px solid blue;
}
.btn-comment{
  margin-top: 90px;
  margin-left: 10px;
  color: #5DCCC9;
}
 
.media-object{
  height: 380px;
  margin-right: 80px; 
}
.sub-body{
  margin:0 auto; 
  margin-top:10px;
  width: 300px;
  //border:3px solid blue;
}

@media(max-width:768px){
  .sub-body{
     margin-right:-5px;

  }
  .media-object{
     margin-left:0px;
     margin-right:0px; 
     padding-right: 0px;
    // border:3px solid blue;
  }
  .icon-right {
    margin-right:0px; 
  }
}


@media(max-width:1090px){
  .nearGym {
    color: white;
    padding-top: 44px;
    font-size: 30px;
    position:absolute;
    left:28%;
    z-index:6011 ;
    //border:3px solid red;
  }
  .btn-city{
    margin-top:-100px;
  }
  .btn-search{
    margin-top:-140px;
 }
}

.media-body h2 {
  color: #B5D70F;
  text-align:center;
}

.media-body p{
  width:100%;
  margin-top:20px;
  margin-left: 20px;
  max-width: 250px;
  color: #6971A5;
  font-size:16px;
  
}

@media(max-width:768px){
  .nearGym {
    color: white;
    margin-top: -42px;
    font-size: 24px;
    position:absolute;
    left:28%;
    z-index:6011 ;
    //border:3px solid red;
  } 
  .btn-city,.btn-search{
    height: 8%;
    width: 18%;
  }
  .media-body p{
    font-size:13px;
  }
 
}



.cloud{
  margin-top: -50px;
  width: 100%;
  float: left;
}
.icon-left {
  background:url("/img/index/corp-blockquotes-sprite.png");
  background-repeat:no-repeat;
  background-position: 0px 0px;
  margin-top:-160px;
  margin-left:-50px;
  height:57px;
  width:67px;
  //border:3px solid blue;
}

.icon-right {
  background:url("/img/index/corp-blockquotes-sprite.png");
  background-repeat:no-repeat;
  background-position: -75px 0px;
  margin-top:90px;
  height:60px;
  width:70px;
  float:right;
  //border:3px solid blue;
}

</style>