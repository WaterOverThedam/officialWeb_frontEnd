<template>
  <div id="app">
    <div class="swiper-box">
      </div>
      <rd-swipe :swipe="swipe">
 
              <div class="rd-swipe-item" :class="{'ff-rd-swipe-item':ffSwipItem}" :style="{ 'background-image': `url(${img})`}" v-for="(img, index) in navAttr.imgs">
               
                   <div class="container" :class="{'ff-waves':ffWave}">
                      <div class="row">
                   
                            <div class="col-sm-2 text-left item" id="logo" >
                              <img src="/img/index/logo.png" alt="">
                            </div>
                            <div class="col-sm-2 text-left xs-hidden item link" v-for="(item, index) in navAttr.menu">
                              <img src="/img/index/asterisk.png" alt="">
                              <a href="#" v-text="item"></a> 
                            </div>
                              

                      </div>
                      <div class="row">
                          <div class="col-sm-12 text-center">
                             <h1>{{navAttr.bottom.title[0]}}</h1>
                             <p><span class="more" :style="{'background':`url(${navAttr.bottom.pic[0]}) no-repeat`,'background-size': 'cover'}">{{navAttr.bottom.title[1]}}</span>
                             </p>
                             <p><img class="loop" :src="navAttr.bottom.pic[1]"> </p>
                             <p><img class="arrow-down" :src="navAttr.bottom.pic[2]"> </p>
                          </div>
                      </div>
                      <div class="row waves"></div>
                  </div>

              </div>

      </rd-swipe>
    </div>
  </div>
</template>

<script>
import rdSwipe from './vue-slide.vue'
export default {
  props: ["navAttr"], 
  data () {
    return {
      wrapperUrl: "/img/index/waves.png",
      ffWave: false,
      ffArrowDown: false,
      ffSwipItem: false,
      swipe: {
        activeIndex: 0
      }
    }
  },
  options: {
    activeIndex: 0,
    autoplay: 1000,
    pagination: true
  },
  components: {
    rdSwipe
  },
  methods: {
    turnTo (index) {
      this.$children.map(swipe => {
        if (swipe.turnTo) {
          swipe.turnTo(index)
        }
      })
    }
  },
  mounted () {
    if(navigator.userAgent.indexOf('Firefox') >= 0){
          this.ffSwipItem = true;
          this.ffWave = true;
          this.ffArrowDown = true;
    }
   // window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
   .waves   {
     border:3px solid red;
        margin: 0px;
    padding:0px;
    width: 100%;
   }
   .container  p {
     border:3px solid blue;
   }
   .container  .col-sm-12 {
     border:3px solid green;
   }
   .waves{
        top:-50px;
        width: 100%;
        height: 50px;
        background-image: url("/img/index/waves.png");
        background-size: cover;
        /* //border:3px solid blue; */
   }

   .arrow-down{ 
      display: block;
      margin:0 auto; 
      margin-bottom: 25px;
      width:220px; 
      height:200px;
      border:3px solid blue;
      z-index: 99999; 
   } 

  .rd-swipe{
      width: 100%!important;
      height: 100%!important;
   }

  .rd-swipe-item{
      -webkit-background-size:100%;
      background-size:cover;
      padding-top:60%;
      /* //border:3px solid blue; */
  }

  .ff-rd-swipe-item{
      height: 1000px;
      margin-top:-200px;
  }
  .ff-waves{
        width: 100%;
        height: 50px;
        margin-top:750px;
  }
  .ff-arrow-down{

  }
  @media(max-width:768px){
       .arrow-down{ 
          width:100px; 
          height:80px; 
       } 
 
  }
</style>
