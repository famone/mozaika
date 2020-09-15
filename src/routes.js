import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Singlegen from './pages/Singlegen.vue'
import NotFound from './pages/NotFound.vue'
import About from './pages/About.vue'
import Rent from './pages/Rent.vue'
import Infosingle from './pages/Infosingle.vue'
import Contacts from './pages/Contacts.vue'
import Services from './pages/Services.vue'
import Manip from './pages/Manip.vue'


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
			path: '/info/:id',
			component: Infosingle
		},
		{
			path: '/generators',
			component: Rent
		},
		{
			path: '/manipulator',
			component: Manip
		},
		{
			path: '/services',
			component: Services
		},
		{
			path: '/contacts',
			component: Contacts
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '*',
			component: NotFound
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})
