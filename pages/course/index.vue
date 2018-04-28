<template>
 <div class="course"> 
    <MyNav></MyNav>
    <main>
      <div @click="goToCourse" id="banner" :style="{'background':`url(${imgs.banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
          <!-- <p v-text="title"></p> -->
      </div>
      <Waves></Waves>
      <!-- 导航栏 -->
      <div :class="{'hidden-xs':true,'sticky':true,'fixed':isfixed}" class="container">
        
            <div class="container  move">
              <img id="move" :src="imgs.move" v-show="isMoveShow" alt="移动按钮" title="点击移动" draggable="false">
            </div>
            <div class="height" v-show="isSmallShow"></div>
            <div class="container age" title="选择您的孩子所在年龄段">
              <img class="smallmove" v-show="isSmallShow" :src="imgs.move" alt="移动按钮" title="点击移动" draggable="false">
              <img class="during" :src="imgs.ageduring" alt="年龄轴"  draggable="false">
            </div>
        
      </div>

      <div class="container">
        
        <!-- 亲子运动 -->
        <div class="row course1">
          <!-- 标题 -->
          <div class="title">
            <span class="h" v-text="txt.p1.title"></span>
            <span class="hz">
              <img :src="imgs.course1.hz_03" alt="">
            </span>
          </div>
          <!-- 文字介绍 -->
          <div class="text">
            <span class="first" v-text="txt.p1.first"></span>
            <span v-text="txt.p1.content"></span>
          </div>
          <!-- 中间图文介绍 -->
          <div class="middle clearfix">
            <!-- 移动端需要改变的地方 -->
            <div class="col-sm-5  hidden-xs c-name">
              <div class="m_title ">
                <span>
                  <img class="rec" :src="imgs.record" alt="">
                </span>
                <p class="p1" v-text="txt.p1.h1"></p>
              </div>

              <ul>
                <li>
                  <img  class="level"  :src="imgs.level1" alt="">
                  <span class="three" v-text="txt.p1.classname1"></span>
                </li>
                <li>
                  <img  class="level"  :src="imgs.level2" alt="">
                  <span class="three" v-text="txt.p1.classname2"></span>
                </li>
                <li>
                  <img  class="level"  :src="imgs.level3" alt="">
                  <span class="three" v-text="txt.p1.classname3"></span>
                </li>
                <li>
                  <img  class="level"  :src="imgs.level4" alt="">
                  <span v-text="txt.p1.classname4"></span>
                </li>
              </ul>
            </div>
            <div class="col-sm-7 videobg" >
              <div class="img" :style="{'background-image':`url(${imgs.course1.course_1_0})`}"></div>
              <!-- <img :src="imgs.course1.course_1_0" alt=""> -->
              <span class="play">
                <img :src="imgs.play" alt="播放按钮" title="点击播放">
              </span>
              <span class="play playhover">
                <img :src="imgs.playhover" alt="播放按钮" title="点击播放" draggable="false">
              </span>
              <video dataSrc="https://tlgc.oss-cn-shanghai.aliyuncs.com/assert/video/officialWeb/parenting.mp4"  controls="" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" ></video>
            </div>
            
            

          </div>
          <!-- 底部列表 -->
          <div class="bottom">
            <ul>
             <li v-for="(item,index) in imgs.course1.course_1">
               <div  class="bg" :class="index%2==0?'l0':'r0'" :style="{'background-image':`url(${item.pic})`}"></div>
               <!-- 蒙层 -->
               <!-- <div  class="bgc" :class="index%2==0?'l0':'r0'">
                  <div class="CourseName" >
                      <p class="name" v-text="item.names[0]"></p>
                      <p class="name" v-text="item.names[1]"></p>
                      <p class="age" v-text="item.age"></p>
                  </div>
               </div> -->
               <div class="words" :class="index%2==1?'left':'right'">

                  <!-- <span class="sprite"></span> -->
                  <div class="CourseName" >
                      <img :src="imgs.course1.show" :class="index==2?'show':'hidden'" alt="">
                      <p class="name" v-text="item.names[0]"></p>
                      <p class="name" v-text="item.names[1]"></p>
                      <p class="age" v-text="item.age"></p>
                      <nuxt-link to="/search" class="visible-xs-block"><span  class="find">{{find}}</span></nuxt-link>
                      <p class="w-first hidden-xs" v-text="item.first"></p>
                      <!-- 隐藏的文字内容 -->
                      <div class="desc hidden hidden-xs">
                        <p v-for="c in item.content" v-text="c"></p>
                      </div>
                      
                  </div>
                  <!-- 按钮 -->
                  <span  class="btn-more hidden-xs" :title="index" :class="index%2==0?'l':'r'">
                      <img :src="imgs.button" alt="">    
                  </span>
                  
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

              <div class="col-sm-7 videobg" >
                <div class="img" :style="{'background-image':`url(${imgs.course2.course_2_0})`}"></div>
                <!-- <img :src="imgs.course1.course_1_0" alt=""> -->
                <span class="play">
                  <img :src="imgs.play" alt="播放按钮" title="点击播放">
                </span>
                <span class="play playhover">
                  <img :src="imgs.playhover" alt="播放按钮" title="点击播放" draggable="false">
                </span>
                <video dataSrc="https://tlgc.oss-cn-shanghai.aliyuncs.com/assert/video/officialWeb/preschool.mp4"  controls="" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" ></video>
              </div>

              <span class="col-sm-5 hidden-xs">
                  <p class="p2" v-text="txt.p2.h1"></p>
                  <ul class="ul2">
                    <li>
                      <img  class="level"  :src="imgs.level1" alt="">
                      <span  v-text="txt.p2.classname1"></span>
                    </li>
                    <li>
                      <img  class="level"  :src="imgs.level2" alt="">
                      <span v-text="txt.p2.classname2"></span>
                    </li>
                    <li>
                      <img  class="level"  :src="imgs.level3" alt="">
                      <span v-text="txt.p2.classname3"></span>
                    </li>
                    <li>
                      <img  class="level"  :src="imgs.level4" alt="">
                      <span v-text="txt.p2.classname4"></span>
                    </li>
                    <li>
                        <img  class="level"  :src="imgs.level5" alt="">
                        <span v-text="txt.p2.classname5"></span>
                    </li>
                  </ul>
              </span>

            </div>
            <div class="bottom">
              <ul>
                <li v-for="(item,index) in imgs.course2.course_2"  >
                 <div  class="bg" :class="index%2==0?'r0':'l0'" :style="{'background-image':`url(${item.pic})`}"></div>
                 <!-- <div class="bgc" :class="index%2==0?'r0':'l0'" >
                   <div class="CourseName" >
                        <p class="name" v-text="item.names[0]"></p>
                        <p class="name" v-text="item.names[1]"></p>
                        <p class="age" v-text="item.age"></p>
                    </div>
                 </div> -->
                 <div class="words" :class="index%2==1?'right':'left'">
                    <div class="CourseName" >
                        <p class="name" v-text="item.names[0]"></p>
                        <p class="name" v-text="item.names[1]"></p>
                        <p class="age" v-text="item.age"></p>
                        <nuxt-link to="/search" class="visible-xs-block"><span class="find">{{find}}</span></nuxt-link>
                        <p class="w-first hidden-xs" v-text="item.first"></p>
                        <!-- 隐藏的文字内容 -->
                        <div class="desc hidden hidden-xs">
                          <p v-for="c in item.content" v-text="c"></p>
                        </div>
                    </div>
                    <!-- 按钮 -->
                    <span  class="btn-more hidden-xs" :title="index+3" :class="index%2==0?'l':'r'">
                      <img :src="imgs.button" alt="">    
                    </span>
                    
                      
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
              <span class="col-sm-5 hidden-xs">
                 <p v-text="txt.p3.h1"></p>
                 <ul class="ul3">
                    <li>
                      <img  class="level"  :src="imgs.level1" alt="">
                      <span v-text="txt.p3.classname1"></span>
                    </li>
                    <li>
                      <img  class="level"  :src="imgs.level2" alt="">
                      <span v-text="txt.p3.classname2"></span>
                    </li>
                    <li>
                      <img  class="level"  :src="imgs.level3" alt="">
                      <span v-text="txt.p3.classname3"></span>
                    </li>
                    <li>
                      <img  class="level"  :src="imgs.level4" alt="">
                      <span v-text="txt.p3.classname4"></span>
                    </li>
                 </ul>
              </span>
              <!-- 视频图片 -->
              <div class="col-sm-7 videobg" >
                <div class="img" :style="{'background-image':`url(${imgs.course3.course_3_0})`}"></div>
                <!-- <img :src="imgs.course1.course_1_0" alt=""> -->
                <span class="play">
                  <img :src="imgs.play" alt="播放按钮" title="点击播放">
                </span>
                <span class="play playhover">
                  <img :src="imgs.playhover" alt="播放按钮" title="点击播放" draggable="false">
                </span>
                <video dataSrc="https://tlgc.oss-cn-shanghai.aliyuncs.com/assert/video/officialWeb/schoolage.mp4"  controls="" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" ></video>
              </div>

            </div>
            <div class="bottom">
              <ul>
                <li v-for="(item,index) in imgs.course3.course_3" >
                  <div  class="bg" :class="index%2==0?'l0':'r0'" :style="{'background-image':`url(${item.pic})`,}"></div>
                  <!-- 遮罩层 -->
                  <!-- <div class="bgc" :class="index%2==0?'l0':'r0'">
                    <div class="CourseName" >
                        <p class="name" v-text="item.names"></p>
                        <p class="age" v-text="item.age"></p>
                    </div>
                 </div> -->
                <div class="words" :class="index%2==1?'left':'right'">
                      <div class="CourseName" >
                        <p class="name" v-text="item.names"></p>
                        <p class="age" v-text="item.age"></p>
                        <nuxt-link to="/search" class="visible-xs-block"><span  class="find">{{find}}</span></nuxt-link>
                        <p class="w-first hidden-xs" v-text="item.first"></p>
                        <!-- 隐藏的文字内容 -->
                        <div class="desc hidden hidden-xs">
                          <p v-for="c in item.content" v-text="c"></p>
                        </div>
                      
                      </div>
                      <!-- 按钮 -->
                    <span  class="btn-more hidden-xs" :title="index+7" :class="index%2==0?'l':'r'">
                      <img :src="imgs.button" alt="">    
                    </span>
                      
                      
                  </div>
                  
                  </li>
              </ul>
            </div>
        </div>

      </div>
      <Common></Common>
      <MyMedia></MyMedia>
      <!-- <GoTop></GoTop> -->
    </main>
    <GoTop></GoTop>
    <MyFooter></MyFooter>

 </div>
</template>

<script>
import courses from './courses'
import Round from '~/components/Round.vue'
import MyNav from '~/components/MyNav.vue'
import Waves from '~/components/Waves.vue'
import Common from '~/components/Common.vue'
import MyMedia from '~/components/MyMedia.vue'
import MyFooter from '~/components/MyFooter.vue'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import GoTop from '~/components/GoTop.vue'

export default {
  head:{
    title:"我们的课程",
    script: [
      {src: '/js/course.js'}
    ]
  },
  computed:{
    originY(){
      return document.querySelector('.sticky').offsetTop
    }

  },
  data () {
    return {
      isfixed:false,
      isMoveShow:true,
      isSmallShow:false,
      ...courses
    }
  },
  components: {
    Round,
    Waves,
    MyNav,
    Common,
    MyMedia,
    MyFooter,
    GoTop
  },

  methods: {
     stickyHeader(){
       var point = window.scrollY||pageYOffset;
       if(point> this.originY){
         this.isfixed=true;
         this.isMoveShow=false;
         this.isSmallShow=true;
       }else{
         this.isfixed=false;
         this.isMoveShow=true;
         this.isSmallShow=false;
       }
       //console.log(this.originY+":"+point)
       //console.log(this.isfixed)
     },
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
    window.addEventListener('scroll',this.stickyHeader);
  },
  destroyed(){
    window.removeEventListener('scroll',this.stickyHeader);
  }

}
</script>

<style scoped>
.course{
  overflow: hidden;
  font-family: "J-YUAN";
}
 .image{
   position:absolute;
   cursor:pointer;
   width:100%;
   height:100%;
   /* //border:3px solid red; */
 }
#banner{
   margin:0;
   padding:0;
   width:100%;
   margin-top:2%;
   padding-top:40%;
  padding-bottom:8em;
   /* height: 100%; */
}

/* 标题部分 */
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
/* 导航 */
.fixed {
    position: fixed;
    top: 0;
    background: #fff;
    z-index:101;
}
.sticky {
    width: 100%;
    /* padding-top:4.5em; */
  
  
}
.sticky .move img {
  width: 5%;
  margin-left: 5%;
}
.sticky .height{
  height:72px;
}
.sticky .age {
    cursor: pointer;
  position: relative;
  padding-bottom: 2px;
  z-index:9999;
}
.sticky .age .smallmove{
  position: absolute;
  top: -60%;
  left:5%;
  transform: scale(0.6)
}
.sticky .age .during{
  width: 100%;
  height:5%;

}

/* 标题 */
.title {
  /* border: 1px solid; */
  height: 8%;
  position: relative;
  font-family: "GD-HEI";
}
.title .h{
  font-size:7em;
  color: #AACA20;
  height: 100%;
  
}
.title .hz {
  margin-left: 2%;
  width: 15%;
}
.title .hz img{
  width: 6em;
  position: absolute;
  top:20%;

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

/* 中间内容 */
.middle {
  margin:3% 0;
  height:400px;
  
}
.middle .col-sm-7,.col-sm-5 {
  padding: 0;
  height:100%;
}

.middle .videobg{
 
}
.middle .videobg .img{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height:100%;
}
.middle .rec {
  width: 4em;
  float: left;
  margin-right: 3%;
  padding-bottom: 2%;
  margin-top: 1%;
}
.middle p {
  font-size: 4.5em;
  text-align: center;
  color: #C5D400;
  font-family: "GD-HEI";
  line-height: 0.8em;

  /* letter-spacing: 0.2em; */
}
.middle ul{
  padding:0;
  margin-top: 9%;
}
.middle li{
  font-size: 2.0em;
  /* font-weight:800; */
  color: #6571AD;
  margin-right: 4%;
  line-height: 120%;
  padding-left: 15%;
  margin-top: 5%;
  position: relative;
}
.middle li img{
  position: absolute;
  /* width: 0.8em ; */
  left:7%;
  top:-10%;
  max-width: 40px;
}

.middle .ul3 li {
  margin-right: 40%;
  text-align: center;
  padding-left: 35%;
}
.middle .ul3 li img{
  left:50%;
}
.middle li span {
  margin-left: 2%;
}
.middle .p1 {
  display: inline;


}
/* 播放按钮 */
.middle .play{
  position:absolute;
  left:50%;
  top:40%;
  transform: translate(-50%);
  object-fit: cover;
  cursor: pointer;

}

.middle .play img{
  transform: scale(1.5);
   /* opacity: 0; */
}
.middle .playhover img{
  opacity: 0;
  /* transform: scale(1); */
}
.middle .playhover img:hover{
    opacity: 1;
}

/* 视频样式 */
.middle video {
  position: absolute;
  bottom:0;
  width: 100%;
  height:100%;
  display: none;
  object-fit: fill;
  /* z-index: -1; */
}
/* 底部 */
.r0{
  right: 0;
  background-position: left bottom;
}
.l0{
  left:0;
  background-position: right bottom;
}
.bottom ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.bottom li {
  margin-bottom: 3%;
  position: relative;
  background-color: #EEF9FF;
  height:400px;
}
/* 文字样式 */
.bottom li .words{
  width: 42%;
  height:100%;
  position: absolute;
  background-color: #EEF9FF;
  overflow: auto;

}
.bottom li .words .sprite{
  width: 86%;
  height: 28%;
  display: inline-block;
  background:url(/img/index/sprite-accents-white.png) no-repeat 0% 75%;
}
.bottom li .bg{
  width:58%;
  height:100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;

  /* background-position: center bottom; */
}

/* --------------------------------------------------蒙层------------------------------------------------------ */
/* .bottom li .bgc{
  width:58%;
  height:100%;
  position: absolute;
  transition: background-color 0.3s linear 0s,color 0.3s linear 0s;
  -moz-transition: background-color 0.3s linear 0s,color 0.3s linear 0s;	
  -webkit-transition: background-color 0.3s linear 0s,color 0.3s linear 0s;
  -o-transition: background-color 0.3s linear 0s,color 0.3s linear 0s;	 

}
 .bottom li .bgc .CourseName {
}
.bottom li .bgc .CourseName p{
  color: transparent;
}
.bottom li .bgc:hover{
  background-color: rgba(0, 0, 0, 0.7);
  
}
.bottom li .bgc:hover .CourseName p{
  color:#fff;
} */
/* ---------------------------------------------------蒙层结束--------------------------------------------- */

.bottom li .CourseName {
  width: 100%;
  font-size: 2.4em;
  font-weight: 600;
  text-align: center;
  position: absolute;
  padding: 0 10% ;
  top:30%;
  /* margin-top: 25%; */
  
  
  /* top:50%;
  transform: translateY(-50%) */


}
.bottom li .CourseName p{
  margin: 0;
}
.bottom li .CourseName .name{
  color: #B1D031;
  /* width: 7em; */
}
.bottom li .CourseName .age{
  color: #5C6AA8;
  margin-bottom: 30px;
}
.bottom li .CourseName .desc{
  font-size: 0.6em;
  text-align: left;
  /* height:10%; */
  
}
/* 查找离您最近的中心 */
.bottom li .CourseName .find{
  color:#fff;
  background-image: url(/img/index/btn_long_blue.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3% 5% 2%;
  font-size: 0.8em;
}
.bottom li .CourseName .w-first {
  font-size: 0.6em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  
  /* display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 

  display:-moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: 2;

    display:-ms-box;
  -ms-box-orient: vertical;
  -ms-line-clamp: 2; */
  
}
.bottom li .btn-more{
      position: absolute;
      bottom:5%;
      right:5%;
      cursor: pointer;
}
.bottom li .show{
  display: block;
  width:2em;
  position: absolute;
  left: 10%;
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
  left:0;

}
.right{
  right:0;
}

.hide{
  display: none;
}


@media (max-width:1024px){
  .mod-wall-item{
     width:100%;
  }
  .bottom li .show{
   
    left: 5%;
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
  /* //border:3px solid blue; */
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
  .sticky .age .smallmove{

  }
  .middle p{
    font-size: 3.5em;
  }
}




@media screen and (max-width: 768px){
  .body{
    font-size:15px;
  }
  .parent{
    padding-bottom:50%;
    /* //border:3px solid red; */
  }
  #banner p{
     font-size: 46px;
     top:30%;
  }
  #banner{
    padding-top:53%;
    padding-bottom: 2em;
  }
  .bottom li {
    height:255px;
  }
  .middle {
    height:255px;
  }

}

@media screen and (max-width: 767px){
  .r0,.l0{
    background-position: center bottom;
  }

  .bottom li .bg{
    width: 100%;
  }
  .bottom li .CourseName {
    font-size: 2.4em;
    top:28%;
  }
  .bottom li .words{
    width: 90%;
  }
  .bottom li .CourseName .age{
    margin-bottom: 10px;
  }
 .bottom li .CourseName .name,.bottom li .CourseName .age{
    color:#fff;
    text-shadow: 3px 3px 12px rgba(0,0,0,0.8);
 }
  .right {
    left:50%;
  
    transform: translate(-50%)
  }
  .left{
    left:50%;
    transform: translate(-50%)
  }
  /* 播放按钮 */
  .middle .play{
    top:35%;
  }
  /* 文字背景 */
  .bottom li .words{
    background-color: transparent;
    overflow: visible;
  }
  
  .bottom li .show {
    left:12%;
  }

  .bottom li .bgc{
     width:100%;


  }
.bottom li .bgc:hover .CourseName p{
  color:transparent;
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
    /* //border:1px solid blue; */
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
    /* //border:1px solid red; */
 }




</style>
