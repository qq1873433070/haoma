<template>
	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 15%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">总览统计</div>
			</div>
		</div>

		<div style="height: 90%;width: 100%;background-color: white;">
			<div style="width: 95%;height: 200px;background-color: white;margin: 0 auto;margin-top: 10px;border: 1px solid #F3F3F3;"
			 class="shou">
				<div style="height: 20%;background-color: #F3F3F3;font-size: 12px;line-height: 40px;display: flex;">

					<div style="margin-left: 10px;width: 140px;">在线客户数据</div>
					<i class="el-icon-question" style="color: orange;margin-top: 12px;font-size: 16px;"></i>


					<el-button plain>导出数据</el-button>

					<el-tabs type="border-card" style="border: none;">
						<el-tab-pane label="昨天">
							<img style="width: 100%;" src="../../../public/img/zp2.png">
						</el-tab-pane>
						<el-tab-pane label="最近7天"><img style="width: 100%;height: 100;" src="../../../public/img/zp2.png"></el-tab-pane>
						<el-tab-pane label="最近30天"><img style="width: 100%;height: 100;" src="../../../public/img/zp2.png"></el-tab-pane>

					</el-tabs>
					<div class="block">

						<el-date-picker v-model="value1" type="date" placeholder="选择日期">
						</el-date-picker>
					</div>

				</div>


			</div>
			<div style="width: 95%;height: 400px;background-color: white;margin: 0 auto;margin-top: 10px;" class="shou">
				<div style="height: 10%;background-color: #F3F3F3;font-size: 12px;line-height: 40px;display: flex;">
					<div style="margin-left: 10px;">会话量</div>
					<i class="el-icon-question" style="color: orange;margin-top: 12px;font-size: 16px;"></i>

				</div>
				<div>
					<div id="myChart" :style="{width: '1300px', height: '300px'}"></div>
				</div>
			</div>
			<div style="width: 95%;height: 400px;background-color: white;margin: 0 auto;margin-top: 10px;" class="shou">
				<div style="height: 10%;background-color: #F3F3F3;font-size: 12px;line-height: 40px;display: flex;">
					<div style="margin-left: 10px;">消息量</div>
					<i class="el-icon-question" style="color: orange;margin-top: 12px;font-size: 16px;"></i>
			
				</div>
				<div>
					<div id="myChart2" :style="{width: '1300px', height: '300px'}"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value2: '',

			};
		},
		mounted() {
			this.drawLine();
			this.drawLine2();
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
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
			drawLine2() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart2'))
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
			}



		}
	};
</script>

<style scoped="scoped">
	.fl {
		float: right;
		margin-right: 20px;
	}

	/deep/.el-tabs--border-card {
		background: #FFF;
		border: none;
		/* border: 1px solid #DCDFE6; */
		/* box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04); */
	}

	/deep/.el-tabs--border-card>.el-tabs__content {}

	/deep/.el-tabs--border-card>.el-tabs__header {
		background-color: #F5F7FA;
		/* border-bottom: 1px solid #E4E7ED; */

	}

	/deep/.el-tabs--border-card {
		background: #FFF;

		/* box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04); */
	}

	/deep/.el-tabs__item {
		padding: 0 20px;
		height: 30px;
		box-sizing: border-box;
		line-height: 30px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		font-weight: 500;
		color: #303133;
		position: relative;
		top: 0px;

	}

	.el-tabs--border-card {
		/* background: #FFF; */
		/* border: 1px solid #DCDFE6; */
		box-shadow: none;
	}

	/deep/.el-tabs__nav {
		white-space: nowrap;
		position: relative;
		transition: transform .3s;
		float: left;
		z-index: 2;
		left: 500px;
	}

	/deep/.el-tabs__content {
		width: 123%;
		position: relative;
		right: 103px;
	}
</style>
