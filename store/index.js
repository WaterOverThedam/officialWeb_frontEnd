import Vuex from 'vuex'
import axios from 'axios'
import provs from '~/assets/json/provs.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
        ...provs,
        bgColor:['#33CCCC','#5160AC'],
        city:"上海市",
        gyms:[],
        menu: {
           content:[
              {name:"品牌故事",value:"/story"},
              {name:"我们的课程",value:"/course"},
              {name:"派对和夏冬令营",value:"/party"},
              {name:"预约体验",value:"/bespeak"},
              {name:"加盟中心",value:"/join"},
           ]
        },
        counter: parseInt(Math.random()*10000),
    },
    getters:{
      // 返回省份和有小小运动馆中心得城市
      cities(state){
        let c = state.gyms.map(gym => {
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
      getGyms(state){
        if(!state.gyms||state.gyms.length==0){
          return axios.get('http://localhost:8888/api/getGymByCity/-1')
            .then((response)=>{
              var res = response.data;
              if(res.code){
                  console.log(res.msg)
              }else{
                state.gyms = res.data;
              }           
            })         
            .catch(function (error) {
              console.log(error);
            })
          }
      },

      increment (state) {
        if(state.counter++>10000){
            state.counter=0;
            //console.log(state.counter);
        }
      },
      switchCity(state,c){
        state.city = c;
        //console.log(m);
      },
      setGyms(state,g){
        state.gyms = g;
        //console.log(m);
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