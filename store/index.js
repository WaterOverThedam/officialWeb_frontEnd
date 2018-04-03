import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        bgColor:['#33CCCC','#5160AC'],
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
      

    },
    mutations: {
      increment (state) {
        if(state.counter++>10000){
            state.counter=0;
            //console.log(state.counter);
        }
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