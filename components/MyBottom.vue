<template>
  <footer>
    <div class="main" :style="{'background':`url(${footer.bottom_pic}) 50% 50% no-repeat`}">
       <div class="menu">
             <ul>
                <li v-for="(item, index) of footer.footerMenu" :class="'item'+index">
                  <a href="#"><span v-text="item"></span></a> 
                </li>
             </ul>
       </div>
       <span v-text="footer.copyright"></span>
    </div>
  </footer>
</template>
<script>
 export default {
  props: ["btnAttr"],	
  data () {
    return {
      footer:{
        footerMenu:[
          "今日更新",
          "联系我们",
          "网站地图",
          "首页",
          "我们的课程",
          "儿童教育"
        ],
        copyright:"版权所有：上海小小乐杰健身休闲有限公司 沪ICP备17040660号-2",
        bottom_pic:"/img/index/bottom.png"
      }
    }
  }
 }
</script>


<style scoped>
 
  .menu ul li {
    display: inline-block;
    color: white;
    padding:0px 5px;
    border-left:2px solid white;
  }
  .menu ul li a span{
    margin:0px;
    padding:0px;
    color: white;
  }
  .menu ul .item0{
    border-left:none;
  }
  a:hover span{
    background-color:#364693;
  }
  .menu{
    margin:0 auto;
    margin-top: 2%;
    margin-bottom:13%;
    text-align: center;
    padding-top: 43px;
    height: 30px;
    //border:3px solid blue;
  }

  span{
    margin-left:2%;
    margin-top:-7%;
    margin-bottom:6%;
    display: block;
    text-align: center;
    //border:3px solid blue;

  }
 
	.main {
    margin-top: 60px;
    color: white;
    font-size: 16px;
    letter-spacing: 5px;
    -webkit-background-size:100%;
    background-size:cover;
    padding-top: 1%;
    border:3px solid white;
    margin-bottom:-2%;
  }
 
  @media(max-width:768px){
    .main {
      font-size: 12px;
    }
  } 

 
</style>