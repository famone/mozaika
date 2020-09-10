import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import geners from './geners'

export default new Vuex.Store({
	modules: {
		geners
	}
}) 