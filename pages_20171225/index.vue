<template>
 <div> 
    <MyNav v-bind:navAttr="navAttr"></MyNav>
    <div class="showCase chevron-btm" :style="{'background-image': `url(${banners[0]})`}">
    </div>
    <div class="showCase chevron-btm" :style="{'background-image': `url(${banners[1]})` }">
    </div>
    <MyMedia :mediaAttr="mediaAttr"></MyMedia>
    <CourseBrief></CourseBrief>
    <MyBottom></MyBottom>
   <li><a class="b"href="/">HOME</a></li>
   <li><a class="a" href="/">HOME</a></li>
    <li><nuxt-link :to="{name:'about',params:{userid:123}}">ABOUT</nuxt-link></li>
    <li><nuxt-link :to="{name:'lesson'}">lesson</nuxt-link></li>
    <li><nuxt-link :to="{name:'franchise'}">franchise</nuxt-link></li>
    <li><nuxt-link :to="{name:'service'}">service</nuxt-link></li>
    <li><nuxt-link :to="'/service/'+3">用户3</nuxt-link></li>
    <li><nuxt-link :to="'/service/list'">service_list</nuxt-link></li>
    <li><nuxt-link :to="'/service/detail'">service_detail</nuxt-link></li>
    <button class="btn-primary">我是bootstrap</button> -->
    <link rel="stylesheet" href="/ui/bootstrap/css/bootstrap.min.css">
    <script src="/ui/jquery-3.2.1.min.js"></script>
    <script src="/ui/bootstrap/js/bootstrap.min.js"></script> -->
 
 </div>
</template>

<script>

import MyNav from '~/components/MyNav.vue'
import MyMedia from '~/components/MyMedia.vue'
import CourseBrief from '~/components/CourseBrief.vue'
import MyBottom from '~/components/MyBottom.vue'
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
        { rel:'stylesheet',type:'text/css',href:'/ui/bootstrap/css/bootstrap.min.css'}
    ],
    script: [
        {src: '/ui/jquery-3.2.1.min.js'},
        {src: '/ui/bootstrap/js/bootstrap.min.js'},
        {src: '/js/tlgc.js'}
    ] 
  },
  data () {
    return {
      navAttr: { 
        imgs: [
          '/img/signin/default.jpg',
          '/img/signin/1.jpg',
          '/img/signin/2.jpg',
          '/img/signin/3.jpg'
        ],
        menu: [
        "我们的课程",
        "派对和活动",
        "公益活动",
        "关于我们"
        ]
      },
      mediaAttr:{
        btn_comment: {
           url:"/img/index/btn-empty.png",
           name:"查看所有的评论",
           height:60,
           width:260
        },
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
        },
        comment:{
          title:"家长的话",
          context:`整个运动过程，非常欢乐，宝宝第一次体验就很放得开。全程配合老师，听指令。老师的保护措施很到位。专业的单杠，平衡木，侧手翻，翻跟头，很欢乐。`
        }
      },
      banners: [
        '/img/index/banner.jpg',
        '/img/index/promo-parties-camps-lg.jpg',
        '/img/signin/2.jpg',
        '/img/signin/3.jpg'
      ]
    }
  },
  components: {
    MyNav,
    MyMedia,
    CourseBrief,
    MyBottom
  },
  
  methods: {

    ...mapMutations([
      "tester"
      ]),
    ...mapActions([
      "incrementAsync"
      ])
  } 
 

}
</script>

<style scoped>
.a{
 font-size:33px;
 font-family: 'jian';
}
.b{
 font-size:33px;
 font-family: 'hei';
}


 
</style>