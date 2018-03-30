<template>
  <div class="goTop hidden-xs" v-show="isShow">
      <!-- JQ方式 -->
  <!-- <div class="goTop hidden-xs hidden" > -->
      <img   @click="gotop" :src="top" alt="" title="返回顶部">
  </div>
</template>
<script>
    export default {
        data(){
            return {
                top:"/img/index/gotop.png",
                isShow : false,
            }
        },
        methods:{
            // 判断是否显示回到顶部图片
            sT(){
                var scrollTop  = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;;
                var  clientHeight = document.documentElement.clientHeight || document.body.clientHeight;;
                // var  clientHeight = document.documentElement.clientHeight ;
          
                
                // console.log(clientHeight);
                if(scrollTop>=clientHeight ){
                    this.isShow=true
                }else{
                    this.isShow=false;
                }
                // console.log(scrollTop)
                // console.log(clientHeight)
            },
            gotop(){
                
  
                var  timer = setInterval(function(){
                    var scrollTop  = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;;
                    //  console.log(scrollTop)
                    var speed = -100;
                      document.documentElement.scrollTop+=speed
                            //  console.log(scrollTop)
                      if(scrollTop<=0){
                            clearInterval(timer)
                    }
                  
                },10)
               
            }
        },
        mounted(){
            // JQ方式
                // $(window).scroll(function(){
                //     var scrollTop = $(window).scrollTop();
                //     var clientHeight = $(window).height();

                //     console.log(scrollTop)
                //     console.log(clientHeight)

                //     if(scrollTop>=clientHeight){
                //         console.log(1);
                //         //    $('.goTop').addClass('hidden')
                //         $('.goTop').removeClass('hidden').addClass('show')
                //     }else{
                //         $('.goTop').removeClass('show').addClass('hidden')
                //     }
                // })
                // $('.goTop').click(function(){
                //     $(window).animate({scrollTop:0})
                // })


              window.addEventListener('scroll',this.sT)
          
        }   
    } 

</script>
<style scoped>
    .goTop{
        position: fixed;
        bottom: 5%;
        right:0%;
        /* background-color: red; */
        z-index:9999;
       /* display: none; */
    }
    .goTop img{
        /* transform: rotate(180deg); */
         cursor: pointer;
         width:60%;
    }

</style>
