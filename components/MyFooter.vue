<template>
  <footer>
    <div class="container-fluid main" :style="{'background-color': bgColor}">
       <div class="row">
         <div class="col-sm-12 divider-dash-line">
            <div class="container-fluid">
                  <div class="row">
                      <div class="col-sm-2">
                      </div>
                      <div class="col-sm-8">
                           <p class="text-center">
                             <h4 class="menu">
                                   <ul>
                                      <li v-for="(item, index) of footer.footerMenu" :class="'item'+index">
                                        <a href="#" v-text="item"></a> 
                                      </li>
                                   </ul>
                             </h4>
                           </p>
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
 export default {
  props:['bgColor'],
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
  .main{
    margin:0;
    margin-top:20px;
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
    background-image: url(/img/index/dash-line-sprite.png);
    background-repeat: repeat-x;
    background-position: 0 -6px;
    width: 100%;
    height: 4px;
  }
 
  .menu ul li {
    display: inline-block;
  }

  .menu ul li a {
    border-left:1px solid white;
    padding:0 6px;
  }

  .menu ul .item0{
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
    letter-spacing: 3px;
    padding-top: 10px;
    padding-bottom: 20px;
    font-size:18px;
    //rder:2px solid blue;
  }


  @media(max-width:766px){
    .menu{
      margin-left: -8%;
      padding-top: 8%;
    }
    .copyright{
      padding-top: 10px;
      font-size:16px;

    }
  }  
 
 
</style>