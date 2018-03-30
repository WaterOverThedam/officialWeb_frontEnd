<template>
 <div class="index"> 
   <div id="logo"></div>
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
    <!-- <BespeakForm></BespeakForm> -->
 
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
import { mapMutations } from 'vuex'
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
      bgColor:['#33CCCC','#5160AC'],
      ballMediaAttr:[
        {
            bgImg:"/img/index/banner.jpg",
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
    ...mapMutations([
      "tester"
      ]),
    ...mapActions([
      "incrementAsync"
      ])
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
  @media screen and (max-width:767px){
    main {
      margin-top: -3%;
    }
  }
 
</style>