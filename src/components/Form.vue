<template>

	<div class="pop" v-if="formPop">
		<div class="pop-box">
			<div class="cross" @click="openPop()">✕</div>
			<h3 class="text-center">Отправить заявку</h3>
			<form action="">
				<label for="">Ваше имя</label>
				<input type="text" placeholder="Введите имя" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}">
				<label for="">Ваш телефон</label>
				<input type="text" placeholder="Введите телефон" v-model="telephone" 
				:class="{errorInp : ($v.telephone.$dirty && !$v.telephone.required) || ($v.telephone.$dirty && !$v.telephone.minLength)}" v-mask="'+7 (###) ###-##-##'">
				<div class="text-center">
					<button class="order" @click.prevent="submitForm()">Отправить</button>
					<div class="submited text-center" v-if="submited">
						<img src="../assets/img/checkmark.svg" alt="">
						<p>Ваша заявка успешно отправлена</p>
					</div>
				</div>
			</form>
		</div>
	</div>
</template> 

<script>
import {mapState} from 'vuex'
import { required, minLength } from "vuelidate/lib/validators";
import axios from 'axios'

export default{
	data(){
		return{
			name: '',
			telephone: '',
			url: 'https://moz.webink.site/wp-json/contact-form-7/v1/contact-forms/20/feedback',
			submited: false
		}
	},
	validations: {
			name: {
				required
			},
			telephone: {
				required,
				minLength: minLength(18)
			}
		},
	computed: {
		...mapState('geners', ['formPop']),
	},
	methods: {
		openPop(){
			this.$store.dispatch('geners/openPop')
		},
		submitForm(){
			if(this.$v.$invalid) {
					this.$v.$touch();
					return;
			}

			let emailBody = {
				your_name: this.name,
				your_phone: this.telephone
			}

			var form2 = new FormData();

			for (var field in emailBody){
				form2.append(field, emailBody[field]);
			};

			axios
            	.post(this.url, form2)
                .then((response) => {
                    console.log(response);
                    this.submited = true;
      
                })
                .catch((error) => {
                    this.errors = error.response.data
                });
        	
		}
	}
}
</script>

<style>
.errorInp{
	border: 1px red solid!important;
}
</style>