import axios from 'axios'

export default {
  state: {
    gifs: []
  },

  mutations: {
    setGifs(state, payload) {
      state.gifs = payload
    }
  },

  actions: {
    async getGifs({ commit }, term) {
      var trimmedString = term.replace(/ /g,"+")
      console.log(trimmedString)
      const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${trimmedString}&api_key=1wk3Don9sHr3RnWwRRO65C0p29SjKV1e`)
      commit('setGifs', res.data)
    }
  }
}
