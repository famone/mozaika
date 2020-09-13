
import axios from 'axios'

const geners = {
	namespaced: true,
	state: {
		preload: false,
		formPop: false,
		socials: [
				{
					link: '',
					img: 'https://www.flaticon.com/svg/static/icons/svg/733/733585.svg'
				},
				{
					link: '',
					img: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111646.svg'
				},
				{
					link: '',
					img: 'https://www.flaticon.com/svg/static/icons/svg/145/145813.svg'
				},
				{
					link: '',
					img: 'https://www.flaticon.com/svg/static/icons/svg/185/185982.svg'
				},
				{
					link: '',
					img: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg'
				}
			],
		generators: [
				{
					id: 1,
					powerFrom: 16,
					powerTo: 24,
					img: require('../assets/img/geners/16-24.png'),
					table: [
						{
							power: 16,
							fiveDay: 2000,
							price: 1300,
							active: true
						},
						{
							power: 24,
							fiveDay: 2100,
							price: 1400,
							active: false
						}
					]
				},
				{
					id: 2,
					powerFrom: 30,
					powerTo: 48,
					img: require('../assets/img/geners/30-48.jpg'),
					table: [
						{
							power: 30,
							price: 1600,
							fiveDay: 2000,
							active: true
						},
						{
							power: 48,
							price: 1700,
							fiveDay: 2000,
							active: false
						}
					]
				},
				{
					id: 3,
					powerFrom: 60,
					powerTo: 200,
					img: require('../assets/img/geners/60-200.jpg'),
					table: [
						{
							power: 60,
							price: 1800,
							fiveDay: 2000,
							active: true
						},
						{
							power: 100,
							price: 2350,
							fiveDay: 2000,
							active: false
						},
						{
							power: 128,
							price: 2700,
							fiveDay: 2000,
							active: false
						},
						{
							power: 200,
							price: 3600,
							fiveDay: 2000,
							active: false
						}
					]
				},
				{
					id: 4,
					powerFrom: 220,
					powerTo: 280,
					img: require('../assets/img/geners/220-280.jpg'),
					table: [
						{
							power: 220,
							price: 12000,
							fiveDay: 2000,
							active: true
						},
						{
							power: 280,
							price: 15000,
							fiveDay: 2000,
							active: false
						}
					]
				},
				{
					id: 5,
					powerFrom: 320,
					powerTo: 400,
					img: require('../assets/img/geners/320-400.jpg'),
					table: [
						{
							power: 320,
							price: 12000,
							fiveDay: 2000,
							active: true
						},
						{
							power: 400,
							price: 15000,
							fiveDay: 2000,
							active: false
						}
					]
				},
				{
					id: 6,
					powerFrom: 500,
					powerTo: 800,
					img: require('../assets/img/geners/500-800.jpg'),
					table: [
						{
							power: 500,
							fiveDay: 2000,
							price: 12000,
							active: true
						},
						{
							power: 800,
							fiveDay: 2000,
							price: 15000,
							active: false
						}
					]
				},
			]
  	},
  	mutations: {
  		PRELOADER(state){
  			state.preload = !state.preload
  		},
  		SET_POP(state){
  			state.formPop = !state.formPop
  		}
  	},
	actions: {
		makeStuff({commit}){
			commit('PRELOADER')
		},
		openPop({commit}){
			commit('SET_POP')
		}
	},
	getters: {
  		getGenerators: (state) => (id) => {
  			return state.generators.find(item => item.id == id)
  		},
  		getPreload(state){
  			return 10
  		}
	}
}

export default geners


