<template>
	<div class="story">
		<MyNav :bgColor="bgColor[counterNow]"></MyNav>
        <main>
            <div @click="goToCourse" id="banner" :style="{'background':`url(${imgs.bannertop}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                <p v-text="title"></p>  
            </div>
            <Waves></Waves>
            <!-- 导航栏 -->
            <div class="sticky">
                <ul class="hidden-xs secondary-navigation-menu">
                  <li class="item" v-for="c of storys"><a class="link" :href="'#'+c.id" v-text="c.name"></a></li>
                </ul>
            </div>
            <!-- 第二张banner -->
            <div class="his_banner">
                  <img :src="imgs.banner" alt="">
            </div>
            <!-- 主题内容 -->
            <div class="container">
                <!-- 我们的历史 -->
                <div class="row history" id="history">
                   <div class="row" v-for="(item, index)  in imgs.history">
                      <div :class="index%2==1?'hide':'col-sm-6 word'">
                        <h3 v-text="imgs.his_title" :class="index==0?'his_title':'hide'"></h3>
                        <p v-text="item.content"></p>
                        <p :class="index==0?'his_content':'hide'" v-text="imgs.his_content"></p>
                      </div>
                      <div :class="index%2==1?'left':'col-sm-6'">
                        <img :src="item.pic" alt="">
                      </div>
                   </div>
                </div>
                <!-- 我们的荣誉 -->
                <div class="row honor" id="honor">
                  <div class="text-center" v-text="imgs.honor.title" :style="{'color':'#515FAB','background':`url(${imgs.cloud}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                    <!-- <img :src="imgs.cloud" alt=""> -->
                  </div>
                  <img :src="imgs.honor.pic" alt="">
                  
                </div>
                <!-- 分割线 -->
                <div class="row cut">
                  <div class="cut">
                    <img :src="imgs.cut" alt="">
                  </div>
                </div>
                <!-- 独特的方法 -->
                <div class="row methods" id="methods">
                   <div class="txt">
                    <p v-text="imgs.methods.title"></p>
                   </div>
                   <div class="row">
                      <div class="imgL half col-sm-6">
                        <img :src="imgs.methods.meth_1" alt="">
                      </div>
                      <div class="imgR half col-sm-6">
                        <p :class="index%2==0?'text-left':'text-right'"  v-for="(item,index) in imgs.methods.p" v-text="item.title"></p>
                        <div class="m">
                            <img :src="imgs.methods.meth_2" alt="">
                        <p class="uname clo" v-text="imgs.methods.name"></p>
                        <p class="uname s16" v-text="imgs.methods.introduce"></p>
                        </div>
                     
                      
                      </div>
                   </div>
                   <div class="row">
                     <ul class="body">
                       <li v-for="item in imgs.methods.body">
                         <h3 v-text="item.title" :style="{'color':item.color}"></h3>
                         <p class="gray" v-text="item.content"></p>
                       </li>
                     </ul>
                   </div>
                  
                </div>
                <!-- 显著优势 -->
                <div class="row ys" id="ys">
                  <ul>
                     <li v-for="(item,index) in imgs.ys" class="col-sm-6">
                       <img  :src="imgs.sj" alt="">
                       <h3 class="text-center" v-text="item.title"></h3>
                       <img class="ys_img" :src="item.pic" alt="">
                       <p v-text="item.content"></p>
                     </li>
                  </ul>
                </div>
            </div>
            <MyMedia></MyMedia>
        </main>
        <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>

	</div>
	
</template>

<script>
    import story from './story'
    import Round from '~/components/Round.vue'
    import MyNav from '~/components/MyNav.vue'
    import Waves from '~/components/Waves.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'
    export default {
        head:{
            title:"品牌故事",
            script:[
                {src: '/js/sticky.js'},
                {src: '/js/story.js'}  
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
        // 数据来源
        data(){
            return {
                ...story
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
.story{
  overflow: hidden;
}
 .image{
   position:absolute;
   cursor:pointer;
   width:100%;
   height:100%;
   /* //border:3px solid red; */
 }
 ul,li{
   padding: 0;
   margin: 0;
   list-style: none;
 }
#banner{
   margin:0;
   padding:0;
   width:100%;
   margin-top:3%;
   padding-top:38%;
  padding-bottom:8em;
   /* height: 100%; */
}
 
#banner p{
   position:absolute;
   color:white;
   font-family: 'GD-HEI';
   font-size: 7em;
   color:white;
   top:4em;
   /* bottom:70%; */
   left:-5em;
   right:0;
   margin:auto;
   text-align:center;
   
   /* //border:3px solid red; */
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

div.word {

}
.hide {
  display: none;
}
.right {
  /* position: absolute; */
  /* right: 0; */
  width: 50%;
  float: right;
}
/* 吸顶效果 */
.fixed {  
    position: fixed;  
    top: 45px;  
    background: #F5FBFE;
    z-index:101;
}  
.sticky {  
    width: 100%;
}
.sticky a{
  color: #2D419B;
}
/* 我们的历史 */

.his_banner img {
  width: 100%;
}
.history .row {
  margin-bottom: 4%;
}
.history .row p{
  font-size: 1.5em;
}
.history .row .word {
  margin-bottom: 10px;
}
.history .row h3 {
  color:#30419C;
  font-size: 2em;
  margin: 0 0 5px 0;
}
.history .row .his_content {
  margin-top: 8px;
}
.history div:nth-child(3) p {
  margin-top:10%;
}

/* 我们的荣誉 */
.honor div {
  font-size: 4em;
}

/* 独特的方法 */

.methods p{
  font-size: 1.8em;
  margin-left: 3%;
  color: #1F2981;
  
}
.methods .txt {
  margin-bottom: 6%;
}
.methods .half{
  text-align: center;
}
.methods .imgL {
  float: left;
}
.methods .imgL img{
  width: 86%;
}
.methods .imgR img{
  width: 30%;
}
.methods .half p {
  margin: 0 0 1%;
  font-weight: 500;
  color: #1DB7B9;
  font-size:2em;
}
.methods .half .m p{
  font-weight: 100;
  font-size: 18px;
  width: 50%;
  margin-left: 24%;
 
}
.methods .half .m .s16 {
  font-size: 16px;
  color: #8B8B8B
}
.methods .half p:nth-child(1),.methods .half p:nth-child(2){
  color: #4B539B;
  font-weight: 600;
}
.methods .half .m .clo {
  color: #1DB7B9;
}
.methods .body p{
  margin: 0;
}
.methods .body .gray {
  color: #767676;
  font-size: 16px;
}

/* 显著优势 */

.ys {
  padding: 10%;
}

.ys ul li{
  height: 45em;
  text-align: center;
  margin-bottom: 7em;

}

.ys ul li h3{

  margin-bottom: 4%;
}
.ys ul li .ys_img {
  margin: 5% 0;
}

.ys ul li p {
  width: 90%;
  font-size: 1.5em;
  margin-left: 1em;
  text-align: left;
  
}










/* ====================分割线=================== */
 

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
  .body{
    font-size:15px;
  }
  .parent{
    padding-bottom:45%;
    //border:3px solid red;
  }
  #banner p{
     font-size: 25px;
     top:6em;
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
    padding-top: 3%; 
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

 @font-face { 
font-family: 'GD-HEI'; 
src: url('/font/bak/hei.ttf') format('truetype'); 
} 
</style>

