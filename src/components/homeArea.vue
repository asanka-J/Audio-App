// component -common home area to include search area and result componenets
<template>
<div class="container">
    <form>
        <legend>Hi ! How are you duin?</legend>
  

 <app-search @newDataSet="results = $event"></app-search> <!-- get data from dataset and inject into results array -->
       
    </form>


    <app-results :resultpass="results"></app-results>


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
