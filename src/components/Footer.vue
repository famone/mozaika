<template>
	<footer>
		<div class="container">
			<div class="col-lg-4 text-center">
				<router-link tag="a" to="/">
						<div class="logo">
							<img src="../assets/img/logo2.svg" alt="">
						</div>
					</router-link>
				<p class="small-grey">ООО "МОЗАЙКА ДЭС” <br>ИНН: 7807164585 <br>Аренда дизельных
				<br>электростанций</p>
			</div>
			<div class="col-lg-4 text-center">
				<h5>КОНТАКТЫ</h5>
				<p class="small-grey"><a href="tel:+79052627002">+7 905 262-70-02</a></p>
				<p class="small-grey"><a href="tel:+79650331799">+7 965 033-17-99</a></p>
				<p class="small-grey"><a href="mailto:mozaika.des@mail.ru">mozaika.des@mail.ru</a></p>
				<div class="socials">
						<a :href="social.link" v-for="social in socials">
							<img :src="social.img" alt="">
						</a>
					</div>
			</div>
			<div class="col-lg-4 text-center">
				<h5>АДРЕС</h5>
				<p class="small-grey">Санкт-Петербург, <br>
				ул. Летчика Пилютова,  <br>
				д 11, корпус 1 литер а, офис 12-н  </p>
			</div>
			<div class="col-lg-12 text-center">
				<div class="webink">
						<a href="https://webink.site/">Разработка сайта - webink.site</a>
					</div>
			</div>
			<div class="col-lg-12 text-center">
				<p class="small-txt">
				Вся представленная на сайте информация, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ</p>
			</div>
		</div>
	</footer>
</template>

<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('geners', ['socials']),
	}
}
	
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
	margin-top: 10px;
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
	font-size: 13px;
	transition: all .3s ease;
	margin-top: 40px;
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

.small-txt{
	margin-top: 20px;
	color: grey;
	font-size: 13px;
}
</style>