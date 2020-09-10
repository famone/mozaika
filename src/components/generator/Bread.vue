<template>
	<section id="bread">
		<div class="container">
			<div class="breadcr">
				<router-link tag="p" to="/" class="black-txt2">Главная</router-link>
				<p class="black-txt2">Аренда генераторов</p>
				<p class="black-txt2">Генераторы мощностью: {{title.powerFrom}}-{{title.powerTo}} кВт</p>
			</div>
		</div>
	</section>	
</template>

<script>
	export default{
		props: {
			title: {
				type: Object,
				required: true
			}
		}
	}
</script>