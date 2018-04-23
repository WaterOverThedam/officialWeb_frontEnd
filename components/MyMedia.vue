<template>
 
<section>
    <div class="container-fluid">
        <div class="row image" :style="{'background':`url(${media_Bottom.url})`,'background-size':'cover','-webkit-background-size':'100%'}">
            <div class="col-sm-12" >  
                <h1 class="media-heading text-center our-gym" v-text="media_Bottom.title"></h1>
                <div class="row cover">
                    <!-- <div @click="test()" class="col-sm-4 col-xs-4 text-right">
                          <ImgButton class="btn-city" v-bind:btnAttr="media_Bottom.btn_city"/>
                    </div> -->
                    <div class="col-sm-6 col-xs-6 text-right select">
                          <CitySelect></CitySelect>
                    </div>
                    <div  @click="goToSearch()" class="col-sm-6 col-xs-6 text-left search">
                           <ImgButton class="btn-search" v-bind:btnAttr="media_Bottom.btn_search"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
 import { mapState } from 'vuex'
 import { mapMutations } from 'vuex'
 import { mapActions } from 'vuex'

 import ImgButton from '~/components/ImgButton.vue'
 import CitySelect from '~/components/CitySelect.vue'
 export default {
    head:{
        link:[
            { rel:'stylesheet',type:'text/css',href:'/css/reset.css'}
        ],
    },
  data() {
        return {
            citySelected:"",
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
                title:"找到离您最近的小小运动馆",
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
  },
  components: {
    ImgButton,
    CitySelect
  },
  computed:{
      ...mapState([
        'city',
        'gyms'
      ]),
  },
  methods:{
      ...mapMutations([
         "getGyms"
      ]),
      goToSearch(){
            this.$router.push("/search#map");
      },
      test(){
          console.log(JSON.stringify(this.gyms))
      }
 },    
  mounted(){
    // this.getGyms();
  }
 }
</script>

<style scoped>  

 img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
    /* //border:3px solid red; */
}
.common {
    padding: 0;
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
    /* font-family:"Times New Roman",Georgia,Serif; */
    font-family: "GD-HEI";
    font-size: 50px;
    font-weight: bold;
    /* //letter-spacing: 3px; */
    margin-bottom: 10px;
}
 
.cover{

}
.cover .select{
/* height:100%; */
margin-top:8px;

   
}

.cover .search{
    height:100%;
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
    /* //border:3px solid blue; */
    padding-top: 10%;
    padding-bottom: 6%;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    background-color: #fff;

}




@media(max-width:992px) {
    .our-gym{
        margin-top: 40px;
        /* //border:3px solid blue; */
    }

}
@media(max-width:767px){
    .cover .select{
        /* width: 100%; */
        padding: 0 0 0 18%;
        text-align: center;
    }
  

    .cover .search{
        /* width: 100%; */
        text-align: left;
       
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
        margin-top: 10px;
        /* //border:3px solid blue; */
    }
    .our-gym{
        margin-top:40px;
        font-size: 24px;
    }
    .image{
        padding-top: 3%;
        padding-bottom: 4%;
        /* margin-top: 12%; */
        margin-bottom: 0;
    }

    .media-object img{
      height: 250px;
    } 
     
}


</style>