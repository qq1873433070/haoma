<template>
	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">机器人统计</div>
			</div>
		</div>

		<div style="height: 700px;width: 100%;background-color: white;">

			<div style="border: 1px solid gainsboro; width: 80%;margin: 0 auto;height: 250px;margin-top: 10px;">

				<el-row :gutter="24" style="width: 100%;margin: 0 auto;height: 42px;background-color:#F9F9F9 ;border: 1px solid gainsboro;line-height: 40px;margin-top: 0px;">
					<el-col :span="6">

						<div style="">机器人服务器数据<i class="el-icon-question" style="color: orange;font-size: 16px;"></i></div>

					</el-col>
					<el-col :span="2">
						<el-button size="mini">导出数据</el-button>

					</el-col>
					<el-col :span="8">
						<el-tabs v-model="activeName" style="height: 30px;" type="card" @tab-click="handleClick">
							<el-tab-pane label="用户管理" name="first">




								<el-row type="flex">
									<el-col :span="6">
										<div style="width: 180px;height: 140px;background-color: #F9F9F9;border: 1px solid lightgray; ">
											<div style="width: 100%;height: 79px;background-color: white;border-bottom: 1px solid;text-align: center;font-size: 18px;">
												<div>总会话量</div>
												<div>200</div>
											</div>
											<div style="width: 100%;height: 60px;background-color: white;font-size: 14px;">
												<div>有效会话量 :<span>0</span></div>
												<div style="position: relative;top: -20px;">有效会话量 :<span>0</span></div>
											</div>
										</div>

									</el-col>
									<el-col :span="6">
										<div style="width: 180px;height: 140px;background-color: #F9F9F9;border: 1px solid lightgray; ">
											<div style="width: 100%;height: 79px;background-color: white;border-bottom: 1px solid;text-align: center;font-size: 18px;">
												<div>总会话量</div>
												<div>200</div>
											</div>
											<div style="width: 100%;height: 60px;background-color: white;font-size: 14px;">
												<div>有效会话量 :<span>0</span></div>
												<div style="position: relative;top: -20px;">有效会话量 :<span>0</span></div>
											</div>
										</div>

									</el-col>

									<el-col :span="6">
										<div style="width: 180px;height: 140px;background-color: #F9F9F9;border: 1px solid lightgray; ">
											<div style="width: 100%;height: 79px;background-color: white;border-bottom: 1px solid;text-align: center;font-size: 18px;">
												<div>总会话量</div>
												<div>200</div>
											</div>
											<div style="width: 100%;height: 60px;background-color: white;font-size: 14px;">
												<div>有效会话量 :<span>0</span></div>
												<div style="position: relative;top: -20px;">有效会话量 :<span>0</span></div>
											</div>
										</div>

									</el-col>
									<el-col :span="6">
										<div style="width: 180px;height: 140px;background-color: #F9F9F9;border: 1px solid lightgray; ">
											<div style="width: 100%;height: 79px;background-color: white;border-bottom: 1px solid;text-align: center;font-size: 18px;">
												<div>总会话量</div>
												<div>200</div>
											</div>
											<div style="width: 100%;height: 60px;background-color: white;font-size: 14px;">
												<div>有效会话量 :<span>0</span></div>
												<div style="position: relative;top: -20px;">有效会话量 :<span>0</span></div>
											</div>
										</div>

									</el-col>
								</el-row>

							</el-tab-pane>
							<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
							<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>

						</el-tabs>

					</el-col>
					<el-col :span="5">
						<el-date-picker size="mini" v-model="value1" type="datetime" placeholder="选择日期时间">
						</el-date-picker>
					</el-col>
				</el-row>
			</div>


			<div style="border: 1px solid gainsboro; width: 80%;margin: 0 auto;height: 430px;margin-top: 10px;">

				<div style="width: 100%;margin: 0 auto;height: 42px;background-color:#F9F9F9 ;border-bottom:  1px solid gainsboro;line-height: 40px;">
					<div style="margin-left: 10px;">会话量<i class="el-icon-question" style="color: orange;font-size: 16px;"></i></div>
				</div>

				<div>
					<div>
						<div style="display: flex;position: relative;top: 25px;">
							<div class="a" style="margin-top: 10px;"><a>今日</a><a>本周</a><a>本月</a></div>
							<div class="block">
							
								<el-date-picker size="mini" v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
								</el-date-picker>
							</div>
						</div>
						<div id="myChart" :style="{width: '1000px', height: '300px'}"></div>
					</div>
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
				value1: '',
				value3: ''
			};
		},
		mounted() {
			this.drawLine();
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

		}
	};
</script>

<style scoped="scoped">
	.flexd div {}

	/deep/.el-tabs__content {
		overflow: hidden;
		position: relative;
		width: 1000px;
		right: 310px;

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
	.a a{
		margin-left: 10px;
		
	}
</style>
