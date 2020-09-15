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
					name: 'Выезд специалистов',
					price: 5000
				},
				{
					name: 'Работа специалистов в час на базе',
					price: 1500
				},
				{
					name: 'Работа специалистов в час на выезде',
					price: 1800
				},
				{
					name: 'ТО ДЭС на выезде (от 16 кВт до 200 кВт)',
					price: 11400
				},
				{
					name: 'ТО ДЭС на выезде (от 220 кВт до 500 кВт)',
					price: 18000
				},
				{
					name: 'ТО ДЭС на выезде (более 500 кВт)',
					price: 29500
				}
			]
		}
	}
}
</script>