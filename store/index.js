import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        bgColor:['#33CCCC','#5160AC'],
        menu: {
           content:[
              {name:"我们的课程",value:"/course"},
              {name:"派对和夏冬令营",value:"/camp"},
              {name:"微信微博",value:"/wei"},
              {name:"家长点评",value:"/comment"},
              {name:"我们的故事",value:"/story"}
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