import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'





import 'swiper/css/swiper.css'

Vue.use(VueTheMask)
Vue.use(VueRouter) 
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueScrollTo)




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})


router.beforeEach((to, from, next) => {
  // this.$store.dispatch('geners/checkRouter')
   store.dispatch('geners/makeStuff')
  // console.log(store.state.geners.preload)
  // console.log(App.data)

  setTimeout(function(){
                      next()
  }, 600);
  setTimeout(function(){
              store.dispatch('geners/makeStuff')        
  }, 800);
})

