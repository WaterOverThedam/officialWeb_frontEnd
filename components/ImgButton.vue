<template>
  <div class="btn">
     <img :style="{height:`${btnAttr.height||100}px`,width:btnAttr.width||250+'px'}" :src="btnAttr.url">
     <span v-text="btnAttr.name" :style="{'font-size':`${btnAttr.height/2-1}px`,'display': 'block','margin-top':`${-btnAttr.height+9}px`}"></span>
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
span {
   display: block;
   margin: 0 auto;
}
btn{
  margin:0 auto;
}
</style>