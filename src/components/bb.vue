<template>
	<div>
		<p>
			professionalDesc <input type="text" v-model="inp" />
		</p>
		<p>
			professionalName <input type="text" v-model="inp1" />
		</p>
		<button @click="adds()">新增</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: 19,
				inp: "",
				inp1: ""
			};
		},
		methods: {
			adds() {
				let sada = this.$qs.stringify({
					professionalName: this.inp,
					professionalDesc: this.inp1
				});
				this.$http
					.post("http://139.9.169.87:8081/examsystem/addProfessional", sada, {
						headers: {
							Accept: "application/json",
							"Content-Type": "application/x-www-form-urlencoded"
						}
					})

					.then(res => {
						console.log(this.inp + "qweqweqwe" + this.inp1);
						console.log(res.data.msg);
						this.$router.push({
							path: "/Home/director"
						});
					});
			}
		}
	};
</script>

<style>
</style>
