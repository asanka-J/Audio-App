<template>
<div class="container">
    <form>
        <legend>Hi ! How are you duin?</legend>
  

 <app-search></app-search>
       
    </form>

<div class="col-lg-12">
    <app-results></app-results> 
</div>


</div>
</template>


<script>
import SearchArea from './searchArea.vue'
import ResultArea from './searchResults'

export default {
components:{
  'app-search':SearchArea,
  'app-results':ResultArea,
}
}
</script>


<style>

</style>
