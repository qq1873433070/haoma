<template>
	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">客服统计</div>
			</div>
		</div>

		<div style="height: 90%;width: 100%;background-color: #F9F9F9;">
			<div style="width: 80%;margin: 0 auto;height: 1000px;background-color: white;margin-top: 10px;border: 1px solid #E4E4E4;">
				<div style="height: 4%;background-color: #F3F3F3;width: 100%;border: 1px solid #E4E4E4;">
					<div style="line-height: 40px;margin-left: 20px;">客服数据表</div>
				</div>
				<div style="height: 96%;width: 100%;margin-top: 10px;">
					<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="工作量" name="first">
							<div class="title">
								<div style="font-size: 12px;display: flex;position: relative;top: 10px;" class="f1">
									<div style="margin-left: 10px;" class="f1">消息量</div>
									<i class="el-icon-question" style="color: orange;font-size: 16px;"></i>

								</div>
								<div class="demo-input-suffix fl">

									<el-input size="mini" placeholder="请输入客服名" prefix-icon="el-icon-search" v-model="input21">
									</el-input>
								</div>
								<div class="demo-input-suffix fl" style="line-height: 30px;">
									<div>
										<span>昨天   </span> 
										<span style="color: green;">本周 </span>
										<span>本月</span>
									</div>
								</div>
								
								<div class="demo-input-suffix fl">
									<div class="block">

										<el-date-picker size="mini" v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
										</el-date-picker>
									</div>
								</div>
								<div class="demo-input-suffix fl">
									<el-button size="mini" plain>导出数据</el-button>
								</div>


								<div class="container_table">
									<el-table border="" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%"
									 :default-sort="{prop: 'date', order: 'descending'}">

										<el-table-column prop="appname" label="姓名:" width="60">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="接入会话量" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="未回复会话量" width="140">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="未回复率" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="转接量" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="无效会话量" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="留言处理量" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="登录总时长" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="在线总时长" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="在线时长占" width="120">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="离开总时长" width="120">
										</el-table-column>
										<el-table-column prop="apkname" label="离开起时长占" sortable width="140">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="休息总时长" width="140">
										</el-table-column>
										<el-table-column prop="apkname" sortable label="休息总时长好占比" width="170">
										</el-table-column>


									</el-table>
									<el-pagination class="fy" layout="prev, pager, next,jumper" @current-change="current_change" :total="total"
									 background>
									</el-pagination>
								</div>
							</div>


						</el-tab-pane>
						<el-tab-pane label="工作质量" name="second">工作质量</el-tab-pane>
						<el-tab-pane label="绩效报表" name="fourth">绩效报表</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value3: '',
				activeName: 'first',
				total: 1000, //默认数据总数
				pagesize: 9, //每页的数据条数
				currentPage: 1, //默认开始页面
				istag: true,
				input: "",
				input21: '',
				value: true,
				options: [{
					value: '选项1',
					label: '创建人'
				}],
				value5: [],
				tableData: [{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',
						caozuo: '编辑 删除'

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',


					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',


					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
					{
						appname: '#尽快回复',
						apkname: '这边会尽快给你答复。',
						type: '04-18 20:12',
						comp_name: '李城禧',

					},
				]
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			created: function() {
				this.total = this.tableData.length;
			},
			current_change: function(currentPage) {
				this.currentPage = currentPage;
			}
		}
	};
</script>

<style scoped="scoped">
	.fl {
		float: right;
		margin-right: 20px;
	}

	.fy {
		text-align: center;
		margin-top: 30px;
	}

	.title {
		height: 100%;
	}
</style>
