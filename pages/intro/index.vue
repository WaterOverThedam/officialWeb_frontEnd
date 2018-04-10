<template>
  <div class="bespeak">
        <!-- <div id="logo"></div> -->
        <MyNav :bgColor="bgColor_cur"></MyNav>
        <main>
            <!-- 版心图 -->
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                <img :src="cloud" alt="">
            </div>
            <!-- 表单样式 -->
            <div class="formbg" :style="{'background-image':`url(${formbg})`}">
                    <div class="form">
                        <h1 v-text="title[0]"></h1>
                        <h1 v-text="title[1]"></h1>
                        <form>
                            <ul>
                                <li>
                                    <span>宝宝姓名:</span>
                                    <input v-model="intro.BabyName" type="text" name="uname" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">     
                                </li>
                                <li>
                                    <div class="block">
                                        <span name="birthday">宝宝生日:</span>
                                        <el-date-picker name="birthday"
                                        v-model="birthday"
                                        type="date"
                                        placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </li>
                                <li>
                                    <span >家长手机:</span>
                                    <input v-model="intro.ParentPhone" type="text" name="phone" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">     
                                </li>
                                <li>
                                    <span v-text="select.city"></span>
<<<<<<< HEAD:pages/intro/index.vue
                                    <select v-model='intro.Province' @change="getIntroCities(intro.Province)" 
                                       name="province" id="province" class="m_right" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled value="">选择省份</option>
                                        <option v-for="p in provs" :value="p.id">{{p.cH_Name}}</option>
                                    </select>
                                    <select v-model='intro.City' @change="getIntroGyms(intro.City)" 
                                        name="city" id="city" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled value="">选择城市</option>
                                        <option v-for="c in cities" :value="c.id">{{c.cH_Name}}</option>
                                        <option disabled v-show="cities.length==0" value="">无</option>
=======
                                    <select v-model="selected" @change="changeCity(selected)"  name="province" id="province" class="m_right" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"  placeholder="请选择城市">
                                        <option disabled hidden>请选择</option>
                                       <option :value="p.city" v-for="p in gymcities" v-text="p.prov" ></option>
                                    </select>

                                    <select  v-model="selected2" @change="changeCenter(selected2)"  name="city" id="city" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled v-show="isCity" >请先选择省份</option>
                                        <option :value="c" v-for="c in selectCities" v-text="c" ></option>
>>>>>>> abb732185b917697fe0156c200259a460e649508:pages/bespeak/index.vue
                                    </select>
                                </li>
                                <li>
                                    <span v-text="select.center"></span>
<<<<<<< HEAD:pages/intro/index.vue
                                    <select v-model='intro.gymCode' class="select2" name="" id="" :style="{'background':`url(${selectbg2}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled value="">选择中心</option>
                                        <option v-for="g in gyms" :value="g.id">{{g.cH_Name}}</option>
                                        <option disabled v-show="gyms.length==0" value="">无</option>
                                    </select>
                                </li>
                                <li>
                                    <button v-text="btnword" @click.prevent="saveIntro()" class="text-center" :style="{'background':`url(${button}) no-repeat`,'background-size':'contain','-webkit-background-size':'100%'}"></button>
=======
                                    <select class="select2" name="" id="" :style="{'background':`url(${selectbg2}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled v-show="isCenter">请先选择城市</option>
                                        <option value="c.id" v-for= "c in selectCenters"  v-text="c.name"></option>
                                    </select>
                                </li>
                                <li>
                                    <!-- <button v-text="btnword" class="text-center" :style="{'background':`url(${button}) no-repeat`,'background-size':'contain','-webkit-background-size':'100%'}"></button> -->
                                    <button v-text="btnword" class="text-center"></button>
>>>>>>> abb732185b917697fe0156c200259a460e649508:pages/bespeak/index.vue
                                </li>
                            </ul>
                            
                            
                        </form>
                    </div>
                    
            </div>
            <!-- 上半部图片 -->
            <div class="row pic1">
                <span class="col-xs-4" v-for="item in pic1">
                    <img :src="item.pic" alt="" class="pic">
                </span>
            </div>
            <!-- 蓝色背景区域 -->
            <div class="row blue hidden-xs" :style="{'background':`url(${blue.bluebg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                <img :src="blue.cut" alt="" class="cut">
                <!-- <div class="imgL col-sm-6">
                    <img :src="blue.three" alt="">
                </div>
                <div class="imgR col-sm-6">
                    <p v-for="(item,index) in blue.words" v-text="item.p" :class="index%2==0?'text-left':'text-right'"></p>
                    <div class="m">
                        <img :src="blue.person" alt="">
                        <p v-for="item in blue.desc" v-text="item.p"></p>   
                    </div>
                </div> -->
                <img :src="blue.wordsbg" alt="">
            </div>
            <!-- 下半部图片 -->
            <div class="row pic2">
                <span v-for="item in pic2" class="col-xs-5">
                    <img :src="item.pic" alt="">
                </span>
            </div>
            <!-- 底部内容 -->
            <div class="row bto">
                <div class="col-sm-6 activity">
                    <h3 v-text="bto.p1"></h3>
                    <h3 v-text="bto.p2"></h3>
                    <img :src="bto.pic" alt="">
                </div>
                <div class="col-sm-6 rule">
                    <img :src="cloud2" alt="">
                    <h3 v-text="bto.ruletitle"></h3>
                    <p v-for="item in bto.rule" v-text="item.p"></p>
                    <span v-for="item in bto.prize" v-text="item"></span>
                </div>
            </div>
            <Common></Common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter :bgColor="bgColor_cur"></MyFooter>
    </div>
</template>
<script>
    import intro from './intro'
    import MyNav from '~/components/MyNav.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import GoTop from '~/components/GoTop.vue'
<<<<<<< HEAD:pages/intro/index.vue
    import { mapGetters } from 'vuex'

=======
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex'
>>>>>>> abb732185b917697fe0156c200259a460e649508:pages/bespeak/index.vue
    export default {
        head:{
            "title":"预约中心",
            script:[
                {"src":"/js/intro.js"}
            ]
        },
        data(){
            return{
<<<<<<< HEAD:pages/intro/index.vue
                ...intro,
                provs:[],
                cities:[],
                gyms:[],
                birthday:"",
                intro:{
                    gymCode :"",
                    City  :"",
                    Province :"",
                    BabyName :"",
                    BabyBrithday :"",
                    ParentPhone  :""
                }
            }
        },
        computed: {
            ...mapGetters([
                'bgColor_cur'
            ]),
            baseUrl(){
                return this.$conf.evnData[this.$conf.env_cur].baseUrl;
=======
                ...bespeak,
                selectCities:[],
                selectCenters:[],
                selected:"请选择",
                selected2:"请选择",
                isCenter:true,
                isCity:true
              
              
            }
        },
        computed:{
            ...mapState([
                'city',
                'gyms'
            ]),
            ...mapGetters([
                'gymcities',
            ]),
            bgColor(){
                return this.$store.state.bgColor;
            },
            counterNow(){
                return parseInt(this.$store.state.counter/600)%this.bgColor.length;
>>>>>>> abb732185b917697fe0156c200259a460e649508:pages/bespeak/index.vue
            }
        },
       methods: {
            setProvs(res){
               this.provs=res.data;
            },
            getIntroProv(){
                this.$getDataAsync(this.baseUrl+"/api/getPro",{},this.setProvs);
           },
            setCities(res){
               this.cities=res.data;
               //alert(JSON.stringify(this.cities))
            },
            getIntroCities(provId){
                this.$getDataAsync(this.baseUrl+"/api/getCity/"+provId,{},this.setCities);
           },
            setGyms(res){
               this.gyms=res.data;
              // alert(JSON.stringify(this.cities))
            },
            getIntroGyms(cityId){
                this.$getDataAsync(this.baseUrl+"/api/getGym/"+cityId,{},this.setGyms);
           },
           saveResult(res){
             alert(JSON.stringify(res));
           },
           saveIntro(){
                this.intro.BabyBrithday=toDate_s(this.birthday);
                this.$getDataAsync(this.baseUrl+"/api/saveIntro/",this.intro,this.saveResult);
           }
  
        },
        components:{
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop
<<<<<<< HEAD:pages/intro/index.vue
        },       
        mounted(){
            this.getIntroProv();
        },
=======
        },
        methods:{
            ...mapMutations([
                "switchCity",
                "getGyms",
                "setGyms"
            ]),
             getGyms_jsonp(state){
                var self = this;
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
                var sql_getGym = "select crmzdy_81744958 prov,crmzdy_81744959 city,crm_name name,crmzdy_82040405 coordinate,crmzdy_80620116 id,crmzdy_80616967 phone,crmzdy_80620118 email,replace(REPLACE(crmzdy_81765917,CHAR(13)add;CHAR(10),'<br/>'),'	',',') tip,crmzdy_80616968 addr from crm_zdytable_238592_23594_238592_view gyms where crmzdy_82037329=1 /*and crmzdy_81744959='var_city'*/ and crmzdy_80620116 between '500005' and '600005'";
          
                //sql_getGym = sql_getGym.replace('var_city',city);
                sql_getGym = GB2312UnicodeConverter.ToUnicode(sql_getGym); 
                // 跨域请求数据
                this.$jsonp(url_jsonp,{sql1:sql_getGym
                }).then(json => {
                     json =JSON.parse(json);
                    //   console.log(json);
                    this.setGyms(json.info[0].rec)
          　　      // 返回数据 json， 返回的数据就是json格式
                }).catch(err => {
          　　      console.log(err)
                })
            },
            // 改变城市
            changeCity(s){
                // console.log(s);
                this.isCity=false;
                this.selectCenters=[];
                this.isCenter=true;
                this.selectCities=s;
                // this.selected2 = s[0];
            },
            //改变中心
            changeCenter(c){
                // console.log(c);
                this.isCenter=false;
                var center =[];
                this.gyms.map(g=>{
                    if(g.city.indexOf(c)!=-1){
                        center.push({id:g.id,name:g.name})
                    }
                })
                this.selectCenters = center;
                // console.log(this.selectCenters);
            }
        },
        mounted(){
            this.getGyms();
            this.getGyms_jsonp()
            // console.log(this.gyms)
            // console.log(this.gymcities)
        }
>>>>>>> abb732185b917697fe0156c200259a460e649508:pages/bespeak/index.vue
    }

</script>
<style lang="scss" scoped>

.el-date-editor.el-input, .el-date-editor.el-input__inner {
    font-size: 0.9em;
    width:54%!important;
}
.bespeak{
    overflow: hidden;
    font-family: "J-YUAN";
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    #banner{
        margin:0;
        padding:0;
        width:100%;
        padding-top:50%;
        position: relative;

        img{
            width: 100%;
            bottom: 0;
            position: absolute;
        }
    }
    // 表单样式
    .formbg{
        padding: 20% 0;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        .form{
            width: 30%;
            text-align: center;
            color:#fff;
            position: absolute;
            top:0;
            left: 11%;
            li{
                font-size: 1.6em;
                margin: 3% 0;
                input{
                    color:#4c4c4c;
                    outline: none;
                    border: none;
                    width: 54%;
                    font-size: 14px;
                    padding:1%;
                    
                }
                span{
                    margin-right: 2%;
                }
                select {
                    color:#000;
                    border: none;
                    outline: none;
                    width: 25%;
                    padding: 1%;
                    color:#4c4c4c;
                    font-size: 14px;
                    appearance:none;   
                    -ms-appearance: none;
                    -moz-appearance:none;   
                    -webkit-appearance:none;  
                }
                select::-ms-expand { display: none; }
                .m_right{
                        margin-right: 4%;
                        
                }
                .select2{
                    width: 54%;
                }
                button{
                    padding: 2% 8%;
                    border: none;
                    outline: none;
                    background-color:transparent;
                    background-image: url(/img/bespeak/bespeakbg.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    &:hover{
                        background-image: url(/img/bespeak/bespeak-hoverbg.png)
                    }
                }


            }
            h1{
                text-align: center;
                padding: 0 9%;
                font-size: 3em;
                letter-spacing: 0.2em;
                
                font-family: "GD-HEI";
                margin-top: 10px;
            }
            
        }
    }
    // 上半部图片
    .pic1{
        padding: 0 10%;
        margin: 8% 0 5%;
    }
    // 蓝色背景区域
    .blue{
        padding:5% 0 ;
        position: relative;
        .cut{
            width: 100%;
            position: absolute;
            top:-1%;
            
        }
        // .imgL{
        //     text-align: center;
        //     img{
        //         margin-left: 10%;
        //         width: 80%;
        //     }
        // }
        // .imgR{
        //     font-size: 1.8em;
        //     color:#fff;
        //     padding-right:5%;
        //     .m{
        //         margin-top: 15%;
        //         img {
        //             float: left;
        //             margin-right: 5%;
        //         }
        //     }
        // }
    }
    // 下半部图片
    .pic2{
        margin:6% 0;
        padding-left:17%;
    }
    // 底部
    .bto{
        // margin-bottom: 10%;
        padding: 0 5%;
        h3{
            font-size: 2.2em;
            font-weight: 700;
            color:#1CC4BB;
        }
        // 左侧
        .activity{
            // padding: 0 5%;
            text-align: center;
            h3{
                text-align: left;
                margin-top: 0;
            }
        }
        // 右侧
        .rule{
            
            h3{
               text-align: center; 
            }
            p,span{
                font-size: 1.6em;
                color:#9C9C9C
            }
            span{
                display: inline-block;
                width: 50%;
            }
            img{
                width: 20%;
                position: absolute;
                top:-3%;
                left:30%;
            }
        }
    }
}
@media screen and (min-width:1440px) {
    .bespeak{
        .formbg{
            .form{

                h1{
                   margin-top: 20px;
                }
            }
        }
    }
}
@media screen and (min-width:1200px){
    .bespeak{
        .formbg{
            .form{
                li{
                    margin: 6% 0;
                }   
                h1{
                    padding: 0 9%;
                    font-size: 5em;
                    margin-bottom: -4%;
                }
            }
        }
        .blue{
            // .imgR{
            //     margin-top: 3%;
            //     .m{
            //         margin-top: 20%;
            //     }
            // }
        }
            // 底部
        .bto{
    
            // 左侧
            .activity{
                padding-left: 5%;
                text-align: left;
            }
             // 右侧
            .rule{
                span{
                    margin: 3% 0; 
                }
            }
        }
    }
}
@media screen  and (max-width:1024px){
     .bespeak{
         #banner{
         padding-top: 65%;
        }

    }
}
@media screen and (max-width:768px){
    .bespeak{
        .formbg{
            .form{
                h1{
                    font-size: 4em;
                }
                li{
                    select,input {
                    // padding-left: 0;
                    font-size: 12px;
                    }
                }
                
            }
        }
    }
}
@media screen and (max-width:767px){
    .bespeak{
        font-size: 6px;
        .formbg{
            background-position: 10% bottom;
            padding: 50% 0;
            .form{
                width:69%;
                left:13%;
                li{
                    font-size: 2.5em;
                    margin: 6% 0;
                    select{
                        font-size: 0.8em;
                        width: 33%;
                        padding: 2% 1% 1%;
                    }
                    .select2{
                        width: 70%;
                    }
                    input{
                        font-size: 12px;
                        width:70%;
                        padding: 2% 1%;
                    }
                }   
                h1{
                    padding: 0 10%;
                    font-size: 5.6em;
                    margin: 3% 0 0;
                }
            }
        }
        // 上半部分图
        .pic1{
            padding: 0;
        }
        // 蓝色背景区域
        .blue{
            // .imgL{
            //     text-align: center;
            //     img{
            //          margin: 0;
            //     }     
            // }
            // .imgR{
            //     font-size: 2.4em;
            //     padding:0 10%;
            //     .m{
            //         padding: 0 10%;
            //         img {
            //             width: 30%;
            //         }
            //     }
            // }
        }
        // 底部
        .bto{
    
            // 左侧
            .activity{
                // padding: 0 5%;
      
                h3{
                    text-align: left;
                    margin-top: 0;
                }
            }
            // 右侧
            .rule{
                margin-top: 8%;
                h3{
                    text-align: center; 
                }
                p,span{
                    font-size: 2em;
                }
                 img{
                    width: 20%;
                    top:-10%;
                    left:35%;
                }
            }
        }
        
    }
}    

</style>
