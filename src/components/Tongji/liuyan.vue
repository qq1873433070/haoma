<template>
	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">留言统计</div>
			</div>
		</div>

		<div style="height: 200px;width: 100%;background-color: #F9F9F9;">
			<div style="width: 80%;margin: 0 auto;height: 1000px;background-color: white;margin-top: 10px;border: 1px solid #E4E4E4;">
				<div style="height: 4%;background-color: #F3F3F3;width: 100%;border: 1px solid #E4E4E4;display: flex;">
					<div style="line-height: 40px;margin-left: 20px;">客服数据表</div>
					<div style="margin-left: 390px;line-height: 40px;">
						<div class="demo-input-suffix fl">
							<div class="block">

								<el-date-picker size="mini" v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
								</el-date-picker>
							</div>
						</div>
						<div class="demo-input-suffix fl" style="line-height: 30px;">
							<div style="margin-top: 5px;" class="tab">
								<el-tabs style="" v-model="activeName" type="card" @tab-click="handleClick">
									<el-tab-pane style="" label="昨天" name="first">
										<div style="width: 200px;height: 100px;border: 1px solid #D3D3D3;text-align: center;">
											<div style="margin-top: 20px;">留言总数</div>
											<div>200</div>
										</div>

									</el-tab-pane>
									<el-tab-pane label="最近7天" name="second">最近7天</el-tab-pane>
									<el-tab-pane label="最近30天" name="third">最近30天</el-tab-pane>

								</el-tabs>

							</div>
						</div>


						<div class="demo-input-suffix fl">
							<el-button size="mini" plain>导出数据</el-button>
						</div>
					</div>








				</div>



				<div style="height: 4%;background-color: white;width: 100%;border: 1px solid #E4E4E4;display: flex;margin-top: 150px;">
					<div style="width: 49%;height: 40px;background-color: #F3F3F3;">
						<h4 style="line-height: 40px;margin-left: 10px;">留言来源</h4>

						<div style="margin-top: 30px;">
							<div id="myChart" :style="{width: '550px', height: '300px'}"></div>
						</div>


					</div>

					<div style="width: 49%;height: 40px;background-color: #F3F3F3;margin-left: 21px;">
						<h4 style="line-height: 40px;margin-left: 10px;">留言来源</h4>

						<div style="margin-top: 30px;">
							<div id="myChart2" :style="{width: '550px', height: '300px'}"></div>
						</div>
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
				value3: '',

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
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						left: 10,
						data: ['其他', 'APP', '微信端', 'pc端', '小程序']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 335,
								name: '其他'
							},
							{
								value: 310,
								name: 'APP'
							},
							{
								value: 234,
								name: '微信端'
							},
							{
								value: 135,
								name: 'pc端'
							},
							{
								value: 1548,
								name: '小程序'
							}
						]
					}]
				});
			},
			drawLine2() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart2'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						left: 10,
						
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 735,
								name: '已处理'
							},
							{
								value: 310,
								name: '未处理'
							}
						]
					}]
				});
			},
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

	/deep/.el-tabs--card>.el-tabs__header .el-tabs__nav {
		border: 1px solid #E4E7ED;
		border-bottom: none;
		border-radius: 4px 4px 0 0;
		box-sizing: border-box;
		height: 30px;
		line-height: 30px;
	}

	/deep/.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
		border-bottom-color: #FFF;

	}

	/deep/.el-tabs--card>.el-tabs__header .el-tabs__item {
		border-bottom: 1px solid transparent;

		font-size: 12px;
		line-height: 30px;
	}

	/deep/.el-tabs__content {
		overflow: hidden;
		position: relative;
		right: 500px;
	}
</style>
