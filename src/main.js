import Vue from 'vue'
import App from './App.vue'
import Nav from './components/nav.vue'
import VueRouter from 'vue-router'
import HomeArea from './components/homeArea.vue'
import AboutArea from './components/aboutArea.vue'

Vue.component('app-nav',Nav)
Vue.use(VueRouter)

//  Define some routes
const routes = [
  { path: '/', component: HomeArea },
  { path: '/about', component: AboutArea },
]

//  Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
