<template>
	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 5px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">消息中心</div>
			</div>
		</div>

		<div style="height: 90%;width: 100%;background-color: #F9F9F9;">
			<div class="title">

				<el-button class="fl">未读消息</el-button>
				<el-button class="fl">全部消息</el-button>
				<i style="margin-top: 15px;margin-left: 20px;" class="el-icon-menu">列表</i>
				
				
				
				<div class="container_table">
					<el-table border="" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%"
					 :default-sort="{prop: 'date', order: 'descending'}">
						<el-table-column type="selection" width="65">
						</el-table-column>
						<el-table-column prop="appname" label="消息标题" width="180">
						</el-table-column>
						<el-table-column prop="apkname" label="发布时间" width="180">
						</el-table-column>
						<el-table-column prop="type" label="发布人员">
						</el-table-column>
						<el-table-column prop="type" label="操作">
							<div style="color: green;font-size: 12px;"><a>查看</a> <a>删除</a> </div>
						</el-table-column>

					</el-table>
					<el-pagination class="fy" layout="prev, pager, next,jumper" @current-change="current_change" :total="total" background>
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'list11',
		data() {
			return {
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
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex === 0) {
					return 'th';
				}
				return '';
			},
			switchChange() {
				this.istag = !this.istag;

			},
			created: function() {
				this.total = this.tableData.length;
			},
			current_change: function(currentPage) {
				this.currentPage = currentPage;
			}
		},
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
