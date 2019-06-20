<template>
  <div id="navbar">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div id="app-title">
            <h1><strong>Gifs</strong>World</h1>
          </div>
        </div>
        <div class="col-md-4">
          <ul class="controls">
            <li class="control">
              <img src="../assets/minimize.png" @click="minimize()">
            </li>
            <li class="control">
              <img src="../assets/cancel.png" @click="close()">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const electron = require('electron');
const remote = electron.remote

export default {
  name: 'Navbar',
  methods: {
    minimize() {
      var win = remote.getCurrentWindow()
      win.minimize()
    },
    close() {
      var win = remote.getCurrentWindow()
      win.close()
    }
  }
}
</script>

<style scoped>
#navbar {
  background: #41cac6;
  padding: 10px;
  
}

div#app-title h1 {
  font-size: 30px;
  margin: 0;
    -webkit-app-region: drag;
}

ul.controls {
  margin: 0;
  padding: 0;
  float: right;
  margin-top: 5px;
}

ul.controls li.control {
  list-style-type: none;
  display: inline-block;
  margin-right: 30px;
}

ul.controls li.control img {
  width: 15px;
}

ul.controls li.control img:hover {
  cursor: pointer;
}
</style>
