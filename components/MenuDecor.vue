<template>
    <div class="outer" >
        <div class="title hidden-xs" v-for="(item,index) in bottom.title"  :class="{'myFadein':index===counterNow}" >
            <p v-text="item.p1"></p>
            <p v-text="item.p2"></p>
        </div>
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
             {p1:"享誉美国42年的",p2:"运动型教育品牌"},
             {p1:"遍布全球30多个国家",p2:"近400家中心"},
             {p1:"连续六年被权威杂志《Entrepreneur》",p2:"推荐的儿童早期教育品牌"},
             {p1:"全国同步教案",p2:""},
             {p1:"上千首美式原创音乐",p2:""},
          ],
          title2:"寻找离您最近的中心",
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
    font-size: 50px;

    /* 幻灯片效果 */
    opacity: 0;
     -webkit-transition: opacity 2s linear;
    -moz-transition: opacity 2s linear;
    -o-transition: opacity 2s linear;
    transition: opacity 2s linear;
}
.title p {
    margin: 0;
     text-shadow: 3px 3px 2px rgba(0,0,0,0.8)
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
    font-size:26px;
    /* inline-height:30px; */
    padding:8px 22px 5px;
    color:white;
    bottom:16%;
    left:15%;
    font-family: "J-YUAN"
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


@media(min-width:1200px){
    .title{
        font-size: 70px;
    }
}
@media(max-width: 768px){
    .title{
        /* font-size: 40px; */
          /* 移动端细节修改 */
        /* font-size: 50px; */
        top:40%;

    }
    .find{
        font-size: 17px;
        left:16%;
       

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
         bottom:25%
        /* //border:3px solid blue; */
    }
    .title{
        left:14%;

    }

   

 
 

}
</style>
