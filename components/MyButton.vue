<template>
  <div class="btn" :style="{ 'background':`url(${btnAttr.url})`,height:`${btnAttr.height||60}px`,width:btnAttr.height||250+'px'}"><span>{{btnAttr.name}}</span></div>
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
	
.btn {
	  vertical-align:middle;
	  text-align:center;
 }
 .btn span{
	  padding-top: 5px;
	  padding-left: 40px;
	  display:table-cell;
	  color:#5DCCC9;
	  font-size:20px;
	  font-height:14px;
	  font-weight: 20px;
	  word-spacing:25px;
	  vertical-align:middle;
 }

</style>