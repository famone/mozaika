<template>
	<footer>
		<div class="container">
			<div class="col-lg-3">
				<h5>ООО "МОЗАЙКА ДЭС”</h5>
				<p class="small-grey">Аренда дизельных
				<br>электростанций</p>
			</div>
			<div class="col-lg-3">
				<h5>КОНТАКТЫ</h5>
				<p class="small-grey"><a href="tel:+79052627002">+7 905 262-70-02</a></p>
				<p class="small-grey"><a href="tel:+79650331799">+7 965 033-17-99</a></p>
				<p class="small-grey"><a href="mailto:mosaika.des@mail.ru">mosaika.des@mail.ru</a></p>
			</div>
			<div class="col-lg-3">
				<h5>АДРЕС</h5>
				<p class="small-grey">Санкт-Петербург, <br>
				ул. Летчика Пилютова,  <br>
				д 11, корпус 1 литер а, офис 12-н  </p>
			</div>
			<div class="col-lg-3">
				<h5>СВЯЗАТЬСЯ</h5>
				<a href="https://wa.me/79052627002">
					<button class="order whats">Написать в Whats App</button>
				</a>
				<div class="webink">
						<a href="https://webink.site/">Разработка сайта - webink.site</a>
					</div>
			</div>
		</div>
	</footer>
</template>

<script>
	
</script>

<style scoped>
footer{
	background: #303030;
	padding: 45px 0;
}
h5{
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	margin-bottom: 15px;
	color: #FFFFFF;
	margin-top: 15px;
}
.small-grey{
	font-size: 16px;
	line-height: 19px;
	font-weight: 400;
	color: #C0C0C0;
}
.small-grey a{
	color: #C0C0C0;
	transition: all .2s ease;
}
.small-grey a:hover{
	color: #fff;
}
.whats{
	background-color: #1EBEA5;
	border: #1EBEA5 1px solid;
}
.whats:hover{
	color: #fff;
	border-color: #1EBEA5;
	background-color: transparent;
}
.webink{
	font-weight: 400;
	color: #fff;
	font-size: 15px;
	transition: all .3s ease;
	margin-top: 20px;
}
.webink a{
	color: #fff;
}
.webink:hover{
	animation: 1s myshake alternate;
}
@keyframes myshake{
	0% {
	    transform: skewX(-15deg);
	}
	5% {
	    transform: skewX(15deg);
	}
	10% {
	    transform: skewX(-15deg);
	}
	15% {
	    transform: skewX(15deg);
	}
	20% {
	    transform: skewX(0deg);
	}
	100% {
	    transform: skewX(0deg);
	}
}
</style>