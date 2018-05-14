<template>
    <section>
        <div class="container-fluid">
            <div class="common">
               
                <div class="left_word ">
                     <h3 class="text-center" v-text="title"></h3>
                    <img :src="top" alt="">
                    <p v-text="content.p"></p>
                    <img class="bottom_right" :src="bottom" alt="">
                </div>
                <img :src="content.pic" alt="" :class="content.id" class="hidden-xs rigth_pic">
        </div>
        </div>
    </section>
</template>
<script>
    export default {
        data(){
            return{
                title:"家长的话",
                top:"/img/components/top.png",
                bottom:"/img/components/bottom.png",
                content:[
                    {id:"girl",pic:"/img/components/girl.png",p:"今天带孩子上课，在窗外看得又激动了，小小的他在老师的指导下努力尝试、一遍遍的挑战自己、开心的做游戏、哈哈大笑、快乐的奔跑！感谢有你们，感谢所有的老师！"},
                    {id:"boy",pic:"/img/components/boy.png",p:"阳阳现在非常主动的参与到课程当中，胆量也越来越大了，看到他的进步我们都非常的高兴。"},
                    {id:"girl-ball",pic:"/img/components/girl-ball.png",p:"感谢你们的耐心教导。现在每晚睡前萱萱都在床上前滚翻20个，热情高涨。我们一定会坚持下去！谢谢！"}
                ],
                // content:{id:"girl",pic:"/img/components/girl.png",p:"今天带孩子上课，在窗外看得又激动了，小小的他在老师的指导下努力尝试、一遍遍的挑战自己、开心的做游戏、哈哈大笑、快乐的奔跑！感谢有你们，感谢所有的老师！"}

            }
          
        },
        methods:{
            change(){
                //console.log(111);
                // this.content= this.content[0]
                this.content= this.content[Math.floor(Math.random()*3)]
                // console.log(this.content)
            }
        },
        mounted(){
            this.change();
        }
    }
</script>
<style lang="scss" scoped>
    .common {
        padding-bottom:  46%;
        position: relative;
        // z-index: 2;
        .left_word{
            width: 40%;
            float: left;
            margin-left: 5%;
            padding-top:8%;
            // margin-top:5%;
            h3{
                font-family: "GD-HEI";
                font-size: 6em;
                color:#B6D712;
            }
            p{
                font-family: "J-YUAN";
                font-weight:bolder;
                font-size: 2.8em;
                color:#6472B4;
                padding-left:10%;
            }
            .bottom_right{
                float: right;
            }
        }
        .rigth_pic{
            position: absolute;
            right:8%;
            top: 21%;
        }
    }
// 处理超大屏不隐藏人物
@media (min-width: 1600px) { 
    .common{
        .rigth_pic{
        
            top: 25%;
        }
    }

    
 }
@media screen and (max-width:1200px){
    .common{
        padding-bottom: 60%;
        .left_word{
            p{
                font-size: 2.2em;
            }
        }
        .rigth_pic{
            right:2%;

        }
    }
}
@media screen and (max-width:"768px") {
    .common{
        .left_word{
            img{
                transform: scale(0.5)
            }
        }
        
    }
        



}
@media screen and (max-width:767px) {
    .common{
        padding-bottom: 104%;
        .left_word{
            width: 100%;
            margin: 0;
            p,h3{
                margin: 0;
                // padding: 0;
            }
            p{
                padding: 0 5%;
            }
        }
    }
}
</style>