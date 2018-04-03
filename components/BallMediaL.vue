<template>
<div class="container-fluid parent" :style="{'background-image':`url(${ballMediaAttr.bgImg})`}">
    <div class="row" >
        <div class="col-sm-6 col-md-6 col-xs-12 text-left">
            <div class="ballouter">
              <div class="ball" :class="{'ff-item':ff}" :style="{'background':`url(${ballMediaAttr.ball.bgUrl}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
              </div>
            </div>
            <div class="balltext">
                  <h2 class="text-center">{{ballMediaAttr.title[0]}}</h2>
                  <h2 class="text-center">{{ballMediaAttr.title[1]}}</h2>
                  <h1>{{ballMediaAttr.ball.title}}</h1>
                  <p class="hidden-xs hidden-sm word">{{ballMediaAttr.ball.word}}</p>
                  <p class="text-center">
                    <a class="view" :href="ballMediaAttr.ball.address" :style="{'background':`url(${ballMediaAttr.ball.btnUrl}) no-repeat`,'background-size':'cover','-moz-background-size':'cover','-webkit-background-size':'100% 100%','color':`${ballMediaAttr.ball.btnColor}`}">{{ballMediaAttr.ball.btnName}}</a>
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
 a{
   text-decoration: none;
 } 
.parent{
   /* //border:3px solid yellow; */
   padding-top:6%;
   padding-bottom:43%;
   margin-bottom:2%;
   margin-top: 2%;
   background-size: cover;
   background-repeat: no-repeat;
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
    /* //border:3px solid red; */
}
.balltext {
  height: 0;
  padding-top:12%;

}
.balltext h2 {
  color:#fff;
  font-size: 45px;
  font-family: "MA-JOR";
  padding: 0 24%;
  margin: 0;
}
.balltext h1{
    padding-right: 20px;
    text-align: center;
    font-family: 'GD-HEI';
    font-size:6em;
    color:white;
    margin-top: 0;
  
}
.balltext .word{
    padding:10px 120px;
    padding-left: 120px;
    font-size:1.4em;
    color:white;
    font-family: "J-YUAN";

    /* line-height: 1.3em; */

}
.balltext .view{
    cursor: pointer;
    display: inline-block;
    font-size:21px;
    /* inline-height:30px; */
    padding:3% 3% 2%;
    font-family: "J-YUAN";
    /* //border:3px solid blue; */
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
    font-size:21px;
  }
 
}


@media screen and (max-width:1200px) {
  .balltext h1{
    text-align: center;
    font-family: 'GD-HEI';
    font-size:3.6em;
    color:white;
    /* line-height: 1em; */

  }
  .balltext h2 {
    font-size: 30px;
  }
  .balltext .word{
    padding:1px 70px;
    padding-left: 40px;
    padding-bottom: 40px;
    font-size:1.2em;
    color:white;
    line-height: 1.3em;

  }
  .balltext .view{
    font-size:21px;
  }
 
}
@media (max-width:767px) {
    .parent{
      height: 400px;
      background-position: 100% bottom;
    }
    .ball{
      /* position: absolute;
      left: 20%;
      top:35px; */
      padding:168px 150px;
      margin-left: 3%;
    }
  
    .balltext h2 {
      padding: 0;
    }
    .balltext h1{
        /* position: absolute;
        left:30%; */
        /* width: 100%;
        font-size:3.6em;
        color:white;
        margin-left:10px;
        margin-top: 49%;
        margin-bottom: 30px; */
        /* //border:3px solid red; */
    }
   .balltext .view{
      font-size:16px;
      /* position: absolute;
      top:200px;
      right:0; */
    }
  }
  @media (max-width:400px) {
    .balltext h1{
        /* font-size:1.7em; */
        color:white;
        /* margin-top: 14%; */
        margin-bottom: 30px;
        /* //border:3px solid red; */
    }
    .balltext .view{
      /* font-size:9px; */
      padding:10px 8px 5px 6px;
   }

 }

 
</style>