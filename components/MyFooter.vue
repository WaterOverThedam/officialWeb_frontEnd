<template>
  <footer>
    <div class="container-fluid main" :style="{'background':`url(${bgColor_cur.pic}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
        <div class="logo">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
       <div class="row">
         <div class="col-sm-12 divider-dash-line">
            <div class="container-fluid">
                  <div class="row">
                      <div class="col-sm-2">
                      </div>
                      <div class="col-sm-8">
                           <div class="text-center">
                             <h4 class="menu">
                                   <ul>
                                      <li v-for="(item, index) of footer.footerMenu" :class="'item'+index">
                                        <a  :href="item.id" v-text="item.title"></a> 
                                      </li>
                                   </ul>
                             </h4>
                           </div>
                           <p class="copyright text-center" v-text="footer.copyright">
                           </p>
                      </div>
                      <div class="col-sm-2 section">
                      </div>
                  </div>
            </div>

         </div>
       </div>
    </div>
  </footer>
</template>
<script>
 import { mapGetters } from 'vuex'
 export default {
  computed: {
      ...mapGetters([
          'bgColor_cur'
      ])
  },
  data () {
    return {
      footer:{
        footerMenu:[
          {"id":"/course","title":"课程"},
          {"id":"/party","title":"派对 & 活动"},
          {"id":"/news","title":"新闻中心"},
          {"id":"/story","title":"我们的故事"},
          {"id":"/contact","title":"联系我们"},
          {"id":"/recruit","title":"招聘"},
          {"id":"/","title":"中心页面"},
          {"id":"/intro","title":"预约体验"},
        ],
        copyright:"版权所有：上海小小乐杰健身休闲有限公司 沪ICP备17040660号-2"
      }
    }
  }
 }
</script>


<style scoped>
  .main{
    margin:0;
    margin-top:20px;
    padding: 10% 0 5%;
  }
  .logo{
    text-align: center;
  }
  .logo a{
    display: inline-block;
    padding: 2.5%;
    margin:0 0.5%;
    /* border: 1px solid red; */
    background-image: url(/img/index/logospirit.png);
    background-position: 3% 100%;
    background-size: cover;
    /* background-clip: content-box; */
  }
  .logo a:nth-child(2){
    background-position: 21% 100%;
  }
   .logo a:nth-child(3){
    background-position: 43% 100%;
    padding:2.5% 4%;
  }
   .logo a:nth-child(4){
    background-position: 64% 100%;
    padding:2.5% 2%;

  }
   .logo a:nth-child(5){
    background-position: 75% 100%;
    padding:2.5% 2%;
  }
   .logo a:nth-child(6){
    background-position: 88% 100%;
    padding:2.5% 2%;
  }
   .logo a:nth-child(7){
    background-position: 99% 100%;
    padding:2.5% 2%;
  }

  .col-sm-12{
    padding: 0;
    margin:0;
  }
  .divider-dash-line:before {
    position: absolute;
    top: 13px;
    display: block;
    z-index: 100;
    content: "";
    opacity: 0.35;
    background-repeat: repeat-x;
    background-position: 0 -6px;
    width: 100%;
    height: 4px;
  }
 
  .menu ul li {
    display: inline-block;
  }

  .menu ul li a {
    border-left:2px solid white;
    padding:0 15px;
    font-size: 1em;
    display: inline-block;
  }

  .menu ul .item0 a{
    border-left:none;
  }
          
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom:-5px;
    left: 0;
    background-color: white;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }         
  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  } 

  p,a{
    color: white;
  }
  a:link{
    text-decoration:none
  }
  a:hover,a:focus{
      font-weight: bolder;
  }

  @media screen and (min-width: 48em){
    .section:after {
        display: inline-block;
        text-align: right;
        content: "";
        background-image: url(/img/index/sprite-accents-white.png);
        background-repeat: no-repeat;
        background-size: 500px;
        background-position: -100px 0px;
        width: 50px;
        height: 50px;
        margin-top: 50px;
        //border:2px solid white;
      }
  }  

  .menu{
    margin:0 auto;
/*    margin-left: -2%;
    margin-right: 2%;*/
    padding-top: 3%;
    text-align: center;
  }
  .copyright{
    /* letter-spacing: 3px; */
    padding-top: 10px;
    padding-bottom: 20px;
    font-size:1.2em;
    /* //rder:2px solid blue; */
    margin-top:5%;
  }


  @media(max-width:766px){
    .menu{
      margin-left: -8%;
      padding-top: 8%;
    }
    .copyright{
      padding-top: 10px;
      font-size:0.5em;

    }
    .menu ul li a {
      border-left:1px solid white;
      padding:0 8px;
      font-size: 0.5em;

    }
  }  
 
 
</style>