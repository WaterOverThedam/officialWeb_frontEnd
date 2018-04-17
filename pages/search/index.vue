<template>
 <div  class="overhidden"> 
   <div @click="test()" class="" id="logo"></div>
    <MyNav></MyNav>
    <main>
      <div class="parent">
        <div class="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% 100%'}">  
        </div>
      </div>
      <Waves></Waves>
      <div class="menu">
         <div  v-for="(m,index) in btn_menu"><img @click="open(index)" :src="m.defaultPic" alt=""></div>
      </div>
      
      <!-- <div class="banner" :style="{'background':`url(${banner[1]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"> </div>  -->
       
      <component :is="map" :global="global" :american="american"></component>
 
      <!-- <CourseBrief></CourseBrief> -->
    </main>
    <GoTop></GoTop>
    <MyFooter></MyFooter>

 </div>
</template>

<script>
import search from './search'
import MyNav from '~/components/MyNav.vue'
import Waves from '~/components/Waves.vue'
import GymMap from '~/components/GymMap.vue'
import AmericanMap from '~/components/AmericanMap.vue'
import GlobalMap from '~/components/GlobalMap.vue'
// import CourseBrief from '~/components/CourseBrief.vue'
import MyFooter from '~/components/MyFooter.vue'
import GoTop from '~/components/GoTop.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'


export default {
  head:{
    title:"查找中心",
    script: [
        {src: '/js/search.js'},
        
      
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
      map:'gym-map',
      ...search
    }
  },
  components: {
    Waves,
    MyNav,
    // CourseBrief,
    GymMap,
    AmericanMap,
    GlobalMap,
    MyFooter,
    GoTop
  },
  methods: {
    open(i){
        this.btn_menu.map((item,index) => {
        if(index==i){
           item.defaultPic=item.linked;
           this.map = item.id;
        }else{
           item.defaultPic=item.link;
        }
      })
    }
  },
  mounted(){

  } 
 
}
</script>

<style scoped>
.overhidden{
  overflow: hidden;
  
}

.banner{
   margin:0;
   padding:0;
   padding-top:45%;
}
.parent{
   position:relative;  
   /* margin-top:3%; */
} 
.parent .title1{
   width: 100%;
   position: absolute;
   color:white;
   font-family: 'GD-HEI';
   font-size: 1.6em;
   letter-spacing: 0.2em;
   bottom:20%;
   padding-left:10%;
   color:white ;
}

 

.menu{
    margin-bottom:12%;
    margin-left:13%;
}
.menu img{
  cursor: pointer;
  float: left;
  display:block;
  width:20%;
  margin:auto 4%;

}

.menu li img{
  width: 100%;
}  

 
@media (max-width:992px){
  main {
    font-size: 30px
  } 
}
@media (max-width:768px){
  main {
    font-size: 20px
  } 
 
}
@media (max-width:767px){
  /* .menu{
    margin-left: 3%;
  }*/
  .menu img {
    width: 25%;
    margin:auto 2%;
  } 
}
 
</style>