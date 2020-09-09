<template>
	<div>
		<p>
			professionalDesc <input type="text" v-model="ip" />
		</p>
		<p>
			professionalName <input type="text" v-model="ip1" />
		</p>
		<button @click="dianji">编辑</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ip: this.$route.params.cc.professionalDesc,
				ip1: this.$route.params.cc.professionalName
			};
		},
		created() {},
		methods: {
			dianji() {
				let sada = this.$qs.stringify({
					id: this.$route.params.cc.id,
					professionalName: this.ip,
					professionalDesc: this.ip1
				});

				this.axios
					.post("http://139.9.169.87:8081/examsystem/updateProfessional", sada, {
						headers: {
							Accept: "application/json",
							"Content-Type": "application/x-www-form-urlencoded"
						}
					})

					.then(res => {
						console.log(this.inp + "qweqweqwe" + this.inp1);
						console.log(res.data.msg);
						this.$router.push({
							path: "/hoe"
						});
					});
			}
		}
	};
</script>

<style>
</style>
