<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          Made with ️️❤️ by <a href="https://github.com/dj0nny" target="_blank">dj0nny</a> &copy; {{ year }}
        </div>
        <!-- <div class="col-md-3">
          social
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data:() => ({
    year: new Date().getFullYear()
  })
}
</script>

<style>
#footer {
  background: #4873a6;
  padding: 30px;
}

#footer a {
    color: #fff;
    font-weight: bold;
}

#footer a:hover {
  text-decoration: underline;
}
</style>
