import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      test:22
    },
    mutations: {
      increment (state) {
        state.counter++
      },
       tester (state) {
        state.test--
      }
    },
    actions: {
		incrementAsync ({ commit }) {
		 setTimeout(() => {
		  commit('increment')
		 }, 3000)
		}
    }
  })
}

export default createStore