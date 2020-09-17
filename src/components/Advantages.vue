<template>
	<section id="advant">
		<div class="container">
			<div class="col-lg-7">
				<h2 class="wow fadeInLeft">Наши преимущества</h2>
				<div class="row">
					<div class="col-lg-6" v-for="icon in icons">
						<div class="icon wow fadeInUp">
						<img :src="icon.img" alt="">
						<h4>{{icon.title}}</h4>
					</div>
					</div>
				</div>
			</div>
			<div class="col-lg-5">
				<img src="../assets/img/gena.png" alt="" class="gena wow fadeInRight">
			</div>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			icons: [
				{
					title: 'Круглосуточная техническая поддержка',
					img: require('../assets/img/ic1.svg')
				},
				{
					title: 'Бесплатные консультации',
					img: require('../assets/img/ic2.svg')
				},
				{
					title: 'Грамотная логистика',
					img: require('../assets/img/ic3.svg')
				},
				{
					title: 'Регулярное обслуживание предоставляемого оборудования',
					img: require('../assets/img/ic4.svg')
				},
				{
					title: 'Выезд специалиста на объект 24/7',
					img: require('../assets/img/ic5.svg')
				},
				{
					title: 'Выгодные условия сотрудничества',
					img: require('../assets/img/ic6.svg')
				},
			]
		}
	}
}
</script>

<style scoped>
#advant{
	padding:60px 0;
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/adv.jpg);
}
.gena{
	margin-top: 50px;
	width: 100%;
}
.icon{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 50px;
	min-height: 58px;
}
.icon img{
	height: 50px;
	margin-right: 10px;
}
h4{
	font-size: 18px;
	color: #000;	
}
</style>