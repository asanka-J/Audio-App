// component - search input area handling

<template>
        <div class="form-group">
            <label >Search Music</label>
            <input type="text" class="form-control" id="AudioSearch"  placeholder="Enter here" @input="search">
        </div>
</template>


<script>
export default {
   methods : {
       search(event){
           alert (event.target.value)
       }
   } 
}
</script>


<style>

</style>
