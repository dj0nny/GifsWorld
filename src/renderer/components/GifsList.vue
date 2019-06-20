<template>
  <div class="gifs">
    <div class="gif-search-form">
      <div class="row">
        <div class="col-md-12">
          <div class="search">
            <form @submit.prevent="searchGifs()" prevent.default>
              <input type="text" v-model="gifTerm">
              <button type="submit">Search Gifs</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="gifs-list">
      <div class="row">
        <div class="col-md-4 gif" v-for="(gif, index) in gifs.gifs.data" :key="index">
          <img :src="gif.images.fixed_height.url" alt="gif">
          <div class="more">
            <button @click="openUrl(gif.url)">View gif</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

const { shell } = require('electron')

export default {
  name: 'GifsList',
  data: () => ({
    gifTerm: ''
  }),
  computed: {
    ...mapState([
      'gifs'
    ])
  },
  methods: {
    ...mapActions([
      'getGifs'
    ]),
    searchGifs() {
     this.getGifs(this.gifTerm)
    },
    openUrl(url) {
      shell.openExternal(url)
    }
  },

}
</script>

<style scoped>
.gifs-list {
    margin-top: 50px;
}

.gifs-list .gif {
    margin-bottom: 20px;
}

.gifs-list .gif img {
    width: 100%;
    cursor: pointer;
}


</style>
