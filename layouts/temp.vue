<template>
  <div>
  	<h3>{{title}}</h3>
    <nuxt/>
  </div>
</template>

<script>
   export default{
     asyncData (context){
     // called every time before loading the component.运行端状态监测;日志
     },
     fetch({store,params}){
      // The fetch method is used to fill the store before rendering the page
     },
     data(){
     	return{
     		title: 'hello page'
     	}
     },
     mounted(){

     }


   } 

</script>