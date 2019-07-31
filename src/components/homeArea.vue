// component -common home area to include search area and result componenets
<template>
<div class="container">
    <form>
        <legend>Hi ! How are you duin?</legend>
  

 <app-search @newDataSet="results = $event"></app-search>
       
    </form>

<div class="col-lg-12">
    <app-results :resultpass="results"></app-results>
</div>


</div>
</template>


<script>
import SearchArea from './searchArea.vue'
import ResultArea from './searchResults'

export default {

 data(){
        return {
            results:[]
            
        }
    },

components:{
  'app-search':SearchArea,
  'app-results':ResultArea,
}
}
</script>


<style>

</style>
