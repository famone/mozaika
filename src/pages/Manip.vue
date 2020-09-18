<template>
	<div>
		<section id="inner2">
		<div class="container">
			<div class="col-lg-12">
				<h1>Аренда манипуляторов</h1>
			</div>
		</div>
	</section>
	<section id="serv">
		<div class="container">
			<table>
							<tr>
								<td><p class="black-txt">НАИМЕНОВАНИЕ УСЛУГИ</p></td>
								<td><p class="black-txt">ЦЕНА</p></td>
							</tr>
							<tr v-for="serv in services">
								<td><p class="black-txt2">{{serv.name}}</p></td>
								<td><p class="black-txt2">{{serv.price}}</p></td>
							</tr>
			</table>
		</div>
	</section>
	</div>
</template>

<script>
export default{
	data(){
		return{
			services: [
				{
					name: 'Один километр манипулятора за КАД ',
					price: '50 ₽/км'
				},
				{
					name: 'Дополнительный час манипулятора при работе погрузчиком (по месту)',
					price: '1300 ₽'
				},
				{
					name: 'Один дополнительный час манипулятора (стандарт)',
					price: '1600 ₽'
				},
				{
					name: 'Услуги манипулятора (стандарт 4+1 час)',
					price: '8000 ₽'
				}
			]
		}
	}
}
</script>