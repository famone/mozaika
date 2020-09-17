<template>
	<div>
		<section id="main">
			<div class="container">
				<h1 class="wow fadeInUp">АРЕНДА ДИЗЕЛЬНЫХ ГЕНЕРАТОРОВ
				<br>БОЛЬШОЙ И МАЛОЙ МОЩНОСТИ</h1>
				<p class="subtitle wow fadeInUp">Наша цель - обеспечить надежным и качественным 
				<br>электроснабжением!</p>
				<div class="socials">
						<a :href="social.link" v-for="social in socials">
							<img :src="social.img" alt="">
						</a>
					</div>
			</div>
		</section>
		<appGeners></appGeners>
		<appAdvantages></appAdvantages>
		<appMore></appMore>
		<appUsefull></appUsefull>
	</div>
</template>

<script>
import Geners from '../components/Geners.vue'
import Advantages from '../components/Advantages.vue'
import More from '../components/More.vue'
import Usefull from '../components/Usefull.vue'
import {mapState} from 'vuex'

export default{
	components: {
		'appGeners': Geners,
		'appAdvantages': Advantages,
		'appMore': More,
		'appUsefull': Usefull
	},
	computed: {
		...mapState('geners', ['socials']),
	}
}
</script>

<style scoped>
	
</style>