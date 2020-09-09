<template>



	<div style="width: 90%;height: 100%;border: 1px solid #E4E4E4;">

		<div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
			<div style="display: flex;margin-left: 60px;">
				<div><img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /></div>
				<div style="color: #999999;margin-left: 2px;">快捷设置</div>
			</div>
		</div>

		<div style="height: 90%;width: 91%;background-color: #F9F9F9;text-align: center;margin: 0 auto;">

			<div class="title">
				<el-button icon="el-icon-setting" class="fl">操作</el-button>
				<el-select v-model="value5" multiple placeholder="标记" class="fl">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="value5" multiple placeholder="筛选项" class="fl">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<div class="demo-input-suffix fl">
					<el-input placeholder="请输入APP名称或运营商名称" prefix-icon="el-icon-search" v-model="input21">
					</el-input>
				</div>
				<div class="container_table">
					<el-table border="" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%"
					 :default-sort="{prop: 'date', order: 'descending'}">
						<el-table-column type="selection" width="65">
						</el-table-column>
						<el-table-column prop="appname" label="快捷词:" width="180">
						</el-table-column>
						<el-table-column prop="apkname" label="回复内容" width="180">
						</el-table-column>
						<el-table-column prop="type" label="创建时间">
						</el-table-column>
						<el-table-column prop="comp_name" label="创建人">
						</el-table-column>
						<el-table-column prop="type_number" label="状态">
							
							<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
							</el-switch>
						</el-table-column>
						

						<el-table-column label="操作" prop="caozuo">
							<a style="color: green;">编辑</a> <a style="color: green;">删除</a>
						</el-table-column>
					</el-table>
					<el-pagination class="fy" layout="prev, pager, next" @current-change="current_change" :total="total" background>
					</el-pagination>
				</div>
			</div>
			<div>
				
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
					appname: '',
					apkname: '',
					type: '',
					comp_name: '',
					caozuo: ''

				}]
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
		created() {
			this.axios.get("https://www.fastmock.site/mock/769cf7ee3caa59dbe01229daa9866e6b/api/apifu?name=1")
				.then(gen => {
					this.tableData = gen.data.tableData
					console.log(this.tableData)
				})
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
