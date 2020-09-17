<template>
	<section id="bread">
		<div class="container">
			<div class="breadcr">
				<router-link tag="p" to="/" class="black-txt2 bread-link">Главная</router-link>
				<router-link tag="p" to="/generators" class="black-txt2 bread-link">Аренда генераторов</router-link>
				<p class="black-txt2">Генераторы мощностью: {{title.name}}</p>
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

<style scoped>
.bread-link{
	cursor: pointer;
}
.bread-link:hover{
	text-decoration: underline;
}
</style>