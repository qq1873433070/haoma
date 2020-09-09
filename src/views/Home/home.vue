<template>
	<div class="Home">
		<div class="dc-flex text-size-01 jc-between" style="padding: 10px ;" :style="{'background': bgColor}">
			<div class="dc-flex alit-center">
				<img src="../../assets/login/4.png" width="30px" />
				<div style="margin-left: 10px;" class="text-white text-weight">
					WEB在线客服管理系统
				</div>
			</div>
			<div class="dc-flex rightIco">
				<div>
					<el-popover placement="bottom" width="200" trigger="hover">
						<div style="font-size: 12px;">
							<div class="dc-flex jc-between user">
								<div>账户信息</div>
								<div style="color:#30C2A5;">账户设置</div>
							</div>
							<ul>
								<li>所在部门：客服部</li>
								<li>本次登陆：{{ Time | newTime }}</li>
								<li>登陆地区：湖南省岳阳市(IP:127.0.0.0.1)</li>
								<li>上次登录：{{ beforeTime | newTime }}</li>
							</ul>
						</div>
						<div slot="reference" style="cursor: pointer;">李城禧</div>
					</el-popover>
				</div>
				<div>|</div>
				<div>
					<el-popover placement="bottom" width="50" trigger="hover">
						<div style="font-size: 12px;">
							<div class="text-center marTb-len-1 Cur Hover">
								离线
							</div>
							<div class="text-center marTb-len-1 Cur Hover">
								休息
							</div>
						</div>
						<div slot="reference" style="cursor: pointer;">在线</div>
					</el-popover>
				</div>
				<div>|</div>
				<div>

					<el-popover placement="bottom" width="350" trigger="hover">
						<div style="font-size: 12px;">
							<div>
								<van-cell-group>
									<van-cell title="消息公告" />
									<div class="cell-hover">
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
										<van-cell title="客服绩效评定规则说明!" value="04-28" />
									</div>
								</van-cell-group>
							</div>
						</div>
						<div slot="reference" style="cursor: pointer;">
							<el-badge :value="50" class="item">
								<i class="el-icon-s-comment"></i>
							</el-badge>
						</div>
					</el-popover>


				</div>
				<div>|</div>
				<div>
					<el-popover placement="bottom" width="280" trigger="hover">
						<div style="font-size: 12px;">
							<div class="dc-flex flex-wrap">
								<div class="Box" :style="{'background' : item['color']}" v-for='(item,index) in bgColorLists' :key='index'
								 @click="replace(item['color'])">
									<span>
										{{ item['title'] }}
									</span>
								</div>
							</div>
						</div>
						<div slot="reference" style="cursor: pointer;">
							<i class="el-icon-set-up"></i>
						</div>
					</el-popover>

				</div>
				<div>|</div>
				<div>
					<i class="el-icon-switch-button" @click="dialogVisible = true"></i>
				</div>
			</div>
		</div>

		<el-dialog title="退出确认" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>确定要退出登录么？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="exit">确 定</el-button>
			</span>
		</el-dialog>





		<div style="display: flex;">
			<van-sidebar v-model="activeKey">
				<van-sidebar-item title="首页" to="/home/shouye" />
				<van-sidebar-item title="统计" to="/home/zonglan" />
				<van-sidebar-item title="客服" to="/home/liebiao" />
				<van-sidebar-item title="历史" to="/home/lishiliebiao" />
				<van-sidebar-item title="客户" to="/home/kehuliebiao" />
				<van-sidebar-item title="公告" to="/home/gonggaoliebiao" />
				<van-sidebar-item title="知识" to="/home/zhishiliebiao" />
				
				
				<van-sidebar-item title="设置" to="/home/kuaijie" />
			</van-sidebar>

			<div v-show="activeKey==0">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-menu-item index="2" disabled>
							<span slot="title" style="padding-left: -10px;">系统首页</span>
						</el-menu-item>
						<el-menu-item index="/home/shouye">
							<span slot="title" style="padding-left: -10px;">系统首页</span>
						</el-menu-item>
						<el-menu-item index="/home/shezhi">
							<span slot="title" style="padding-left: -10px;">个人设置</span>
						</el-menu-item>
						<el-menu-item index="/home/xiaoxi">
							<span slot="title" style="padding-left: -10px;">消息中心</span>
						</el-menu-item>
						<el-menu-item index="/home/rizhi">
							<span slot="title" style="padding-left: -10px;">登陆日志</span>
						</el-menu-item>

					</el-menu>
				</el-col>
			</div>


			<div v-show="activeKey==1">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="2" disabled>

							<span slot="title" style="padding-left: -10px;">统计分析</span>
						</el-menu-item>
						<el-menu-item index="/home/zonglan">

							<span slot="title" style="padding-left: -10px;">总览统计</span>
						</el-menu-item>
						<el-menu-item index="/home/kefu">
							<span slot="title" style="padding-left: -10px;">客服统计</span>
						</el-menu-item>
						<el-menu-item index="/home/liuyan">

							<span slot="title" style="padding-left: -10px;">留言统计</span>
						</el-menu-item>
						<el-menu-item index="/home/jiqiren">

							<span slot="title" style="padding-left: -10px;">机器人统计</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</div>

			<div v-show="activeKey==2">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="2" disabled>

							<span slot="title" style="padding-left: -10px;">系统管理</span>
						</el-menu-item>
						<el-menu-item index="/home/liebiao">

							<span slot="title" style="padding-left: -10px;">客服列表</span>
						</el-menu-item>
						<el-menu-item index="/home/xiaozu">
						
							<span slot="title" style="padding-left: -10px;">小组列表</span>
						</el-menu-item>

					</el-menu>
				</el-col>
			</div>

			<div v-show="activeKey==3">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="2" disabled>

							<span slot="title" style="padding-left: -10px;">历史管理</span>
						</el-menu-item>
						<el-menu-item index="/home/lishiliebiao">

							<span slot="title" style="padding-left: -10px;">历史列表</span>
						</el-menu-item>

					</el-menu>
				</el-col>
			</div>

			<div v-show="activeKey==4">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="2" disabled>

							<span slot="title" style="padding-left: -10px;">客户管理</span>
						</el-menu-item>
						<el-menu-item index="/home/kehuliebiao">

							<span slot="title" style="padding-left: -10px;">客户列表</span>
						</el-menu-item>

					</el-menu>
				</el-col>
			</div>

			<div v-show="activeKey==5">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="2" disabled>

							<span slot="title" style="padding-left: -10px;">公告管理</span>
						</el-menu-item>
						<el-menu-item index="/home/gonggaoliebiao">

							<span slot="title" style="padding-left: -10px;">公告列表</span>
						</el-menu-item>

					</el-menu>
				</el-col>
			</div>

			<div v-show="activeKey==6">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="/home/zhishiliebiao" disabled>

							<span slot="title" style="padding-left: -10px;">知识管理</span>
						</el-menu-item>
						<el-menu-item index="/home/zhishiliebiao">

							<span slot="title" style="padding-left: -10px;">知识列表</span>
						</el-menu-item>
						<el-menu-item index="/home/fabu">

							<span slot="title" style="padding-left: -10px;">发布知识</span>
						</el-menu-item>
						<el-menu-item index="/home/fenlei">

							<span slot="title" style="padding-left: -10px;">分类管理</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</div>



			<div v-show="activeKey==7">
				<el-col :span="12">

					<el-menu default-active="$router.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

						<el-menu-item index="/home/jixiao" disabled>

							<span slot="title" style="padding-left: -10px;">客服设置</span>
						</el-menu-item>
						<el-menu-item index="/home/kuaijie">

							<span slot="title" style="padding-left: -10px;">快捷设置</span>
						</el-menu-item>
						<el-menu-item index="/home/jixiao">

							<span slot="title" style="padding-left: -10px;">绩效设置</span>
						</el-menu-item>
						<el-menu-item index="/home/zhandian">
							<span slot="title" style="padding-left: -10px;">站点设置</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</div>

			<router-view></router-view>


		</div>


	</div>
</template>

<script>
	import {
		Cell,
		CellGroup,
		Sidebar,
		SidebarItem

	} from 'vant';
	export default {
		components: {
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Sidebar.name]: Sidebar,
			[SidebarItem.name]: SidebarItem
		},
		data() {
			return {
				dialogVisible: false,
				bgColor: '#30C2A5',
				beforeTime: '',
				// tabPosition: 'left',
				active: 2,
				activeKey: 0,
				Time: '',
				bgColorLists: [{
					color: '#30C2A5',
					title: '点击换肤'
				}, {
					color: '#3498DB',
					title: '点击换肤'
				}, {
					color: '#ED6E4D',
					title: '点击换肤'
				}, {
					color: '#FABB3D',
					title: '点击换肤'
				}, {
					color: '#AA7AB3',
					title: '点击换肤'
				}, {
					color: '#9AD0B9',
					title: '点击换肤'
				}, {
					color: '#EA94BE',
					title: '点击换肤'
				}, {
					color: '#C1374A',
					title: '点击换肤'
				}]
			}
		},
		filters: {
			newTime(val) {

				function parseDate(date) {
					return date < 10 ? '0' + date : date
				}
				val = new Date(val)
				let year = val.getFullYear(),
					month = val.getMonth() + 1,
					day = val.getDate(),
					HH = parseDate(val.getHours()),
					MM = parseDate(val.getMinutes()),
					SS = parseDate(val.getSeconds());
				return year + '-' + month + '-' + day + '   ' + HH + ':' + MM + ':' + SS
			}
		},
		created() {
			
			let userObj = JSON.parse(window.sessionStorage.userObj),
				beforeTime = window.sessionStorage.beforeTime;
			this.Time = userObj['Time'];
			this.beforeTime = JSON.parse(beforeTime)
		},
		methods: {
			replace(color) {
				this.bgColor = color
			},
			exit() {
				let beforeTime = this.Time;

				this.dialogVisible = false
				window.sessionStorage.beforeTime = JSON.stringify(beforeTime)
				sessionStorage.clear()
				this.$router.push('/login')
				
			},
			handleClose(done) {
				MessageBox.confirm('确认关闭？')
					.then(() => {
						done();
					})
					.catch(() => {});
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped="">
	.rightIco>div {
		margin: 0 10px;
		color: white;
	}

	.rightIco>div i {
		font-size: 20px;
	}

	.user {
		border-bottom: 1px solid lightgray;
		padding-bottom: 5px;
		font-size: 12px;
	}

	.cell-hover>div:hover {
		color: #30C2A5;
	}

	.cell-hover>div {
		cursor: pointer;
	}

	.Hover:hover {
		color: #30C2A5;
	}

	.Box {
		width: 50px;
		height: 50px;
		margin: 5px;
		padding: 5px;
		text-align: center;
		line-height: 50px;
		color: white;
	}

	.Box:hover span {
		opacity: 1;
	}

	.Box span {
		opacity: 0;
		cursor: pointer;
	}

	.el-menu {
		border-right: solid 1px #e6e6e6;
		list-style: none;
		position: relative;
		margin: 0;
		padding-left: 0;
		background-color: #FFF;
		width: 120px;
		height: 1000px;

	}



	.el-menu-item {
		font-size: 10px;
		color: #303133;
		padding: 0 60px;
		cursor: pointer;
		transition: border-color .3s, background-color .3s, color .3s;
		box-sizing: border-box;
		text-align: center;
	}

	.van-sidebar-item {
		position: relative;
		display: block;
		box-sizing: border-box;
		padding: 20px 12px;
		overflow: hidden;
		color: white;
		font-size: 12px;
		line-height: 20px;
		word-wrap: break-word;
		background-color: #464C5B;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
	}

	.van-sidebar-item--select {
		color: white;
		font-weight: 500;
	}

	/deep/.van-sidebar {
		width: 60px;
		overflow-y: auto;
		background-color: #464C5B;
		-webkit-overflow-scrolling: touch;
	}

	.el-menu[data-v-6997abc5] {
		border-right: solid 1px #e6e6e6;
		list-style: none;
		position: relative;
		margin: 0;
		padding-left: 0;
		background-color: #EAEDF1;
		width: 90px;
		height: 1700px;
	}
	.el-menu-item[data-v-6997abc5] {
	    font-size: 10px;
	    color: #303133;
	    padding: 0 60px;
	    cursor: pointer;
	    transition: border-color .3s, background-color .3s, color .3s;
	    box-sizing: border-box;
	    text-align: center;
	    border: 1px solid #E4E4E4;
	}
</style>
<style>
	.el-popover {
		min-width: 50px;
	}
</style>
