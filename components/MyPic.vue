<template>
  <div>
     <img  :src="srcUrl">
  </div>
</template>
<script>
 export default {
  props: ["srcUrl"], 
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
 margin:0 auto;
}

</style>