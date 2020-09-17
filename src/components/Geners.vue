<template>
	<section id="goods">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="wow fadeInUp">Аренда генераторов</h2>
				</div>
			</div>

			
<Preloadgens v-if="preloadGens" />

			<div class="row float-div">
				<div class="col-lg-4" v-for="gen in generators">
					<div class="gen-box">
						<h3>Генераторы мощностью:</h3>
						<h3 class="power"><img src="../assets/img/light.svg" alt="">{{gen.name}}</h3>
						<hr>
						<div class="text-center">
							<img :src="gen.img" class="gen-img">
						</div>

						<table>
							<tr>
								<td><p class="black-txt"><img src="../assets/img/light.svg" alt="">Мощность в кВт</p></td>
								<td><p class="black-txt"><img src="../assets/img/rub.svg" alt="">Аренда в сутки</p></td>
							</tr>
							<tr v-for="item in gen.table.slice(0, 2)">
								<td><p class="black-txt2">{{item.power}} кВт</p></td>
								<td><p class="black-txt2">от {{item.price}} ₽</p></td>
							</tr>
						</table>
						<router-link tag="a" :to="'/generators/' + gen.slug">
							<button class="order">Подробнее</button>
						</router-link>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
import Preloadgens from './Preloadgens.vue'

export default{
	components: { Preloadgens },
	computed: {
		...mapState('geners', ['generators', 'preloadGens']),
	}
}
</script>

<style scoped>

hr{
	border-color: #C4C4C4;
	opacity: .5;
}
.gen-img{
	width: 100%;
	margin-bottom: 25px;
}
.power{
	text-decoration: underline;
}
#goods{
	padding: 60px 0;
}
.gen-box{
	padding:20px 25px;
	background-color: #ECECEC;
	margin-bottom: 30px;
}
.grey-txt{
	margin-bottom: 35px;
}
</style>