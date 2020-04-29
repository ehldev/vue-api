import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    setCharacters(state, data) {
      state.characters = data
    }
  },
  actions: {
    saveCharacters(state, data) {
      state.commit('setCharacters', data)
    }
  },
  modules: {
  }
})
