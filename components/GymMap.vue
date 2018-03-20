<template>
<div class="wrap" style="margin-top: 50px;" oncontextmenu="self.event.returnvalue=false">
    <div class="container-fluid">
        <div class="row text-center">
            <div class="map_con">
                    <div>
                        <p class="add01">上海</p>
                        <dl class="add01_con" style="display: none;">
                            <dd><a @click.prevent="switchCity('上海市')" target="_blank">·上海市</a></dd>
                            <dd class="last"></dd>
                        </dl>
                    </div>
                    <div v-for="(city,index) in cities">
                        <p :class="['add01','add'+xh(parseInt(index)+2)]" v-text="city.prov"></p>
                        <dl style="display: none;" :class="['add01_con','add'+xh(parseInt(index)+2)+'_con']">
                            <dd><a @click.prevent="switchCity(city.city)" v-text="'·'+city.city"></a></dd>
                            <dd class="last"></dd>
                        </dl>
                    </div>
            </div> 
        </div>
        <div class="row text-left text-primary subcaption">
             <div class="col-md-5 col-sm-5 item" >
                <h3 >寻找离您最近的小小运动馆</h3>
             </div>
             <div class="col-md-4 col-sm-4 item">
               <select class="selectpicker show-tick" id="sel" data-live-search="true"
                  liveSearchStyle='contains' :title="city||请选择城市"   data-live-search-placeholder='搜索'>
                 <optgroup v-for="c in cities" :label="c.prov" >
                   <option   v-for='city in c.city' :value='city'  v-text='city'></option>
                 </optgroup>
               </select>
             </div>
        </div>
        <div class="row addr">
          <div class="col-md-10 col-sm-10" >
              <div class="row">
                    <div v-for="(gym,index) in filterGyms" v-show="index<24"class="col-lg-3 col-md-3 col-sm-4 col-xs-12 result text-left gymitem">
                        <span class="marker" @click="showGym(gym)"  v-text="String.fromCharCode(65 + parseInt(index))"></span>
                        <div class="summery">
                            <dl>
                                <dt @click="showGym(gym)" class="gymName" v-text="gym.name"  :title="'地址：'+gym.addr"> 
                                </dt>
                            </dl>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        <div class="row searches">
            <div class="col-md-7 col-sm-8  mapItem">
                <iframe id="map" class="map" :src="position" frameborder="0" ></iframe>
                <div class="block"></div>
            </div>
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
        </div> 

     
    </div>
</div>

</template>
<script>

 export default {
   head: {
    link: [
        { rel:'stylesheet',type:'text/css',href:'/css/map.css'},
    ] 
   },
   props: ["gyms"],
   components: {},
   data() {
     return {
       city:  '上海市',
       gymChoose:""
     }
   },
   computed: {
     filterGyms(){
          var c = this.city;
          var gymfilter = this.gyms.filter(g =>{
              return g.city==c;
          })
          return gymfilter;
     },
     gym(){
          return this.gymChoose || 
                 this.filterGyms[0] ||
                 {name:"",addr:"",phone:"",email:"",tip:""};
     },
     cities(){
       let c = this.gyms.map(gym => {
          return {prov:gym.prov,city:gym.city};
       })
       c = this.unique(c);
       let p = c.map(c =>{
         return c.prov;
       })
       p = this.unique(p);
       return  p.map(p=>{
            var city=[];
            c.map(c=>{
                if(c.prov==p) {
                  city.push(c.city);
                }
            })
           return {prov:p,city:this.unique(city)};
         })
     },
     position() {
       var gyms=[];
       this.gyms.map(g => {
         if(g.city==this.city){
           gyms.push({name:g.name,coordinate:g.coordinate});
         }
       })
       return encodeURI("page/map.html?gyms="+JSON.stringify(gyms))+'&city='+this.city+'&gym='+this.gym.name;
     }
   },
   methods: {
     xh(i){
       return i<10?'0'+i:i;
     },  
     unique(arr){
       let s = new Set(arr);
       return Array.from(s);
     },
     filterCityList(prov){
          var citys = []
          this.gyms.map(g =>{
              //console.log(prov+":"+g.prov+":"+g.prov.indexOf(prov))
              if (g.prov.indexOf(prov)==0){
                  citys.push(g.city);
              }
          })
          return [...new Set(citys)];
     },
     showGym(g){
        this.gymChoose = g;
        //alert(this.gymChoose)
        //this.$router.push("#map");
     },
     switchCity(city){
         this.city=city;
     },
     test() {
       console.log(JSON.stringify(this.gyms))
     }
   },
   mounted() {
     var vm=this;
     $("#sel").on('changed.bs.select', function () {
        vm.city = $(this).val();
        vm.gymChoose = "";
     });
     $('.add01').hover(function () {
        $(this).next('.add01_con').show();
        $(this).siblings('.add01').next('.add01_con').hide();
     })
   },
 }
</script>




<style scoped>

	*{margin:0;padding:0;border: none;}
    .gymitem .marker {
        background: url(https://api.map.baidu.com/images/markers.png) -23px -275px no-repeat;
        width: 19px;
        height: 25px;
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
    .gymitem .gymName{
        font-size: 1.2em;
        padding-top: 2%;

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
    .addrItem {
        height: 430px;
        color: white;
        background-color:#0FB1D8;

    }
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
 
    .map_con{ 
        background:url(/img/search/map.jpg) 0 0 no-repeat; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 70%;
        padding-bottom: 50%;
        margin: auto ;
        position: relative;
    }



</style>
