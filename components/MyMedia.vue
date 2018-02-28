<template>
 
<section>
    <div class="container-fluid">
        <div class="row image" :style="{'background':`url(${media_Bottom.url})`,'background-size':'cover','-webkit-background-size':'100%'}">
            <div class="col-sm-12" >  
                <h1 class="media-heading text-center our-gym" v-text="media_Bottom.title"></h1>
                <div class="row cover">
                    <div class="col-sm-6 col-xs-6 text-right">
                          <ImgButton class="btn-city" v-bind:btnAttr="media_Bottom.btn_city"/>
                    </div>
                    <div class="col-sm-6 col-xs-6 text-left">
                           <ImgButton class="btn-search" v-bind:btnAttr="media_Bottom.btn_search"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
 import ImgButton from '~/components/ImgButton.vue'
 export default {
  components: {
    ImgButton
  },
  data () {
    return {
        btn_comment: {
           url:"/img/index/btn_empty.png",
           name:"查看所有的评论",
           height:60,
           width:250
        },
        comment:{
          title:"家长的话",
          content:`整个运动过程，非常欢乐，宝宝第一次体验就很放得开。全程配合老师，听指令。老师的保护措施很到位。专业的单杠，平衡木，侧手翻，翻跟头，很欢乐。`,
          picUrl:"/img/index/marquee-franchise.png" 
        },
        quotes:[
          "/img/index/left-quote.png",
          "/img/index/right-quote.png"
        ],
        media_Bottom:{
            title:"找到离你最近的小小运动馆",
            url:"/img/index/clouds-teal.png",
            btn_city: {
               url:"/img/index/btn-white-border.png",
               name:"城市",
               height:40,
               width:70
            },
            btn_search: {
               url:"/img/index/btn-white-bg.png",
               name:"搜索",
               height:40,
               width:70
            }
        }
    }
  }
 }
</script>

<style scoped>  
 
 img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
    //border:3px solid red;
}
 
   
.btn-city{
  color: white;
  padding-right: 0px;
}
.btn-search{
  color: #33CCCC;
  padding-left: 0px;
}

.media-object img{
  height: 400px;
} 

.title {
    margin-top:10px;
    color: #B5D70F;
    font-size:40px;
    vertical-align: bottom;
    padding-bottom: 0px;
}

.our-gym{
    color: white;
    font-family:"Times New Roman",Georgia,Serif;
    font-size: 43px;
    font-weight: bold;
    //letter-spacing: 3px;
    margin-bottom: 10px;
}
 
 
.content{
    text-indent:2em;
    padding-top: 50px;
    padding-left: 30px;
    height: 280px;
    color: #6971A5;
    font-size:16px;
}

.btn-name{
    display:block;
    margin-left:15px;
    margin-top: -63px;
    color: #5DCCC9;
    font-size:28px;
}

.left-icon{
    padding-right: 0px;
    margin-left: 40px;
    margin-right: -40px;
}
.right-icon{
    height: 280px;
    padding-left: 0px;
    padding-top: 180px;
    margin-left: -30px;
    margin-right: 30px;
}



.image{
    //border:3px solid blue;
    padding-top: 10%;
    padding-bottom: 6%;
    margin-bottom: 20px;

}




@media(max-width:992px) {
    .our-gym{
        margin-top: 40px;
        //border:3px solid blue;
    }

}
@media(max-width:568px) {
    .btn-name{
        margin-top: -65px;
        margin-left:10px;
        font-size:22px;
        padding-top:10px;
        padding-right: 5px;
    }
    .cover{
        margin-top: 30px;
        //border:3px solid blue;
    }
    .our-gym{
        margin-top:55px;
        font-size: 33px;
    }
    .media-object img{
      height: 250px;
    } 
     
}


</style>