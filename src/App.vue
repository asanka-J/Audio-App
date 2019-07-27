<template>
  <div >
  <app-nav></app-nav>
  
  <app-homearea></app-homearea>
  
  
  </div>
</template>

<script>
import HomeArea from './components/homeArea.vue'

export default {
components:{
  'app-homearea':HomeArea,
}
 

}
</script>

<style lang="scss">

</style>
