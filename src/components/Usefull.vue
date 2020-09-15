<template>
	<section id="info">
		<div class="container">
			<div class="col-lg-12 text-center">
			<h2 class="wow fadeInUp">Полезная информация</h2>
		</div>

		<div class="col-lg-12">
						<swiper ref="mySwiper" :options="swiperOptions" class="slider">
						    <swiper-slide v-for="inf in information">
						    	<div class="inf-box">
						    		<h3>{{inf.title}}</h3>
						    	<p class="grey-txt">{{inf.descr.substring(0,99)+"..."}}</p>

						    	<router-link tag="a" :to="'/info/' + inf.id">
						    		<button class="order">Читать далее</button>
						    	</router-link>
						    	</div>
						    </swiper-slide>
	  					</swiper>
	  					<div class="navigation">
	  						<div class="prevBtn" slot="button-prev"></div>
							<div class="nextBtn" slot="button-next"></div>
	  					</div>
		</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'

export default{
	data(){
		return{
			swiperOptions: {
			        slidesPerView: 2,
			      spaceBetween: 30,
			      draggable: true,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true
			      },
			      breakpoints: {
			        320: {
			          slidesPerView: 1
			        },
			        768: {
			          slidesPerView: 1
			        },
			        1024: {
			          slidesPerView: 2
			        },
			      },
			      loop: true,
			          navigation: {
			            nextEl: '.navigation .nextBtn',
			            prevEl: '.navigation .prevBtn',
			          }
			      }
		}
	},
	computed: {
		swiper(){
	       	return this.$refs.mySwiper.$swiper
	    },
	    ...mapState('geners', ['information']),
	}
}
</script>

<style scoped>
.navigation{
	display: flex;
	margin: 30px 0;
	width: 108%;
	justify-content: space-between;
	transform: translateY(-180px) translateX(-4%);
	z-index: 10;
	position: relative;
}
.prevBtn{
	height:35px;
	width:35px;
	background-color: #00337E;
	cursor: pointer;
	background-image: url(../assets/img/arr.svg);
	background-size: 16px;
	background-position: center;
	background-repeat: no-repeat;
	transform: rotate(-180deg);
	transition: all .3s ease;
}
.prevBtn:hover{
	opacity: .8;
}
.nextBtn{
	height:35px;
	width:35px;
	background-color: #00337E;
	cursor: pointer;
	background-image: url(../assets/img/arr.svg);
	background-size: 16px;
	background-position: center;
	background-repeat: no-repeat;
	transition: all .3s ease;
}
.nextBtn:hover{
	opacity: .8;
}
#info{
	padding-bottom: 40px;
}
.slider .grey-txt{
	text-align: left;
	margin-bottom: 25px;
}	
.slider h3{
	margin-bottom: 25px;
}
.inf-box{
	padding: 35px;
	background-color: #EDEDED;
}	
</style>