import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Singlegen from './pages/Singlegen.vue'
import NotFound from './pages/NotFound.vue'


export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/generators/:id',
			component: Singlegen
		},
		{
			path: '*',
			component: NotFound
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
  		return { x: 0, y: 0 }
	}
})
