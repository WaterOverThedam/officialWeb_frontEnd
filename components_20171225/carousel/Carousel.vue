<template>
  <div id="app">
    <div class="swiper-box">
      </div>
      <rd-swipe :swipe="swipe">
        <div class="rd-swipe-item chevron-btm" :class="{'ff-rd-swipe-item':ffSwipItem}" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in navAttr.imgs">
              <div class="arrow-down" ></div>
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
      ffWave:false,
      ffSwipItem:false,
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
          this.ffWave = true
    }
   // window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>


   .waves-btm:after{

    position: absolute;
    bottom: -10px;
    z-index: 100;
    display: block;
    content: "";
    background-position: 0 0;
    background-repeat: repeat-x;
    width: 100%;
    height: 50px;
    background: url("/img/index/waves.png");
          -webkit-background-size:100%;
      background-size:cover;
   }


   .chevron-btm:after {
    position: absolute;
    bottom: -10px;
    z-index: 100;
    display: block;
    content: "";
    background-image: url(/img/index/waves2.png);
 
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto 200%;
    width: 100%;
    height: 28px;
}

   .arrow-down{ 
      margin:0 auto; 
      margin-bottom: 25px;
      width:400px; 
      height:100px; 
      background: url("/img/index/arrow-down.png") 50% 50% no-repeat;
      
   } 

  .rd-swipe{
    width: 100%!important;
    height: 100%!important;
    }

  .rd-swipe-item{
      -webkit-background-size:100%;
      background-size:cover;
      padding-top:60%;
      //border:3px solid blue;
  }

  .ff-rd-swipe-item{
      height: 1000px;
      margin-top:-200px;
  }
  .ff-waves{
        width: 100%;
        height: 50px;
        margin-top:850px;
   }
</style>
