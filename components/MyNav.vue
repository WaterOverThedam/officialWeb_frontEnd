<template>
 <header>
  <nav class="navbar navbar-tlgc navbar-fixed-top" :style="{'background-color': bgColor_cur.color}">
        <div class="container-fluid p-r0">
            <div class="row">
              <div class="col-sm-1">
              </div>
              <div class="col-sm-6">
                  <div class="logo" style="display:none">
                    <!-- <a href="/"><img src="/img/index/littlegym-logo-desktop.png"></a> -->
                    <img src="/img/index/littlegym-logo-desktop.png">
                  </div>
                  <span class="tel hidden-xs"></span>
                  <span class="telNumber hidden-xs">4001801976</span>
                  
              </div>
              <div class="col-sm-5 text-right">
                    <ul class="gym" >
                       <!-- <li id="find"><nuxt-link :to="'/service/detail'" class="link" href="#">全国中心</nuxt-link></li> -->
                       <li id="find">
                         <nuxt-link to="/search" class="link" >全国中心列表</nuxt-link>
                         <!-- <a href="/search" class="link">全国中心列表</a> -->
                         </li>
                       <li class="dot"></li>
                       <!-- <li id="own"><nuxt-link :to="'/service/detail'" class="link" href="#">加盟中心</nuxt-link></li> -->
                       <li id="own"><nuxt-link to="/join" class="link">加盟</nuxt-link></li>
                       <!-- 中英文切换 -->
                       <!-- <li>
                          <el-dropdown @command="handleCommand" trigger="click">
                            <span>
                               {{tip[Language]}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item command="0">中文</el-dropdown-item>
                              <el-dropdown-item command="1">English</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                       </li> -->
                    </ul>
              </div>
            </div>
       </div>
       <div class="dropdown">
      
          <div class="menu-icon all-blur " data-target="menu" data-toggle="dropdown" role="button">
            <!-- <img src="/img/index/menu_icon.png" alt=""> -->
          </div>
    
          <ul id="menu" class="dropdown-menu" :style="{'background-color': bgColor_cur.color}">
            <li class="visible-xs top">
             <!-- <img class="home" src="/img/index/tlg-logo-menu.png" alt=""> -->
             <nuxt-link to="/" ><img class="home" src="/img/index/tlg-logo-menu.png" alt=""></nuxt-link>
             <img class="close-img" src="/img/index/menu-close-icon.png" alt="">
            </li>
            <li class="item" v-for="(item,index) in menu.content" :key="index">
            <nuxt-link class="link" :to="item.value" v-text="item.name">
            </nuxt-link>
            </li>
          </ul>
       </div>
    </nav>
    <component class="menuList" :is="which"></component>  
 </header>

</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import MenuList from '~/components/MenuList.vue'
 
export default {
  head:{
      link:[
        { rel:'stylesheet',type:'text/css',href:'/css/reset.css'}
      ],
  },
  components: {
    MenuList
  },
  computed:{
    
    ...mapGetters([
        'bgColor_cur',
         'Language'
    ]),
  
    menu(){
      return this.$store.state.menu;
    }
  },
  data(){
    return{
      viewNow: 'CarouselAll',
      which: 'MenuList',
      tip:["中文","English"],
    }
  },
  methods: {
      ...mapMutations([
           "changeLanguage"
      ]),
      handleCommand(command) {
        this.changeLanguage(command)
      }
  },
  
  mounted () {

  }
 }
</script>

<style lang="scss" scoped>
    .p-r0{
      padding-right: 0;
    }
   $logoH:35px;
   .menuList{
     top:15%;
     left:2%;
     position:absolute;
     z-index:300;
   }
   .logo{
       margin-top: 8px;
       height: $logoH;
       float:left;
   }
  .telNumber{
      margin-top:8px;
      height: 36px;
      line-height:36px;
      font-size: 18px;
      color:#fff;
      display: inline-block;
      float: left;
    }
    .tel{
      background-image: url(/img/index/tel.png);
      background-size: cover;
      background-position: center center;
      margin: 8px 1% 0;
      float: left;
      height: 35px;
      width: 50px;
      img{
        
        // position: absolute;
       transform: scale(0.8)
        // width: 100%;
      }
    }
   .dropdown{
     position:absolute;
     top:100%;
     left:0;
     bottom:0;
     right:0;
     margin:0;
     padding:0;
    //  height:100%;
     //border:3px solid blue;
   }

  .dropdown div.menu-icon {
    width: 55px;
    height: 45px;
    cursor: pointer;
    display: block;
    position: absolute;
    // top: -100%;
    top:-50px;
  
    left:1%;
    z-index: 113;
    margin: 4px 0 0 8px;
    //border:3px solid red;
    background: url(/img/index/menu_icon.png) 50% center / 95% no-repeat;
  }

  .dropdown .dropdown-menu{
     margin:0;
     padding:0;
     position:absolute;
     font-family: 'jian';
     font-size:2.4em;
     top:-2%;
     left:-0.5%;
  }
  .dropdown .dropdown-menu li{
     padding: .5em 1em;
     padding-left:6%;
  }

  .all-blur{
      //  -webkit-backdrop-filter: blur(1px);
      //  -webkit-filter: blur(1px); 
      //  -moz-filter: blur(1px);
      //  -ms-filter: blur(1px); 
      //  -o-filter: blur(1px);
      //  filter: blur(1px);
      //  filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');/* IE6~IE9 */
  }


 
  .gym li{ 
     color:white;
     padding: 0;
     margin:0;
     margin-top: 8px;
     font-family: 'J-YUAN';
    //  width: 65px;
   
     list-style-type:disc;
     display: inline-block;
     text-align: center;
     vertical-align: middle;
     //border:3px solid blue;
  }

  .gym .dot{
    height: 4px;
    width: 4px;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    background: white;
    //border:3px solid blue;
  }
  .gym{
    margin:auto 1% auto 6%;
    
  }
 
  nav a {
     color: white;
     font-family: "J-YUAN";
     font-size: 18px;
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
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

  #menu a:hover,#menu a:focus{ 
    color:white;
    background-color: transparent;
    //background-color:
    font-weight: bolder;
  }
 
  @media screen and (max-width:1024px){
     .menuList{
        top:6em;
     }
  }

  @media screen and (max-width:768px){

 
     
      nav a{
        font-size: 14px;
      }

  }
  // 移动端细节修改
@media screen and (max-width:767px){
        .dropdown{
        height: 0;
      }
      .dropdown div.menu-icon {
         right:6%;
         left:auto;
         top:10px;
      }
      .dropdown .dropdown-menu{
          top:0;
          right:0;
          bottom:0;
          left:0;
         
          background:white !important;
      }
      .dropdown-menu li {
          margin:0;
          padding:0;
          border-bottom: dashed 2px #a8afd5;
          text-align:center;
          display: block;
          padding: .5em 1em;
          color: #5160AC;
          background:white !important;
      }
      .dropdown-menu li.top{
          padding-bottom: 3em;
      } 
      .dropdown-menu li a {
          color: #5160AC;
      }
   .home{
        float:left;
        width:100px;
      }
      .close-img{
        width:35px;
        float:right;
      }    
  .gym{
    margin-right:1%;
  }
  .gym li{
    margin-top: 11px;
  }
  .navbar-fixed-top{
    top:-12px;
  }

}

</style>
