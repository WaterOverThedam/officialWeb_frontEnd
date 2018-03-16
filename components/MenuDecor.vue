<template>
    <div class="outer" >
        <p class="title" v-text="bottom.title[0]"></p>
        <p>
          <span class="find" :style="{'background':`url(${bottom.pic[0]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">{{bottom.title[1]}}</span>
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
             "全国同步教案",
             "寻找离你最近的中心"
          ],
          pic:[
             "/img/index/btn_long_blue.png",
             "/img/index/loop.png",
             "/img/index/arrow-down.png",
             "/img/index/waves.png"
          ] 
        }
  
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
        left:20%;
        /* //border:3px solid blue; */
    }

   

 
 

}
</style>
