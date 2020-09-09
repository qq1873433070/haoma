export default [{
	path: '/',
	redirect: '/login'
}, {
	path: '/login',
	name: 'login',
	component: () => import('@/views/login/login')
}, {
	path: '/home',
	component: () => import('@/views/Home/home'),
	meta: {
		auth: true
	},
	children: [{
			path: 'shouye',
			component: () => import('@/components/shouye/shouye'),
			meta: {
				auth: true
			},
		},
		{
			path: 'shezhi',
			component: () => import('@/components/shouye/shezhi'),
			meta: {
				auth: true
			},
		},
		{
			path: 'xiaoxi',
			component: () => import('@/components/shouye/xiaoxi'),
			meta: {
				auth: true
			},
		},
		{
			path: 'rizhi',
			component: () => import('@/components/shouye/rizhi'),
			meta: {
				auth: true
			},
			
		},
		{
			path: 'zonglan',
			component: () => import('@/components/Tongji/zonglan'),
			meta: {
				auth: true
			},
		},
		{
			path: 'kefu',
			component: () => import('@/components/Tongji/kefu'),
			meta: {
				auth: true
			},
		},
		{
			path: 'liuyan',
			component: () => import('@/components/Tongji/liuyan'),
			meta: {
				auth: true
			},
		},
		{
			path: 'jiqiren',
			component: () => import('@/components/Tongji/jiqiren'),
			meta: {
				auth: true
			},
		},
		{
			path: 'liebiao',
			component: () => import('@/components/Kefu/liebiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'lishiliebiao',
			component: () => import('@/components/Lishi/lishiliebiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'liebiao',
			component: () => import('@/components/Kefu/liebiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'kehuliebiao',
			component: () => import('@/components/Kehu/kehuliebiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'gonggaoliebiao',
			component: () => import('@/components/Gongao/gonggaoliebiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'zhishiliebiao',
			component: () => import('@/components/Zhishi/zhishiliebiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'fabu',
			component: () => import('@/components/Zhishi/fabu'),
			meta: {
				auth: true
			},
		},
		{
			path: 'fenlei',
			component: () => import('@/components/Zhishi/fenlei'),
			meta: {
				auth: true
			},
		},
		{
			path: 'jixiao',
			component: () => import('@/components/Shezhi/jixiao'),
			meta: {
				auth: true
			},
		},
		{
			path: 'kuaijie',
			component: () => import('@/components/Shezhi/kuaijie'),
			meta: {
				auth: true
			},
		},
		{
			path: 'zhandian',
			component: () => import('@/components/Shezhi/zhandian'),
			meta: {
				auth: true
			},
		},
		{
			path: 'xiaozu',
			component: () => import('@/components/Kehu/xiaozu'),
			meta: {
				auth: true
			},
		},
		{
			path: 'hoe',
			component: () => import('@/components/hoe'),
			meta: {
				auth: true
			},
		},
		{
			path: 'bb',
			component: () => import('@/components/bb'),
			meta: {
				auth: true
			},
		}


	]
}]
