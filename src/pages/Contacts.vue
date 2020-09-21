<template>
	<section id="contacts">
		<div id="map"></div> 
		<div class="container">
			<div class="row">
				<div class="col-lg-4 ">
					<div class="cont-box text-center">
						<div class="icon-circle">
							<img src="../assets/img/marker.svg" alt="">
						</div>
						<h3>ООО "МОЗАЙКА ДЭС”</h3>
						<h3>ИНН: 7807164585</h3>
						<h3>Санкт-Петербург,
										ул. Летчика Пилютова,
										д 11, корпус 1 литер а, офис 12-н
									</h3>

					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 ">
					<div class="cont-box text-center">
						<div class="icon-circle">
							<img src="../assets/img/tel.svg" alt="">
						</div>
						<a href="tel:+79052627002"><h3>+7 905 262-70-02</h3></a>
						<a href="tel:+79650331799"><h3>+7 965 033-17-99</h3></a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 ">
					<div class="cont-box text-center">
						<div class="icon-circle">
							<img src="../assets/img/mail.svg" alt="">
						</div>
						<a href="mailto:mozaika.des@mail.ru"><h3>mozaika.des@mail.ru</h3></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
// import { yandexMap, ymapMarker } from 'vue-yandex-maps'

	export default {
		methods: {
			yaMapInit2() { 
				var myMap2 = new ymaps.Map("map", {
		            center: [59.842068, 30.125252],
		            zoom: 14,
		            controls: []

		        });

		        myMap2.behaviors.disable('scrollZoom');


		        myMap2.geoObjects.add(new ymaps.Placemark([59.841889, 30.140643], {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            iconLayout: 'default#image',
		            iconImageHref: 'https://image.flaticon.com/icons/svg/787/787433.svg',
		            iconImageSize: [50, 50],
		        
		        }));

			}
		},
		created() { 
			const script = document.createElement('script')

			script.onload = () => {
			ymaps.ready(() => this.yaMapInit2());

			};

			script.id = 'ymaps'
			script.src = "https://api-maps.yandex.ru/2.1/?apikey=8c4059db-3b8d-4535-a15e-569ee80fc827&lang=ru_RU"
			document.head.append(script);
		}
};
</script>

<style>
#map{
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
}	
[class*="ymaps-2"][class*="-ground-pane"] {
filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
/* Firefox 3.5+ */
-webkit-filter: grayscale(100%);
/* Chrome 19+ & Safari 6+ */
}
</style>