<template>
					<table>
							<tr>
								<td><p class="black-txt"><img  class="hidden-xs" src="../../assets/img/light.svg" alt="">Мощность в кВт</p></td>
								<td><p class="black-txt"><img  class="hidden-xs" src="../../assets/img/rub.svg" alt="">Аренда до 5 дней</p></td>
								<td><p class="black-txt"><img  class="hidden-xs" src="../../assets/img/rub.svg" alt="">Аренда в сутки</p></td>
								<td><p class="black-txt text-center">Выбрать:</p></td>
							</tr>
							<tr v-for="(item, index) in table.table" :key="index" @click="checkGener(index)">
								<td><p class="black-txt2">{{item.power}} кВт</p></td>
								<td><p class="black-txt2">от {{item.fiveDay}} ₽</p></td>
								<td><p class="black-txt2">от {{item.price}} ₽</p></td>
								<td class="text-center">
									<button class="radio-el" :class="{acRadio : item.active}"></button>
								</td>
							</tr>
							
						</table>

</template>	


<script>
	export default{
		props: {
			table: {
				type: Object,
				required: true
			}
		}, 
		methods: {
			checkGener(item){
				this.table.table.forEach((item) => {
					item.active = false
				})
				this.table.table[item].active = !this.table.table[item].active
				
			}
		}
	}
</script>