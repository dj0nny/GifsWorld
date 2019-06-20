<template>
  <div class="gifs">
    <div class="gif-search-form">
      <div class="row">
        <div class="col-md-12">
          <div class="search">
            <form @submit.prevent="searchGifs()" prevent.default>
              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="gifTerm">
                <div class="input-group-append">
                  <button class="btn custom" type="submit" id="button-addon2">Search Gifs</button>
                </div>
              </div>
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
            <button class="btn custom" @click="openUrl(gif.url)">View gif</button>
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
    max-height: 200px;
}

.more {
    margin-top: 20px;
    text-align: center;
}

.gif-search-form {
    text-align: center;
}

button.btn.custom {
    background: #554269;
    color: #fff;
    border: 1px solid #554269;
}

button.btn.custom:hover {
  text-decoration: underline;
}

</style>
