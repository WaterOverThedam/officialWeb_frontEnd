<template>
  <div class="bespeak">
        <div id="logo"></div>
        <MyNav></MyNav>
        <main>
            <!-- 版心图 -->
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                <!-- <img :src="cloud" alt=""> -->
            </div>
            <Waves></Waves>
            <!-- 表单样式 -->
            <div class="formbg" :style="{'background-image':`url(${formbg})`}">
                    <div class="form">
                        <h1 v-text="title[0]"></h1>
                        <h1 v-text="title[1]"></h1>
                        <div id="IntroForm">
                            <ul>
                                <li>
                                    <span>宝宝姓名: </span>
                                    <input  v-model="intro.BabyName" placeholder="填写宝宝姓名" type="text" name="username" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">                      
                                </li>
                                <li>
                                    <div class="block">
                                        <span name="birthday">宝宝生日: </span>
                                        <el-date-picker name="birthday" editable=""
                                        v-model="birthday"
                                        type="date"
                                        format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </li>
                                <li>
                                   
                                        <span >家长手机: </span>
                                        <input maxlength="11" @change="checkPhone" v-model="intro.ParentPhone" placeholder="填写联系方式" type="text" name="tel" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">     
                                        <p class="tip">{{msg}}</p>
                                </li>

                                <li>
                                    <span v-text="select.city"></span>
                                    <select v-model='intro.Province' @change="getIntroCities(intro.Province)" 
                                       name="province" id="province" class="m_right" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled value="">选择省份</option>
                                        <option v-for="p in provs" :value="p.id" :key="p.id">{{p.cH_Name}}</option>
                                    </select>
                                    <select v-model='intro.City' @change="getIntroGyms(intro.City)" 
                                        name="city" id="city" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled value="">选择城市</option>
                                        <option v-for="c in cities" :value="c.id" :key="c.id">{{c.cH_Name}}</option>
                                        <option disabled v-show="cities.length==0" value="">无</option>
                                    </select>
                                </li>
                                <li>
                                    <span v-text="select.center"></span>
                                    <select v-model='intro.gymCode' class="select2" name="" id="" :style="{'background':`url(${selectbg2}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                                        <option disabled value="">选择中心</option>
                                        <option v-for="g in gyms" :value="g.id" :key="g.id">{{g.cH_Name}}</option>
                                        <option disabled v-show="gyms.length==0" value="">无</option>
                                    </select>
                                </li>
                                <li>
                                     <button  :disabled="isDisabled"  v-text="btnword" @click.prevent="saveIntro()" class="text-center btn" :style="{'background':`url(${button}) no-repeat`,'background-size':'contain','-webkit-background-size':'100%'}"></button>
                                </li>
                            </ul>
                            
                        </div>
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
            <div class="row bto hidden-xs">
                <div class="col-sm-6 activity">
                    <h3 v-text="bto.p1"></h3>
                    <h3 v-text="bto.p2"></h3>
                    <img :src="bto.pic" alt="">
                </div>
                <div class="col-sm-6 rule">
                    <img :src="cloud2" alt="">
                    <h3 v-text="bto.ruletitle"></h3>
                    <p v-for="item in bto.rule" v-text="item.p"></p>
                    <span v-for="item in bto.prize" v-text="item" ></span>
                </div>
            </div>
            <Common></Common>
            <MyMedia></MyMedia>
        </main>
        <GoTop></GoTop>
        <MyFooter></MyFooter>
    </div>
</template>
<script>
    import intro from './intro'
    import MyNav from '~/components/MyNav.vue'
    import Waves from '~/components/Waves.vue'
    import Common from '~/components/Common.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import GoTop from '~/components/GoTop.vue'

    export default {
        head:{
            "title":"预约中心",
            link:[
                { rel:'stylesheet',type:'text/css',href:'/css/reset.css'}
            ],

            script:[
                {"src":"/js/intro.js"}
            ]
            
        },
        data(){
            return{
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
                },
                isDisabled:false,
                msg:"",
            }
        },
        computed: {
            baseUrl(){
                return this.$conf.evnData[this.$conf.env_cur].baseUrl;
            }
        },
       methods: {
        //    手机号验证
            checkPhone(){
                var result = this.intro.ParentPhone.match(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/)
                // console.log(this.intro.ParentPhone)
                // console.log(result)
                if(result==null){
                    this.msg = "请输入正确的手机号"
                }
                else{
                    this.msg=""
                }
            },


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
             //alert(JSON.stringify(res));
              var msg=""
              if(res.code==0){
                 msg = {content:"预约成功",title:'提示',type:"success"}
              }else{
                 msg= {content:res.msg,title:'错误',type:"error"}
              }
            //   this.$message({
            //     message: msg.content,
            //     type: msg.type
            //   });
            
              this.$alert(msg.content, msg.title, {
                    confirmButtonText: '确定',
                    type: msg.type,
                    callback:()=>{
                        // this.isDisabled == res.code?false:true;
                        this.isDisabled = false;
                    }
                    //roundButton:true
              })
           },
           saveIntro(){
            //    进行判断
            this.isDisabled = true;
            if(this.intro.BabyName==''||this.birthday==''||this.intro.ParentPhone==''||this.intro.Province==''||this.intro.City==''||this.intro.gymCode==''){
                var msg = "";
                if(this.intro.BabyName==''){
                    msg= {content:"宝宝姓名不能为空",title:'提示',type:"warning"}
                }
          
                if(this.birthday==''){
                     msg= {content:"宝宝生日不能为空",title:'提示',type:"warning"}
                }

                if(this.intro.ParentPhone==''){
                    msg= {content:"您的手机不能为空",title:'提示',type:"warning"}
                }
                if(this.intro.Province==''){
                    msg= {content:"请选择想要预约的省份",title:'提示',type:"warning"}
                }
                if(this.intro.City==''){
                    msg= {content:"请选择想要预约的城市",title:'提示',type:"warning"}
                }
                if(this.intro.gymCode==''){
                    msg= {content:"请选择想要预约的中心",title:'提示',type:"warning"}
                }
                this.$alert(msg.content, msg.title, {
                    confirmButtonText: '确定',
                    type: msg.type,
                        //roundButton:true
                    callback:()=>{
                        this.isDisabled = false;
                    }
                })
            }else{
                this.intro.BabyName=this.intro.BabyName.trim();
                //格式化日期
                // this.intro.BabyBrithday=toDate_s(this.birthday);
                // console.log(this.birthday)
              
                // console.log(this.intro.BabyBrithday)
                this.$getDataAsync(this.baseUrl+"/api/saveIntro/",this.intro,this.saveResult);
            }

           }
  
        },
        components:{
            MyNav,
            Common,
            MyMedia,
            MyFooter,
            GoTop,
            Waves
        },       
        mounted(){
            this.getIntroProv();
        },
    }

</script>
<style lang="scss" scoped>

.el-date-editor.el-input, .el-date-editor.el-input__inner {
    // font-size: 0.9em;
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
        padding-top:48%;
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
                    color:black;
                    outline: none;
                    border: none;
                    width: 54%;
                    font-size: 16px;
                    padding:1%;

                    // ::-ms-clear,::-ms-reveal{display:none;}
                }
                .tip{
                   color: red;
                   font-size: 16px;
                   margin: 0;
                   padding: 0;

                }
                input::-ms-clear{display:none;}
                span{
                    margin-right: 2%;
                }
                select {
                    color:#000;
                    border: none;
                    outline: none;
                    padding: 1%;
                    width: 25%;
                    appearance:none;
                    font-size: 16px;   
                    -ms-appearance: none;
                    -moz-appearance:none;   
                    -webkit-appearance:none;  
                }
                select::-ms-expand { 
                    display: none; 
                    appearance:none;  
                    outline: none; 
                }
                .m_right{
                        margin-right: 4%;
                        
                }
                .select2{
                    width: 54%;
                }
                .btn{
                    padding: 2% 8%;
                    border: none;
                    outline: none;
                    font-size: 1em;
                    color:#fff;
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
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
        font-size: 12px;
    width:70% !important;
}
.bespeak .formbg .form li .tip{
    font-size: 12px;
}
.bespeak #banner {
    padding-top: 62%;
}
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
