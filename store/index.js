import Vuex from 'vuex'
import axios from 'axios'
import provs from '~/assets/json/provs.json'
 

const createStore = () => {
  return new Vuex.Store({
    state: {
        ...provs,
        LanguageType:1,
        bg:[{color:'#33CCCC',pic:'/img/index/bottom2.jpg'},{color:'#5160AC',pic:'/img/index/bottom.png'}],
        city:"上海市",
        Gyms:[],
        News:[],
        menu: {
           content:[
              {name:"品牌故事",value:"/story"},
              {name:"我们的课程",value:"/course"},
              {name:"派对和夏冬令营",value:"/party"},
              {name:"预约体验",value:"/intro"},
              {name:"加盟中心",value:"/join"},
           ]
        },
        language_type: 0,

        counter: parseInt(Math.random()*10000),
    },
    getters:{
      // 返回省份和有小小运动馆中心得城市
      bgColor_cur(state){
        let index = parseInt(state.counter/600)%state.bg.length;
        return state.bg[index];
      },
      Language(state){
        return state.language_type
      },
      cities(state){
        let c = state.Gyms.map(gym => {
            return {prov:gym.prov,city:gym.city};
        })
        c = [...new Set(c)];
        return  state.provs.map(p=>{
              var city=[];
              c.map(c=>{
                  if(c.prov.indexOf(p.name)!=-1) {
                    city.push(c.city);
                  }
              })
            return {provId:p.id,prov:p.name,city:[...new Set(city)]};
          })
      } 
      
    },
    mutations: {
      
      increment (state) {
        if(state.counter++>10000){
            state.counter=0;
            //console.log(state.counter);
        }
      },
      changeLanguage(state,c){
        state.language_type =c
        console.log(state.language)
      },
      switchCity(state,c){
        state.city = c;
        console.log(c);
      },
      setGyms(state,g){
        state.Gyms = g;
      },
      setNews(state,g){
        state.News = g;
      }
    },
    actions: {
  		incrementAsync ({ commit }) {
  		 setInterval(() => {
  		  commit('increment')
  		 }, 3000)
      }

    }
  })
}

export default createStore