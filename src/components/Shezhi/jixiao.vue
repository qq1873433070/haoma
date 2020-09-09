<template>
	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">绩效设置</div>
			</div>
		</div>

		<div style="height: 90%;width: 100%;background-color: #F9F9F9;">
			<el-table :data="api" height="250" border style="width: 100%">
				<el-table-column prop="QuestionId" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="Title" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="Content" label="姓名" width="180">
				</el-table-column>

				<el-table-column prop="Prize" label="日期" width="180">
				</el-table-column>

				<el-table-column prop="CreateUserId" label="地址">
				</el-table-column>
				<el-table-column prop="CreateUserName" label="地址">
				</el-table-column>
				<el-table-column prop="CreatedTime" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="VisitCount" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="State" label="地址">
				</el-table-column>
			</el-table>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			
			return {
				api: [{
					"QuestionId": '',
					"Title": '',
					"Content": '',
					"Prize": '',
					"CreateUserId": '',
					"CreateUserName": '',
					"CreatedTime": '',
					"VisitCount": '',
					"State": ''
				}]


			}
		},

		created() {
			this.axios.get("http://47.111.250.151:8081/api/Question/GetQuestion?name=1")
				.then(gen => {
					this.api = gen.data.rows
					console.log(this.api)
				})
		}
	}
</script>

<style>
</style>
