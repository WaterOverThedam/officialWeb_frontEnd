<template>
<div onclick="alert($('body',window.frames[0].document).html());" class="wrap" style="margin-top: 50px;" oncontextmenu="self.event.returnvalue=false">
    <div style="text-align:center;clear:both;">
    </div>
    
    <div class="itemCon">
        <h2 class="caption">选择您的城市找到离您最近的小小运动馆</h2>
        <div id="ChinaMap" ></div>
        <div id="stateTip" style="position: absolute;left: 100%;text-align: left;display: inline;"></div>
    </div>
    
    <div id="mapTipContent" style="width: 900px;margin: 0 auto;display: none">
        <div class="mapTipText mapTipText0">
            <div class="mapTipImg"><img src="img/search/top.png" alt=""/></div>
            <div class="mapTipList">
                <h2><a href="">黑龙江<span>Heilongjiang</span></a></h2>
                <ul>
                    <li><a href="">哈尔滨</a></li>
                    <li><a href="">漠河</a></li>
                    <li><a href="">五大连池</a></li>
                    <li><a href="">兴凯湖</a></li>
                    <li><a href="">雪乡</a></li>
                    <li><a href="">大兴安岭</a></li>
                    <li><a href="">齐齐哈尔</a></li>
                    <li><a href="">牡丹江</a></li>
                    <li><a href="">伊春</a></li>
                    <li><a href="">大庆</a></li>
                    <li><a href="">镜泊湖</a></li>
                    <li><a href="">帽儿山</a></li>
                </ul>
            </div>
        </div>
        <div class="mapTipText mapTipText1">
            <div class="mapTipImg"><img src="img/search/top.png" alt=""/></div>
            <div class="mapTipList">
                <h2><a href="">吉林<span>Jilin</span></a></h2>
                <ul>
                    <li><a href="">长白山</a></li>
                    <li><a href="">长春</a></li>
                    <li><a href="">延吉</a></li>
                    <li><a href="">雾凇岛</a></li>
                    <li><a href="">集安</a></li>
                    <li><a href="">吉林市</a></li>
                    <li><a href="">查干湖</a></li>
                    <li><a href="">三角龙湾</a></li>
                    <li><a href="">通化</a></li>
                    <li><a href="">四平</a></li>
                    <li><a href="">松原</a></li>
                    <li><a href="">白城</a></li>
                </ul>
            </div>
        </div>
        <div class="mapTipText mapTipText2">
            <div class="mapTipImg"><img src="img/search/top.png" alt=""/></div>
            <div class="mapTipList">
                <h2><a href="">辽宁<span>Liaoning</span></a></h2>
                <ul>
                    <li><a href="">大连</a></li>
                    <li><a href="">丹东</a></li>
                    <li><a href="">沈阳</a></li>
                    <li><a href="">兴城</a></li>
                    <li><a href="">葫芦岛</a></li>
                    <li><a href="">绥中</a></li>
                    <li><a href="">旅顺</a></li>
                    <li><a href="">锦州</a></li>
                    <li><a href="">抚顺</a></li>
                    <li><a href="">鞍山</a></li>
                    <li><a href="">本溪</a></li>
                    <li><a href="">营口</a></li>
                    <li><a href="">盘锦</a></li>
                    <li><a href="">长兴岛</a></li>
                </ul>
            </div>
        </div>
        <div class="mapTipText mapTipText3">
            <div class="mapTipImg"><img src="img/search/top.png" alt=""/></div>
            <div class="mapTipList">
                <h2><a href="">辽宁<span>shit</span></a></h2>
                <ul>
                    <li><a href="">大连</a></li>
                    <li><a href="">丹东</a></li>
                    <li><a href="">沈阳</a></li>
                    <li><a href="">兴城</a></li>
                    <li><a href="">葫芦岛</a></li>
                    <li><a href="">绥中</a></li>
                    <li><a href="">旅顺</a></li>
                    <li><a href="">锦州</a></li>
                    <li><a href="">抚顺</a></li>
                    <li><a href="">鞍山</a></li>
                    <li><a href="">本溪</a></li>
                    <li><a href="">营口</a></li>
                    <li><a href="">盘锦</a></li>
                    <li><a href="">长兴岛</a></li>
                </ul>
            </div>
        </div>
    </div>

      
 
    <div class="container-fluid">
        <div class="row text-left text-primary subcaption">
             <div class="col-md-5 col-sm-5" >
                <h3>寻找离您最近的小小运动馆</h3>
             </div>
             <div class="col-md-3 col-sm-3">
             <span class="city" :style="{'background':`url(${city.url}) no-repeat`,
             'background-size':'cover','-moz-background-size':'cover',
             '-webkit-background-size':'100%','color':'white'}" v-text="'当前城市：'+city.name">}</span>
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
  head:{
    script: [
        {src: '/js/map/raphael-min.js'},
        {src: '/js/map/chinaMapConfig.js'},
        {src: '/js/map/map.js'}
    ] 
  },
  components: {
   
  },
  data () {
    return {
      gym: {
        name:"小小运动馆太阳宫爱琴海中心",
        position:{lng: 116.443454,lat: 39.978071}
      },
      city:{
          url:'/img/index/btn_long_blue.png',
          name:'上海'
      }
    }
  },
  computed:{
      addr(){
          return   "http://api.map.baidu.com/marker?"+
          "location="+this.gym.position.lat+","+this.gym.position.lng+"&zoom=10&"+
          "title="+this.gym.name+"&content="+this.gym.name+"&output=html&src=小小运动馆官网"
      }
  },
  methods:{
   test(){
 
         
 
   }
  },
  mounted(){
	$(function(){
		$('#ChinaMap').SVGMap({
			mapWidth: 860,
			mapHeight: 600
		});
    });
  
  } 
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