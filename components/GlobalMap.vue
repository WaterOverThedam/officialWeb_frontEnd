<template>
  <div class="container-fluid world">
      <div class="row" :class="{'left':leftShow,'center':centerShow,'right':rightShow}">
        <img :src="global.bg" alt="">
        
      </div>
      <span class="prev" v-show="!leftShow" @click="prve">
        <img :src="global.prve" alt="">
      </span>
      <span class="next" @click="next" v-show="!rightShow">
        <img :src="global.next" alt="">
      </span>
      <!-- <div class="red">
        
      </div> -->
  </div>

</template>
<script>
 export default {
  props: ["global"],	
  data () {
    return {
      leftShow:false,
      centerShow:true,
      rightShow:false,
      
    }
  },
  methods:{
      next(){
         if(this.centerShow){
          this.rightShow=true;
          this.centerShow=false;
          return;
        }
        // 到达两边最右边
        if(this.leftShow){
          this.centerShow=true;
          this.leftShow=false;
          return;
        }
          
      },
      prve(){
        if(this.centerShow){
          this.centerShow=false;
          this.leftShow = true;
          return;
        }
        if(this.rightShow){
          this.centerShow=true;
          this.rightShow=false;
        }

      }
  }
 }
</script>


<style scoped>
  .row{
    position: relative;
  }
  .left{
    left:30%;
  }
  .center{
    left:5%;
  }
  .right{
    left:auto;
    right:20%;
  }
  .world {
    position: relative;
  }
  .world span{
    position: absolute;
    left:5%;
    top:50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .world .next{
    left:auto;
    right:5%;
  }
  .red{
    border: 2px solid red;
    width: 10%;
    height: 10%;
    position: absolute;
    top:20%;
  } 
@media (max-width:767px) {
  .world .next,.world .prev{
    width:8%;
  }
}
 
 
</style>