<template>
    <div class="outer" >
        <p class="title" v-for="(item,index) in bottom.title" v-text="item" :class="{'myFadein':index===counterNow}"></p>
        <p>
          <a href="/search">
            <span class="find" :style="{'background':`url(${bottom.pic[0]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">{{bottom.title2}}</span>
          </a>
        </p>
        <p class="loop">
          <img :src="bottom.pic[1]">
        </p>
        <p class="arrow-down">
          <img :src="bottom.pic[2]">
        </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data () {
    return {
        bottom:{
          title:[
             "全国同步教案1",
             "全国同步教案2",
             "全国同步教案3",
             "全国同步教案4",
             "全国同步教案5",   
          ],
          title2:"寻找离你最近的中心",
          pic:[
             "/img/index/btn_long_blue.png",
             "/img/index/loop.png",
             "/img/index/arrow-down.png",
             "/img/index/waves.png"
          ] 
        }
  
    }
  },
  computed:{
       counterNow(){
            return parseInt(this.$store.state.counter/4)%this.bottom.title.length;
        }
  },
  mounted(){
      console.log(11111)
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
  }
}
</script>

<style scoped>

 
.outer{
  padding:0;
  margin:0;
  width:100%;
  height:0;
  padding-top:55%;
  /* //border:1px solid yellow; */
  /*父元素padding百分hight0实现自适应高度，
   子元素absolute或兄弟元素重叠实现定位;
  */
}
 

.title{
    position:absolute;
    font-family: 'GD-HEI';
    color:white;
    top:35%;
    left:10%;
    /* //border:1px solid red; */
    font-size: 90px;

    /* 幻灯片效果 */
    opacity: 0;
     -webkit-transition: opacity 2s linear;
    -moz-transition: opacity 2s linear;
    -o-transition: opacity 2s linear;
    transition: opacity 2s linear;
}

/* 显示 */
.myFadein{
  opacity: 100;
  filter: alpha(opacity=100);
}
 
.find{
    position:absolute;
    cursor: pointer;
    display: inline-block;
    font-size:38px;
    /* inline-height:30px; */
    padding:5px 22px;
    color:white;
    bottom:30%;
    left:15%;
}
 
.loop{
    position:absolute;
    bottom:15%;
    left:10%;
}

.arrow-down{
    position:absolute;
    bottom:5%;
    left:50%;
} 



@media(max-width: 768px){
    .title{
        /* font-size: 40px; */
          /* 移动端细节修改 */
        font-size: 48px;
        top:54%;

    }
    .find{
        font-size: 17px;
        left:16%;
        bottom:25%

    }

    .arrow-down{
        /* width: 3em; */
        margin-top:-10%;
        /* 移动端细节修改 */
        width:7em;
        left:40%;
    }   
    .loop{
      height: 50px;
      margin-top:-3%;
    }
    /* 移动端修改 */
    .outer{
        height:100%;
    }
}

@media(max-width: 500px){

    .find{
        padding:10px;
        color:white;
        /* 移动端细节修改 */
        font-size: 19px;
        left:25%;
        /* //border:3px solid blue; */
    }
    .title{
        left:14%;

    }

   

 
 

}
</style>
