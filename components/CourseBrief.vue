<template>
 <div class="container-fluid hidden-xs">
    <div class="row bg-top">
        <div :style="{'background':`url(${top_url[1]}) no-repeat`}"  class="col-sm-12 text-center image" >
            <p><img :src="top_url[0]" height="191" width="351"/></p>
            <h1 class="media-heading text-center">{{top_title}}</h1>
        </div>
    </div>
    <div class="row course">
        <div class="col-sm-2 offset"></div>
        <div v-for="item,index in triD_info" :class="item.class">  
           <div class="row">
              <p class="text-center"><img :src="item.top_img_url"/></p>
              <p class="text-center title" v-text="item.title"></p>
              <p class="text-center footer">
                 <div class="more" :style="{'background':`url(${item.btn_url}) no-repeat`,'background-size': 'cover'}"><p class="text-center">{{item.btn_name}}</p></div>
              </p>
          </div>
        </div>

    </div>
</div> 

 

</template>
<script>
 import ImgButton from '~/components/ImgButton.vue'
 export default {
  components: {
    ImgButton
  },
  data () {
    return {
          top_title: "《成长季》Tips",
          top_url:[
            "/img/index/cloud-big.png",
            "/img/index/blog-clouds-bg.png"
          ],
         'triD_info': [{
           class:"col-sm-3",
           title:"春季长高系列",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-1.png",
           btn_url:"/img/index/btn_blue.png" 
        },{
           class:"col-sm-3",
           title:"提升亲子关系系列",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-2.png",
           btn_url:"/img/index/btn_blue.png" 
        },{
           class:"col-sm-3",
           title:"前庭觉系列",
           btn_name:"阅读更多",
           top_img_url:"/img/index/3D-3.png",
           btn_url:"/img/index/btn_blue.png" 
        }]
       
    }
  }
 }
</script>

<style scoped>

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
   // border:3px solid red;
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
   // border:3px solid blue;
}
 .more p{
    vertical-align: middle;
    //border:3px solid blue;
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
        //border:3px solid red;
    }
    .course .col-sm-3 .row {
      margin:auto 15%;
      border:3px solid #EEEEEE;
    }
   .more {
        width: 220px;
        font-size:40px;
        //border:3px solid red;
    }
    .bg-top h1 {
        font-size: 52px;
        margin-top: -12%;
       // border:3px solid red;
    }

}

</style>