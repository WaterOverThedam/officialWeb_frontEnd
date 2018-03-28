<template>
    <div class="outer">

        <div class="bespeak hidden-xs" v-show="isShow">
            <nuxt-link to="/bespeak" href="#">
             <img :src="bespeak" alt="">
            </nuxt-link>
            <span class="closes" @click.prevent="close">X</span>
           
        </div>

       <div v-for="(bgImg,index) in bgImgs" :id="'a'+index" :data-id="index" class="parent row-wrapper chevron-btm" :class="{'myFadein':index===counterNow}" :style="{'background-image':`url(${bgImg})`}">
         <component :is="which"></component> 
         <!-- 播放按钮 -->
         <!-- <div class="btn" :style="{'background':`url(${btPlay}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"></div> -->
       </div>
       <video dataSrc="http://tlgc.oss-cn-shanghai.aliyuncs.com/phpIntro/1.mp4" controls="" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" ></video>
    </div> 
</template>

<script>
import { mapActions } from 'vuex';
import MenuDecor from '~/components/MenuDecor.vue'
export default {
  data () {
    return {
        isShow:true,
        which:'MenuDecor',
        ff:false,
        bannerTop:"/img/index/bg_top.png",
        bgImgs:[
          "/img/index/hero-boy-holding-bars-lg.jpg",
          "/img/index/hero-girl-jumping-beam-lg.jpg",
          "/img/index/hero-baby-held-up-smiling-lg.jpg",
          "/img/index/hero-boy-back-hand-spring-lg.jpg",
          "/img/index/hero-girl-hanging-from-bars-lg.jpg"
        ],
        icon:"/img/index/asterisk.png",
        logo:"/img/index/logo.png",
        btPlay:"/img/index/play01.png",
        bespeak:"/img/index/bespeak.png",
        bottom:{
          title:[
             "全国同步教案",
             "寻找离你最近的中心"
          ],
          pic:[
             "/img/index/btn_long_blue.png",
             "/img/index/loop.png",
             "/img/index/arrow-down.png",
             "/img/index/waves.png"
          ] 
        }
  
    }
  },
  computed:{
    menu(){
      return this.$store.state.menu;
    },
    counterNow(){
      //console.log( parseInt(this.$store.state.counter/4))
      return parseInt(this.$store.state.counter/4)%this.bgImgs.length;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    json: function(value){
        return JSON.stringify(value)
    }
  },
  methods: {
     ...mapActions([
      "incrementAsync"
      ]),
      close(){
          return this.isShow = false;
      }
 
  },
  components: {
     MenuDecor
  },
  mounted () {
    if(navigator.userAgent.indexOf('Firefox')>=0){
       this.ff = true;
    } 
  }
}
</script>

<style scoped>
.bespeak{
    position: fixed;
    right: 0;
    bottom:0;
    z-index: 9999;
}
.closes{
    position: absolute;
    right: 0;
    color:white;
    font-weight: 800;
    top:29%;
    font-size: 20px;
    padding: 1% 3%;
    cursor: pointer;
}
.btn{
  width:5%;
  padding:8%;
  position:absolute;
  right:16%;
  bottom:6%;
  opacity:0.8;  
  /* //border:3px solid blue; */
}
video{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%; 
  object-fit: cover;
  display:none;
}
.row-wrapper::after {
    clear: both;
    content: "";
    display: table;
}
.menu .item a{
    background: transparent;
    transition: color 0.1s linear;
}
.menu .item a:hover{
    text-decoration: none;
    font-weight: 500;
    color: #5160AC;
}
.chevron-btm:after {
    position: absolute;
    bottom: -10px;
    z-index: 100;
    display: block;
    content: "";
    background-image: url(/img/index/chevron.png);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto 220%;
    /* //background-color:white; */
    width: 100%;
    height: 38px;
}

.outer {
    height:0;
    position: relative;
    margin: 0;
    padding: 0;
    margin-top:50px;
    padding-top: 55%;
    /* //max-height: 55.5em; */
    width:100%;
    /* //border:3px solid blue; */
}
img  {
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}

.menu .item img {
    margin-top: -8px;
}

.menu .item a {
    color:white;
    font-size: 20px;
}
.parent {
    margin:0px;
    padding: 0px;
    width:100%;
    /* //border:3px solid blue; */
    position: absolute;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    height: 100%;
    -webkit-transition: opacity 2s linear;
    -moz-transition: opacity 2s linear;
    -o-transition: opacity 2s linear;
    transition: opacity 2s linear;
    opacity:0;
}
 
 
.myFadein{
  opacity: 100;
  filter: alpha(opacity=100);
}
 

.parent .container{
    margin-top: -1%;
    /* //border:3px solid blue; */
}


 

 
.title{
    font-family: 'GD-HEI';
    color:white;
    margin-top: 9%;
    margin-bottom: 6%;
    font-size: 90px;
}
.find{
    padding:12px;
    color:white;
    font-size: 26px;
    margin-bottom: 10%;
}
 

 


@media(max-width:992px){
    .menu .item a {
        font-size: 15px;
    }
    .menu .item .asterisk {
        height: 22px;
        margin-top: -6px;
    }
    .menu .item{
        margin-right: 0;
        padding-right:0;
 
    }
    .arrow-down{
        margin-top: -20%;
        /* //border:3px solid red; */
    }

}

@media(max-width: 768px){
    .title{
        font-size: 40px;
    }
    .find{
        font-size: 14px;
        padding:6px;
    }
    .menu .item img {
        margin-top: 10px;
    }
    .ff-container{
        height: 280px;
    }

    /* 移动端细节修改 */
    .outer{
        padding-top: 600px;
    }
    #a0{
        background-position: 76% bottom;
    }
    #a1{
        background-position: 64% bottom;
    }
    #a2{
        background-position: 85% bottom;
    }
    #a3{
        background-position: 62% bottom;
    }
    #a4{
        background-position: 76% bottom;
    }
 

}
@media(max-width: 500px){
    .ff-container{
        height: 180px;
    }
    .find{
        padding:9px;
        color:white;
        font-size: 13px;
        /* //border:3px solid blue; */
    }
    .myfind{
        padding-top: 18px;
    }
     /* 移动端细节修改 */
    .btn{
        padding: 20%;
        bottom:45%;
        right:32%;
    }
 
 

}
</style>
