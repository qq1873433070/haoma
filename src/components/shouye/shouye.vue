<template>
	<div style="width: 89%;height: 100%;border: 1px solid #E4E4E4;">
		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 30px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">绩效设置</div>
			</div>
		</div>

		<div style="height: 90%;width: 100%;background-color: #F9F9F9;margin-top: 10px;">
			<div style="width: 95%;height: 200px;background-color: white;margin: 0 auto;" class="shou">
				<div style="height: 20%;background-color: #F3F3F3;font-size: 12px;line-height: 40px;">
					<div style="margin-left: 10px;">数据总览</div>
					<i class="el-icon-question" style="color: orange;margin-top: 12px;font-size: 16px;"></i>
					<select style="width: 100px;background-color: white;height: 30px;border: none;line-height: 30px;margin-top: 4px;margin-left: 1100px;border: 1px solid #F3F3F3;">
						<option>在线</option>
						<option>离线</option>

					</select>
				</div>
				<div>
					<img style="width: 100%;margin-top: 10px;" src="../../../public/img/zp2.png" />
				</div>
			</div>

			<div style="width: 95%;height: 400px;background-color: white;margin: 0 auto;margin-top: 10px;" class="shou">
				<div style="height: 10%;background-color: #F3F3F3;font-size: 12px;line-height: 40px;">
					<div style="margin-left: 10px;">在线服务数据趋势</div>

				</div>
				<div>
					<div id="myChart" :style="{width: '1400px', height: '300px'}"></div>
				</div>
			</div>

			<div style="width: 95%;height: 650px;background-color: white;margin: 0 auto;border: 1px solid #E4E4E4;margin-top: 20px;"
			 class="">
				<div style="height: 6%;background-color: #F3F3F3;font-size: 12px;line-height: 40px;">
					<div style="margin-left: 10px;">今日客服行为活动</div>
				</div>

				<div>
					<div class="title">
						<el-select v-model="value5" multiple placeholder="请选择全部在线状态" class="fl">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<div class="demo-input-suffix fl">
							<el-input placeholder="请输入客服名" prefix-icon="el-icon-search" v-model="input21">
							</el-input>
						</div>
						<div class="container_table">
							<el-table border="" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%"
							 :default-sort="{prop: 'date', order: 'descending'}">
								<el-table-column type="selection" width="65">
								</el-table-column>
								<el-table-column prop="appname" label="客服:" width="180">
								</el-table-column>
								<el-table-column prop="apkname" label="在线状态" width="180">
								</el-table-column>
								<el-table-column prop="type" label="当前接待量">
								</el-table-column>
								<el-table-column prop="comp_name" label="累计会话量">
								</el-table-column>
								<el-table-column prop="type_number" label="累计消息量">

								</el-table-column>

								<el-table-column label="相对满意试" prop="xiangdui">

								</el-table-column>
								<el-table-column label="累计在线时间" prop="zaixian">

								</el-table-column>
								<el-table-column label="累计休息时长" prop="shichang">

								</el-table-column>
							</el-table>
							<el-pagination class="fy"  layout="prev, pager, next, jumper" @current-change="current_change" :total="total" >
							</el-pagination>
						</div>
					</div>
				</div>


			</div>

			<div style="margin-top: 30px;text-align: center;">
				<div style="color: #D3D3D3;position: relative;top: -10px;">Copyright © 在线客服管理系统, All Rights Reserved.</div>
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
					label: '在线：支持接待工作'
				}],
				value5: [],
				tableData: [{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						caozuo: '编辑 删除',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'

					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'

					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'

					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
					{
						appname: '李城禧',
						apkname: '在线 (1小时18分)',
						type: '0',
						comp_name: '0',
						type_number: '0',
						xiangdui: '10%',
						zaixian: '1小时18分',
						shichang: '1小时18分'
					},
				]
			};
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({

					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['排队量', '已接入会话量', '未接入会话量', '会话总结']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
							'12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
						]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '排队量',
							type: 'line',
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, ]
						},
						{
							name: '已接入会话量',
							type: 'line',
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310, 210, 220, 182, 191, 234, 290, 330, 310, 210, 220, 182, 191, 234,
								290, 330, 310, 210,
							]
						},
						{
							name: '未接入会话量',
							type: 'line',
							stack: '总量',
							data: [150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 310, 210, 220, 182, 191, 234, 290,
								330, 310, 210,
							]
						},
						{
							name: '会话总结',
							type: 'line',
							stack: '总量',
							data: [320, 332, 301, 334, 390, 330, 320, 220, 182, 191, 234, 290, 330, 310, 210, 220, 182, 191, 234, 290,
								330, 310, 210,
							]
						}
					]
				});
			},
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
		}
	}
</script>

<style scoped="scoped">
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;

		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.shou div {
		display: flex;
	}

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
