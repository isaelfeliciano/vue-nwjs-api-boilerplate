import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	scrollBehavior() {
		return window.scrollTo({ top: 0, behavior: 'smooth'})
	},
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: () => import('./components/HelloWorld.vue')
		},
		{ path: '*', redirect: '/home'}
	]
})

export default router