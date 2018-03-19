<template>
<div class="wrap" style="margin-top: 50px;" oncontextmenu="self.event.returnvalue=false">

    <div class="container-fluid">
        <div class="row text-left text-primary subcaption">
             <div class="col-md-5 col-sm-5" >
                <h3 @click="test()">寻找离您最近的小小运动馆</h3>
             </div>
             <div class="col-md-3 col-sm-3">
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
                    <div v-for="n in 10" class="col-md-4 col-sm-4 result text-left">
                        <span class="marker" v-text="String.fromCharCode(65 + parseInt(n))"></span>
                        <div class="detail">
                            <dl>
                                <dt>
        小小运馆古北中心
                                </dt>
                                <dd>
        <p>地址：京加路与工业小区路交叉口西100米地址：京加路与工业小区路交叉口西100米{{n}}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        <div class="row search">
            <div class="col-md-7 col-sm-8  mapItem">
                <iframe class="map" :src="addr" frameborder="0"></iframe>
                <div class="block"></div>
            </div>
            <div class="col-md-5 col-sm-4  text-left addrItem">
                <address>
                    <h1 class="text-center">小小运馆古北中心</h1>
                    <hr class="hr1" />
                    007 street<br>
                    Some City, State XXXXX<br>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
            </div>

        </div>
    </div>
</div>

</template>
<script>

 export default {
   head: {
     script: [
       {src: '/js/map/raphael-min.js'},
       {src: '/js/map/chinaMapConfig.js'},
       {src: '/js/map/map.js'}
     ]
   },
   props: ["gyms"],
   components: {},
   data() {
     return {
       city:  '上海市'
     }
   },
   computed: {
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
     addr() {
       var gyms=[];
       this.gyms.map(gym => {
         if(gym.city==this.city){
           gyms.push({name:gym.name,coordinate:gym.coordinate});
         }
       })
       return encodeURI("page/map.html?gyms="+JSON.stringify(gyms))+'&city='+this.city;
     }
   },
   methods: {
     unique(arr){
       let s = new Set(arr);
       return Array.from(s);
     },
     test() {
       // alert(this.city)
       var gyms=[];
       this.gyms.map(gym => {
          if(gym.city==this.city){
            gyms.push({name:gym.name,coordinate:gym.coordinate});
          }
       })
       alert(JSON.stringify(gyms))
     }
   },
   mounted() {
     var vm=this;
     $("#sel").on('changed.bs.select', function () {
       vm.city = $(this).val();
     });

   },
 }
</script>




<style scoped>

	*{margin:0;padding:0;border: none;}
    .marker {
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

    .block{
        position: absolute;
        background-color:white;
        //border: 1px solid red;
        width: 100%;
        height: 20px;
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
    #ChinaMap{
       margin: 5% auto;
    }
	.mapTipText{width: 280px;height: 110px;background-color: #ffffff;}
	.mapTipText .mapTipImg{height: 66px; width: 66px; float: left;border: 2px solid #ffffff; border-radius: 50%;overflow: hidden;margin: -12px 5px 0 -12px;}
	.mapTipText .mapTipImg img{width: 100%;height: 100%;}
	.mapTipText .mapTipList{float: left;margin-left: 4px;}
	.mapTipText .mapTipList h2{text-align: left;}
	.mapTipText .mapTipList h2 a{font-size: 24px; color: #262626;text-decoration:none;}
	.mapTipText .mapTipList h2 a:hover{ color: #0085d2;}
	.mapTipText .mapTipList h2 a span{font-size: 16px;margin-left: 3px;}
	.mapTipText .mapTipList ul{ width: 203px;padding-right: 10px;}
	.mapTipText .mapTipList ul li{list-style: none;float: left;padding: 7px 3px 0 3px;}
	.mapTipText .mapTipList ul li a{color: #262626;text-decoration:none;}
	.mapTipText .mapTipList ul li a:hover{background-color:#2ebcfe;color:#ffffff;}
    .map {
      width: 100%;
      height: 450px;
    }
 .anchorBL{display:none;}

</style>
