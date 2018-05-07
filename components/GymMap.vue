<template>
<div  class="wrap" style="margin-top: 50px;" oncontextmenu="self.event.returnvalue=false">
    <div class="container-fluid ">

        <!-- 修改 -->

        <div class="row text-center hidden-xs">
            <div class="map_con ">
                    <div v-for="(city,index) in cities">
                        <span :class="['shade','shade_'+city.provId,'add_'+city.provId]" ></span>
                        <p :class="['add01','add_'+city.provId]" v-text="city.prov"></p>
                        
                        <dl style="display: none;" :class="['add01_con','add_'+city.provId+'_con']">
                            <dd v-if="city.city==''">
                                <span>敬请期待</span>
                            </dd>
                            <!-- <dd v-else v-for="c in city.city"><a @click.prevent="switchCity(city.city)" v-text="'· '+city.city"></a></dd> -->
                            <dd v-else v-for="c in city.city">
                                <!-- <a v-if="city.city.length>1" @click.prevent="switchCity(c)" v-text="'· '+c"></a>
                                <a v-else @click.prevent="switchCity(city.city[0])" v-text="'· '+c"></a> -->
                                <a  @click="switchCity(c)" v-text="'· '+c" href="#maps"></a>
                            </dd>
                            <dd class="last"></dd>
                        </dl>
                    </div>
            </div> 
        </div>

        <!-- 截止 -->


        <div @onclick="test()" class="row text-left text-primary subcaption" id="maps">
             <div class="col-md-5 col-sm-5 item" >
                <h3 >寻找离您最近的小小运动馆</h3>
                <!-- <h3 v-text="city"></h3> -->
             </div>
             <div class="col-md-4 col-sm-4 item">
                  <CitySelect></CitySelect>
                
             </div>
        </div>
        <div class="row addr" v-show="isShow">
          <div class="col-md-12 col-sm-12 center" >
              <div class="row more-center" v-show="isShow">
                    <div v-for="(gym,index) in filterGyms" v-show="index<24"class="col-lg-3 col-md-3 col-sm-4 col-xs-12 result text-left gymitem">
                        <span class="marker" @click="showGym(gym)"  v-text="String.fromCharCode(65 + parseInt(index))"></span>
                        <div class="summery">
                            <dl>
                                <dt @click="showGym(gym),go()" class="gymName"   :title="'地址：'+gym.addr" > 
                                        {{gym.name}}<span class="el-icon-search searchmap hidden-md hidden-sm hidden-lg"></span>
                                </dt>
                                
                            </dl>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        <!-- <div @click="test()" class="row searches"> -->
        <div  class="row searches " v-show="isShow">
            
            <div id="addrItem" class="col-md-5 col-sm-4  text-left addrItem">
                <address>
                    <h1 class="text-center" v-text="gym.name"></h1>
                    <div class="gym_detail">
                      <dl>
                          <dt v-text="'地址：'+gym.addr"></dt>
                          <dd v-if="gym.tip!=''" v-text="'交通提示：'+gym.tip"></dd>
                          <dd v-text="'电话：'+gym.phone"></dd>
                          <dd v-text="'邮箱：'+gym.email"></dd>
                      </dl>
                    </div>
                </address>
            </div>
            <div class="col-md-7 col-sm-8  mapItem ">
                <iframe id="map" class="map" :src="position" frameborder="0" ></iframe>
                <div class="block"></div>
            </div>   
        </div> 
        <div class="occupy visible-xs-blcok" v-show="!isShow">
         </div>
    </div>
</div>

</template>
<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import CitySelect from '~/components/CitySelect.vue'

 export default {
   head: {
    link: [
        { rel:'stylesheet',type:'text/css',href:'/css/map.css'},
    ], 
    script: [
        {src: '/js/search.js'},
    ]    
   },
   components: {
       CitySelect
   },
   data() {
     return {
       citySelected:"",
       gymChoose:"",
       isShow:false,
     }
   },
   computed: {
      ...mapState([
         "city",
         "Gyms"
      ]),
      ...mapGetters([
        'cities'
      ]),
    //    获取点击的市的中心信息
     filterGyms(){
          var c = this.city;
          var gymfilter = this.Gyms.filter(g =>{
              return g.city==c;
          })
          var arr=[];
          var arr2=[];
        //   将未开业和开业分开
          gymfilter.map(c=>{
              if(c.dtOpen>0){
                arr.push(c.dtOpen)
              }else{
                  arr2.push(c.dtOpen)
              }    
          })
          var centers=[];
        //   对开业的进行时间排序在合并未开业的
          arr = arr.sort(function(a,b){
              return a-b;
          }).concat(arr2);
          arr.map(d=>{
              gymfilter.map(g=>{
                  if(g.dtOpen==d){
                      centers.push(g)
                  }
              })
          })
        //   因为未开业的时间相同 需要去重
          centers = [...new Set(centers)]
          return centers;
        //   return gymfilter;
        
     },

    //  一个中心得内容
     gym(){
          return this.gymChoose || 
                 this.filterGyms[0] ||
                 {name:"",addr:"",phone:"",email:"",tip:""};
     },
    //  地图定位
     position() {
       var gyms=[];
       this.Gyms.map(g => {
         if(g.city==this.city){
           gyms.push({name:g.name,coordinate:g.coordinate});
         }
       })
       return encodeURI("/page/map.html?gyms="+JSON.stringify(gyms))+'&city='+this.city+'&gym='+this.gym.name;
     },
     baseUrl(){
        return this.$conf.evnData[this.$conf.env_cur].baseUrl;
     }
   },
   watch:{
       city:function(){
                this.isShow=true;
       }
   },
   methods: {
    ifShowCenter(){
        if(this.city!=''){
             this.isShow=true;
        }
       
    },
    go(){
        location.href="#addrItem"
    },
 
    log(){
        console.log(this.filterGyms);
    },
     ...mapMutations([
        "switchCity"
     ]),
     xh(i){
       return i<10?'0'+i:i;
     },
    //  更改当前中心
     showGym(g){
        this.gymChoose = g;
        //this.$router.push("#map");
     },
     test() {
        alert(JSON.stringify(this.city))
     }
   },
   mounted() {
        if(!this.Gyms||this.Gyms.length==0){
            this.$getData(this.baseUrl+"/api/getGymByCity/-1",'Gyms');
        }
        
        $('.shade').hover(function () {
            for(var i = 0,len=$('.add01').length;i<len;i++){
                $('.shade').eq(i).next('.add01').hide().next('.add01_con').hide()
            }
            $(this).next('.add01').show().next('.add01_con').show();
        })
        // console.log(this.city+'1111')
        this.ifShowCenter();
   },
 }
</script>




<style scoped>

    *{margin:0;border: none;
    font-family: "J-YUAN";}
    .wrap{
       overflow: hidden;
       
    }
   

    .gymitem .marker {
        /* background: url(https://api.map.baidu.com/images/markers.png) -23px -275px no-repeat; */
        background-image: url(/img/search/marker.png) ;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        /* background-position: center -10%; */
        width: 21px;
        height: 28px;
        line-height: 25px;
        cursor: pointer;
        float: left;
        *zoom: 1;
        text-align: center;
        color: white;
        overflow: hidden;
        margin: 2px 0 0 5px;
        padding-top:1px; 
        *margin-right: 0px;
        display: inline;
    }
    .gymitem .searchmap{
        margin-left: 5px;
        font-weight: 700;
        color:#33CCCC;
    }
    .gymitem .gymName{
        font-size: 1.6em;
        padding-top: 1%;
        font-family: "J-YUAN";

    }
    .block{
        position: absolute;
        background-color:white;
        width: 100%;
        height: 22px;
        bottom :0px;
        z-index: 3;
    }

    .caption{
        color:#5867AF;
    }
    .city{
        display: inline-block;
        font-size:18px;
        padding:5px 22px;
    }
    .subcaption{
            border-bottom: 2px solid #ddd;
            padding-left:24px;
            padding-bottom:10px!important;
    }
    .subcaption .item {
        margin: 8px auto ;
    }
    .addr{
        margin:20px auto;
    }
    .addr .center{
        /* position: absolute */
    }
    /* .addrItem {
        height: 430px;
        color: white;
        background-color:#0FB1D8;

    } */
    .addrItem h1{
        padding-top: 5%!important;
        margin:5% auto;
    }

    .hr0{ height:1px;border:none;border-top:1px dashed rgb(10, 98, 185);}
    .hr1{ height:1px;border:none;border-top:1px solid rgb(14, 172, 204);}
    .detail dd{
        margin-left: 25px;
        text-align: left;
    }
 
    .search{
       margin-bottom: 8%;
    }
    .wrap {
        color: #333;
        text-align: center;
        margin: auto;
        font: 12px "微软雅黑";
        background-color: white;
     }
    .addrItem {
        height: 430px;
        color: white;
        background-color:#0FB1D8;

    }
    .addrItem h1{
        padding-top: 5%!important;
        margin:5% auto; 
    }
    .gym_detail {
        font-size: 19px;
        margin: auto 10%;
        padding-top:3%;
        border-top:1px solid rgb(14, 172, 204);
    }
 
    .summery dd{
        margin-left: 25px;
        text-align: left;
    }
    .summery{
        cursor: pointer;
    }
    .map {
      width: 100%;
      height: 450px;
    }
    .occupy{
        height: 100px;
    }
    .map_con{ 
        background:url(/img/search/map-china.png) 0 0 no-repeat; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 52%;
        padding-bottom: 45.5%;
        margin: auto ;
        position: relative;
       
    }
    .add01{
        color:#fff;
        font-size: 18px;
        /* border:1px solid blue; */
    }
    .add01_con a,.add01_con span{
        font-size: 16px;
    }
    .add01_con a:hover{
        color:orange;
    }

    .shade{
        /* border: 1px solid red; */
    }

    /* 新疆 */
    .add_xinjiang { left:20%; top:34%}
    .add_xinjiang_con { left:23%; top:33%}
    .shade_xinjiang{left:15%; top:27%;padding:7%}
    /* 内蒙 */
    .add_neimongol { left:58%; top:35%}
    .add_neimongol_con { left:62%; top:34%}
    .shade_neimongol { left:54%; top:31%;padding:3% 6%}
    
    /* 西藏 */
    .add_xizang { left:20%; top:55%}
    .add_xizang_con { left:23%; top:54%}
    .shade_xizang { left:14%; top:55%;padding:4% 10%}
    /* 青海 */
    .add_qinghai { left:38%; top:48%}
    .add_qinghai_con { left:41%; top:47%}
    .shade_qinghai { left:30%; top:44%;padding:4% 9%}
    /* 四川 */
    .add_sichuan { left:48%; top:61%}
    .add_sichuan_con { left:51%; top:60%}
    .shade_sichuan { left:44%; top:57%;padding:4% 6%}
    /* 宁夏 */
    .add_ningxia { left:55%; top:44%}
    .add_ningxia_con { left:58%; top:43%}
    /* 陕西 */
    .add_shaanxi { left:59%; top:52%}
    .add_shaanxi_con { left:62%; top:51%}
    /* 湖北 */
    .add_hubei { left:68%; top:59%}
    .add_hubei_con { left:71%; top:58%}
    .shade_hubei { left:65%; top:58%;padding:2% 4%}
    /* 甘肃 */
    .add_gansu { left:52%; top:49%}
    .add_gansu_con { left:55%; top:48%}
    /* 云南 */
    .add_yunnan { left:46%; top:76%}
    .add_yunnan_con { left:49%; top:75%}
    .shade_yunnan { left:43%; top:73%;padding:4% 5%}
    /* 贵州 */
    .add_guizhou { left:57%; top:70%}
    .add_guizhou_con { left:60%; top:69%}
    .shade_guizhou { left:56%; top:68%;padding:3%}
    /* 重庆 */
    .add_chongqing { left:58%; top:62%}
    .add_chongqing_con { left:61%; top:61%}
    /* 广西 */
    .add_guangxi { left:60%; top:78%}
    .add_guangxi_con { left:63%; top:77%}
    .shade_guangxi { left:59%; top:76%;padding:3% 3%}
    /* 湖南 */
    .add_hunan { left:66%; top:68%}
    .add_hunan_con { left:69%; top:67%}
    .shade_hunan { left:65%; top:65%;padding:3% 3%}
    /* 山西 */
    .add_shanxi { left:65%; top:45%}
    .add_shanxi_con { left:68%; top:44%}
    .shade_shanxi { left:65%; top:40%;padding:4% 2%}
    /* 海南 */
    .add_hainan { left:63%; top:89%}
    .add_hainan_con { left:66%; top:88%}
    /* 广东 */
    .add_guangdong { left:69%; top:76%}
    .add_guangdong_con { left:72%; top:75%}
    /* 河南 */
    .add_henan { left:68%; top:51%}
    .add_henan_con { left:71%; top:50%}
    .shade_henan { left:67%; top:50%;padding:3%}
    /* 澳门 */
    .add_macau { left:68%; top:81%}
    .add_macau_con { left:71%; top:80%}
    /* 香港 */
    .add_hongkong { left:73%; top:79%}
    .add_hongkong_con { left:75%; top:78%}
    /* 北京 */
    .add_beijing { left:72%; top:34%}
    .add_beijing_con { left:75%; top:33%}
    /* 河北 */
    .add_hebei { left:71%; top:41%}
    .add_hebei_con { left:74%; top:40%}
    /* 天津 */
    .add_tianjin { left:75%; top:38%}
    .add_tianjin_con { left:78%; top:37%}
    /* 安徽 */
    .add_anhui { left:76%; top:57%}
    .add_anhui_con { left:79%; top:56%}
    .shade_anhui { left:76%; top:55%;padding:3% 2%}
    /* 山东 */
    .add_shandong { left:75%; top:45%}
    .add_shandong_con { left:78%; top:44%}
    .shade_shandong { left:75%; top:44%;padding:2% 3%}
    /* 江苏 */
    .add_jiangsu { left:79%; top:51%}
    .add_jiangsu_con { left:82%; top:50%}
    /* 上海 */
    .add_shanghai { left:84%; top:56%}
    .add_shanghai_con{left:87%; top:55%;}
    /* 江西 */
    .add_jiangxi { left:73%; top:66%}
    .add_jiangxi_con { left:76%; top:65%}
    .shade_jiangxi { left:73%; top:64%;padding:4% 2%}
    /* 浙江 */
    .add_zhejiang { left:82%; top:63%}
    .add_zhejiang_con { left:85%; top:62%}
    .shade_zhejiang { left:82%; top:61%;padding:3% 2%}
    /* 福建 */
    .add_fujian { left:79%; top:70%}
    .add_fujian_con { left:82%; top:69%}
    /* 台湾 */
    .add_taiwan { left:84%; top:75%}
    .add_taiwan_con { left:87%; top:74%}
    /* 吉林 */
    .add_jilin { left:88%; top:25%}
    .add_jilin_con { left:91%; top:24%}
    .shade_jilin { left:88%; top:25%;padding:2%}
    /* 辽宁 */
    .add_liaoning { left:82%; top:30%}
    .add_liaoning_con { left:85%; top:29%}
    .shade_liaoning { left:83%; top:29%;padding:3% 2%}
    /* 黑龙江 */
    .add_heilongjiang { left:87%; top:15%}
    .add_heilongjiang_con { left:91%; top:14%}
    .shade_heilongjiang { left:84%; top:12%;padding:4% 6%}


@media screen and (max-width:1200px){
        .gymitem .gymName{
            font-size: 1.2em;
            padding-top: 2%;

        }
        .map_con{
            width:65%;
            padding-bottom: 57.5%;
        }
}
@media screen and (max-width:768px){
        .map_con{
            width:70%;
            padding-bottom: 61.5%;
        }

}
@media screen and (max-width:767px){
    .wrap{
        overflow: hidden;
    }
    .subcaption{
        padding-left: 14px;
    }
    .searches{
        padding: 0 4%; 
    }
    .add01{
        font-size: 9px;
    }
    .addrItem {
        height: auto;
        padding: 0 0 10px;

    }
    .addrItem h1{
        font-size: 24px;
        margin: 1% auto;
    }
    .mapItem{
        padding: 0;
    }
    .gym_detail {
        margin: auto 5%;
        font-size: 16px;
    }

}

</style>
