<template>
  <div class="btn">
     <img :style="{height:`${btnAttr.height||100}px`,width:btnAttr.width||250+'px'}" :src="btnAttr.url">
     <span class="t" v-text="btnAttr.name" ></span>
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
  
img,span {
 width:auto;
 height:auto;
 max-width:100%;
 max-height:100%;
}
.btn span {
   display: block;
   margin: 0 auto;
   margin-top: -22%;
}
btn{
  margin:0 auto;
}
</style>