import Vue from 'vue'
import App from './App.vue'
import Nav from './components/nav.vue'


Vue.component('app-nav',Nav);


new Vue({
  el: '#app',
  render: h => h(App)
})
