<template>
	<div class="login" :class="loginBg">
		<div class="btn">
			<el-button @click='bgReplace()'>更换背景</el-button>
		</div>

		<div class="Inp">
			<div>
				<img src="../../assets/login/4.png" />
				<h2>WEB在线客服管理系统</h2>

				<div class="demo-input-suffix" style="">
					<div class="p">
						<el-input placeholder="请输入用户名称" v-model="username">
							<i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
						</el-input>
					</div>
					<div class="p">
						<el-input placeholder="请输入登录密码" v-model="password" type='password'>
							<i slot="prefix" class="el-input__icon el-icon-key"></i>
						</el-input>
					</div>
					<div class="p" style="position: relative;">
						<el-button class="loginBtn" :class="{'loginBtnDH' : loginBol}" type="success" @click='login()'>登录</el-button>
					</div>
				</div>

			</div>
		</div>
		<div class="text-center text-white">
			Copyright © 在线客服管理系统, All Rights Reserved.
		</div>
	</div>
</template>

<script>
	import {
		Notify
	} from 'vant';
	export default {
		data() {
			return {
				username: '',
				password: '',
				bgActive: 0,
				loginBol: false,
				userList: [{
					username: 'admin',
					password: 'admin'
				}]
			}
		},
		computed: {
			loginBg() {
				return {
					'login-bg1': this.bgActive == 0,
					'login-bg2': this.bgActive == 1,
					'login-bg3': this.bgActive == 2
				}
			}
		},

		methods: {
			bgReplace() {
				this.bgActive++
				if (this.bgActive > 2) {
					this.bgActive = 0
				}
			},
			DHTime() {
				this.loginBol = true;
				setTimeout(() => {
					this.loginBol = false
				}, 1000)
			},
			login() {
				if (this.username == '' || this.password == '') {

					Notify({
						type: 'danger',
						message: '账号或密码不能为空!'
					});
					this.DHTime()
					return

				}

				let bol = true;

				for (let i = 0; i < this.userList.length; i++) {
					if (this.username == this.userList[i]['username'] && this.password == this.userList[i]['password']) {
						bol = false;
					}
				}
				if (bol) {
					Notify({
						type: 'warning',
						message: '账号或密码错误!!'
					});

					this.DHTime()
				} else {
					let beforeTime = ''
					if (window.sessionStorage.beforeTime) {
						beforeTime = window.sessionStorage.beforeTime
					}
					let obj = {
						username: this.username,
						password: this.password,
						Time: new Date(),
						beforeTime: beforeTime
					}
					window.sessionStorage.userObj = JSON.stringify(obj);
					this.$router.push('/home')
				}

			}
		}
	}
</script>

<style scoped="">
	.login-bg1 {
		background: url(../../assets/login/1.png);
	}

	.login-bg2 {
		background: url(../../assets/login/2.png);
	}

	.login-bg3 {
		background: url(../../assets/login/3.png);
	}

	.loginBtn {
		position: absolute;
		background: #2EBE9E;
		border: 1px solid #2EBE9E;
		left: 0;
		width: 100%;


	}

	.loginBtnDH {
		animation: ring 1s;
	}

	.login {
		background-repeat: no-repeat;
		width: 100%;
		display: flex;
		background-size: 100% 100%;
		height: 722px;
		flex-direction: column;
	}

	.btn {
		width: 7.2%;
		margin: 0 auto;
		height: 100%;
		position: relative;
		top: 90px;
	}

	.p {
		margin: 10px 0;
	}

	.Inp {
		width: 20%;
		margin: 100px auto;
		text-align: center;
		background: rgba(255, 255, 255, 0.5);
		padding: 90px 25px;
		padding-bottom: 164px;


	}

	.el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #FFF;
		border: 1px solid #DCDFE6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		transition: .1s;
		font-weight: 500;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;

	}
</style>
