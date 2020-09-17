<template>
  <div id="app">

  	<appForm />

  	<appPreloader :activate="preload" />

	<appHeader></appHeader>

	<router-view></router-view>

	<appFooter></appFooter>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preloader from './components/Preloader.vue'
import Form from './components/Form.vue'


export default {
	data(){
		return{
			ds: true
		}
	},
	computed: {
		...mapState('geners', ['preload']),
	},
	components: {
		'appHeader': Header,
		'appFooter': Footer,
		'appPreloader': Preloader,
		'appForm': Form
	},
	mounted(){
		this.$store.dispatch('geners/loadGeners')
		this.$store.dispatch('geners/loadUsefull')
	}
}
</script>

<style>

</style>

