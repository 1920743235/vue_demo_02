import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Info: []
  },
  mutations: {
    newInfo(state, id) {
      if (state.Info.length > 0) {
        console.log(state.Info)
        let i = 0
        state.Info.forEach(item => {
          if (item.id !== id.id) {
            i++
          }
        })
        if (state.Info.length === i) {
          state.Info.push(id)
        }
      } else {
        state.Info.push(id)
      }
      window.localStorage.setItem('gwc', JSON.stringify(state.Info))
    }
  },
  actions: {
  },
  modules: {
  }
})
