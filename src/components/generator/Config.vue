<template>
				<div class="row config-box">
					<div class="col-lg-4 mb-30">
						<h3>Конфигуратор:</h3> 
						<br>
						<div class="config">
							<label for="">Выберите срок ареды: <span>{{rentDays}} дн.</span></label>
							<input type="range" max="60" min="1" step="1" v-model="rentDays" :style="{backgroundSize : getRangeWidth + '%'}">
						</div>
					</div>
					<div class="col-lg-4 mb-30">
						<h3>Предварительный расчет:</h3>
						<br>
						<h4>{{getCheckedItem}} ₽</h4>
					</div>
					<div class="col-lg-4 mb-30">
						<h3>Заказать аренду:</h3>
						<br>
						<button class="order" @click="openPop()" style="width: 100%;">Отправить заявку</button>
					</div>
				</div>
</template>


<script>
	export default{
		props: {
			checkItem:{
				type: Object,
				required: true
			}
		},
		data(){
			return{
				rentDays: 7,
				rangeWidth: 60
			}
		},
		computed: {
			getRangeWidth(){
				let result = (this.rentDays)*100 / this.rangeWidth
				return result
			},
			getCheckedItem(){
				let stoimost = this.checkItem.table.find(item => item.active == true);
				let finalPrice = 0;

				if(this.rentDays < 6){
					 finalPrice = stoimost.fiveDay * this.rentDays 
				}else{
					 finalPrice = stoimost.price * this.rentDays 
				}
				
				return finalPrice.toLocaleString()
			}
		},
		methods: {
			openPop(){
				this.$store.dispatch('geners/openPop')
			}
		}
	}
</script>	