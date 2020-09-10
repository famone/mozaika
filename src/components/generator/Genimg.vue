<template>
	<div>
		<img :src="img.img" class="w-100">
	</div>
</template>

<script>
	export default{
		props:{
			img:{
				type: Object,
				required: true
			}
		}
	}
</script>