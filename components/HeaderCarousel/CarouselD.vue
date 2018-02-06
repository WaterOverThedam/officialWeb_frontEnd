<template>
     <div class="container" >
    
        <div class="row parent" :class="{'ff-parent':ff}" :style="{    
        'background':`url(${navAttr.bgImg[3]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">

            <div class="container-fluid" :class="{'ff-container':ff}">
                <div class="row" id="menu">
                    <div class="col-sm-2 text-left item" id="logo" >
                        <img :src="menu.logo" alt="">
                    </div>
                    <div class="col-sm-2 hidden-xs text-left xs-hidden item" v-for="item of menu.content">
                        <img :src="menu.icon" alt="">
                        <a href="#">{{item}}</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-11 hidden-xs col-sm-offset-1 text-left">
                        <h1 class="title" v-text="navAttr.bottom.title[0]"></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-11 col-sm-offset-1 col-xs-offset-3 text-left">
                      <p>
                        <span class="find" :style="{'background':`url(${navAttr.bottom.pic[0]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">{{navAttr.bottom.title[1]}}</span>
                      </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-left">
                        <img class="loop" :src="navAttr.bottom.pic[1]" >
                    </div>
                </div>
                <div class="row arrow-down text-center" :class="{'ff-arrow':ff}">     
                    <img :src="navAttr.bottom.pic[2]" height="96" width="107"/>
                </div>
                <div class="row wave" :class="{'ff-waves':ff}" :style="{'background':`url(${navAttr.bottom.pic[3]})`,'background-size':'cover','-webkit-background-size':'100%'}">
                </div>
    
            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: ["navAttr"], 
  data () {
    return {
      ff:false,
    }
  },
  computed:{
    menu(){
      return this.$store.state.menu;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    json: function(value){
        return JSON.stringify(value)
    }
  },
  methods: {
 
  },
  mounted () {
    if(navigator.userAgent.indexOf('Firefox')>=0){
       this.ff = true;
    } 
  }
}
</script>

<style scoped>

.container  {
    margin: 0;
    padding: 0;
    margin-top:1%;
    width:100%;
}
img  {
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}

#menu .item img {
    margin-top: -5px;
}

#menu .item a {
    color:white;
    font-size: 20px;
}
.parent {
    margin:0px;
    padding: 0px;
    margin-top:3%;
    width:100%;
    padding-top: 6%;
    //border:3px solid blue;
}
 
 

.parent .container{
    margin-top: -1%;
    //border:3px solid blue;
}

.wave{
    padding-top:5%;
}

@media(max-width: 1300px){
    .ff-container{
       height: 300px;
    }
    .ff-arrow .ff-waves{
        display: none;
    }
}

 
.title{
    font-family: 'GD-HEI';
    color:white;
    margin-top: 12%;
    margin-bottom: 6%;
    font-size: 70px;
}
.find{
    padding:12px;
    color:white;
    font-size: 26px;
    margin-bottom: 10%;
}

.arrow-down{
    margin-top:2%;
}
 


@media(max-width:768px){
    .title{
        font-size: 40px;
    }
    .find{
        font-size: 14px;
        padding:6px;
    }
    #menu .item img {
        margin-top: 15px;
    }
}

@media(max-width:992px){
    #menu .item a {
        font-size: 14px;
    }
        #menu .item img {
        font-size: 3px;
    }
    #menu .item{
        margin-right: 0;
        padding-right:0;
 
    }
}

@media(max-width: 768px){
    .ff-container{
        height: 280px;
    }
 }
@media(max-width: 500px){
    .ff-container{
        height: 180px;
    }
}
</style>
