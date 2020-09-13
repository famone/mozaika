<template>
	<div class="pop" v-if="formPop">
		<div class="pop-box">
			<div class="cross" @click="openPop()">✕</div>
			<h3 class="text-center">Отправить заявку на аренду генератора</h3>
			<form action="">
				<label for="">Ваше имя</label>
				<input type="text">
				<label for="">Ваш телефон</label>
				<input type="text">
				<div class="text-center">
					<button class="order">Отправить</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('geners', ['formPop']),
	},
	methods: {
		openPop(){
			this.$store.dispatch('geners/openPop')
		}
	}
}
</script>