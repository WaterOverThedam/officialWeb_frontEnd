<template>
  <div class="btn">
     <!-- <img :style="{height:`${btnAttr.height||100}px`,width:btnAttr.width||250+'px'}" :src="btnAttr.url">
     <span v-text="btnAttr.name" :style="{'font-size':`${btnAttr.height/2-1}px`,'display':'block','margin-top':`${-btnAttr.height+9}px`}"></span> -->
     <span v-text="btnAttr.name"></span>
  </div>
</template>
<script>
 export default {
  props: ["btnAttr"],	
  data () {
    return {
   
    }
  }
 }
</script>


<style scoped>
span{
  background-image: url(/img/components/search-citybg.png);
  display: inline-block;
  /* background-position: center 90%; */
  /* padding: 30% 50%; */
  /* background-color: #fff; */
  height:40px;
  margin-top:2px;
  line-height: 40px;
  width: 100px;
  font-size: 18px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5%;
  outline: none;

  
}
span:hover{
  background-image: url(/img/components/searchcity-hoverbg.png);
  color:#fff;
}
/* img,span {
 width:auto;
 height:auto;
 max-width:100%;
 max-height:100%;
}
span {
   display: block;
   margin: 0 auto;
}
btn{
  margin:0 auto;
} */
</style>