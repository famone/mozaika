<template>
	<div>
		<section>
			<div class="container">
				<div class="col-lg-12 text-center">
					<h2>О компании</h2>
				</div>
			</div>
		</section>
		<appMore></appMore>
		<appAdvantages></appAdvantages>
		<appUsefull></appUsefull>
	</div>
</template>

<script>
import Advantages from '../components/Advantages.vue'
import More from '../components/More.vue'
import Usefull from '../components/Usefull.vue'

export default{
	components: {
		'appAdvantages': Advantages,
		'appMore': More,
		'appUsefull': Usefull
	}
}
</script>