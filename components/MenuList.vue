<template>
      <div class="row menu">
        <div class="col-sm-2 text-left item" id="logo" @click="goHome">
            <img :src="logo" alt="">
        </div>
        <div class="col-sm-2 hidden-xs text-left xs-hidden item" v-for="item in menu.content">
            <img class="asterisk" :src="icon" alt="">
            <nuxt-link class="link" :to="item.value" v-text="item.name">
            </nuxt-link>
        </div>
      </div>
</template>
    
<script>
import { mapActions } from 'vuex';
export default {
  data () {
    return {
        icon:"/img/index/asterisk.png",
        logo:"/img/index/logo.png"
    }
  },
  methods:{
      goHome(){
         location.href="/"
      }
  },
  computed:{
    menu(){
      return this.$store.state.menu;
    }
  }
}
</script>


<style scoped>
    #logo{
        cursor: pointer;
    }
   .col-sm-2{
      margin:0;
      padding:0;
      /* //border: 1px solid red; */
      width: auto;
   }
   .menu .item{
      margin-left:20px;
   }
   .menu .item a{
      background: transparent;
      transition: color 0.1s linear;
   }

   .menu .item a:hover{
      text-decoration: none;
      font-weight: bolder;
      color: #5160AC;
   }
   
   .menu .item img {
      margin-top: -8px;
   }

   .menu .item a {
      color:white;
      font-size: 20px;
   }
   

 
 
  @media(max-width:992px){
      .menu .item a {
          font-size: 15px;
      }
      .menu .item .asterisk {
          height: 22px;
          margin-top: -6px;
      }
      .menu .item{
          margin-right: 0;
          padding-right:0;
   
      }
   
  }

  @media(max-width: 768px){
      .menu #logo img {
          width:70px;
      }
   
  }
 
</style>
