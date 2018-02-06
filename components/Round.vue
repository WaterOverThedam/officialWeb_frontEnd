<template>
 
  <div class="outer" :style="{'background':rdColor}">
    <div class="yuan"><p>年龄</p><p v-text="age"></p></div>
  </div>
 
</template>
<script>
 export default {
  props: ["age","rdColor"],	
  data () {
    return {
       
    }
  }
 }
</script>


<style scoped>
	
 p{
   padding:0;
   margin:0;
   color:white;
   font-size:16px;
   text-align:center;
 }
 
 .outer .yuan{
     padding-top:12%;
	 width:88px;
	 height:88px;
	 -webkit-border-radius:50%;
	 -moz-border-radius:50%;
	 border-radius:50%;
	 position:absolute;
	 left:50%;
	 top:50%;
	 transform:translate(-50%, -50%);
	 -ms-transform:translate(-50%, -50%);
	 -moz-transform:translate(-50%, -50%);
	 -webkit-transform:translate(-50%, -50%);
	 -o-transform:translate(-50%, -50%);
	 border:3px dashed rgba(0, 0, 0, 0.1);   
 }
 .outer {
	 width:100px;
	 height:100px;
	 top:0px;
	 right:0px;
	 -webkit-border-radius:50%;
	 -moz-border-radius:50%;
	 border-radius:50%;
	 position:absolute;
	 margin:4%;
 }

 
</style>