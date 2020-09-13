<template>
	<div>
		<div class="mobile-menu" :class="{mobileAc : menuActive }">
			<div class="cross" @click="menuActive = !menuActive">✕</div>
			<ul @click="menuActive = !menuActive">
					<li><a href="">АРЕНДА ГЕНЕРАТОРОВ</a></li>
					<li><a href="">О КОМПАНИИ</a></li>
					<li><a href="">АРЕНДА МАНИПУЛЯТОРОВ</a></li>
					<li><a href="">УСЛУГИ</a></li>
					<li><a href="">КОНТАКТЫ</a></li>
					<br>
					<li><a href="tel:+79052627002" >+7 905 262-70-02</a></li>
					<li><a href="mailto:mosaika.des@mail.ru">mosaika.des@mail.ru</a></li>
					<br>
					<li><button class="order" @click="openPop()">Отправить заявку</button></li>
			</ul>
		</div>
		<nav>
		<div class="subheader">
			<div class="container">
				<div class="subheader-in">
					<router-link tag="a" to="/">
						<div class="logo">
							<img src="../assets/img/logo.svg" alt="">
						</div>
					</router-link>
					<div class="socials hidden-sm hidden-xs">
						<a :href="social.link" v-for="social in socials">
							<img :src="social.img" alt="">
						</a>
					</div>
					<a href="tel:+79052627002" class="hidden-xs hidden-sm">+7 905 262-70-02</a>
					<a href="mailto:mosaika.des@mail.ru" class="hidden-xs hidden-sm">mosaika.des@mail.ru</a>
					<button class="order hidden-sm hidden-xs" @click="openPop()">Отправить заявку</button>
					<div class="menu-btn order hidden-lg hidden-md" @click="menuActive = !menuActive">МЕНЮ</div>
				</div>
			</div>
		</div>
		<div class="shapka hidden-xs hidden-sm">
			<div class="container">
				<ul>
					<li v-for="nav in navigation">
						<router-link tag="a" :to="nav.link" active-class="aLink">{{nav.title}}</router-link>
					</li>
					<!-- <li><a href="">АРЕНДА ГЕНЕРАТОРОВ</a></li>
					<li><a href="">О КОМПАНИИ</a></li>
					<li><a href="">АРЕНДА МАНИПУЛЯТОРОВ</a></li>
					<li><a href="">УСЛУГИ</a></li>
					<li><a href="">КОНТАКТЫ</a></li> -->
				</ul>
			</div>
		</div>
	</nav>
	</div>
</template>

<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('geners', ['socials']),
	},
	data(){
		return{
			menuActive: false,
			navigation: [
				{
					title: 'АРЕНДА ГЕНЕРАТОРОВ',
					link: '/generators'
				},
				{
					title: 'О КОМПАНИИ',
					link: '/about'
				},
				{
					title: 'АРЕНДА МАНИПУЛЯТОРОВ',
					link: '/manipulator'
				},
				{
					title: 'УСЛУГИ',
					link: '/services'
				},
				{
					title: 'КОНТАКТЫ',
					link: '/contacts'
				},
			]
				
		}
	},
	methods: {
		openPop(){
			this.$store.dispatch('geners/openPop')
		}
	}
}
</script>

<style scoped>
.cross{
	position: absolute;
	top: 5px;
	right: 10px;
	color: #fff;
	font-weight: 400;
	font-size: 28px;
	color: #fff;
	cursor: pointer;
}
.mobile-menu{
	position: fixed;
	background-color: rgba(0,0,0, .8);
	top: 0;
	left: -80%;
	z-index: 20;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	-webkit-backdrop-filter: saturate(180%) blur(5px);
    backdrop-filter: saturate(180%) blur(5px);
    transition: all .3s ease;
}
.mobileAc{
	left: 0;
}
.mobile-menu ul{
	display: block;
}
.mobile-menu li{
	padding:0;
	margin-bottom: 10px;
	text-align: left;
}
.mobile-menu a{
	padding:0;
	color: #fff;
}
.logo{	
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	color: #00337E;
}
.logo img{
	height: 60px;
}
ul{
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
ul a{
	font-size: 16px;
	color: #000;
	font-weight: 500;
	padding:27px 22px;
	transition: all .3s ease;
}
ul a:hover{
	background-color: #00337E;
	color: #fff;
}
li{
	padding:25px 22px;
}
.aLink{
	background-color: #00337E;
	color: #fff;
}
.shapka{
	background-color: #ECECEC;
}
.subheader{
	background-color: #fff;
	padding: 17px 0;
}	
.subheader a{
	font-size: 16px;
	color: #000;
	font-weight: 500;
}
.subheader-in{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>