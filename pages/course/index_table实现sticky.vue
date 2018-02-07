<template>
 <div> 
    <MyNav :bgColor="bgColor[counterNow]"></MyNav>
    <main>
       <div id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
          <p v-text="title"></p>  
       </div>
       <div class="row-wrapper waves bg-white"></div>
       <div class="table-responsive">
         <table class="table">
          <thead >
            <tr>
              <th>
                <ul class="hidden-sm secondary-navigation-menu">
                  <li class="item" v-for="c of courses"><a href="" v-text="c"></a></li>
                </ul>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>

    <div class="container-fluid">
      <div class="row">
          <div class="col-md-12 header">
              <h1 class="media-heading" v-text="header.title"></h1>
              <p  v-for="c of header.content" v-text="c"></p>
          </div>
      </div>
      <div class="row body" v-for="(item, index)  in body">
          <div :title="item.title" class="col-md-7 mod-wall-item text-center" v-if="index%2==0">
              <div class="wall-img" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
              </div>
          </div>
          <div class="col-md-5 hidden-sm content-item" v-if="index%2==0">
             <div class="content">
               <Round></Round>
             <h1 v-text="item.name"></h1>
             <p class="detail" v-for="d in item.detail" v-text="d"></p>
             <p class="link"><a class="view" v-text="btn.name" :style="{'background':`url(${btn.url}) no-repeat`,'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"></a>
             </p>
            
             </div>

          </div>


          <div class="col-md-5 hidden-sm content-item" v-if="index%2==1">
             <div class="content">
             <Round></Round>
             <h1 v-text="item.name"></h1>
             <p class="detail" v-for="d in item.detail" v-text="d"></p>
             <p class="link"><a class="view" v-text="btn.name" :style="{'background':`url(${btn.url}) no-repeat`,'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"></a>
             </p>
            
             </div>
  
          </div>
          <div :title="item.title" class="col-md-7 mod-wall-item text-center" v-if="index%2==1">
              <div class="wall-img" :style="{'background':`url(${item.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
              </div>
          </div>
      </div>
      
    </div>
 

              </td>
            </tr>
        
          </tbody>

        </table>
      </div>
    </main>
    <MyMedia></MyMedia>
    <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>

 </div>
</template>

<script>
import courses from './courses'
import Round from '~/components/Round.vue'
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
    title:"我们的课程",
    script: [
        {src: '/js/jquery.stickytableheaders.min.js'}
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
    var offset = $('nav').height();
    $("table").stickyTableHeaders({fixedOffset: offset});

  } 
 
}
</script>

<style scoped>


.header p   {   text-indent:2em   }   

.body .detail{
  color:#5169B8;
  text-indent:15em;
  font-size:1.4em;
  padding:10% auto;
  //text-align:left;
  //border:3px solid blue;
}
.body h1{
  text-align:center;
  margin:10% auto;
  color:#B7D615;
  font-size:4em;
}
.body .link{
  text-align:center;
  margin-top:5%;
}
 
.content{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
}

 
.view{
    font-size:22px;
    color: #59CECF;
    padding:20px 12px;
    text-align:center;
    //border:3px solid blue;
}

 
.mod-wall-item .wall-img {
     // height: 450px;
     padding-top:60%;
 
 
}
.header{
  margin:30px auto;
  color: #4E5EA9;
}
.header h1{
  margin:30px auto;
  text-indent:2em;
}
.header p{
  font-size:1.2em;
}
.th,.td{
  margin:0;
  padding:0;
}
#banner{
   padding-top:28%;
   height: 20%;
   overflow: hidden;
}

.row{
  padding:0;
  margin:2% 2%;
}
.body{
  background-color:#EDF9FF;
}
.mod-wall-item,.content-item{
  padding-left:0;
  padding-right:0;
}
 .content-item{
 //height:0;
 }
.row-wrapper {
    position: relative;
    display: block;
}
.bg-white {
    background: #fff;
}

@media screen and (min-width: 48em){
  .waves:before {
     top: -44px;
     background-size: auto auto;
     height: 44px;
  }
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

.menu .item{
  display: inline-block;
}

#banner p{
   color:white;
   font-family: 'GD-HEI';
   font-size: 120px;
   margin-bottom: 6%;
   text-align:center;
    
}

    

.table  thead tr th{
   border-top: 1px solid #ECF2F5;
   background-color: #F5FBFE;
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
 
.secondary-navigation-menu a:hover{
  text-decoration: none;
  font-weight: bolder;
  color: #33CCCC;
}

 
 .secondary-navigation-menu {
    clear: both;
    display: block;
    margin: 0;
    padding-top: 1%; 
    padding-bottom: 1%; 
    overflow: visible;
    width: 100%;
    font-weight: 500;
    z-index: 99999;
    text-align: center;
 }
 .secondary-navigation-menu{
   list-style-type: none
 }

@media screen and (min-width: 48em){
  .secondary-navigation-menu li{
    margin-left:0;
    margin-right:3%;
    color: #5160AC;
    font-size: 28px;
    display: inline-block;
    outline: none;
    text-decoration: none;
  }
}



@media screen and (max-width:1200px){
  .content{
    margin: 2% 10%;
  }
  .body .detail{
    color:#5169B8;
    text-indent:2em;
    font-size:1.2em;
    padding:0 auto;
    //text-align:left;
    //border:3px solid blue;
  }
  .body h1{
    margin:15% auto;
    color:#B7D615;
    font-size:2.8em;
  }
}

 
</style>