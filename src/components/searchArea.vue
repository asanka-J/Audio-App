// component - search input area handling

<template>
        <div class="form-group">
            <label >Search Music</label>
            <input type="text" class="form-control" id="AudioSearch"  placeholder="Enter here" @input="search">
       
        </div>
</template>


<script>
import axios from 'axios';
export default {

   
        data(){
            return {
                searchResults: [],
            }
        },
   methods : {

            
            search(event){
                var searchInput = event.target.value;
                // sending request to deezer api with axios 
                axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+searchInput)
                    .then(response => {
                    this.searchResults=response.data.data;
                //   console.log(response.data.data[0].preview);
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                    // sending back the data to the parent component
        this.$emit('newDataSet',this.searchResults)
          
       }
   } 
}
</script>


<style>

</style>
