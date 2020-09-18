
import axios from 'axios'

const geners = {
	namespaced: true,
	state: {
		preload: false,
		formPop: false,
		socials: [
				{
					link: 'https://vk.com/mozaika_energy',
					img: 'https://www.flaticon.com/svg/static/icons/svg/145/145813.svg'
				},
				{
					link: 'https://www.instagram.com/mozaika_energy/',
					img: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg'
				},
				{
					link: 'tg://resolve?domain=kolosoff94',
					img: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111646.svg'
				},
				{
					link: 'https://wa.me/79052627002‬',
					img: 'https://www.flaticon.com/svg/static/icons/svg/733/733585.svg'
				},
				{
					link: 'viber://add?number=79052627002‬',
					img: 'https://www.flaticon.com/svg/static/icons/svg/185/185982.svg'
				},
				
			],
			generators: [],
			preloadGens: true,
			information: []
  	},
  	mutations: {
  		PRELOADER(state){
  			state.preload = !state.preload;
  		},
  		SET_POP(state){
  			state.formPop = !state.formPop;
  		},
  		SET_GENERS(state, playload){
  			state.generators = playload;
  			state.preloadGens = false;
  		},
  		SET_INFO(state, playload){
  			state.information = playload;
  		}
  	},
	actions: {
		makeStuff({commit}){
			commit('PRELOADER')
		},
		openPop({commit}){
			commit('SET_POP')
		},
		loadGeners({commit}){
	  		axios
	  			 .get('https://moz.webink.site/wp-json/mozaika/v1/get/products')
	  			 .then(response =>{
	  			 	var tovars = response.data
	  			 	commit('SET_GENERS', response.data)
	  			 	
	  			 })
	  			 .catch(error => console.log(error))
	  	},
	  	loadUsefull({commit}){
	  		axios
	  			 .get('https://moz.webink.site/wp-json/mozaika/v1/get/information')
	  			 .then(response =>{
	  			 	commit('SET_INFO', response.data)
	  			 	
	  			 })
	  			 .catch(error => console.log(error))
	  	},
	  	loadSocial({commit}){
	  		axios
	  			 .get('https://moz.webink.site/wp-json/mozaika/v1/get/social')
	  			 .then(response =>{
	  			 	console.log(response.data)
	  			 	// commit('SET_SOCIAL', response.data)
	  			 	
	  			 })
	  			 .catch(error => console.log(error))
	  	}

	},
	getters: {
  		getGenerators: (state) => (id) => {
  			return state.generators.find(item => item.slug == id)
  		},
  		getInfo: (state) => (id) => {
  			return state.information.find(item => item.slug == id)
  		},
  		getPreload(state){
  			return 10
  		}
	}
}

export default geners


