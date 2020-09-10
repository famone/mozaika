<template>
	<div class="prlder" :class="{activate: activate}">
		<img src="../assets/img/preloader.svg" alt="">
	</div>
</template>

<script>
	export default{
		props: {
			activate: {
				type: Boolean,
				required: true 

			}
		}
	}
</script>