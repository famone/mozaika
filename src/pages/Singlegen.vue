<template>
	<div>
		<Bread :title="getGenerators(itemSlug)" />
		<section id="generator">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<button class="go-back" @click="$router.go(-1)">Назад</button>
						<h3>Генераторы мощностью: 
							<img src="../assets/img/light.svg" alt="">
							{{getGenerators(itemSlug).name}}
						</h3>
						<br>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-4">
						<Genimg :img="getGenerators(itemSlug)"/>
					</div>
					<div class="col-lg-8 col-sm-8">
						<Table :table="getGenerators(itemSlug)" />
					</div>
				</div>
				<Config :checkItem="getGenerators(itemSlug)"/> 
			</div>
		</section>
		<More />
		<Advantages />

	</div>
</template>




<script>
import {mapGetters} from 'vuex'
import Bread from '../components/generator/Bread.vue'
import Genimg from '../components/generator/Genimg.vue'
import Advantages from '../components/Advantages.vue'
import More from '../components/More.vue'
import Table from '../components/generator/Table.vue'
import Config from '../components/generator/Config.vue'

export default{
	components: { Bread, Genimg, Advantages, More, Table, Config },
	data(){
		return{
			itemSlug: '',
		}
	},
	computed: {
   		...mapGetters('geners', ['getGenerators']),
	},
	created(){
		this.itemSlug = this.$route.params.id
		console.log(this.getGenerators(this.itemSlug))
		// if(this.getGenerators(this.itemSlug) === undefined){
		// 	this.$router.push('/404')
		// }
	}
}
</script>