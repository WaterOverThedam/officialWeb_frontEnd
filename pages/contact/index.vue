<template>
	<div class="contact text-center">
        <div id="logo"></div>
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                  <img class="left"   :src="cloud" alt="">
                  <img class="right" :src="cloud" alt="">
            </div>
            <div class="row">
                <h1 v-text="title" class="title"></h1>    
                <p v-for="item in address" v-text="item"></p>
              
            </div>                
            <div class="row list" v-for="item in body">
                <h1 v-text="item.title"></h1>
                <p v-text="item.p"></p>
            </div>
            <MyMedia></MyMedia>
        <MyFooter :bgColor="bgColor[counterNow]"></MyFooter>

	</div>
	
</template>
<script>
    import contact from './contact'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    // import { mapMutations } from 'vuex'
    // import { mapActions } from 'vuex'


    export default {
        head:{
            title:"联系我们", 
        },
        computed:{
            bgColor(){
                return this.$store.state.bgColor;
            },
            counterNow(){
                return parseInt(this.$store.state.counter/600)%this.bgColor.length;
            }
        },
        data(){
            return{
                ...contact
            }
        },
        components: {
            MyMedia,
            MyFooter
        },
        methods:{
            // ...mapMutations([
            // "tester"
            //  ]),
            // ...mapActions([
            //  "incrementAsync"
            // ])
        }
    }
    
</script>
<style lang="scss" scoped>
.contact{
     overflow: hidden;
    .left{
       left: 0;
    }
    .right{
        right:0;
    }
    ul,li{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    #banner{
        margin:0;
        padding:0;
        width:100%;
        padding-top:29%;
        padding-bottom:15em;  
        position: relative;
         img{
            position: absolute;
            width: 50%;
            bottom:-5px;
            // height: 10%;    
        }
    }
    h1{ 
        font-family: 'GD-HEI'; 
        color: #4E5D9E;
        font-size: 7em;
        letter-spacing: 0.1em;
        
    }
    p{
        color:#49CDCE;
        font-size: 2em;
    }
    .list {
        margin-bottom: 5%;
    }
    .row {
        padding: 0 8%;
        p:nth-child(5){
            color:#4E5B9F;
            font-size: 1.5em;
        }
        .title{
            margin-bottom: 3%;
        }
    }
}
@font-face { 
font-family: 'GD-HEI'; 
src: url('/font/bak/hei.ttf') format('truetype'); 
}
@media screen  and (max-width:"767px"){
    .contact{
        font-size: 6px;

        #banner{
             padding-top:20%;     
        }
    }
    
}
</style>
