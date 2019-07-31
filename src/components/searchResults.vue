// component to handle search results

<template>

<div> 
        <table class="table table-hover" >
        <thead>
            <tr>
            <th scope="col">Song Name</th>
            <th scope="col">Artist</th>
            <th scope="col">Album cover</th>
            
            </tr>
        </thead>

        <tbody v-for="item in resultpass">

            <tr class="table-active">
                <a :href="item.link"><th scope="row">{{item.title}}</th> </a>
                <td><a :href="item.artist.link">{{item.artist.name}}</a></td>
                <td><img v-bind:src="item.album.cover_small" alt=""></td>           
            </tr>
       
        </tbody>

        
        </table> 

</div>

</template>


<script>
export default {
    props:['resultpass']
    
    
}
</script>


<style>

</style>
