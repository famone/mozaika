<template>
	<section id="more">
		<div class="container">
			<div class="col-lg-6">
				<h2 class="wow fadeIn">О компании</h2>
				<div class="txt wow fadeInUp">Наша компания, основанная в 2011 году, предоставляет комплексные решения в области обеспечения резервной электроэнергией.
Репутация надежного, ответственного и опытного партнера, всегда выполняющего свои обязательства, позволила компании построить прочные и долгосрочные отношения с клиентами.  <br><br>
Согласно нашей корпоративной этике, клиенты всегда имеют первостепенное значение. Мы стремимся обеспечить исключительное качество обслуживания и индивидуальный подход к каждому заказчику.
</div>
			</div>
			<div class="col-lg-6">
				<h2 class="wow fadeInUp">Что входит в аренду ?</h2>
				<div class="rent wow fadeInUp" v-for="(item, index) in rent"><span>{{index + 1}}</span><h3>{{item}}</h3></div>
			</div>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			rent: ['Оперативная доставка',
			'Техническое обслуживание',
			'Поставка качественного топлива' ]
		}
	}
}
</script>

<style scoped>
#more{
	padding: 60px 0;
}
h2{
	font-size: 30px;
	line-height: 40px;
}	
.rent{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20px;
}
.rent span{
	font-size: 20px;
	color: #00337E;
	font-weight: 500;
	padding:3px 12px;
	margin-right: 10px;
	border: 2px #00337E solid;
	border-radius: 50px;
}
.rent h3{
	font-size: 18px;
}
</style>