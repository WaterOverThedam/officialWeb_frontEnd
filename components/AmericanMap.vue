<template>
    <div class="container-fluid wrap" :style="{'background':`url(${american.pic}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}" >
      <div id="container">
        
      </div>
     
  </div>
</template>
<script>
    export default {
      props: ["american"],
      head:{
          script: [
            // {src: '/ui/highmaps.js'},
            //   {src: '/ui/exporting.js'},
              
            //   {src: '/ui/us-all.js'},
            //   {src: '/ui/AmericanMap.js'}
              
             
              {src: '/ui/AmericanMap.js'}
              // {src: '/ui/data.js'},
          ] 
  },
  data(){
    return{

    }
  }
    }
</script>
<style scoped>
  #container{
    height:600px;
    width: 80%;
    min-width:310px;
    margin:  0 auto;
  }
  .wrap{
    padding: 0 0 5%;
    position: relative;
  }

@media screen and (min-width:1200px){
   .shade{
       bottom:10%;
    }
}
@media screen and (max-width:767px){
   #container{
     height: 500px;
     overflow: hidden;
   }
   .shade{
    display: none;
  }
}
</style>
