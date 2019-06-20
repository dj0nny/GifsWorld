<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="app-body">
      <div class="container">
        <router-view></router-view>
     </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'gifsworld',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  font-family: 'Montserrat' !important;
  color: #fff !important;
}

#app-body {
  background: #4c98cf;
}

</style>
