<template>
    <div class="bespeak hidden-xs" v-show="isShow" :style="{'background':`url(${bg}) no-repeat`,'background-size': 'cover','-webkit-background-size':'100%'}">
          <form action="">
                <ul>
                    <li v-for="item in input">
                        <span v-text="item.title"></span>
                        <input type="text" :name="item.id" :style="{'background':`url(${inputbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">     
                    </li>
                    <li class="first-selsect">
                        <span>预约城市: </span>
                        <select name="province" id="province" class="m_right" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
                          
                        </select>
                        <select name="city" id="city" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% '}">
                                        
                        </select>
                    </li>
                    <li>
                        <span>预约中心: </span>
                        <select class="select2" name="" id="" :style="{'background':`url(${selectbg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100% '}">
                                        
                        </select>
                    </li>
                </ul>
                <button type="submit">
                    <img :src="btn" alt="">
                </button>
          </form>  
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isShow:true,
                bg:"/img/index/prompt-alert-bg2.png",
                btn:"/img/index/btn.png",
                selectbg:"/img/index/selectbg.png",
                inputbg:"/img/index/inputbg.png",
                input:[
                    {"id":"uname","title":"宝宝姓名: "},
                    {"id":"birthday","title":"宝宝生日: "},
                    {"id":"phone","title":"家长手机: "}     
                ],
                
            }
        }
    }
</script>
<style lang="scss" scoped>
.bespeak{
    position: fixed;
    right: 0;
    bottom:0;
    z-index: 9999;
    // width:25%;
    // height:210px;
    color:#fff;
    padding-left: 3%;
    font-size:18px;
    ul,li{
        list-style: none;
    }
    // 按钮
    button{
        position: absolute;
        bottom: 5%;
        left:15%;
        list-style: none;
        background: none;
        border: none;
        outline: none;
    }
    // 表单
    input,select{
        outline: none;
         border: none;
         width:40%;
         appearance:none;   
        -ms-appearance: none;
        -moz-appearance:none;   
        -webkit-appearance:none;
        height:30px;  
    }
    input{
        padding: 1% 2% 0;
        font-size: 14px;
        
    }
     select::-ms-expand { display: none; }
    ul{
        margin: 20% 8% 0 0 ;
        li{
            text-align: right;
        }
        .first-selsect{
            select{
                width:20%;
            }
        }
    }
}

.closes{
    position: absolute;
    right: 0;
    color:white;
    font-weight: 800;
    top:29%;
    font-size: 20px;
    padding: 1% 3%;
    cursor: pointer;
}
</style>
