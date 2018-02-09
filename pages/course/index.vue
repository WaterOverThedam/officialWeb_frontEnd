<template>
 <div> 
    <MyNav :bgColor="bgColor[counterNow]"></MyNav>
    <main>
      <div @click="goToCourse" id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
          <p v-text="title"></p>  
      </div>
      <Waves></Waves>
      <div class="sticky">
          <ul class="hidden-xs secondary-navigation-menu">
            <li class="item" v-for="c of courses"><a class="link" :href="'#'+c.id" v-text="c.name"></a></li>
          </ul>
      </div>
 
      <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 header">
                <h1 class="media-heading" v-text="header.title"></h1>
                <p  v-for="c of header.content" v-text="c"></p>
            </div>
        </div>
        <div class="row body" v-for="(item, index)  in body">
          <div class="parent">
            <div :id="item.id" :title="item.title" class="mod-wall-item"  :class="index%2==0?'left':'right'">
              <div class="image" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}" ></div>
              <h2 class="visible-sm visible-xs" v-text="item.name"></h2>
              <video :id="'v'+index" :dataSrc="item.video" controls="controls" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" ></video>
            </div>
            <div class="hidden-sm hidden-xs content-item" :class="index%2==1?'left':'right'">
               <Round :age="item.age" :rdColor="rdColor[index%2]"></Round>
               <div class="content">
                 <h1 v-text="item.name"></h1>
                 <div class="detail">
                   <p v-for="d in item.detail" v-text="d"></p>
                 </div>
                 <p class="link"><nuxt-link :to="'/service/detail'" class="view" v-text="btn.name" :style="{'background':`url(${btn.url}) no-repeat`,'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"></nuxt-link>
                 </p>
               </div>
            </div>
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
   //height: 100%;
}
 
#banner p{
   position:absolute;
   color:white;
   font-family: 'GD-HEI';
   font-size: 100px;
   color:white;
   top:30%;
   bottom:0;
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
}  


 
.parent{
  padding:0;
  position:relative;
  height:0;
  padding-bottom:36%;
  overflow:hidden;
  background-color:#F5FBFE;
  //border:3px solid yellow;
}
.mod-wall-item{
   position:absolute;
   height: 100%;
   width:58.8%;
   //border:3px solid blue;
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
  right:auto;
}
.right{
  right:0;
  left:auto;
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

    //border:3px solid blue;
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