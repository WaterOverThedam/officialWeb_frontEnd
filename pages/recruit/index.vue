<template>
  <div class="recruit">
      <!-- <div id="banner" :style="{'background':`url(${rt.banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
      </div> -->
      <div id="logo"></div>
      <main>
      <div class="banner"> 
          <img :src="rt.banner" alt="">
      </div>
      <Waves></Waves>
      <div class="container">
        <div class="title row">
          <img :src="rt.cloud" alt="">
          <h1 class="text-center" v-text="rt.title"></h1>
        </div>
        <div class="search text-center row" >
          <input type="text" class="sh_input" :style="{'background':`url(${rt.search}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%'}">
          <button v-text="rt.searchword" :style="{'background':`url(${rt.bgblue}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}"></button>
        </div>
        <!-- 职位类型 -->
        <div class="row job">
            <div v-for="(item,index) in rt.job" class="row">
                <span v-text="item.title" class="title"></span>
                <a v-for="(c,i) in item.content" :href="c.id" v-text="c.name" :style="{'background':`url(${rt.button1}) no-repeat`,'background-size':'100% 100%','-webkit-background-size':'100% 100%','-moz-background-size':'100% 100%'}" >
                </a>
                <a href="more" v-text="rt.moreword2" class="more2"></a>
                <a href="more" v-text="rt.moreword1" class="more1"></a>
            </div>
            <div class="row hot_job">
                <span v-text="rt.hot_job.title" class="title"></span>
                <a :href="rt._1.id" v-text="rt._1.name"></a>
                <img :src="rt.hot" alt="">
                <a :href="rt._2.id" v-text="rt._2.name"></a>
                <img :src="rt.hot" alt="">
                <a :href="rt._3.id" v-text="rt._3.name"></a>
                <img :src="rt.hot" alt="">
            </div>
        </div>
      </div>
        <!-- 招聘列表 -->
      <div class="container-fluid list">
            <table>
                <thead>
                    <tr class="first" :style="{'background':`url(${rt.nav}) no-repeat`,'background-size':'500% 100%','-webkit-background-size':'100%'}">
                        <th v-for="(item,index) in rt.job_title" v-text="item.title"></th>
                    </tr>
                </thead>
                   
                <tbody>
                    <tr v-for="c in rt.body">
                        <td ><a :href="c.id" v-text="c.jobname"></a></td>
                        <td v-text="c.count"></td>
                        <td v-text="c.address"></td>
                        <td v-text="c.center"></td>
                        <td v-text="c.time"></td>
                    </tr>
                </tbody>
                
            </table>


      </div>
      <MyMedia></MyMedia>
      </main>
      <MyFooter :bgColor="bgColor_cur"></MyFooter>
  </div>
</template>
<script>

    import recruit from './recruit'
    import Waves from '~/components/Waves.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import { mapGetters } from 'vuex'
    export default{
        head:{
                title:"招聘职位",             
            },

        data () {
            return {
                 ...recruit,
                 list:[]
            }
        },
        computed:{
           ...mapGetters([
                'bgColor_cur'
            ]),
        },
        mounted(){
            // this.list=rt.body
        },
        components: {
               Waves,
               MyMedia,
               MyFooter
        },
    }
</script>
<style lang="scss" scoped>

.recruit {
    font-size: 12px;
    font-family: "SimSun";
    overflow: hidden;
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    img {

        width:100%;
         height:100%; 
    }
    .banner {
        margin:0;
        padding:0;
        width:100%;
         //    padding-top:29%;
        // padding-bottom:0.8em;
    }
    //标题样式
    .title {
        position: relative;
        margin-top:6%;
        margin-bottom: 4%;
        img{
            position: absolute;
            width: 16%;
            transform: scale(1.3);
            top:-4em;
            left:30%;
        }
        h1{
            font-size: 5.5em;
            color:#B0C937;
        }
    } 
    // 搜索
    .search {
        height: 5em;
        line-height: 5em;
        .sh_input{
            width: 50%;
            border: none;
            outline: none;
            text-indent: 5%;
            font-size: 2em;
            height:100%;
            
        }
        button{
            cursor: pointer;
            width: 15%;
            display: inline-block;
            font-size: 2em;
            letter-spacing: 0.2em;
            text-align: center;
            color: #fff;
            border: none;
            outline: none;
        }
    }
    // 有关职位
    .job {
        margin-top:5%;
        padding: 2%;
        width: 101%;
        .row {
            margin: 0 3% 3% 0;
            .title{
                font-size: 2.8em;
                color:#A9C90E;
                font-family: "Microsoft Yahei";
            }
            a{  
                display:inline-block;
                font-size: 2.6em;
                color:#868686;
                // margin: 0 2%;
                padding :1% 2%;
                cursor: pointer;
            }
            a:hover{
                text-decoration: none;
            }
            .more1,.more2 {
                float: right;
                color: #4C599D;
                font-size: 2em;
                padding: 0;
            }
            .more2{
                letter-spacing: -0.5em;
            }
            
            img{
                width: 5%;
                margin-right: 2%;
            }
        }
        .hot_job{
            a{
                padding: 0;
            }
        }
       
    }
  
    //列表
    .list{
        font-size: 2.6em;
        text-align: center;
        padding: 0;
        margin-bottom: 10%;
        table{
            width:100%;
            padding: 0 10%;
            tr{
                width: 100%;
            }
            th{
               font: normal;
               text-align: center;
               padding: 3% 0;
               color: #fff;
              
            }
            td{
                 a{
                   text-decoration: none;
                   cursor: pointer;
                   outline: none;
                   color: #333;
               }
            } 
        }
     
    }
}

@media screen and (max-width:"1000px") {
    .recruit{
         .title {
            img{
                width: 30%;
                transform: scale(1);
                top:-3.5em;
                left:18%;
            }
        }

    }
}
@media screen and (max-width:"767px") {
    .recruit{
        font-size: 5px;

        .search {
            height: 4.5em;
            line-height: 4.5em;
        }
        .title {
            img{
                width: 30%;
                transform: scale(0.6);
                top:-1.5em;
                left:22%;
            }
        }
        .job{
            padding: 3%;
            .row {
                img{
                    margin-right: 0.6%;
                }
            }
        }
        .list{
            margin: 0;
        }

    }
   
}
</style>
