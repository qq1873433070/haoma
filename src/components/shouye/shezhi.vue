<template>
	<div style="width: 90%;height: 1000px;border: 1px solid #E4E4E4;">

		<div style="height: 5%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 0px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">个人信息设置</div>
			</div>
		</div>

		<div style="height: 90%;background-color: white;text-align: center;display: flex;margin-top: 100px;">




			<div style="line-height: 48px;width: 100px;" class="di2">
				<div>
					<span style="color: red;">*</span>
					<span>账号:</span>
				</div>
				<div>
					<span style="color: red;">*</span>
					<span>手机号:</span>
				</div>
				<div>
					<span style="color: red;">*</span>
					<span>邮箱:</span>
				</div>
				<div>
					<span style="color: red;">*</span>
					<span>昵称:</span>
				</div>
				<div>
					<span style="color: red;">*</span>
					<span>旧密码：</span>
				</div>
				<div>
					<span style="color: red;">*</span>
					<span>新密码：</span>
				</div>
				<div>
					<span style="color: red;">*</span>
					<span>确认密码：</span>
				</div>
			</div>

			<div style="line-height: 10px;">

				<el-input placeholder="李城禧" v-model="input" :disabled="true">
				</el-input>
				<el-input placeholder="159****5311" v-model="input" clearable>
				</el-input>
				<el-input placeholder="754267399@qq.com" v-model="input" clearable>
				</el-input>
				<el-input placeholder="符号" v-model="input" clearable>
				</el-input>
				<el-input placeholder="" v-model="input" show-password></el-input>
				<el-input placeholder="" v-model="input" show-password></el-input>
				<el-input placeholder="" v-model="input" show-password></el-input>
			</div>


		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: ''
			}
		}
	}
</script>

<style scoped="scoped">
	/deep/.el-input__inner {
		-webkit-appearance: none;
		background-color: #FFF;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #DCDFE6;
		box-sizing: border-box;
		color: #606266;
		display: inline-block;
		font-size: inherit;
		height: 40px;
		line-height: 40px;
		outline: 0;
		padding: 0 15px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		width: 20%;
		
	}
	.di2 div{
		position: relative;
		left: 500px;
	}
	.el-input {
	    position: relative;
	    font-size: 14px;
	    display: inline-block;
	    width: 100%;
		line-height: 48px;
	}
</style>
