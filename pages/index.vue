<template>
 <div class="index" id="index"> 
   <div id="logo"></div>
   <div class="warn" id="warn">
     <div class="bg">
       <h1 class="text-center">
         更新您的浏览器版本
       </h1>
       <div class="p">
         您当前IE浏览器版本过低.为了您更好的用户体验,建议您使用其他浏览器或升级IE浏览器版本<a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads">更新IE版本</a>  
       </div>
       <div class="line"></div>
       <!-- <a class="cl" id="cl">关闭</a> -->
     </div>

   </div>
    <MyNav :bgColor="bgColor[counterNow]"></MyNav>
    <main>
      <CarouselAll></CarouselAll>
      <BallMediaL :ballMediaAttr="ballMediaAttr[0]"></BallMediaL>
      <BallMediaR :ballMediaAttr="ballMediaAttr[1]"></BallMediaR>
   
      <CourseBrief></CourseBrief>
      <Common></Common>
      <MyMedia></MyMedia>
    </main>
    <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>
    <BespeakForm></BespeakForm>
  
 </div>
</template>

<script>

 
import MyNav from '~/components/MyNav.vue'
import CarouselAll from '~/components/CarouselAll.vue'
import BallMediaL from '~/components/BallMediaL.vue'
import BallMediaR from '~/components/BallMediaR.vue'
import MyMedia from '~/components/MyMedia.vue'
import Common from '~/components/Common.vue'
import CourseBrief from '~/components/CourseBrief.vue'
import MyFooter from '~/components/MyFooter.vue'
import BespeakForm from '~/components/BespeakForm.vue'

import { mapActions } from 'vuex'


export default {
  head:{
    title:"小小运动馆官网",
    script: [
        {src: '/js/index.js'}
    ] 
  },
  computed:{
    counterNow(){
      return parseInt(this.$store.state.counter/600)%this.bgColor.length;
    }
  },
  data () {
    return {
      isShow:false,
      bgColor:['#33CCCC','#5160AC'],
      ballMediaAttr:[
        {
            bgImg:"/img/index/banner.jpg",
             title:["Major fun ","Now in session"],
            ball:{
              position:"left",
              title:"我们的课程",
              word:`针对孩子成长的每一个阶段，从4个月到12岁，我们分别开设了不同的课程，丰富多彩的教学内容充满了运动、音乐、学习合作的快乐。孩子按照自己的节奏学习和进步。随着运动技能的增强，孩子的自信心也在不断成长。`,
              bgUrl:"/img/index/blue_loop.png",
              btnUrl:"/img/index/btn-white-bg.png",
              btnName:"点击查看",
              address:"/course",
              btnColor:"#4FC2C7"
            }
        },
        {
            bgImg:"/img/index/promo-parties-camps-lg.jpg",
            title:["Major fun ","Now in session"],
            ball:{
              position:"right",
              title:"派对和活动",
              word:`
              小小运动馆的开心生日是百分之百的狂欢，夏令营/冬令营将治愈孩子"深沉"的"无聊症"，每一个节目背后都有精心设计的教案，都有丰富多彩、新颖的活动，都充满了欢声笑语。`,
              bgUrl:"/img/index/yellow_loop.png",
              btnUrl:"/img/index/btn-white-bg.png",
              btnName:"点击查看",
              address:"/party",
              btnColor:"#B6C007"
            }
        }
      ],
      banners: [
        '/img/index/banner.jpg',
        '/img/index/promo-parties-camps-lg.jpg',
      ]
    }
  },
  components: {
    CarouselAll,
    MyNav,
    BallMediaL,
    BallMediaR,
    Common,
    MyMedia,
    CourseBrief,
    MyFooter,
    BespeakForm
    
  },
  methods: {
      ...mapActions([
        "incrementAsync"
      ]),

    
  },
  mounted(){
    this.incrementAsync();
  } 
 
}
</script>

<style scoped>
 .index{
   overflow: hidden;
 }

/* 提示浏览器升级 */
 .warn{
   position: fixed;
  background-color: #000;
  filter:Alpha(opacity=98);
   /* background: rgba(0, 0,0, 0.6); */
   display: none;
  
   
   width:100%;
   height:100%;
   z-index: 9999;
   /* display: none; */
  
 }
 .warn .bg{
  filter:Alpha(opacity=100);
   width: 50%;
   height:500px;
   background-color: #C1D72E;
   margin:30px auto;
   padding: 3% 5%;
 }
 .warn h1 {
   margin-bottom: 20%;
   color:#fff;
   font-family: "GD-HEI";
   font-size: 50px;
 }
 .warn .p {
   background-color: #fff;
   padding: 5% 5% 10%;
   font-size: 16px;
   font-family: "J-YUAN"
   
 }
 .warn .p a{
   cursor: pointer;
 }
 .warn .line{
   height: 2px;
   background-color: #fff;
   margin: 5% 0;
 }
 .warn .cl {
   display: block;
   float:right;
   padding: 2% 8%;
   background: #42CCCC;
   cursor: pointer;
   color:#fff;
   text-decoration: none;
   font-weight: 700;
 }
 .warn .cl:hover{
   background-color: #515FB0;
 }
 
  @media screen and (max-width:767px){
    main {
      margin-top: -3%;
    }
  }
 
</style>