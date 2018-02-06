<template>
<div class="container-fluid parent" :style="{'background':`url(${ballMediaAttr.bgImg}) no-repeat`,
    'background-size':'cover','-webkit-background-size':'100%'}">
    <div class="row" >
        <div class="col-sm-6 col-md-6 col-xs-7 text-left">
            <div class="ballouter">
              <div class="ball" :class="{'ff-item':ff}" :style="{'background':`url(${ballMediaAttr.ball.bgUrl}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
              </div>
            </div>
            <div class="balltext">
                  <h1>{{ballMediaAttr.ball.title}}</h1>
                  <p class="hidden-xs hidden-sm word">{{ballMediaAttr.ball.word}}</p>
                  <p class="text-center">
                    <span class="view" :style="{'background':`url(${ballMediaAttr.ball.btnUrl}) no-repeat`,'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100%','color':`${ballMediaAttr.ball.btnColor}`}">{{ballMediaAttr.ball.btnName}}</span>
                  </p>
            </div>
            
        </div>
    </div>
</div>
 

</template>
<script>
 
 export default {
  props: ["ballMediaAttr"], 
  computed: {
 
  },
  data () {
    return {
      ff:false
    }
  },
  mounted(){
    if(navigator.userAgent.indexOf('Firefox')>=0){
       this.ff = true;
    } 
  }
 }
</script>

<style scoped>
  
.parent{
   //border:3px solid yellow;
   padding-top:6%;
   padding-bottom:43%;
   margin-bottom:2%;
   margin-top: 2%;
}
img  {
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}

.ballouter{
    height: 0;
}

.ball{
    width: 100%;
    padding-top: 95%;
    //border:3px solid red;
}
.balltext {
  height: 0;
  padding-top:14%;

}
.balltext h1{
    padding-right: 20px;
    text-align: center;
    font-family: 'GD-HEI';
    font-size:6em;
    color:white;
  
}
.balltext .word{
    padding:10px 120px;
    padding-left: 120px;
    font-size:1.4em;
    color:white;

}
.balltext .view{
    cursor: pointer;
    display: inline-block;
    font-size:38px;
    inline-height:30px;
    padding:5px 22px;
    //border:3px solid blue;
}



@media screen and (max-width:1300px) {
  .balltext h1{
    text-align: center;
    font-family: 'GD-HEI';
    font-size:4.6em;
    color:white;

  }
  .balltext .word{
    padding-right: 70px;
    padding-left: 60px;
    font-size:1.4em;
    color:white;

  }
  .balltext .view{
    font-size:35px;
  }
 
}
 


@media screen and (max-width:1200px) {
  .balltext h1{
    text-align: center;
    font-family: 'GD-HEI';
    font-size:4.6em;
    color:white;

  }
  .balltext .word{
    padding:1px 70px;
    padding-left: 40px;
    padding-bottom: 40px;
    font-size:1.2em;
    color:white;

  }
  .balltext .view{
    font-size:30px;
  }
 
}
@media (max-width:767px) {
    .balltext h1{
        font-size:2.3em;
        color:white;
        margin-left:5px;
        margin-top: 14%;
        margin-bottom: 30px;
        //border:3px solid red;
    }
   .balltext .view{
      font-size:14px;
    }
  }
  @media (max-width:400px) {
    .balltext h1{
        font-size:1.7em;
        color:white;
        margin-top: 14%;
        margin-bottom: 30px;
        //border:3px solid red;
    }
    .balltext .view{
      font-size:9px;
      padding:3px 8px 1px 6px;
   }

 }

 
</style>