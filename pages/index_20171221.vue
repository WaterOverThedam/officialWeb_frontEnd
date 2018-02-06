<template>
 <div> 
    <MyNav :bgColor="bgColor[counterNow]"></MyNav>
    <main>
      <CarouselAll></CarouselAll>
      <BallMediaL :ballMediaAttr="ballMediaAttr[0]"></BallMediaL>
      <BallMediaR :ballMediaAttr="ballMediaAttr[1]"></BallMediaR>
      <MyMedia :mediaAttr="mediaAttr"></MyMedia>
      <CourseBrief></CourseBrief>
    </main>
    <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>
    <li><a href="/">HOME</a></li>
    <li><nuxt-link :to="{name:'about',params:{userid:123}}">ABOUT</nuxt-link></li>
    <li><nuxt-link :to="{name:'lesson'}">lesson</nuxt-link></li>
    <li><nuxt-link :to="{name:'franchise'}">franchise</nuxt-link></li>
    <li><nuxt-link :to="{name:'service'}">service</nuxt-link></li>
    <li><nuxt-link :to="'/service/'+3">用户3</nuxt-link></li>
    <li><nuxt-link :to="'/service/list'">service_list</nuxt-link></li>
    <li><nuxt-link :to="'/service/detail'">service_detail</nuxt-link></li>
 
 </div>
</template>

<script>

import MyNav from '~/components/MyNav.vue'
import CarouselAll from '~/components/CarouselAll.vue'
import BallMediaL from '~/components/BallMediaL.vue'
import BallMediaR from '~/components/BallMediaR.vue'
import MyMedia from '~/components/MyMedia.vue'
import CourseBrief from '~/components/CourseBrief.vue'
import MyFooter from '~/components/MyFooter.vue'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  head:{
    title:"小小运动馆官网",
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport',content: 'width=device-width, initial-scale=1' },
        { name: 'applicable-device',content: 'pc,mobile' }
    ],
    link: [
        { rel:'stylesheet',type:'text/css',href:'/ui/bootstrap/css/bootstrap.min.css'},
        { rel:'stylesheet',type:'text/css',href:'/css/animate.css'}
    ],
    script: [
        {src: '/ui/jquery-3.2.1.min.js'},
        {src: '/ui/bootstrap/js/bootstrap.min.js'},
        {src: '/js/tlgc.js'}
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
              word:`针对孩子成长的每一个阶段，从4个月到12岁，我们分别开设了不同的课程，丰富多彩的教学内容充满了运动、音乐、学习合作的快乐。根据年龄的增长，各门课程循序渐进，孩子按照自己的节奏学习和进步。随着运动技能的增强，孩子的自信心也在不断成长。`,
              bgUrl:"/img/index/blue_loop.png",
              btnUrl:"/img/index/btn-white-bg.png",
              btnName:"点击查看",
              btnColor:"#4FC2C7"
            }
        },
        {
            bgImg:"/img/index/promo-parties-camps-lg.jpg",
            ball:{
              position:"right",
              title:"派对和活动",
              word:`意犹未尽？我们也想更多地陪伴您和您的孩子。无论是学校放假，还是您需要放松一个晚上，或者您想孩子一个特别的生日，小小运动馆的团队就在您的身边。小小运动馆的开心生日是百分之百的狂欢，夏令营/冬令营将治愈孩子"深沉"的"无聊症"，父母自由夜让父母们和孩子们各得所需。同我们的课程一样，每一个节目背后都有精心设计的教案，都有丰富多彩、新颖的活动，都充满了欢声笑语。`,
              bgUrl:"/img/index/yellow_loop.png",
              btnUrl:"/img/index/btn-white-bg.png",
              btnName:"点击查看",
              btnColor:"#B6C007"
            }
        }
      ],
      mediaAttr:{
        btn_comment: {
           url:"/img/index/btn-empty.png",
           name:"查看所有的评论",
           height:60,
           width:250
        },
        comment:{
          title:"家长的话",
          context:`整个运动过程，非常欢乐，宝宝第一次体验就很放得开。全程配合老师，听指令。老师的保护措施很到位。专业的单杠，平衡木，侧手翻，翻跟头，很欢乐。`,
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
      },
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
    MyMedia,
    CourseBrief,
    MyFooter
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
  @media screen and (max-width:767px){
    main {
      margin-top: 8%;
    }
  }
 
</style>