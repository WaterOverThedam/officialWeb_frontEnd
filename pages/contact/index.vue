<template>

	<div class="contact text-center">
        <div id="logo"></div>
        <MyNav></MyNav>
            <div  id="banner" :style="{'background':`url(${banner}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">  
                  <img class="left"   :src="cloud" alt="">
                  <img class="right" :src="cloud" alt="">
            </div>
            <div class="row">
                <h1 v-text="title" class="title"></h1>    
                <p v-for="item in address[Language]" v-text="item"></p>
              
            </div>                
            <div class="row list" v-for="item in body[Language]">
                <h1 v-text="item.title"></h1>
                <p v-text="item.p"></p>
            </div>
            <MyMedia></MyMedia>
        <MyFooter></MyFooter>

	</div>
	
</template>
<script>
    import contact from './contact'
    import MyNav from '~/components/MyNav.vue'
    import MyMedia from '~/components/MyMedia.vue'
    import MyFooter from '~/components/MyFooter.vue'
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'


    export default {
        head:{
            title:"联系我们", 
        },
        computed:{
             ...mapState([
              'language'
            ]),
            ...mapGetters([
                'Language'
            ]),
        },
        data(){
            return{
                ...contact
            }
        },
        components: {
            MyNav,
            MyMedia,
            MyFooter
        },
        methods:{
           
            // ...mapActions([
            //  "incrementAsync"
            // ])
        },
        mounted(){
            console.log(this.Language)
            console.log(this.language)
        }
    }
    
</script>
<style lang="scss" scoped>
.contact{
     overflow: hidden;
     font-family: "J-YUAN";
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
        // margin-bottom: 5%;
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

@media screen  and (max-width:"767px"){
    .contact{
        font-size: 6px;

        #banner{
             padding-top:20%;     
        }
    }
    
}
</style>
