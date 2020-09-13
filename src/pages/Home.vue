<template>
	<div>
		<section id="main">
			<div class="container">
				<h1 class="wow fadeInUp">АРЕНДА ДИЗЕЛЬНЫХ ГЕНЕРАТОРОВ
				<br>БОЛЬШОЙ И МАЛОЙ МОЩНОСТИ</h1>
				<p class="subtitle wow fadeInUp">Наша цель - обеспечить надежным и качественным 
				<br>электроснабжением!</p>
				<button class="order wow fadeInUp">КАТАЛОГ</button>
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

export default{
	components: {
		'appGeners': Geners,
		'appAdvantages': Advantages,
		'appMore': More,
		'appUsefull': Usefull
	}
}
</script>

<style scoped>
	
</style>