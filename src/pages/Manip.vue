<template>
	<section id="serv">
		<div class="container">
			<table>
							<tr>
								<td><p class="black-txt">НАИМЕНОВАНИЕ УСЛУГИ</p></td>
								<td><p class="black-txt">ЦЕНА</p></td>
							</tr>
							<tr v-for="serv in services">
								<td><p class="black-txt2">{{serv.name}}</p></td>
								<td><p class="black-txt2">{{serv.price}} ₽</p></td>
							</tr>
			</table>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			services: [
				{
					name: 'Услуга манипулятора (стандарт) (4+1 час)',
					price: 8000
				},
				{
					name: 'Один километр манипулятора за КАД ',
					price: 50
				},
				{
					name: 'Один дополнительный час манипулятора (стандарт)',
					price: 1600
				},
				{
					name: 'Один дополнительный час манипулятора при работе как погрузчик (по месту)',
					price: 1300
				}
			]
		}
	}
}
</script>