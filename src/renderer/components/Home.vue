<template>
  <div class="">
    <div class="row">
      <div class="col-md-12">
        <GifsList></GifsList>
      </div>  
    </div>  
  </div>
</template>


<script>
import GifsList from './GifsList'

export default {
  name: 'Home',
  components: {
    GifsList
  }
}
</script>
