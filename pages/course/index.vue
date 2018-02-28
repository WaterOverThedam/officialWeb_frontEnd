<template>
 <div> 
    <MyNav :bgColor="bgColor[counterNow]"></MyNav>
    <main>
      <div @click="goToCourse" id="banner" :style="{'background':`url(${imgs.banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
          <p v-text="title"></p>  
      </div>
      <Waves></Waves>
      <!-- 导航栏 -->
      <div class="sticky">
            <div class="move"><img id="move" :src="imgs.move" alt=""></div>
            <div class="age"><img :src="imgs.ageduring" alt=""></div>
      </div>
 
      <div class="container">
        <!-- 亲子运动 -->
        <div class="row course1">
          <div class="title">
            <span class="h" v-text="txt.p1.title"></span>
            <span class="hz">
              <img :src="imgs.course1.hz_03" alt="">
            </span>
          </div>
          <div class="text">
            <span class="first" v-text="txt.p1.first"></span>
            <span v-text="txt.p1.content"></span>
          </div>
          <div class="middle clearfix">
            <div class="col-sm-5 ">
              <div class="m_title ">
                <span>
                  <img class="rec" :src="imgs.record" alt="">
                </span>
                <p class="p1" v-text="txt.p1.h1"></p>
              </div>
            
              <ul>
                <li>
                  <img  class="half l_12"  :src="imgs.halfbadge" alt="">
                  <span class="three" v-text="txt.p1.classname1"></span>
                </li>
                <li>
                  <img class="l_10" :src="imgs.badge" alt="">
                  <span class="three" v-text="txt.p1.classname2"></span>
                </li>
                <li>
                  <img class="half l_7" :src="imgs.halfbadge" alt="">
                  <img class="l_10" :src="imgs.badge" alt="">
                  <span class="three" v-text="txt.p1.classname3"></span>
                </li>
                <li>
                  <img class="l_5" :src="imgs.badge" alt="">
                  <img class="l_10" :src="imgs.badge" alt="">
                  <span v-text="txt.p1.classname4"></span>
                </li>
              </ul>
            </div>
          
            <img class="col-sm-7" :src="imgs.course1.course_1_0" alt="">
          
          </div>
          <div class="bottom">
            <ul>
             <li v-for="(item,index) in imgs.course1.course_1">
               <img :src="item.pic" alt="">
               <div class="CourseName" :class="index%2==1?'left':'right'">
                  <img :src="imgs.course1.show" :class="index==2?'show':'hidden'" alt="">
                  <p class="name" v-text="item.names"></p>
                  <p class="age" v-text="item.age"></p>
               </div>
               </li>
            </ul>
          </div>
        </div>

        <!-- 学前运动 -->
        <div class="row course2">
           <div class="title">
              <span class="h" v-text="txt.p2.title"></span>
              <span class="hz">
                <img :src="imgs.course2.hz_36" alt="">
              </span>  
           </div>
          <div class="text">
            <span class="first" v-text="txt.p2.first"></span>
            <span v-text="txt.p2.content"></span>
          </div>
            <div class="middle clearfix">
               
                 <img class="col-sm-7" :src="imgs.course2.course_2_0" alt="">
              
               <span class="col-sm-5">
               <p class="p2" v-text="txt.p2.h1"></p>
              <ul class="ul2">
                <li>
                <img class="half l_12" :src="imgs.halfbadge" alt="">
                <span  v-text="txt.p2.classname1"></span>
              </li>
              <li>
                <img class="l_10" :src="imgs.badge" alt="">
                <span v-text="txt.p2.classname2"></span>
              </li>
              <li>
                <img class="half l_7" :src="imgs.halfbadge" alt="">
                <img class="l_10" :src="imgs.badge" alt="">
                <span v-text="txt.p2.classname3"></span>
              </li>
              <li>
                <img class="l_5" :src="imgs.badge" alt="">
                <img class="l_10" :src="imgs.badge" alt="">
                <span v-text="txt.p2.classname4"></span>
              </li>
               <li>
                <img class="half l_2" :src="imgs.halfbadge" alt="">
                <img class="l_5" :src="imgs.badge" alt="">
                <img class="l_10" :src="imgs.badge" alt="">
                <span v-text="txt.p2.classname5"></span>
              </li>
              </ul>
               </span>

            </div>
            <div class="bottom">
              <ul>
                <li v-for="(item,index) in imgs.course2.course_2"  >
                  <img :src="item.pic" alt="">
                  <div class="CourseName" :class="index%2==1?'right':'left'">
                  <p class="name" v-text="item.names"></p>
                  <p class="age" v-text="item.age"></p>
                  </div>
                  </li>
              </ul>
            </div>
        </div>

        <!-- 学龄运动 -->
        <div class="row course3">
           <div class="title">
              <span class="h" v-text="txt.p3.title"></span>
              <span class="hz">
                <img :src="imgs.course3.hz_612" alt="">
              </span> 
           </div>
          <div class="text">
            <span class="first" v-text="txt.p3.first"></span>
            <span v-text="txt.p3.content"></span>
          </div>
            <div class="middle clearfix">
               <span class="col-sm-5">
                 <p v-text="txt.p3.h1"></p>
                 <ul class="ul3">
                    <li>
                      <img class="half l_32" :src="imgs.halfbadge" alt="">
                      <span v-text="txt.p3.classname1"></span>
                    </li>
                    <li>
                      <img class="l_30" :src="imgs.badge" alt="">
                      <span v-text="txt.p3.classname2"></span>
                    </li>
                    <li>
                      <img class="half l_27" :src="imgs.halfbadge" alt="">
                      <img class="l_30" :src="imgs.badge" alt="">
                      <span v-text="txt.p3.classname3"></span>
                    </li>
                    <li>
                      <img class="l_24" :src="imgs.badge" alt="">
                      <img class="l_30" :src="imgs.badge" alt="">
                      <span v-text="txt.p3.classname4"></span>
                    </li>
                 </ul>
               </span>
               
               <img class="col-sm-7" :src="imgs.course3.course_3_0" alt="">
               
            </div>
            <div class="bottom">
              <ul>
                <li v-for="(item,index) in imgs.course3.course_3" >
                  <img :src="item.pic" alt="">
                  <div class="CourseName" :class="index%2==1?'left':'right'">
                  <p class="name" v-text="item.names"></p>
                  <p class="age" v-text="item.age"></p>
                  </div>
                  </li>
              </ul>
            </div>
        </div>



      </div>
      <MyMedia></MyMedia>
    </main>
    
    <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>

 </div>
</template>

<script>
import courses from './courses'
import Round from '~/components/Round.vue'
import MyNav from '~/components/MyNav.vue'
import Waves from '~/components/Waves.vue'
import MyMedia from '~/components/MyMedia.vue'
import MyFooter from '~/components/MyFooter.vue'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  head:{
    title:"我们的课程",
    script: [
        {src: '/js/sticky.js'},
        {src: '/js/course.js'}
    ] 
  },
  computed:{
    bgColor(){
      return this.$store.state.bgColor;
    },
    counterNow(){
      return parseInt(this.$store.state.counter/600)%this.bgColor.length;
    }
  },
  data () {
    return {
      ...courses
    }
  },
  components: {
    Round,
    Waves,
    MyNav,
    MyMedia,
    MyFooter
  },
  
  methods: {
     goToCourse(){
 
       this.$router.push("#ball");
     },
    ...mapMutations([
      "tester"
      ]),
    ...mapActions([
      "incrementAsync"
      ])
  },
  mounted(){

  } 
 
}
</script>

<style scoped>

 .image{
   position:absolute;
   cursor:pointer;
   width:100%;
   height:100%;
   //border:3px solid red;
 }
#banner{
   margin:0;
   padding:0;
   width:100%;
   margin-top:3%;
   padding-top:29%;
  padding-bottom:8em;
   /* height: 100%; */
}
 
#banner p{
   position:absolute;
   color:white;
   font-family: 'GD-HEI';
   font-size: 100px;
   color:white;
   top:3em;
   /* bottom:70%; */
   left:0;
   right:0;
   margin:auto;
   text-align:center;
   //border:3px solid red;
}

.header{
  margin:30px auto;
  color: #4E5EA9;
}
.header h1{
  margin-bottom:40px;
  text-align:center;
}
.header p{
  font-size:1.2em;
}
 
.header p   { text-indent:2em   }   



.fixed {  
    position: fixed;  
    top: 0;  
    background: #F5FBFE;
    z-index:101;
}  
.sticky {  
    width: 100%;  
    padding-top:4em;
    cursor: pointer;
}
.sticky .move img {
  width: 5%;
  margin-left: 8%;
}  
.sticky .age img{
  width: 100%;

}


.title {
  /* border: 1px solid; */
  height: 8%;
  position: relative;
}
.title .h{
  font-size:3.6em;
  color: #AACA20;
  height: 100%;
}
.title .hz {
  margin-left: 2%;
  width: 15%;
}
.title .hz img{
  width: 4.5em;
  position: absolute;
  top:8%;

}
.text{
  margin-top:2%;
  font-size: 1.8em;
}
.text .first{
  color: #63D6D0;
}
.text span:nth-child(2){
  color: #B2B2B2;
}
.middle {
  margin:3% 0;
}
.middle .col-sm-7,.col-sm-5 {
  padding: 0;
}
.middle .rec {
  width: 4em;
  float: left;
  margin-right: 3%;
  padding-bottom: 2%;
  margin-top: 1%;
}
.middle p {
  font-size: 3.0em;
  text-align: center;
  color: #C5D400;
 
  letter-spacing: 0.2em;
}
.middle ul{
  padding:0;
  margin-top: 3%;
}
.middle li{
  font-size: 2.0em;
  /* font-weight:800; */
  color: #6571AD;
  margin-right: 4%;
  line-height: 120%;
  padding-left: 15%;
  margin-top: 2%;
}

/* 徽章图片定位 */
.middle li .l_10{
  left: 10%;
}
.middle li .l_5{
  left: 5%;
}

.middle li .l_2{
  left:2%;
}
.middle li .l_12{
  left:12%;
}
.middle li .l_7{
  left:7%;
}
.middle li .l_30{
  left:30%;
}
.middle li .l_24{
  left:24%;
}
.middle li .l_27{
  left: 27%;
}
.middle li .l_32{
  left: 32%;
}

/* 手机屏幕 */
@media screen and (max-width: 767px){
  .middle li .l_12{
    left:2.5em;
  }
  .middle li .l_32{
    left: 7em;
  }
  .middle li .l_30{
    left:6.6em;
  }
  .middle li .l_27{
    left: 6em;
  }
  .middle li .l_24{
    left:5.7em;
  }
  .middle li .l_10{
    left: 2.2em;
  }
  .middle li .l_7{
    left:1.6em;
  }
  .middle li .l_5{
    left: 1.3em;
  }
  .middle li .l_2{
    left:0.8em;
  }

}


.middle li img{
  position: absolute;
  width: 0.8em ;
  left:0;
  max-width: 30px;
}
.middle li .half{
  width:0.4em;
}
.middle .ul3 li {
  margin-right: 40%;
  text-align: center;
  padding-left: 35%;
}
.middle li span {
  margin-left: 2%;
}
.middle .p1 {
  display: inline;
 

}

.bottom ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.bottom li {
  margin-bottom: 3%;
  position: relative;
}

.bottom li img{
  width: 100%;
}
.bottom li .CourseName {
  /* border: 1px solid red; */
  position: absolute;
  top: 30%;
  text-align: center;
  font-size: 2.4em;
  font-weight: 600;
  

}
.bottom li .CourseName .name{
  color: #B1D031;
  width: 7em;
}
.bottom li .CourseName .age{
  color: #5C6AA8;
}
.bottom li .show{
  display: block;
  width:2em;
  position: absolute;
  left: -2.2em;
}




/* ====================分割线=================== */
 
.parent{
  padding:0;
  position:relative;
  height:0;
  padding-bottom:36%;
  overflow:hidden;
  background-color:#F5FBFE;
  /* //border:3px solid yellow; */
}
.mod-wall-item{
   position:absolute;
   height: 100%;
   width:58.8%;
   /* //border:3px solid blue; */
}
.mod-wall-item video{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%; 
  object-fit: fill;
  display:none;
}

.mod-wall-item h2{
  position:absolute;
  color:white;
  text-align:center;
  font-size:3.1em;
  left:0;
  right:0;
  bottom:0;
  top:40%;
  margin:auto;

}
.content-item{
  position:absolute;
  height: 100%;
  width:41.2%;
}
.left{
  left:10%;
 
}
.right{
  right:2em;
}

.hide{
  display: none;
}


@media (max-width:992px){
  .mod-wall-item{
     width:100%;
  }
}


.content{
  position:absolute;
  height: 75%;
  width: 60%;
  right:0;
  top:0;
  right:0;
  bottom:0;
  left:0; 
  margin:auto;
  //border:3px solid blue;
}
.body{
  font-size:15px;
}
.body h1{
  text-align:center;
  color:#B7D615;
  font-size:4em;
}

.body .detail{
  color:#5169B8;
  font-size:1.6em;
  margin:4% auto;
}
.body .link{
  margin-top:8%;
}
 
.body .view{
    font-size:1.5em;
    color: #59CECF;
    display:inline-block;
    padding:14px 14px 18px 12px;
    text-align:center;

    /* //border:3px solid blue; */
}
.row{
  padding:0;
  margin:2% 0;
}
 
 
.mod-wall-item,.content-item{
  padding-left:0;
  padding-right:0;
}
 
.row-wrapper {
    position: relative;
    display: block;
}
.bg-white {
    background: #fff;
}

.waves:before {
    position: absolute;
    z-index: 100;
    top: -34px;
    display: block;
    content: "";
    background-image: url(/img/course/waves.png);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto 100%;
    width: 100%;
    height: 44px;
}

@media (max-width: 1200px){
  .body{
    font-size:9px;
  }
  .content{
    position:absolute;
    height: 94%;
    width: 80%;
  }

}

@media screen and (max-width: 767px){
.bottom li .CourseName {
    font-size: 1.4em;
    
}
.bottom li .CourseName .name{
   width: 5em;
}
.right {
  right:3em;
  }
}


@media screen and (max-width: 768px){
  .body{
    font-size:15px;
  }
  .parent{
    padding-bottom:45%;
    //border:3px solid red;
  }
  #banner p{
     font-size: 46px;
     top:16%;
  }
  #banner{
    padding-top:48%;
    padding-bottom: 2em;
  }

}
  

.secondary-navigation-menu a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom:-5px;
  left: 0;
  background-color: #33CCCC;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}         

.secondary-navigation-menu a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}   
 
a:hover{
  text-decoration: none;
  font-weight: bolder;
  color: #33CCCC;
}

 
 .secondary-navigation-menu {
    clear: both;
    display: block;
    margin: 0;
    padding-top: 6%; 
    padding-bottom: 2%; 
    overflow: visible;
    width: 100%;
    font-weight: 500;
    z-index: 99999;
    text-align: center;
    //border:1px solid blue;
 }
 .secondary-navigation-menu{
   list-style-type: none
 }

 
 .secondary-navigation-menu li{
    padding:0;
    margin:0;
    margin-right:4%;
    margin-bottom:1%;
    color: #5160AC;
    font-size: 28px;
    display: inline-block;
    outline: none;
    text-decoration: none;
    //border:1px solid red;
 }
 


 
</style>