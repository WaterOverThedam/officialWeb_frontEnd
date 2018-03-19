<template>
  <div class="container-fluid">
      <div class="row up" :style="{'background':`url(${global.pic.up}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}">

      </div>
      <div class="row down">
          <div class="col-sm-7"> 
            <div class="row euro" :style="{'background':`url(${global.pic.Euro}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}">
                
            </div>
            <div class="row">
                  <div class="col-sm-6 australia" :style="{'background':`url(${global.pic.Australia}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"> </div>
                  <div class="col-sm-6 africa" :style="{'background':`url(${global.pic.Africa}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"> </div>

            </div>

          </div>
          <div class="col-sm-5"> 
            <div class="row american" :style="{'background':`url(${global.pic.America}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"></div>
            <div class="row asia" :style="{'background':`url(${global.pic.Asia}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%'}"></div>
          </div>
      </div>
  </div>
</template>
<script>
 export default {
  props: ["global"],	
  data () {
    return {
   
    }
  }
 }
</script>


<style scoped>
  .up{
    padding: 20%;
  }
 
  .euro{
    padding-top: 60%;
    border: 5px transparent solid;
  }
  .australia,.africa{
    padding-top: 40%;
    border: 5px transparent solid;
  }
  .american{
     padding-top: 75%;
     border: 5px transparent solid;
  }
  .asia{
    padding-top: 71%;
    border: 5px transparent solid;
    margin-bottom: -100px;
  }
  .down{
    margin: 5% auto;
    //border: 1px solid red;
 
  }
 
  @media (max-width:1024px) {
     .asia{
        margin-top:1%;
     }   

  }
 
 
 
</style>