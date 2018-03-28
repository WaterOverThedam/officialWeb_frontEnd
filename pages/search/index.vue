<template>
 <div @click="test()" class="overhidden"> 
    <MyNav :bgColor="bgColor[counterNow]"></MyNav>
    <main>
      <div class="parent">
        <div class="banner" :style="{'background':`url(${banner[0]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
        </div>
        <p class="title1" v-text="title"></p> 
      </div>
      <Waves></Waves>
      <div class="menu">
         <div  v-for="(m,index) in btn_menu"><img @click="open(index)" :src="m.defaultPic" alt=""></div>
      </div>
      
      <!-- <div class="banner" :style="{'background':`url(${banner[1]}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"> </div>  -->
       
      <component :is="map" :gyms="gyms" :global="global" :provs="provs" :american="american"></component>
 
 
      <CourseBrief></CourseBrief>
    </main>
    
    <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>

 </div>
</template>

<script>
import search from './search'
import MyNav from '~/components/MyNav.vue'
import Waves from '~/components/Waves.vue'
import GymMap from '~/components/GymMap.vue'
import AmericanMap from '~/components/AmericanMap.vue'
import GlobalMap from '~/components/GlobalMap.vue'
import CourseBrief from '~/components/CourseBrief.vue'
import MyFooter from '~/components/MyFooter.vue'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  head:{
    title:"查找中心",
    script: [
        {src: '/js/search.js'},
      {src: '/ui/highmaps.js'},
      
    ] 
  },
  computed:{
    bgColor(){
      return this.$store.state.bgColor;
    },
    counterNow(){
      return parseInt(this.$store.state.counter/600)%this.bgColor.length;
    }
  },
  data () {
    return {
      map:'gym-map',
      gyms:[],
      ...search
    }
  },
  components: {
    Waves,
    MyNav,
    CourseBrief,
    GymMap,
    AmericanMap,
    GlobalMap,
    MyFooter
   
  },
  methods: {
    test(){
  
    },
    open(i){
        this.btn_menu.map((item,index) => {
        if(index==i){
           item.defaultPic=item.linked;
           this.map = item.id;
        }else{
           item.defaultPic=item.link;
        }
      })
    },
    getGyms_jsonp(){
          var GB2312UnicodeConverter = {
              ToUnicode: function (str) {
                  return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
              }
              , ToGB2312: function (str) {
                  return unescape(str.replace(/\\u/gi, '%u'));
              }
          };
          //var city = '上海市', unicode;
          
          var url_jsonp = "http://bbk.800app.com/uploadfile/staticresource/238592/279833/dataInterface_jsonp_uni.aspx";
          var sql_getGym = "select crmzdy_81744958 prov,crmzdy_81744959 city,crm_name name,crmzdy_82040405 coordinate,crmzdy_80620116 code,crmzdy_80616967 phone,crmzdy_80620118 email,replace(REPLACE(crmzdy_81765917,CHAR(13)add;CHAR(10),'<br/>'),'	',',') tip,crmzdy_80616968 addr from crm_zdytable_238592_23594_238592_view gyms where crmzdy_82037329=1 /*and crmzdy_81744959='var_city'*/ and crmzdy_80620116 between '500005' and '600005'";
          
          //sql_getGym = sql_getGym.replace('var_city',city);
          sql_getGym = GB2312UnicodeConverter.ToUnicode(sql_getGym); 
          // 跨域请求数据
          this.$jsonp(url_jsonp,{sql1:sql_getGym
          }).then(json => {
              json =JSON.parse(json);
              console.log(json);
              this.gyms = json.info[0].rec
          　　// 返回数据 json， 返回的数据就是json格式
          }).catch(err => {
          　　console.log(err)
          })
         
    },
    ...mapMutations([
      "tester"
      ]),
    ...mapActions([
      "incrementAsync"
      ])
  },
  mounted(){
    this.getGyms_jsonp();

  } 
 
}
</script>

<style scoped>
.overhidden{
  overflow: hidden;
}
main {
  font-size: 40px
} 
.banner{
   margin:0;
   padding:0;
   padding-top:45%;
}
.parent{
   position:relative;  
   margin-top:3%;
} 
.parent .title1{
   width: 100%;
   position: absolute;
   color:white;
   font-family: 'GD-HEI';
   font-size: 1.6em;
   letter-spacing: 0.2em;
   bottom:20%;
   padding-left:10%;
   color:white ;
}

 

.menu{
    margin-bottom:12%;
    margin-left:13%;
}
.menu img{
  cursor: pointer;
  float: left;
  display:block;
  width:20%;
  margin:auto 4%;

}

.menu li img{
  width: 100%;
}  

 
@media (max-width:992px){
  main {
    font-size: 30px
  } 
}
@media (max-width:768px){
  main {
    font-size: 20px
  } 
 
}

 
</style>