<template>
	<div>
		<section id="intro">
			<div class="container">
				<h1>{{getInfo(itemSlug).title}}</h1>
				<button class="order wow fadeInUp" @click="$router.go(-1)">НАЗАД</button>
			</div>
		</section>
		<section id="outro">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
					<p class="txt" v-html="getInfo(itemSlug).descr"></p>
					<br>
					<router-link tag="a" to="/generators">
						<button class="order">КАТАЛОГ ГЕНЕРАТОРОВ</button>
					</router-link>
				</div>
				</div>
			</div>
		</section>
		<Advantages />
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Advantages from '../components/Advantages.vue'

export default{
	components: { Advantages },
	data(){
		return{
			itemSlug: '',
		}
	},
	computed: {
   		...mapGetters('geners', ['getInfo']),
	},
	created(){
		this.itemSlug = this.$route.params.id
		// if(this.getInfo(this.itemSlug) === undefined){
		// 	this.$router.push('/404')
		// }
	}
}
</script>