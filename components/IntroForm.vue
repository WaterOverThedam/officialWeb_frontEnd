<template>
    <!-- <div class="bespeak hidden-xs" v-show="isShow" :style="{'background':`url(${bg}) no-repeat`,'background-size': '100% 100%','-webkit-background-size':'100%'}">
        <span class="closes">
            <img :src="close" alt="" @click="closes">
        </span>
          <form action="">
                <ul>
                    <li v-for="item in input">
                        <span v-text="item.title"></span>
                        <input type="text" :name="item.id" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100%'}">     
                    </li>
                    <li class="first-selsect">
                        <span>预约城市: </span>
                        <select name="province" id="province" class="m_right" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}">
                          
                        </select>
                        <select name="city" id="city" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}">
                                        
                        </select>
                    </li>
                    <li>
                        <span>预约中心: </span>
                        <select class="select2" name="" id="" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}">
                                        
                        </select>
                    </li>
                </ul>
                <button type="submit">
                    <img :src="btn" alt="">
                </button>
          </form>  
    </div> -->
    <div class="bespeak hidden-xs" v-show="isShow">
        <nuxt-link to="/intro"><img :src="bg" alt="" title="预约体验"></nuxt-link> 
        <span class="closes" @click="closes"><img :src="close" alt="关闭" title="关闭"></span>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isShow:true,
                bg:"/img/components/bespeak.png",
                // bg:"/img/index/prompt-alert-bg2.png",
                // btn:"/img/index/btn.png",
                close:"/img/news/close.png",
                // selectbg:"/img/index/selectbg.png",
                // inputbg:"/img/index/inputbg.png",
                // input:[
                //     {"id":"uname","title":"宝宝姓名: "},
                //     {"id":"birthday","title":"宝宝生日: "},
                //     {"id":"phone","title":"家长手机: "}     
                // ],
                
            }
        },
        methods:{
            closes(){
                this.isShow=false;
            }
        }
    }
</script>
<style lang="scss" scoped>
.bespeak{
    position: fixed;
    bottom: 0;
    right: 0;
    cursor: pointer;
    z-index: 99999;
}
.closes{
    position: absolute;
    right: 0;
    color:white;
    font-weight: 800;
    top:20%;
    font-size: 20px;
    padding: 1% 3%;
    cursor: pointer;
    width: 12%;
}
// .bespeak{
//     position: fixed;
//     right: 0;
//     bottom:0;
//     z-index: 9999;
//     // width:25%;
//     // height:210px;
//     color:#fff;
//     padding-left: 6%;
//     font-size:18px;
//     ul,li{
//         list-style: none;
//     }
//     // 按钮
//     button{
//         position: absolute;
//         bottom: 5%;
//         left:18%;
//         list-style: none;
//         background: none;
//         border: none;
//         outline: none;
//     }
//     // 表单
//     input,select{
//         outline: none;
//          border: none;
//          width:44%;
//          appearance:none;   
//         -ms-appearance: none;
//         -moz-appearance:none;   
//         -webkit-appearance:none;
//         height:30px;  
//     }
//     input{
//         padding: 1% 2% 0;
//         font-size: 14px;
        
//     }
//      select::-ms-expand { display: none; }
//     ul{
//         margin: 20% 5% 0 0 ;
//         li{
//             text-align: right;
//         }
//         .first-selsect{
//             select{
//                 width:22%;
//             }
//         }
//     }
// }


</style>
