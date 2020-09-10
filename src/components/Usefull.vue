<template>
	<section id="info">
		<div class="container">
			<div class="col-lg-12 text-center">
			<h2 class="wow fadeInUp">Полезная информация</h2>
		</div>
		<div class="col-lg-12">
						<swiper ref="mySwiper" :options="swiperOptions" class="slider">
						    <swiper-slide v-for="inf in info">
						    	<div class="inf-box">
						    		<h3>{{inf.title}}</h3>
						    	<p class="grey-txt">{{inf.descr.substring(0,99)+"..."}}</p>
						    	<button class="order">Читать далее</button>
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
export default{
	data(){
		return{
			info: [
				{
					title: 'Принцип работы с дизельными генераторами',
					descr: 'Зная компоненты электростанции, легко представить, как они взаимодействуют друг с другом, обеспечивая на обслуживаемом объекте снабжение электричеством в необходимом объеме.'
				},
				{
					title: 'Устройство дизельных электростанций',
					descr: 'От четкого понимания устройства системы и механизма взаимодействия отдельных ее элементов напрямую зависит правильность эксплуатации конструкции, способность своевременного выявления факта сбоев и отклонений в работе техники.'
				}
			],
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
	    }
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
	z-index: 100;
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