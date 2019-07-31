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
                axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+searchInput)
                    .then(response => {
                        //  console.log(response.data);
                    this.searchResults=response.data;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
        this.$emit('newDataSet',this.searchResults)
          
       }
   } 
}
</script>


<style>

</style>
