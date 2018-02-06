<template>
<div class="container-fluid">
    <div class="row parent" :style="{'background':`url(${ballMediaAttr.bgImg}) no-repeat`,
    'background-size':'cover','-webkit-background-size':'100%'}">
        <div class="col-sm-3 col-md-5 col-xs-1"></div>
        <div class="col-sm-9 col-md-7 col-xs-11 item">
            <p  class="item">
               <div class="ball" :style="{'background':`url(${ballMediaAttr.ball.bgUrl}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                  <h1>{{ballMediaAttr.ball.title}}</h1>
                  <p class="word">{{ballMediaAttr.ball.word}}</p>
                  <p class="text-center">
                    <span class="view" :style="{'background':`url(${ballMediaAttr.ball.btnUrl}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%','color':`${ballMediaAttr.ball.btnColor}`}">{{ballMediaAttr.ball.btnName}}</span>
                  </p>
               </div>
            </p>
        </div>
    </div>
</div>
 

</template>
<script>
 
 export default {
  props: ["ballMediaAttr"], 

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
  
.container-fluid {
    margin: 0;
    margin-bottom: 3%;
    padding: 0;
    width:100%;
    height: 100%;
}

img  {
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}
.parent{
    margin:0;
    padding: 0;
    width:100%;
    //padding-top: 30%;
    //border:3px solid blue;
}

.item{
    margin:80px auto;
    border:3px solid blue;
}
.item h1{
    position: absolute;
    display: block;
    font-family: 'GD-HEI';
    font-size:70px;
    color:white;
    left:26%;
    top:25%;
}
.item .word{
    padding:10px 100px;
    position: absolute;
    display: block;
    font-size:20px;
    color:white;
    left:2%;
    top:38%;
}
.ball{
    width:100%;
    padding-top: 100%;
    border:3px solid red;
}

.item .view{
    text-align: center;
    display: block;
    font-size:35px;
    width:180px;
    margin:0 auto;
    margin-top: -22%;
    padding:0px 20px;
    //border:3px solid blue;
}

.item .view{
    height: 100px;
}
@media (max-width:1024px) {
    .item h1{
        font-size:50px;
        color:white;
        left:28%;
        top:22%;
    }
    .item .word{
        padding:5px 120px;
        font-size:20px;
        color:white;
        left:0%;
        top:35%;
        padding-right: 80px;
    }
    .item .view{
        font-size:20px;
        width:150px;
    }
}


@media (max-width:766px) {
    .item h1{
        font-size:34px;
        color:white;
        left:23%;
        top:14%;
    }
    .item .word{
        font-size:15px;
        color:white;
        left:0%;
        top:30%;
        padding:0px 40px;
        padding-right: 45px;
 
    }
    .item .view{
        font-size:14px;
        width:100px;

    }
    .item{
        margin:30px auto;
    }
    .ball{
        padding-left: 0;
        margin-left: -10px;
    }
}
@media (max-width:600px) {
    .item h1{
        font-size:30px;
    }
    .item .word{
        font-size:12px;
    }
}
</style>