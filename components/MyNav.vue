<template>
 <div>

      <header>
           <nav class="navbar navbar-tlgc navbar-fixed-top">
              <div class="container-fluid">
                         <div class="dropdown">
                              <span style="font-family:Comic Sans MS;font-size:14px;" data-target="menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
 
                                <div class="menu-icon all-blur"></div>
                              </span>   
                              <div class="menu-gb" v-show="logShow">
                                <div id="logo" class="item">
                                  <img src="/img/index/logo.png" alt="">
                                </div>
                                <div class="item link" v-for="(item, index) in navAttr.menu">
                                  <img src="/img/index/asterisk.png" alt="">
                                  <a href="#" v-text="item"></a> 
                                </div>
                              </div>
                              <ul id="menu" class="dropdown-menu" >
                                <li v-for="item of navAttr.menu">
                                  <a href="" v-text="item"></a>
                                </li>
                              </ul>
                         </div>
                      
                        <ul class="gym" >
                             <li id="find" style=""><a href="#">全国中心</a></li>
                             <li id="own"  style=""><a href="#">加盟中心</a></li>
                        </ul>
     
              </div>
            </nav>
            <Carousel :navAttr="navAttr"></Carousel>
     </header>
 
</div>
</template>

<script>
  
import Carousel from '~/components/carousel/Carousel.vue'

export default {
  props: ["navAttr"], 
  components: {
    Carousel
  },
  data(){
    return{
       logShow: true,
    }
  },
  methods: {

      handleScroll () {
        //console.log(window.scrollY);
          this.logShow = window.scrollY<80;
     }
  },
  mounted () {
 
   // window.addEventListener('scroll', this.handleScroll);
  }
 }
</script>

<style scoped>
   .menu-gb { 
      margin:0 auto; 
      top:70px;
      left: 80px;
      position: absolute;
      width: 1020px;
      //border:3px solid red;
    }
 
    #logo{
        width: 250px;
        height: 200px; 
    }
    .menu-gb img{      
       width:auto;
       height:auto;
       max-width:100%;
       max-height:100%;
       float: left;
       //border:3px solid blue; 
    }
    .menu-gb .item {
       width: 130px;
       height: 28px;    
       color:white;
       float:left;
       //border:3px solid blue; 
       font-size: 16px;
    }
    .menu-gb .item  a{
       display: block;
       float: left;
       height: 45px;
       width: 120px;
       margin-left: 40px;
       margin-top: -25px;
       //border:3px solid red;
    }

    @media(max-width:768px){
       .menu-gb {
        width: 300px;
        top:8px;
        left:-480px;
       }
       .menu-gb .link{
         display: none;

       }

    }

  .dropdown{
     margin-top:5px;
     width: 100px;
   }

   .all-blur{
       -webkit-filter: blur(1px); 
       -moz-filter: blur(1px);
       -ms-filter: blur(1px); 
       -o-filter: blur(1px);
       filter: blur(1px);
       filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');/* IE6~IE9 */
  }
 .menu-icon{
    width: 30px;
    height: 25px;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    background-color: white;
    padding: 5px 0;
    background-clip:content-box;  
  }

  .dropdown-menu{
    background-color: #33CCCC;
  }
      
  nav {
    padding: 0px
   }
  body{

     // padding-top:70px;
  }
  header { 
      margin:0px;
      height: auto;
  //  border:3px solid red;
  }

 
  .container-fluid { 
     background-color: #33CCCC;
   
      // border:3px solid blue;
  }
  .gym li{ 
   
    // display: inline-block;
     color:white;
     width: 65px;
    // border:3px solid blue;
  }
  .gym {
    float: right;
  }
  nav a,#menu a{
     color: white;
  }
  #menu a:hover{ 
    background-color:#36A6DE;
  }

  @media(min-width:768px){
    .navbar-header{
      margin-right:-100px;
    }
  }
   

  #find{
   list-style-type:none;margin-top:-18px;margin-left:-80px;
  }
  #own{
   margin-right:40px;margin-top:-19px;padding:0px;
  }


  @media screen and (max-width:768px){
    .dropdown{
      top:50px;
      right: 0px;
      float: right;
      z-index: 50003;
  }

  #find { 
    list-style-type:none;
    margin-top:10px;
    margin-left:-30px;
  }
  #own { 
    margin-top:-19px;
    margin-left:50px;
    margin-right:-70px;
  }
}
 
 
 

.navbar-tlgc input[type="text"]{
    background: #313131;
    border:none;
    color: #999;
}
.navbar-tlgc{
    margin: 0px;
}
.navbar-tlgc button[type="submit"]{
    position: absolute;
    top:30%;
    right: 20px;
    background: none;
    border: none;
} 
@media(min-width:768px){
  .navbar-tlgc button[type="submit"]{
    top:15%;
  }    
}
.navbar-tlgc .glyphicon{
    color:#999
}
.profile{
    margin-right: 25px;
}
 
 
</style>
