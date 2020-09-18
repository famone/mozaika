<template>
<div>
	<section id="inner">
		<div class="container">
			<div class="col-lg-12">
				<h1>Услуги обслуживания ДЭС</h1>
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
			<br>
			<p class="txt"><strong>Техническое обслуживание на выезде:</strong></p>
			<table>
							<tr>
								<td><p class="black-txt">НАИМЕНОВАНИЕ УСЛУГИ</p></td>
								<td><p class="black-txt">ЦЕНА</p></td>
							</tr>
							<tr v-for="serv in servicesOnDo">
								<td><p class="black-txt2">{{serv.name}}</p></td>
								<td><p class="black-txt2">{{serv.price}}</p></td>
							</tr>
			</table>
			<p>* В стоимость входят расходные материалы</p>
			<br>
			<router-link tag="a" to="/manipulator">
				<button class="order">УСЛУГИ МАНИПУЛЯТОРА</button>
			</router-link>
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
					name: 'Работа специалиста',
					price: '1500 ₽/час'
				},
				{
					name: 'Работа специалиста на выезде',
					price: '1800 ₽/час'
				},
				{
					name: 'Выезд специалиста',
					price: '5000 ₽'
				}
			],
			servicesOnDo: [
				{
					name: 'ТО ДЭС на выезде (от 16 кВт до 200 кВт)',
					price: 'от 11400 ₽'
				},
				{
					name: 'ТО ДЭС на выезде (от 220 кВт до 500 кВт)',
					price: 'от 18000 ₽'
				},
				{
					name: 'ТО ДЭС на выезде (более 500 кВт)',
					price: 'от 29500 ₽'
				},
				{
					name: 'Диагностика и ремонт ДЭС',
					price: 'Договорная'
				}
			]
		}
	}
}
</script>